<script lang="ts">
	// An almanac instrument plate: a graduated bezel, an inner measured ring,
	// a charted orbit with a single body on a sightline. Treated as a precision
	// readout, not decoration — the same instrument key as Moon.svelte, but
	// deliberately NOT a phase glyph (those belong to the About-page ledger).

	interface Props {
		/** max rendered size in px; shrinks to the viewport on small screens */
		size?: number
		class?: string
	}
	let { size = 280, class: cls = '' }: Props = $props()

	const R = 100
	const uid = Math.random().toString(36).slice(2, 8)

	const rad = (deg: number) => (deg * Math.PI) / 180

	// graduated bezel: fine ticks every 5deg, bold ticks every 30deg
	const minorTicks = Array.from({ length: 72 }, (_, i) => {
		const a = rad(i * 5)
		const c = Math.cos(a)
		const s = Math.sin(a)
		return { x1: c * 95.5, y1: s * 95.5, x2: c * 100, y2: s * 100 }
	})
	const majorTicks = Array.from({ length: 12 }, (_, i) => {
		const a = rad(i * 30)
		const c = Math.cos(a)
		const s = Math.sin(a)
		return { x1: c * 88, y1: s * 88, x2: c * 100, y2: s * 100 }
	})
	// inner measured ring
	const innerTicks = Array.from({ length: 36 }, (_, i) => {
		const a = rad(i * 10)
		const c = Math.cos(a)
		const s = Math.sin(a)
		return { x1: c * 63, y1: s * 63, x2: c * 68, y2: s * 68 }
	})
	// bearing graduations at the cardinals (000 at top, clockwise)
	const grads = [
		{ t: '000', d: -90 },
		{ t: '090', d: 0 },
		{ t: '180', d: 90 },
		{ t: '270', d: 180 }
	].map((g) => ({ t: g.t, x: Math.cos(rad(g.d)) * 79, y: Math.sin(rad(g.d)) * 79 }))

	// charted orbit (rotated ellipse) with one body sitting on the track,
	// on a sightline from the centre reticle.
	const orbitRx = 58
	const orbitRy = 43
	const orbitRot = -18
	const nodeT = -52
	const np = { x: orbitRx * Math.cos(rad(nodeT)), y: orbitRy * Math.sin(rad(nodeT)) }
	const cr = Math.cos(rad(orbitRot))
	const sr = Math.sin(rad(orbitRot))
	// rotate the body onto the drawn (rotated) ellipse so it lies exactly on it
	const node = { x: np.x * cr - np.y * sr, y: np.x * sr + np.y * cr }
</script>

<div
	class="plate {cls}"
	style="--s:{size}px"
	role="img"
	aria-label="LASIKUU instrument plate: a graduated bearing dial"
>
	<svg viewBox="-110 -110 220 220" width="100%" height="100%" aria-hidden="true">
		<defs>
			<radialGradient id="field-{uid}" cx="50%" cy="44%" r="62%">
				<stop offset="0%" stop-color="oklch(0.3 0.05 250 / 0.5)" />
				<stop offset="100%" stop-color="oklch(0.3 0.05 250 / 0)" />
			</radialGradient>
			<filter id="nodeglow-{uid}" x="-200%" y="-200%" width="500%" height="500%">
				<feGaussianBlur stdDeviation="4" />
			</filter>
		</defs>

		<!-- faint cold field pooling behind the dial -->
		<circle r="104" fill="url(#field-{uid})" />

		<!-- bezel ring -->
		<circle r={R} fill="none" stroke="oklch(0.4 0.025 255)" stroke-width="0.8" />
		<circle r="83" fill="none" stroke="oklch(0.34 0.022 255)" stroke-width="0.6" />

		<!-- graduated bezel ticks -->
		<g stroke="oklch(0.58 0.04 252)" stroke-width="0.7">
			{#each minorTicks as t, i (i)}
				<line x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} />
			{/each}
		</g>
		<g stroke="var(--moon)" stroke-width="1.1" opacity="0.75">
			{#each majorTicks as t, i (i)}
				<line x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} />
			{/each}
		</g>

		<!-- bearing graduations -->
		{#each grads as g (g.t)}
			<text class="grad" x={g.x} y={g.y} text-anchor="middle" dominant-baseline="central">{g.t}</text>
		{/each}

		<!-- inner measured ring -->
		<g stroke="oklch(0.5 0.035 254)" stroke-width="0.6" opacity="0.8">
			{#each innerTicks as t, i (i)}
				<line x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} />
			{/each}
		</g>

		<!-- charted orbit + a second, fainter track for depth -->
		<g transform="rotate({orbitRot})" fill="none" stroke="var(--moon-dim)">
			<ellipse rx={orbitRx} ry={orbitRy} stroke-width="0.8" stroke-dasharray="2 3.5" opacity="0.7" />
			<ellipse rx="36" ry="27" stroke-width="0.7" stroke-dasharray="1.5 4" opacity="0.4" />
		</g>

		<!-- sightline from centre to the charted body -->
		<line x1="0" y1="0" x2={node.x} y2={node.y} stroke="var(--moon-dim)" stroke-width="0.7" opacity="0.6" />

		<!-- the charted body, with a breathing glow -->
		<circle class="glow" cx={node.x} cy={node.y} r="6" fill="var(--moon)" filter="url(#nodeglow-{uid})" />
		<circle cx={node.x} cy={node.y} r="3" fill="var(--moon-bright)" />

		<!-- central reticle -->
		<g stroke="var(--moon)" stroke-width="0.9">
			<circle r="3.4" fill="none" />
			<path d="M0 -9V-5 M0 5V9 M-9 0H-5 M5 0H9" />
		</g>
		<circle r="0.9" fill="var(--moon-bright)" />
	</svg>
</div>

<style>
	.plate {
		width: min(var(--s), 78vmin);
		aspect-ratio: 1;
		display: block;
	}
	svg {
		display: block;
		width: 100%;
		height: 100%;
		overflow: visible;
	}
	.grad {
		font-family: var(--font-mono);
		font-size: 7px;
		letter-spacing: 0.08em;
		fill: var(--text-faint);
	}
	.glow {
		opacity: 0.55;
		animation: node-breath 9s var(--ease-out-quint, ease-in-out) infinite;
	}
	@keyframes node-breath {
		0%,
		100% {
			opacity: 0.45;
		}
		50% {
			opacity: 0.75;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.glow {
			animation: none;
		}
	}
</style>
