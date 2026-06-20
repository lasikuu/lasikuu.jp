<script lang="ts">
	import { langPreference } from '../lib/util/i18n'
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

<div class="app">
	<Header />

	<main>
		{@render children?.()}
	</main>

	<Footer />
</div>

<MoonDebug />

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
