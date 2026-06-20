<script lang="ts">
	// Faint star ticks scattered on a deterministic grid jitter. Two parallax
	// depths drift slowly. Decorative but quiet, disabled for reduced motion.
	import { untrack } from 'svelte'

	interface Props {
		count?: number
		class?: string
	}
	let { count = 60, class: cls = '' }: Props = $props()

	// deterministic pseudo-random so SSR and client match (no hydration drift)
	function rng(seed: number) {
		let s = seed
		return () => {
			s = (s * 1103515245 + 12345) & 0x7fffffff
			return s / 0x7fffffff
		}
	}
	function makeStars(n: number) {
		const r = rng(0x6d6f6f6e)
		return Array.from({ length: n }, () => ({
			x: r() * 100,
			y: r() * 100,
			s: 0.5 + r() * 1.6,
			o: 0.15 + r() * 0.5,
			near: r() > 0.6,
			d: r() * 6
		}))
	}
	// count is fixed at mount; snapshot once.
	const stars = untrack(() => makeStars(count))
</script>

<div class="field {cls}" aria-hidden="true">
	{#each stars as st (st.x + '-' + st.y)}
		<span
			class="star"
			class:near={st.near}
			style="left:{st.x}%; top:{st.y}%; width:{st.s}px; height:{st.s}px; --o:{st.o}; opacity:{st.o}; animation-delay:{st.d}s"
		></span>
	{/each}
</div>

<style>
	.field {
		position: absolute;
		inset: 0;
		overflow: hidden;
		pointer-events: none;
	}
	.star {
		position: absolute;
		border-radius: 999px;
		background: oklch(0.95 0.02 245);
		box-shadow: 0 0 4px oklch(0.9 0.04 245 / 0.6);
		animation: twinkle 7s ease-in-out infinite;
	}
	.star.near {
		background: oklch(0.86 0.06 245);
		animation: twinkle 5s ease-in-out infinite;
	}
	@keyframes twinkle {
		0%,
		100% {
			opacity: var(--o, 0.3);
			transform: translateY(0);
		}
		50% {
			opacity: 0.05;
			transform: translateY(2px);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.star {
			animation: none;
		}
	}
</style>
