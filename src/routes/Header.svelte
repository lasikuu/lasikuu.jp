<script lang="ts">
	import { page } from '$app/stores'
	import { StorageKeys, setValue } from '$lib/localStorage'
	import { _, locale } from 'svelte-i18n'
	import { AppLocale, langPreference } from '../lib/i18n'

	function switchLocale(newLocale: AppLocale) {
		setValue(StorageKeys.LanguagePref, newLocale)
		langPreference.set(newLocale)
		locale.set($langPreference)
	}
</script>

<header>
	<div class="left-corner">
		<button
			on:click={() => switchLocale(AppLocale.EN)}
			disabled={$langPreference === AppLocale.EN}
			class="locale-switch"
		>
			English
		</button>
		<button
			on:click={() => switchLocale(AppLocale.JA)}
			disabled={$langPreference === AppLocale.JA}
			class="locale-switch"
		>
			Japanese
		</button>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">{$_('meta.nav.home')}</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">{$_('meta.nav.about')}</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.left-corner,
	nav {
		flex-grow: 1;
		flex-basis: 0;
	}

	.left-corner {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin: 1.5em;
	}

	.locale-switch {
		background: none;
		border: none;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		cursor: pointer;
		transition: color 0.2s linear;
		max-width: 100px;
	}

	.locale-switch:hover {
		color: var(--color-theme-1);
	}

	.locale-switch:disabled {
		color: var(--color-text);
		opacity: 0.3;
		cursor: not-allowed;
	}

	nav {
		display: flex;
		justify-content: flex-end;
		--background: rgba(0, 0, 0, 0.3);
	}
	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0 15px 0 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
