<script lang="ts">
	import { isLoading } from 'svelte-i18n'
	import { langPreference } from '../lib/util/i18n'
	import '../lib/util/i18n.js'
	import Footer from './Footer.svelte'
	import Header from './Header.svelte'

	import '../app.css'
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
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
		padding: 1rem;
		gap: 5rem;
		width: 100%;
		max-width: 48rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
