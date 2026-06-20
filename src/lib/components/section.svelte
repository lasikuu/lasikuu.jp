<script lang="ts">
	// Scroll-reveal wrapper. Adds .in when the element enters the viewport.
	// Children using .reveal animate in; supports staggering via CSS index.
	import { onMount } from 'svelte'

	interface Props {
		children?: import('svelte').Snippet
		class?: string
		once?: boolean
	}
	let { children, class: cls = '', once = true }: Props = $props()

	let el: HTMLElement
	let shown = $state(false)

	onMount(() => {
		if (typeof IntersectionObserver === 'undefined') {
			shown = true
			return
		}
		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (e.isIntersecting) {
						shown = true
						if (once) io.unobserve(e.target)
					} else if (!once) {
						shown = false
					}
				}
			},
			{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
		)
		io.observe(el)
		return () => io.disconnect()
	})
</script>

<div bind:this={el} class="reveal-root {cls}" class:in={shown}>
	{@render children?.()}
</div>

<style>
	/* stagger any direct .reveal children when the root is in view */
	.reveal-root.in :global(.reveal) {
		opacity: 1;
		transform: none;
	}
	.reveal-root :global(.reveal) {
		transition-delay: calc(var(--i, 0) * 90ms);
	}
</style>
