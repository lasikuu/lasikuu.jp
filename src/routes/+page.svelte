<script lang="ts">
	import { goto } from '$app/navigation'
	import { resolve } from '$app/paths'
	import Clients from '$lib/components/clients.svelte'
	import Faq from '$lib/components/faq.svelte'
	import Moon from '$lib/components/moon.svelte'
	import ProjectFlow from '$lib/components/project-flow.svelte'
	import Section from '$lib/components/section.svelte'
	import ServiceItem from '$lib/components/service-item.svelte'
	import Starfield from '$lib/components/starfield.svelte'
	import { _ } from 'svelte-i18n'

	const services = [
		{ icon: 'product', key: 'product' },
		{ icon: 'ai', key: 'ai' },
		{ icon: 'advisory', key: 'advisory' },
		{ icon: 'embedded', key: 'embedded' },
		{ icon: 'integration', key: 'integration' }
	] as const

	const values = ['craft', 'knowledge', 'direct', 'trilingual'] as const
	const faqIds = ['languages', 'remote', 'start', 'ip']
</script>

<svelte:head>
	<title>LASIKUU — {$_('home.description')}</title>
	<meta name="description" content={$_('home.metadescription')} />
</svelte:head>

<!-- ── Hero: the moon as instrument ─────────────────────────────────────── -->
<section class="hero">
	<Starfield count={70} />
	<div class="hero-grid">
		<div class="hero-copy">
			<span class="eyebrow">{$_('home.eyebrow')}</span>
			<h1>{$_('home.headline')}</h1>
			<p class="lede measure">{$_('home.lede')}</p>
			<div class="actions">
				<button class="btn-moon" onclick={() => goto(resolve('/contact'))}>{$_('home.contactus')}</button>
				<button class="btn-ghost-moon" onclick={() => goto(resolve('/services'))}>{$_('home.seeservices')}</button>
			</div>
		</div>
		<div class="hero-moon">
			<Moon phase={0.62} size={360} vwCap={0.5} />
			<span class="coord mono">{$_('home.greeting')}</span>
		</div>
	</div>
	<div class="scroll-hint mono">{$_('home.scroll')}</div>
</section>

