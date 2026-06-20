<script lang="ts">
	import ServiceIcon, { type ServiceIconName } from '$lib/icons/service.svelte'
	import { _ } from 'svelte-i18n'

	interface Props {
		index: number
		count: number
		icon: ServiceIconName
		titleKey: string
		bodyKey: string
	}
	let { index, count, icon, titleKey, bodyKey }: Props = $props()

	const idx = $derived(String(index).padStart(2, '0'))
	const total = $derived(String(count).padStart(2, '0'))
</script>

<article class="item reveal" style="--i:{index - 1}">
	<div class="rail">
		<span class="tick">{idx} / {total}</span>
		<ServiceIcon name={icon} size={26} class="glyph" />
	</div>
	<div class="body">
		<h3>{$_(titleKey)}</h3>
		<p>{$_(bodyKey)}</p>
	</div>
</article>

<style>
	.item {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: clamp(1rem, 3vw, 2.5rem);
		padding: clamp(1.6rem, 3vw, 2.4rem) 0;
		border-top: 1px solid var(--ink-700);
		align-items: start;
	}
	.rail {
		display: flex;
		flex-direction: column;
		gap: 0.9rem;
		min-width: 5.5rem;
		color: var(--text-faint);
	}
	.rail :global(.glyph) {
		color: var(--moon);
		transition:
			transform 0.4s var(--ease-out-quint),
			color 0.3s var(--ease-out-quint);
	}
	.item:hover .rail :global(.glyph) {
		color: var(--moon-bright);
		transform: translateY(-2px);
	}
	.body h3 {
		margin: 0 0 0.5rem;
	}
	.body p {
		margin: 0;
		max-width: 52ch;
	}

	@media (max-width: 540px) {
		.item {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
		.rail {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}
	}
</style>
