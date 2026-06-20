<script lang="ts">
	import { _ } from 'svelte-i18n'
</script>

<svelte:head>
	<title>{$_('presskit.title')} — LASIKUU</title>
	<meta name="description" content={$_('presskit.description')} />
</svelte:head>

<div class="prose-page">
	<span class="eyebrow">{$_('presskit.title')}</span>
	<h1>{$_('presskit.title')}</h1>
	<p>{$_('presskit.about')}</p>

	<h2>{$_('presskit.logo')}</h2>
	<div class="logo-block">
		<div class="preview">
			<img src="/presskit/lasikuu-logo.svg" width="120" height="120" alt="LASIKUU logo" />
		</div>
		<div class="downloads">
			<!-- Static asset in static/presskit/, not a SvelteKit route -->
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href="/presskit/lasikuu-logo.svg" download="lasikuu-logo.svg" class="dl">
				<span class="mono">SVG</span> lasikuu-logo.svg
			</a>
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href="/presskit/lasikuu-logo.png" download="lasikuu-logo.png" class="dl">
				<span class="mono">PNG</span> lasikuu-logo.png
			</a>
		</div>
	</div>

	<h2>{$_('presskit.meishi')}</h2>
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a href="/presskit/meishi_lasikuu_marko.pdf" target="_blank" rel="noopener noreferrer" class="dl">
		<span class="mono">PDF</span> meishi_lasikuu_marko.pdf
	</a>
</div>

<style>
	.eyebrow {
		display: block;
		margin-bottom: 1.4rem;
	}
	.logo-block {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 2rem;
		margin-top: 1rem;
	}
	.preview {
		display: grid;
		place-items: center;
		padding: 1.5rem;
		border: 1px solid var(--ink-700);
		border-radius: var(--radius-box);
		background: oklch(0.18 0.018 255 / 0.6);
	}
	.downloads {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
	}
	.dl {
		display: inline-flex;
		align-items: center;
		gap: 0.7rem;
		width: fit-content;
		border-bottom: none !important;
		color: var(--text-muted) !important;
		transition: color 0.2s var(--ease-out-quint);
	}
	.dl:hover {
		color: var(--moon-bright) !important;
	}
	.dl .mono {
		font-size: 0.7rem;
		letter-spacing: 0.1em;
		color: var(--ink-900);
		background: var(--moon);
		padding: 0.15em 0.5em;
		border-radius: 0.2rem;
	}
</style>
