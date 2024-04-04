<script lang="ts">
	import { _ } from 'svelte-i18n'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Lasikuu freelance software development and consulting." />
</svelte:head>

<section>
	<h1>{$_('home.title')}</h1>
	<p>{$_('home.intro')}</p>
	<a href="https://github.com/Lasikuu">
		<img src="/img/github.svg" alt="GitHub" width="48px" />
	</a>
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
