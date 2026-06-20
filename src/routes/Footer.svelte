<script lang="ts">
	import { resolve } from '$app/paths'
	import GithubIcon from '$lib/icons/github.svelte'
	import LinkedinIcon from '$lib/icons/linkedin.svelte'
	import { _ } from 'svelte-i18n'

	const year = new Date().getFullYear()
	const company = [
		{ href: '/services', key: 'meta.nav.services' },
		{ href: '/about', key: 'meta.nav.about' },
		{ href: '/contact', key: 'meta.nav.contact' },
		{ href: '/press-kit', label: 'Press kit' }
	] as const
	const legal = [
		{ href: '/commerce-disclosure', key: 'meta.footer.comdisclosure' },
		{ href: '/privacy-policy', key: 'meta.footer.privacy' },
		{ href: '/terms-of-service', key: 'meta.footer.tos' }
	] as const
</script>

<footer>
	<div class="inner">
		<div class="brand">
			<a href={resolve('/')} class="logo wordmark">LASIKUU</a>
			<p class="tagline mono">{$_('meta.footer.tagline')}</p>
			<p class="loc">{$_('meta.footer.based')}</p>
		</div>

		<nav class="col" aria-label="Company">
			<span class="eyebrow">{$_('meta.footer.company')}</span>
			{#each company as item (item.href)}
				<a href={resolve(item.href)}>{'key' in item ? $_(item.key) : item.label}</a>
			{/each}
		</nav>

		<nav class="col" aria-label="Legal">
			<span class="eyebrow">{$_('meta.footer.legal')}</span>
			{#each legal as item (item.href)}
				<a href={resolve(item.href)}>{$_(item.key)}</a>
			{/each}
		</nav>

		<div class="col social-col">
			<span class="eyebrow">{$_('meta.footer.elsewhere')}</span>
			<div class="social">
				<a href="https://github.com/LASIKUU" title="github.com/LASIKUU" rel="noopener" aria-label="GitHub">
					<GithubIcon />
				</a>
				<a
					href="https://www.linkedin.com/company/lasikuu"
					title="linkedin.com/company/lasikuu"
					rel="noopener"
					aria-label="LinkedIn"
				>
					<LinkedinIcon />
				</a>
			</div>
		</div>
	</div>

	<div class="baseline">
		<span class="mono">© {year} LASIKUU（ラシクウ）</span>
		<span class="mono coords">35.0116°N 135.7681°E</span>
	</div>
</footer>

<style>
	footer {
		border-top: 1px solid var(--ink-700);
		margin-top: var(--space-section);
		padding: clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem) 2rem;
		background: oklch(0.14 0.016 255 / 0.5);
	}
	.inner {
		max-width: 72rem;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1.6fr 1fr 1fr 1fr;
		gap: clamp(2rem, 5vw, 4rem);
	}
	.wordmark {
		font-size: 1.4rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		color: var(--text);
	}
	.tagline {
		margin: 0.9rem 0 0.3rem;
		font-size: 0.78rem;
		letter-spacing: 0.04em;
		color: var(--moon);
	}
	.loc {
		margin: 0;
		font-size: 0.85rem;
		color: var(--text-faint);
	}
	.col {
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
	}
	.eyebrow {
		margin-bottom: 0.3rem;
	}
	.col a {
		font-size: 0.9rem;
		color: var(--text-muted);
		transition: color 0.2s var(--ease-out-quint);
		width: fit-content;
	}
	.col a:hover {
		color: var(--moon-bright);
	}
	.social {
		display: flex;
		gap: 1rem;
		color: var(--text-muted);
	}
	.social a:hover {
		color: var(--moon-bright);
	}
	.baseline {
		max-width: 72rem;
		margin: clamp(2.5rem, 5vw, 4rem) auto 0;
		padding-top: 1.5rem;
		border-top: 1px solid var(--ink-700);
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
		font-size: 0.74rem;
		color: var(--text-faint);
		letter-spacing: 0.06em;
	}
	.coords {
		color: var(--ink-600);
	}

	@media (max-width: 760px) {
		.inner {
			grid-template-columns: 1fr 1fr;
		}
		.brand {
			grid-column: 1 / -1;
		}
	}
	@media (max-width: 440px) {
		.inner {
			grid-template-columns: 1fr;
		}
	}
</style>
