<script lang="ts">
	// A rendered lunar object: real terminator curve for a given phase,
	// cold rim light, soft cratered surface. Treated as a precision
	// instrument, not decoration. Slow glow breath + cursor-tracked rim light.

	import { moonPhaseOverride } from '$lib/util/moonDebug'

	interface Props {
		/** 0 = new, 0.5 = full, 1 = new again. Default ~waxing gibbous. */
		phase?: number
		/** max rendered size in px; actual size is capped to the viewport */
		size?: number
		/** fraction of the smaller viewport dimension the moon may occupy */
		vwCap?: number
		/** track pointer for a subtle rim-light shift */
		interactive?: boolean
		/** ignore the global debug override (used by the slider's own preview) */
		ignoreOverride?: boolean
		class?: string
	}

	let {
		phase = 0.62,
		size = 320,
		vwCap = 0.72,
		interactive = true,
		ignoreOverride = false,
		class: cls = ''
	}: Props = $props()

	const R = 100
	// unique id suffix so multiple moons on a page don't share <defs>
	const uid = Math.random().toString(36).slice(2, 8)

	// Easter egg: a global slider can drive every moon's phase at once.
	const activePhase = $derived(!ignoreOverride && $moonPhaseOverride !== null ? $moonPhaseOverride : phase)

	// Illuminated fraction across the phase cycle:
	//   phase 0   -> new  (f = 0, fully dark)
	//   phase 0.5 -> full (f = 1, fully lit)
	// f = (1 - cos(phase*2PI)) / 2
	const waxing = $derived(activePhase < 0.5)

	// Path for the illuminated region (a lune bounded by the limb on the lit
	// side and the terminator semi-ellipse). The terminator's x-radius is
	// R*|cos(phase*2PI)|; whether it bulges toward or away from the lit limb
	// flips at the quarter, which is what turns a crescent into a gibbous.
	const litPath = $derived.by(() => {
		const c = Math.cos(activePhase * Math.PI * 2) // +1 new, -1 full
		const rx = Math.abs(c) * R
		// lit limb is on the right while waxing (0..0.5), on the left while waning
		const limbSweep = waxing ? 1 : 0
		// terminator bulges away from the lit limb for a crescent (|f|<0.5, c>0)
		// and toward it for a gibbous (c<0): sweep flips on the sign of c.
		const gibbous = c < 0
		const termSweep = waxing ? (gibbous ? 1 : 0) : gibbous ? 0 : 1
		return `M 0 ${-R} A ${R} ${R} 0 0 ${limbSweep} 0 ${R} A ${rx} ${R} 0 0 ${termSweep} 0 ${-R} Z`
	})

	// Craters as real depressions. Light comes from the upper-left, so each
	// bowl gets a shadow on its lower-right inner wall and a bright rim on the
	// upper-left. Offsets are a fraction of the crater radius. Roughly placed
	// to evoke the Moon's near side (large maria + scattered impact craters).
	// A few large, soft maria/basins instead of a field of identical holes
	// (fewer + larger + irregular avoids the "trypophobia" cluster look).
	type Mare = { x: number; y: number; rx: number; ry: number; rot?: number; o?: number }
	const maria: Mare[] = [
		{ x: -26, y: -24, rx: 34, ry: 28, rot: -18, o: 1 },
		{ x: 30, y: 18, rx: 30, ry: 36, rot: 12, o: 0.9 },
		{ x: -4, y: 46, rx: 26, ry: 18, rot: 6, o: 0.8 },
		{ x: 44, y: -30, rx: 18, ry: 16, rot: 0, o: 0.7 }
	]
	// just a handful of distinct craters, well separated, varied sizes
	type Crater = { x: number; y: number; r: number; depth?: number }
	const craters: Crater[] = [
		{ x: 14, y: -8, r: 13, depth: 0.8 },
		{ x: -46, y: 14, r: 10, depth: 0.85 },
		{ x: 50, y: 40, r: 8, depth: 0.9 },
		{ x: -34, y: -54, r: 7, depth: 0.9 },
		{ x: 24, y: 56, r: 6, depth: 0.85 }
	]
	// light direction offset (upper-left), as a unit-ish vector
	const lx = -0.42
	const ly = -0.42

	let rim = $state({ x: -0.5, y: -0.6 })
	function onMove(e: PointerEvent) {
		if (!interactive) return
		const t = e.currentTarget as HTMLElement
		const b = t.getBoundingClientRect()
		rim = { x: ((e.clientX - b.left) / b.width) * 2 - 1, y: ((e.clientY - b.top) / b.height) * 2 - 1 }
	}

	// Glint arc on the sunlit upper-left limb. Centre near 215deg, drifting a
	// little with the pointer; spans ~70deg. Drawn just outside the radius.
	const glintPath = $derived.by(() => {
		const span = 0.62 // radians (~36deg) half-width
		const drift = (rim.x - rim.y) * 0.18
		const mid = (215 / 180) * Math.PI + drift
		const rr = R + 2.4
		const a0 = mid - span
		const a1 = mid + span
		const x0 = Math.cos(a0) * rr
		const y0 = Math.sin(a0) * rr
		const x1 = Math.cos(a1) * rr
		const y1 = Math.sin(a1) * rr
		return `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${rr} ${rr} 0 0 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`
	})
