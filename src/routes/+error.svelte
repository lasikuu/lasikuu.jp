<script lang="ts">
	import { page } from '$app/state'
	import { resolve } from '$app/paths'
	import Moon from '$lib/components/moon.svelte'
	import { _ } from 'svelte-i18n'

	const messageKey = $derived(
		page.status === 404
			? 'error.404'
			: page.status === 403
				? 'error.403'
				: page.status === 500
					? 'error.500'
					: 'error.generic'
	)
</script>

<svelte:head>
	<title>{page.status} — LASIKUU</title>
</svelte:head>

<section class="err wrap">
	<Moon phase={0.04} size={160} interactive={false} />
	<span class="code mono">{page.status}</span>
	<span class="eyebrow">{$_('error.eyebrow')}</span>
	<p class="msg">{$_(messageKey)}</p>
	<a href={resolve('/')} class="btn-ghost-moon">{$_('error.home')}</a>
</section>

<style>
	.err {
		min-height: 70vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 1rem;
		padding-block: clamp(3rem, 10vw, 8rem);
	}
	.code {
		font-size: clamp(2.5rem, 8vw, 4rem);
		letter-spacing: 0.1em;
		color: var(--moon);
		margin-top: 1rem;
	}
	.msg {
		font-size: var(--step-1);
		color: var(--text-muted);
		max-width: 40ch;
		margin: 0.5rem 0 1.5rem;
	}
</style>
