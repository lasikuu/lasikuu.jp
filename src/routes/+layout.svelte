<script lang="ts">
	import { isLoading } from 'svelte-i18n'
	import '../lib/i18n.js'
	import { langPreference } from '../lib/i18n.js'
	import Footer from './Footer.svelte'
	import Header from './Header.svelte'
	import './styles.css'
</script>

{#if $isLoading || $langPreference === null}
	<div></div>
{:else}
	<div class="app">
		<Header />

		<main>
			<slot />
		</main>

		<Footer />
	</div>
{/if}

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
