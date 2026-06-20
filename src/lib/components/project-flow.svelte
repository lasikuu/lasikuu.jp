<script lang="ts">
	import { _ } from 'svelte-i18n'

	const steps = ['1', '2', '3', '4']
</script>

<ol class="flow">
	{#each steps as key, i (key)}
		<li class="step reveal" style="--i:{i}">
			<div class="node">
				<span class="dot"></span>
			</div>
			<span class="num mono">{String(i + 1).padStart(2, '0')}</span>
			<h4 class="title">{$_(`components.projectflow.steps.${key}.title`)}</h4>
			<p class="desc">{$_(`components.projectflow.steps.${key}.desc`)}</p>
		</li>
	{/each}
</ol>

<style>
	.flow {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0;
	}
	.step {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		padding: 0 1.2rem 0 0;
	}
	.node {
		height: 18px;
		display: flex;
		align-items: center;
		position: relative;
	}
	/* the connecting baseline, running right from each dot to the next */
	.node::before {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 50%;
		height: 1px;
		background: var(--ink-700);
	}
	.step:last-child .node::before {
		display: none;
	}
	.dot {
		position: relative;
		z-index: 1;
		width: 9px;
		height: 9px;
		border-radius: 999px;
		background: var(--moon);
		box-shadow:
			0 0 0 4px var(--ink-850),
			0 0 14px -2px var(--moon);
	}
	.num {
		font-size: 0.72rem;
		letter-spacing: 0.12em;
		color: var(--moon);
	}
	.title {
		margin: 0;
		font-size: var(--step-0);
		font-weight: 600;
		color: var(--text);
	}
	.desc {
		margin: 0;
		font-size: var(--step--1);
		color: var(--text-muted);
		line-height: 1.55;
	}

	@media (max-width: 720px) {
		.flow {
			grid-template-columns: 1fr;
		}
		/* vertical timeline: dot + line on the left, content on the right */
		.step {
			display: grid;
			grid-template-columns: 18px 1fr;
			column-gap: 1rem;
			padding: 0 0 1.8rem;
		}
		.node {
			grid-row: 1 / 4;
			height: auto;
			justify-content: center;
			align-self: stretch;
		}
		.node::before {
			left: 50%;
			right: auto;
			top: 4px;
			bottom: -1.8rem;
			height: auto;
			width: 1px;
			transform: translateX(-50%);
		}
		.step:last-child .node::before {
			display: none;
		}
		.dot {
			margin-top: 4px;
			align-self: flex-start;
		}
	}
</style>
