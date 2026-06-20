<script lang="ts">
	import marko from '$lib/assets/marko_in_chiran.jpg?enhanced&imgWidth=880&format=webp;jpg'
	import Moon from '$lib/components/moon.svelte'
	import Section from '$lib/components/section.svelte'
	import Timeline from '$lib/components/timeline.svelte'
	import { _ } from 'svelte-i18n'
</script>

<svelte:head>
	<title>{$_('about.title')} — LASIKUU</title>
	<meta name="description" content={$_('about.description')} />
</svelte:head>

<section class="page-head wrap">
	<div class="head-text">
		<span class="eyebrow">{$_('about.eyebrow')}</span>
		<h1>{$_('about.headline')}</h1>
		<p class="measure">{$_('about.name_explanation')}</p>
	</div>
	<div class="moon-wrap">
		<Moon phase={0.3} size={180} />
	</div>
</section>

<section class="hero wrap">
	<figure class="portrait">
		<enhanced:img
			src={marko}
			alt={$_('about.founder_photo_alt')}
			sizes="(max-width: 760px) 22rem, 440px"
			fetchpriority="high"
		/>
		<figcaption class="mono">{$_('about.founder_caption')}</figcaption>
	</figure>
	<div class="intro">
		<h2>{$_('about.founder_greeting')}</h2>
		<span class="role mono">
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href="https://kohana.fi" rel="noopener" title="kohana.fi">{$_('about.founder_name')}</a>{$_(
				'about.founder_role_suffix'
			)}
		</span>
		<p>{$_('about.founder_p1')}</p>
		<p>{$_('about.founder_p2')}</p>
		<p>{$_('about.founder_p3')}</p>
	</div>
</section>

<Section class="wrap timeline-sec">
	<header class="head">
		<span class="tick">{$_('about.timeline')}</span>
	</header>
	<Timeline />
</Section>

<style>
	/* ── Page header: title + name explanation + moon ─────────────────── */
	.page-head {
		display: grid;
		grid-template-columns: 1.4fr 0.6fr;
		align-items: center;
		gap: clamp(2rem, 5vw, 4rem);
		padding-block: clamp(3rem, 7vw, 5.5rem) 0;
	}
	.head-text .eyebrow {
		display: block;
		margin-bottom: 1.2rem;
	}
	.head-text h1 {
		margin: 0 0 1.4rem;
		max-width: 18ch;
	}
	.head-text p {
		font-size: var(--step-0);
		color: var(--text-faint);
	}

	/* ── Hero: portrait + introduction ────────────────────────────────── */
	.hero {
		display: grid;
		grid-template-columns: 0.8fr 1.2fr;
		gap: clamp(2rem, 5vw, 4rem);
		align-items: start;
		padding-block: clamp(2.5rem, 6vw, 5rem) clamp(2rem, 4vw, 3rem);
	}
	.portrait {
		margin: 0;
		position: relative;
		aspect-ratio: 4 / 5;
		border: 1px solid var(--ink-700);
		border-radius: var(--radius-box, 0.5rem);
		overflow: hidden;
		background: var(--ink-800);
		box-shadow: 0 0 60px -24px oklch(0.86 0.06 245 / 0.5);
	}
	.portrait :global(img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 28%;
		display: block;
		/* Broken-image fallback: if the photo fails to load, render its alt text
		   centred and legible instead of clipped in a corner. These text
		   properties sit under the bitmap once it loads, so they only show in
		   the broken state. (The previous `transform: scale()` zoom was dropped
		   because it also scaled and clipped the alt text.) */
		text-align: center;
		align-content: center;
		color: var(--text-muted);
		font-size: var(--step--1);
		line-height: 1.5;
	}
	.portrait figcaption {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 0.7rem 0.9rem;
		font-size: var(--step--1);
		letter-spacing: 0.1em;
		color: var(--text);
		background: linear-gradient(180deg, transparent, oklch(0.14 0.016 255 / 0.78));
	}
	.intro h2 {
		margin: 0 0 0.4rem;
		font-size: var(--step-3);
	}
	.role {
		display: block;
		font-size: var(--step--1);
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--moon);
		margin-bottom: 1.6rem;
	}
	.role a {
		color: inherit;
		border-bottom: 1px solid var(--moon-dim);
		transition:
			color 0.2s var(--ease-out-quint),
			border-color 0.2s var(--ease-out-quint);
	}
	.role a:hover {
		color: var(--moon-bright);
		border-bottom-color: var(--moon);
	}
	.intro p {
		max-width: 60ch;
		margin: 0 0 1rem;
	}

	.moon-wrap {
		display: flex;
		justify-content: center;
	}

	/* timeline sits right under the hero: no divider, no doubled-up top gap */
	:global(.timeline-sec) {
		padding-bottom: var(--space-section);
	}
	.head {
		margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
	}

	@media (max-width: 760px) {
		.page-head {
			grid-template-columns: 1fr;
		}
		.hero {
			grid-template-columns: 1fr;
		}
		.portrait {
			max-width: 22rem;
			aspect-ratio: 1 / 1;
		}
		.moon-wrap {
			order: -1;
			justify-content: flex-start;
		}
	}
</style>