<!-- ── Services overview ────────────────────────────────────────────────── -->
<Section class="wrap section">
	<header class="head">
		<span class="tick">{$_('home.s_services_idx')}</span>
		<h2>{$_('home.s_services_title')}</h2>
		<p class="measure">{$_('home.s_services_lede')}</p>
	</header>
	<div class="services">
		{#each services as s, i (s.key)}
			<ServiceItem
				index={i + 1}
				count={services.length}
				icon={s.icon}
				titleKey={`services.${s.key}.title`}
				bodyKey={`services.${s.key}.short`}
			/>
		{/each}
	</div>
	<a href={resolve('/services')} class="more mono">{$_('home.s_services_more')} →</a>
</Section>

<!-- ── Why LASIKUU ──────────────────────────────────────────────────────── -->
<Section class="wrap section">
	<header class="head">
		<span class="tick">{$_('home.s_why_idx')}</span>
		<h2>{$_('home.s_why_title')}</h2>
	</header>
	<div class="values">
		{#each values as v, i (v)}
			<div class="value reveal" style="--i:{i}">
				<span class="v-num mono">{String(i + 1).padStart(2, '0')}</span>
				<h3>{$_(`home.values.${v}.title`)}</h3>
				<p>{$_(`home.values.${v}.body`)}</p>
			</div>
		{/each}
	</div>
</Section>

<!-- ── Process ──────────────────────────────────────────────────────────── -->
<Section class="wrap section">
	<header class="head">
		<span class="tick">{$_('home.s_flow_idx')}</span>
		<h2>{$_('home.exampleproject')}</h2>
		<p class="measure">{$_('home.s_flow_lede')}</p>
	</header>
	<ProjectFlow />
</Section>

<!-- ── Trust strip ──────────────────────────────────────────────────────── -->
<Section class="wrap section trust">
	<span class="eyebrow">{$_('home.clients')}</span>
	<Clients />
</Section>

<!-- ── FAQ teaser ───────────────────────────────────────────────────────── -->
<Section class="wrap section">
	<header class="head">
		<span class="tick">{$_('home.s_faq_idx')}</span>
		<h2>{$_('home.s_faq_title')}</h2>
	</header>
	<Faq ids={faqIds} />
	<a href={resolve('/services')} class="more mono">{$_('home.s_faq_more')} →</a>
</Section>

<!-- ── CTA ──────────────────────────────────────────────────────────────── -->
<Section class="wrap">
	<div class="cta">
		<Moon phase={0.5} size={120} interactive={false} />
		<h2>{$_('home.cta_title')}</h2>
		<p class="measure">{$_('home.cta_body')}</p>
		<button class="btn-moon" onclick={() => goto(resolve('/contact'))}>{$_('home.contactus')}</button>
	</div>
</Section>

<style>
	/* hero */
	.hero {
		position: relative;
		min-height: clamp(34rem, 88vh, 52rem);
		display: flex;
		flex-direction: column;
		justify-content: center;
		max-width: 72rem;
		margin: 0 auto;
		padding: clamp(2rem, 6vw, 4rem) clamp(1rem, 4vw, 2.5rem) 2rem;
		overflow: hidden;
	}
	.hero-grid {
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		align-items: center;
		gap: clamp(2rem, 5vw, 4rem);
	}
	.hero-copy .eyebrow {
		display: block;
		margin-bottom: 1.4rem;
		animation: rise 0.8s var(--ease-out-expo) both;
	}
	.hero-copy h1 {
		margin: 0 0 1.4rem;
		font-size: var(--step-5);
		animation: rise 0.9s var(--ease-out-expo) 0.06s both;
	}
	.lede {
		font-size: var(--step-1);
		color: var(--text-muted);
		margin: 0 0 2.2rem;
		animation: rise 0.9s var(--ease-out-expo) 0.14s both;
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.9rem;
		animation: rise 0.9s var(--ease-out-expo) 0.22s both;
	}
	.hero-moon {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		animation: fade 1.4s var(--ease-out-expo) 0.1s both;
	}
	.coord {
		position: absolute;
		bottom: -2.5rem;
		right: 2%;
		font-size: 0.78rem;
		color: var(--text-faint);
		letter-spacing: 0.1em;
	}
	.scroll-hint {
		position: relative;
		z-index: 1;
		margin-top: clamp(2rem, 5vw, 4rem);
		font-size: 0.72rem;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--text-faint);
		animation: fade 1.4s ease 0.6s both;
	}

	/* section heads */
	.head {
		margin-bottom: clamp(2rem, 4vw, 3.5rem);
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

	.services {
		margin-top: -1px;
	}
	.more {
		display: inline-block;
		margin-top: 2rem;
		font-size: 0.82rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--moon);
		transition: color 0.2s var(--ease-out-quint);
	}
	.more:hover {
		color: var(--moon-bright);
	}

	.values {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr));
		gap: clamp(1.5rem, 4vw, 3rem);
	}
	.value {
		border-top: 1px solid var(--ink-700);
		padding-top: 1.4rem;
		padding-bottom: 0.6rem;
	}
	.v-num {
		display: block;
		font-size: 0.8rem;
		letter-spacing: 0.14em;
		color: var(--moon);
		margin-bottom: 0.8rem;
	}
	.value h3 {
		margin: 0 0 0.5rem;
	}
	.value p {
		margin: 0;
	}

	:global(.trust) {
		text-align: center;
	}
	:global(.trust) .eyebrow {
		display: block;
		margin-bottom: 2.5rem;
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

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media (max-width: 820px) {
		.hero-grid {
			grid-template-columns: 1fr;
			text-align: left;
		}
		.hero-moon {
			order: -1;
			margin-bottom: 1rem;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.hero-copy .eyebrow,
		.hero-copy h1,
		.lede,
		.actions,
		.hero-moon,
		.scroll-hint {
			animation: none;
		}
	}
</style>
