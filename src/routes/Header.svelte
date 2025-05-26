<script lang="ts">
	import { page } from '$app/state'
	import GBIcon from '$lib/icons/gb.svelte'
	import JPIcon from '$lib/icons/jp.svelte'
	import MenuIcon from '$lib/icons/menu.svelte'
	import { StorageKeys, setValue } from '$lib/util/localStorage'
	import { _, locale } from 'svelte-i18n'
	import { AppLocale, langPreference } from '../lib/util/i18n'

	function switchLocale(newLocale: AppLocale) {
		setValue(StorageKeys.LanguagePref, newLocale)
		langPreference.set(newLocale)
		locale.set($langPreference)
	}
</script>

<header>
	<div class="dui-navbar mx-4 lg:mx-2">
		<div class="dui-navbar-start">
			<div class="dui-dropdown">
				<div tabindex="0" role="button" class="dui-btn dui-btn-ghost sm:hidden">
					<MenuIcon />
				</div>
				<ul class="dui-menu dui-dropdown-content dui-menu-sm rounded-box bg-base-100 z-1 mt-3 w-52 p-2 shadow-sm">
					<li aria-current={page.url.pathname === '/about' ? 'page' : undefined}>
						<a href="/about">{$_('meta.nav.about')}</a>
					</li>
					<li aria-current={page.url.pathname === '/contact' ? 'page' : undefined}>
						<a href="/contact">{$_('meta.nav.contact')}</a>
					</li>
				</ul>
			</div>
			{#if page.url.pathname === '/'}
				<a href="/" aria-current="page" class="text-xl font-bold">{$_('meta.nav.home')}</a>
			{:else}
				<a href="/" class="text-xl">{$_('meta.nav.home')}</a>
			{/if}
		</div>
		<div class="dui-navbar-center hidden sm:flex">
			<ul class="dui-menu dui-menu-horizontal px-1 text-xl">
				<li aria-current={page.url.pathname === '/about' ? 'page' : undefined}>
					<a href="/about">{$_('meta.nav.about')}</a>
				</li>
				<li aria-current={page.url.pathname === '/contact' ? 'page' : undefined}>
					<a href="/contact">{$_('meta.nav.contact')}</a>
				</li>
			</ul>
		</div>
		<div class="dui-navbar-end flex flex-col items-end gap-1">
			<button
				onclick={() => switchLocale(AppLocale.EN)}
				disabled={$langPreference === AppLocale.EN}
				class="locale-switch"
			>
				ＥＮ <GBIcon />
			</button>
			<button
				onclick={() => switchLocale(AppLocale.JA)}
				disabled={$langPreference === AppLocale.JA}
				class="locale-switch"
			>
				ＪＡ <JPIcon />
			</button>
		</div>
	</div>
</header>

<style lang="postcss">
	header {
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 48rem;
		width: 100%;
		margin: auto;
	}

	button {
		display: flex;
		gap: 8px;
	}

	.locale-switch {
		background: none;
		border: none;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
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

	a:hover {
		color: var(--color-theme-1);
	}
</style>
