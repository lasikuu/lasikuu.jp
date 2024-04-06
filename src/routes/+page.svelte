<script lang="ts">
	import { _ } from 'svelte-i18n'
	import Email from '../locales/shared/email.svelte'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Lasikuu freelance software development and consulting." />
</svelte:head>

<section>
	<h1>{$_('home.title')}</h1>
	<p>{$_('home.intro')}</p>
	<p><Email /></p>
	<br />
	<img src="/img/logo.svg" alt="Lasikuu logo" width="48px" />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
