<script lang="ts">
	// Process-transparent pricing: how engagements are scoped and billed.
	// No public rate card; the honesty is the message.
	import { _ } from 'svelte-i18n'

	const steps = ['scope', 'billing', 'payment'] as const
</script>

<div class="grid">
	{#each steps as s, i (s)}
		<div class="cell reveal" style="--i:{i}">
			<span class="tick">{String(i + 1).padStart(2, '0')}</span>
			<h4>{$_(`pricing.${s}.title`)}</h4>
			<p>{$_(`pricing.${s}.body`)}</p>
		</div>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr));
		gap: clamp(1.5rem, 4vw, 3rem);
	}
	.cell {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		padding-top: 1.4rem;
		border-top: 1px solid var(--ink-700);
	}
	.cell h4 {
		margin: 0.3rem 0 0;
	}
	.cell p {
		margin: 0;
	}
</style>
