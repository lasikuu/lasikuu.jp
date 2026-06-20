<script lang="ts">
	import { page } from '$app/state'
	import { resolve } from '$app/paths'
	import MenuIcon from '$lib/icons/menu.svelte'
	import { StorageKeys, setValue } from '$lib/util/localStorage'
	import { _, locale } from 'svelte-i18n'
	import { AppLocale, langPreference } from '../lib/util/i18n'

	function switchLocale(newLocale: AppLocale) {
		setValue(StorageKeys.LanguagePref, newLocale)
		langPreference.set(newLocale)
		locale.set(newLocale)
	}

	const nav = [
		{ href: '/services', key: 'meta.nav.services' },
		{ href: '/about', key: 'meta.nav.about' },
		{ href: '/contact', key: 'meta.nav.contact' }
	] as const

	let open = $state(false)
	const current = $derived(page.url.pathname)
</script>

<header>
	<div class="bar">
		<a href={resolve('/')} class="wordmark logo" aria-current={current === '/' ? 'page' : undefined}>LASIKUU</a>

		<nav class="links" aria-label="Primary">
			{#each nav as item (item.href)}
				<a href={resolve(item.href)} class="link" aria-current={current === item.href ? 'page' : undefined}>
					{$_(item.key)}
				</a>
			{/each}
		</nav>

		<div class="end">
			<div class="locale" role="group" aria-label="Language">
				<button onclick={() => switchLocale(AppLocale.EN)} class:on={$langPreference === AppLocale.EN}>EN</button>
				<span class="sep">/</span>
				<button onclick={() => switchLocale(AppLocale.JA)} class:on={$langPreference === AppLocale.JA}>JA</button>
			</div>
			<button class="menu-btn" aria-label="Menu" aria-expanded={open} onclick={() => (open = !open)}>
				<MenuIcon />
			</button>
		</div>
	</div>

	{#if open}
		<nav class="drawer" aria-label="Primary mobile">
			{#each nav as item (item.href)}
				<a
					href={resolve(item.href)}
					aria-current={current === item.href ? 'page' : undefined}
					onclick={() => (open = false)}
				>
					{$_(item.key)}
				</a>
			{/each}
		</nav>
	{/if}
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 50;
		background: oklch(0.15 0.016 255 / 0.72);
		backdrop-filter: blur(10px) saturate(1.1);
		border-bottom: 1px solid var(--ink-700);
	}
	.bar {
		max-width: 72rem;
		margin: 0 auto;
		padding: 0.9rem clamp(1rem, 4vw, 2.5rem);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
	}
	.wordmark {
		font-size: 1.25rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		color: var(--text);
		transition: color 0.25s var(--ease-out-quint);
	}
	.wordmark:hover {
		color: var(--moon-bright);
	}
	.links {
		display: flex;
		gap: clamp(1rem, 3vw, 2.4rem);
		margin-left: auto;
		margin-right: 1.5rem;
	}
	.link {
		position: relative;
		font-family: var(--font-mono);
		font-size: 0.78rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--text-muted);
		padding: 0.3rem 0;
		transition: color 0.25s var(--ease-out-quint);
	}
	.link:hover {
		color: var(--moon-bright);
	}
	.link[aria-current='page'] {
		color: var(--text);
	}
	.link[aria-current='page']::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -2px;
		width: 100%;
		height: 1px;
		background: var(--moon);
		box-shadow: 0 0 8px var(--moon);
	}
	.end {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.locale {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-family: var(--font-mono);
		font-size: 0.78rem;
		letter-spacing: 0.06em;
	}
	.locale button {
		background: none;
		border: none;
		color: var(--text-faint);
		cursor: pointer;
		padding: 0.2rem 0.1rem;
		transition: color 0.2s var(--ease-out-quint);
	}
	.locale button:hover {
		color: var(--moon-bright);
	}
	.locale button.on {
		color: var(--moon);
	}
	.sep {
		color: var(--ink-600);
	}
	.menu-btn {
		display: none;
		background: none;
		border: none;
		color: var(--text);
		cursor: pointer;
		padding: 0.3rem;
	}
	.drawer {
		display: flex;
		flex-direction: column;
		padding: 0.5rem clamp(1rem, 4vw, 2.5rem) 1rem;
		gap: 0.2rem;
		border-top: 1px solid var(--ink-700);
	}
	.drawer a {
		font-family: var(--font-mono);
		font-size: 0.85rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--text-muted);
		padding: 0.7rem 0;
	}
	.drawer a[aria-current='page'] {
		color: var(--moon);
	}

	@media (max-width: 680px) {
		.links {
			display: none;
		}
		.menu-btn {
			display: inline-flex;
		}
	}
	@media (min-width: 681px) {
		.drawer {
			display: none;
		}
	}
</style>
