<script lang="ts">
	import { isLoading } from 'svelte-i18n'
	import { langPreference } from '../lib/util/i18n'
	import '../lib/util/i18n.js'
	import MoonDebug from '$lib/components/moon-debug.svelte'
	import Footer from './Footer.svelte'
	import Header from './Header.svelte'

	import '../app.css'
	interface Props {
		children?: import('svelte').Snippet
	}

	let { children }: Props = $props()

	// Keep <html lang> in sync with the active locale so browsers apply the
	// correct font fallback, line-breaking, and CJK punctuation spacing.
	$effect(() => {
		if ($langPreference) document.documentElement.lang = $langPreference
	})
</script>

{#if $isLoading || $langPreference === null}
	<div></div>
{:else}
	<div class="app">
		<Header />

		<main>
			{@render children?.()}
		</main>

		<Footer />
	</div>

	<MoonDebug />
{/if}

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		width: 100%;
		box-sizing: border-box;
	}
</style>
