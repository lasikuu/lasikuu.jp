<script lang="ts">
	// Progressive disclosure as a measured list, not floating cards.
	// Native <details> for a11y + no-JS; grid-rows transition for the open anim.
	import { _ } from 'svelte-i18n'

	interface Props {
		ids: string[]
	}
	let { ids }: Props = $props()
</script>

<dl class="faq">
	{#each ids as id, i (id)}
		<details class="row reveal" style="--i:{i}" name="faq">
			<summary>
				<dt>{$_(`faq.${id}.q`)}</dt>
				<span class="mark" aria-hidden="true"></span>
			</summary>
			<dd>
				<div class="dd-inner">
					<p>{$_(`faq.${id}.a`)}</p>
				</div>
			</dd>
		</details>
	{/each}
</dl>

<style>
	.faq {
		margin: 0;
	}
	.row {
		border-top: 1px solid var(--ink-700);
	}
	.row:last-child {
		border-bottom: 1px solid var(--ink-700);
	}
	summary {
		list-style: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		padding: 1.4rem 0.25rem;
		transition: color 0.25s var(--ease-out-quint);
	}
	summary::-webkit-details-marker {
		display: none;
	}
	dt {
		font-family: var(--font-head);
		font-weight: 500;
		font-size: var(--step-0);
		color: var(--text);
	}
	summary:hover dt {
		color: var(--moon-bright);
	}
	.mark {
		position: relative;
		flex: none;
		width: 16px;
		height: 16px;
	}
	.mark::before,
	.mark::after {
		content: '';
		position: absolute;
		background: var(--moon);
		transition: transform 0.3s var(--ease-out-quint);
	}
	.mark::before {
		top: 50%;
		left: 0;
		width: 100%;
		height: 1.5px;
		transform: translateY(-50%);
	}
	.mark::after {
		left: 50%;
		top: 0;
		height: 100%;
		width: 1.5px;
		transform: translateX(-50%);
	}
	details[open] .mark::after {
		transform: translateX(-50%) scaleY(0);
	}
	dd {
		margin: 0;
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.4s var(--ease-out-quint);
	}
	details[open] dd {
		grid-template-rows: 1fr;
	}
	.dd-inner {
		overflow: hidden;
	}
	.dd-inner p {
		margin: 0;
		padding: 0 0 1.5rem;
		max-width: 60ch;
		/* honour explicit line breaks (\n) in answer copy */
		white-space: pre-line;
	}
</style>
