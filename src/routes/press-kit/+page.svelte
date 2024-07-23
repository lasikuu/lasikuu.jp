<script lang="ts">
	import { _ } from 'svelte-i18n'
</script>

<svelte:head>
	<title>{$_('presskit.title')}</title>
	<meta name="description" content={$_('presskit.description')} />
</svelte:head>

<div class="text-column">
	<h1>{$_('presskit.title')}</h1>

	<p>{$_('presskit.about')}</p>

	<h2 class="grid">{$_('presskit.logo')}</h2>

	<div class="mt-4 grid">
		<img src="/presskit/lasikuu-logo.svg" width="128" height="128" alt="Lasikuu logo" />
		<br />
		<a href="/presskit/lasikuu-logo.svg" download="lasikuu-logo.svg">{$_('presskit.download')} lasikuu-logo.svg</a>
		<a href="/presskit/lasikuu-logo.png" download="lasikuu-logo.png">{$_('presskit.download')} lasikuu-logo.png</a>
	</div>

	<h2 class="mt-16 grid">{$_('presskit.meishi')}</h2>

	<a href="/presskit/meishi_lasikuu_marko.pdf" target="_blank" rel="noopener noreferrer">
		{$_('presskit.download')} meishi_lasikuu_marko.pdf
	</a>
	<br />
</div>

<style>
</style>