</script>

<div
	class="moon {cls}"
	style="--s:{size}px; --cap:{vwCap}"
	style:--rx={rim.x}
	style:--ry={rim.y}
	onpointermove={onMove}
	role="img"
	aria-label="LASIKUU, the glass moon"
>
	<svg viewBox="-110 -110 220 220" width="100%" height="100%" aria-hidden="true">
		<defs>
			<!-- spherical body shading, light from upper-left -->
			<radialGradient id="body-{uid}" cx="36%" cy="32%" r="78%">
				<stop offset="0%" stop-color="oklch(0.95 0.025 245)" />
				<stop offset="40%" stop-color="oklch(0.88 0.04 247)" />
				<stop offset="72%" stop-color="oklch(0.74 0.05 252)" />
				<stop offset="100%" stop-color="oklch(0.56 0.055 258)" />
			</radialGradient>

			<!-- soft inner shade that darkens the limb (sphere falloff) -->
			<radialGradient id="limb-{uid}" cx="50%" cy="50%" r="50%">
				<stop offset="74%" stop-color="oklch(0.4 0.04 260 / 0)" />
				<stop offset="100%" stop-color="oklch(0.34 0.04 262 / 0.6)" />
			</radialGradient>

			<!-- crater bowl: the floor sits in shade (offset toward the light, so
			     the far wall catches the most shadow). a depression, not a dot. -->
			<radialGradient id="bowl-{uid}" cx={`${50 + lx * 26}%`} cy={`${50 + ly * 26}%`} r="58%">
				<stop offset="0%" stop-color="oklch(0.46 0.04 260 / 0.42)" />
				<stop offset="62%" stop-color="oklch(0.55 0.045 258 / 0.16)" />
				<stop offset="100%" stop-color="oklch(0.6 0.045 256 / 0)" />
			</radialGradient>
			<!-- same bowl but for the dark (earthshine) side: cooler + fainter -->
			<radialGradient id="bowl-dim-{uid}" cx={`${50 + lx * 26}%`} cy={`${50 + ly * 26}%`} r="58%">
				<stop offset="0%" stop-color="oklch(0.14 0.018 264 / 0.5)" />
				<stop offset="65%" stop-color="oklch(0.2 0.02 262 / 0.2)" />
				<stop offset="100%" stop-color="oklch(0.26 0.022 260 / 0)" />
			</radialGradient>

			<!-- maria: soft dark seas, no hard edge -->
			<radialGradient id="mare-{uid}" cx="50%" cy="50%" r="50%">
				<stop offset="0%" stop-color="oklch(0.46 0.045 258 / 0.5)" />
				<stop offset="70%" stop-color="oklch(0.5 0.045 256 / 0.28)" />
				<stop offset="100%" stop-color="oklch(0.55 0.045 254 / 0)" />
			</radialGradient>
			<radialGradient id="mare-dim-{uid}" cx="50%" cy="50%" r="50%">
				<stop offset="0%" stop-color="oklch(0.16 0.018 264 / 0.6)" />
				<stop offset="70%" stop-color="oklch(0.2 0.02 262 / 0.3)" />
				<stop offset="100%" stop-color="oklch(0.24 0.022 260 / 0)" />
			</radialGradient>

			<!-- gentle blur for the maria so they read as soft basins -->
			<filter id="mareblur-{uid}" x="-40%" y="-40%" width="180%" height="180%">
				<feGaussianBlur stdDeviation="3" />
			</filter>

			<!-- earthshine: a faint cold glow so the dark disc reads against the
			     night background without being lifted to grey -->
			<radialGradient id="earthshine-{uid}" cx="40%" cy="36%" r="80%">
				<stop offset="0%" stop-color="oklch(0.32 0.026 254 / 0.88)" />
				<stop offset="60%" stop-color="oklch(0.25 0.022 260 / 0.82)" />
				<stop offset="100%" stop-color="oklch(0.2 0.02 264 / 0.78)" />
			</radialGradient>

			<!-- fine surface noise for texture, kept very subtle -->
			<filter id="grain-{uid}" x="-20%" y="-20%" width="140%" height="140%">
				<feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="n" />
				<feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0" result="na" />
				<feComposite in="na" in2="SourceGraphic" operator="in" />
			</filter>

			<!-- soft blur so the limb glint reads as light, not a hard line -->
			<filter id="glint-{uid}" x="-30%" y="-30%" width="160%" height="160%">
				<feGaussianBlur stdDeviation="1.4" />
			</filter>

			<!-- glow emitted by the LIT crescent only, so the dark side stays dark -->
			<filter id="glow-{uid}" x="-60%" y="-60%" width="220%" height="220%">
				<feGaussianBlur stdDeviation="9" />
			</filter>

			<!-- gradient that fades the glint arc in and out along its length -->
			<linearGradient id="glint-fade-{uid}" x1="0%" y1="0%" x2="100%" y2="100%">
				<stop offset="0%" stop-color="oklch(0.97 0.035 240 / 0)" />
				<stop offset="50%" stop-color="oklch(0.98 0.03 240 / 0.85)" />
				<stop offset="100%" stop-color="oklch(0.97 0.035 240 / 0)" />
			</linearGradient>

			<clipPath id="disc-{uid}"><circle r={R} /></clipPath>
			<!-- hard clip: everything OUTSIDE the disc (rect with a circular hole,
			     even-odd). a hard clip has no anti-aliased bleed, unlike a mask. -->
			<clipPath id="outer-{uid}">
				<path
					clip-rule="evenodd"
					d="M -110 -110 H 110 V 110 H -110 Z M {R} 0 A {R} {R} 0 1 0 {-R} 0 A {R} {R} 0 1 0 {R} 0 Z"
				/>
			</clipPath>
		</defs>

		{#snippet crater(c: Crater, lit: boolean)}
			{@const off = c.r * 0.18 * (c.depth ?? 1)}
			<!-- shadowed bowl floor -->
			<circle cx={c.x} cy={c.y} r={c.r * 0.95} fill={lit ? `url(#bowl-${uid})` : `url(#bowl-dim-${uid})`} />
			<!-- soft rim highlight: a gentle crescent on the light-facing edge -->
			<circle
				cx={c.x + lx * off}
				cy={c.y + ly * off}
				r={c.r * 0.96}
				fill="none"
				stroke={lit ? 'oklch(0.95 0.025 245)' : 'oklch(0.46 0.03 252)'}
				stroke-width={Math.max(0.6, c.r * 0.07)}
				opacity={(lit ? 0.32 : 0.14) * (c.depth ?? 1)}
				filter="url(#glint-{uid})"
			/>
			<!-- soft inner shadow on the far wall (lower-right) -->
			<circle
				cx={c.x - lx * off}
				cy={c.y - ly * off}
				r={c.r * 0.8}
				fill="none"
				stroke={lit ? 'oklch(0.36 0.035 262)' : 'oklch(0.13 0.018 264)'}
				stroke-width={Math.max(0.8, c.r * 0.12)}
				opacity={(lit ? 0.42 : 0.34) * (c.depth ?? 1)}
				filter="url(#glint-{uid})"
			/>
		{/snippet}

		{#snippet mare(m: Mare, lit: boolean)}
			<ellipse
				cx={m.x}
				cy={m.y}
				rx={m.rx}
				ry={m.ry}
				transform={`rotate(${m.rot ?? 0} ${m.x} ${m.y})`}
				fill={lit ? `url(#mare-${uid})` : `url(#mare-dim-${uid})`}
				opacity={m.o ?? 1}
				filter="url(#mareblur-{uid})"
			/>
		{/snippet}

		<!-- glow comes only from the lit crescent, so it never lights the dark side -->
		<path class="glow" d={litPath} fill="oklch(0.8 0.07 246)" filter="url(#glow-{uid})" />

		<!-- dark face: a deep, cold sphere with only the faintest earthshine, so
		     the maria/craters are barely perceptible (as on a real new moon). -->
		<g clip-path="url(#disc-{uid})">
			<circle r={R} fill="oklch(0.19 0.02 260)" />
			<circle r={R} fill="url(#earthshine-{uid})" />
			<g opacity="0.6">
				{#each maria as m (m.x + '_' + m.y)}
					{@render mare(m, false)}
				{/each}
				{#each craters as c (c.x + '_' + c.y)}
					{@render crater(c, false)}
				{/each}
			</g>
			<circle r={R} fill="url(#limb-{uid})" />
		</g>

		<!-- illuminated region, masked to the phase -->
		<g clip-path="url(#disc-{uid})">
			<g clip-path="url(#disc-{uid})">
				<path d={litPath} fill="url(#body-{uid})" />

				<!-- craters live only on the lit side via the same phase path mask -->
				<clipPath id="lit-{uid}"><path d={litPath} /></clipPath>
				<g clip-path="url(#lit-{uid})">
					{#each maria as m (m.x + '_' + m.y)}
						{@render mare(m, true)}
					{/each}
					{#each craters as c (c.x + '_' + c.y)}
						{@render crater(c, true)}
					{/each}
					<!-- subtle fractal grain over the lit surface -->
					<circle r={R} fill="oklch(0.6 0.04 255)" filter="url(#grain-{uid})" opacity="0.08" />
				</g>

				<!-- sphere limb falloff -->
				<circle r={R} fill="url(#limb-{uid})" />
			</g>
		</g>

		<!-- faint cold limb edge: drawn just outside the disc so it never sits on
		     the surface, hard-clipped to the region outside the moon. -->
		<g clip-path="url(#outer-{uid})">
			<circle r={R + 0.4} fill="none" stroke="oklch(0.9 0.04 244)" stroke-width="0.8" opacity="0.3" />
		</g>
		<!-- soft glint on the sunlit upper-left limb: fades in/out via gradient,
		     blurred first, THEN hard-clipped to outside the disc so it cannot
		     bleed inward (clip applies after the filter in render order). -->
		<g class="rimlight" clip-path="url(#outer-{uid})">
			<g filter="url(#glint-{uid})">
				<path d={glintPath} fill="none" stroke="url(#glint-fade-{uid})" stroke-width="2.2" stroke-linecap="round" />
			</g>
		</g>
	</svg>
</div>

<style>
	.moon {
		/* render at the requested size, but never wider than the cap fraction
		   of the smaller viewport dimension, so it shrinks on mobile */
		width: min(var(--s), calc(var(--cap, 0.72) * 100vmin));
		aspect-ratio: 1;
		position: relative;
		display: grid;
		place-items: center;
		animation: breath 9s var(--ease-out-quint, ease-in-out) infinite;
	}

	svg {
		display: block;
		width: 100%;
		height: 100%;
		overflow: visible;
	}

	/* the glow is emitted by the lit crescent only; it pulses with the breath */
	.glow {
		opacity: 0.55;
		animation: glow-breath 9s var(--ease-out-quint, ease-in-out) infinite;
	}

	/* soft glint on the sunlit upper-left limb; the arc path itself drifts with
	   the pointer, the gradient stroke fades both ends so there is no hard cap. */
	.rimlight {
		opacity: 0.6;
	}
	.rimlight path {
		transition: d 0.5s var(--ease-out-quint, ease-out);
	}

	@keyframes breath {
		0%,
		100% {
			transform: translateY(0) scale(1);
		}
		50% {
			transform: translateY(-8px) scale(1.012);
		}
	}

	@keyframes glow-breath {
		0%,
		100% {
			opacity: 0.5;
		}
		50% {
			opacity: 0.7;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.moon,
		.glow {
			animation: none;
		}
		.rimlight {
			transition: none;
		}
	}
</style>
