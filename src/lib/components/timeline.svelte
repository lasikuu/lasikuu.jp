<script lang="ts">
	// A lunar ledger: each event marked by a moon phase glyph that waxes
	// from the first move toward the present.
	import { _ } from 'svelte-i18n'
	import Moon from './moon.svelte'

	const entries = [
		{ key: 'move', date: '2022.08', phase: 0.06 },
		{ key: 'founded', date: '2024.03', phase: 0.2 },
		{ key: 'simucube', date: '2024.03', phase: 0.34 },
		{ key: 'sugi', date: '2025.11', phase: 0.58 },
		{ key: 'tuner', date: '2026.05', phase: 0.8, href: 'https://simucube.com/en-us/simucube-tuner-3-0-software' },
		{ key: 'chevon', date: '2026.06', phase: 0.95, href: 'https://chevon5thanniversary.jp' }
	]
</script>

<ol class="ledger">
	{#each entries as e, i (e.key + e.date)}
		<li class="entry reveal" style="--i:{i}">
			<div class="phase">
				<Moon phase={e.phase} size={34} interactive={false} />
			</div>
			<div class="content">
				<time class="mono year">{e.date}</time>
				<h4>
					{#if e.href}
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
						<a href={e.href} rel="noopener" target="_blank">
							{$_(`timeline.${e.key}.title`)}<span class="ext" aria-hidden="true">↗</span>
						</a>
					{:else}
						{$_(`timeline.${e.key}.title`)}
					{/if}
				</h4>
				<p>{$_(`timeline.${e.key}.content`)}</p>
			</div>
		</li>
	{/each}
</ol>

<style>
	.ledger {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.entry {
		display: grid;
		grid-template-columns: 3rem 1fr;
		gap: clamp(1rem, 3vw, 2rem);
		padding: clamp(1.4rem, 3vw, 2rem) 0;
		border-top: 1px solid var(--ink-700);
		position: relative;
	}
	.entry:last-child {
		border-bottom: 1px solid var(--ink-700);
	}
	.phase {
		display: flex;
		justify-content: center;
		padding-top: 0.2rem;
	}
	.year {
		font-size: 0.78rem;
		letter-spacing: 0.16em;
		color: var(--moon);
	}
	.content h4 {
		margin: 0.4rem 0 0.5rem;
		font-size: var(--step-1);
	}
	.content h4 a {
		color: inherit;
		border-bottom: 1px solid var(--ink-600);
		transition: color 0.2s var(--ease-out-quint);
	}
	.content h4 a:hover {
		color: var(--moon-bright);
		border-bottom-color: var(--moon);
	}
	.ext {
		display: inline-block;
		margin-left: 0.3em;
		font-size: 0.7em;
		color: var(--moon);
		vertical-align: middle;
	}
	.content p {
		margin: 0;
		max-width: 58ch;
	}
</style>
