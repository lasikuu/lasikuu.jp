<script lang="ts">
	import { goto } from '$app/navigation'
	import { resolve } from '$app/paths'
	import Faq from '$lib/components/faq.svelte'
	import Moon from '$lib/components/moon.svelte'
	import Pricing from '$lib/components/pricing.svelte'
	import Section from '$lib/components/section.svelte'
	import ServiceIcon from '$lib/icons/service.svelte'
	import { _ } from 'svelte-i18n'

	const services = [
		{ icon: 'product', key: 'product' },
		{ icon: 'ai', key: 'ai' },
		{ icon: 'advisory', key: 'advisory' },
		{ icon: 'embedded', key: 'embedded' },
		{ icon: 'integration', key: 'integration' }
	] as const

	const faqIds = ['languages', 'remote', 'start', 'ip', 'stack', 'size']
</script>

<svelte:head>
	<title>{$_('services.title')} — LASIKUU</title>
	<meta name="description" content={$_('services.metadescription')} />
</svelte:head>

<section class="hero wrap">
	<span class="eyebrow">{$_('services.eyebrow')}</span>
	<h1>{$_('services.headline')}</h1>
	<p class="lede measure">{$_('services.lede')}</p>
</section>

<Section class="wrap section">
	<div class="grid">
		{#each services as s, i (s.key)}
			<article class="card reveal" style="--i:{i}">
				<div class="card-top">
					<span class="idx mono">{String(i + 1).padStart(2, '0')}</span>
					<ServiceIcon name={s.icon} size={30} class="glyph" />
				</div>
				<h3>{$_(`services.${s.key}.title`)}</h3>
				<p>{$_(`services.${s.key}.long`)}</p>
				<p class="tags mono">{$_(`services.${s.key}.tags`)}</p>
			</article>
		{/each}
	</div>
</Section>

<Section class="wrap section">
	<header class="head">
		<span class="tick">{$_('services.pricing_idx')}</span>
		<h2>{$_('services.pricing_title')}</h2>
		<p class="measure">{$_('services.pricing_lede')}</p>
	</header>
	<Pricing />
</Section>

<Section class="wrap section">
	<header class="head">
		<span class="tick">{$_('services.faq_idx')}</span>
		<h2>{$_('services.faq_title')}</h2>
	</header>
	<Faq ids={faqIds} />
</Section>

<Section class="wrap">
	<div class="cta">
		<Moon phase={0.5} size={120} interactive={false} />
		<h2>{$_('home.cta_title')}</h2>
		<p class="measure">{$_('home.cta_body')}</p>
		<button class="btn-moon" onclick={() => goto(resolve('/contact'))}>{$_('home.contactus')}</button>
	</div>
</Section>

<style>
	.hero {
		padding-block: clamp(3rem, 7vw, 6rem) clamp(1rem, 3vw, 2rem);
	}
	.hero .eyebrow {
		display: block;
		margin-bottom: 1.4rem;
	}
	.hero h1 {
		margin: 0 0 1.2rem;
		max-width: 16ch;
	}
	.lede {
		font-size: var(--step-1);
		color: var(--text-muted);
		margin: 0;
	}

	/* 2 / 1 / 2 layout: two columns, with the middle card spanning both */
	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1px;
		background: var(--ink-700);
		border: 1px solid var(--ink-700);
		border-radius: var(--radius-box);
		overflow: hidden;
	}
	.card:nth-child(3) {
		grid-column: 1 / -1;
	}
	.card {
		background: oklch(0.18 0.018 255 / 0.9);
		padding: clamp(2rem, 3.5vw, 3rem);
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		transition: background 0.3s var(--ease-out-quint);
	}
	.card:hover {
		background: oklch(0.21 0.02 255);
	}
	.card-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.6rem;
		color: var(--text-faint);
	}
	.card-top :global(.glyph) {
		color: var(--moon);
		transition: transform 0.4s var(--ease-out-quint);
	}
	.card:hover .card-top :global(.glyph) {
		transform: translateY(-2px) rotate(-4deg);
	}
	.idx {
		font-size: 0.8rem;
		letter-spacing: 0.14em;
		color: var(--moon);
	}
	.card h3 {
		margin: 0;
	}
	.card p {
		margin: 0;
	}
	.tags {
		margin-top: 0.4rem;
		font-size: 0.74rem;
		line-height: 1.7;
		letter-spacing: 0.02em;
		color: var(--text-faint);
	}

	.head {
		margin-bottom: clamp(2rem, 4vw, 3rem);
	}
	.head .tick {
		display: block;
		margin-bottom: 1rem;
	}
	.head h2 {
		margin: 0 0 0.8rem;
	}
	.head p {
		margin: 0;
		font-size: var(--step-0);
	}

	.cta {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 1.2rem;
		padding-block: var(--space-section);
	}
	.cta h2 {
		margin: 0.5rem 0 0;
	}
	.cta p {
		margin: 0 0 0.8rem;
	}

	@media (max-width: 640px) {
		.grid {
			grid-template-columns: 1fr;
		}
		.card:nth-child(3) {
			grid-column: auto;
		}
	}
</style>
