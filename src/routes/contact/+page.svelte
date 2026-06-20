<script lang="ts">
	import Moon from '$lib/components/moon.svelte'
	import { _ } from 'svelte-i18n'

	const address = 'contact@lasikuu.jp'
	const telegramUrl = 'https://t.me/lasikuu'
	const lineUrl = 'https://lin.ee/qXW81U0'
</script>

<svelte:head>
	<title>{$_('contact.title')} — LASIKUU</title>
	<meta name="description" content={$_('contact.description')} />
</svelte:head>

<section class="contact wrap">
	<div class="moon-bg" aria-hidden="true">
		<Moon phase={0.5} size={300} interactive={false} />
	</div>
	<div class="copy">
		<span class="eyebrow">{$_('contact.eyebrow')}</span>
		<h1>{$_('contact.headline')}</h1>
		<p class="measure">{$_('contact.content')}</p>

		<div class="channels">
			<a class="channel" href={`mailto:${address}`} title={$_('components.email.hint')}>
				<span class="ch-label mono">{$_('contact.email_label')}</span>
				<span class="ch-value">{address}</span>
			</a>
			<a class="channel telegram" href={telegramUrl} rel="noopener" title={$_('components.telegram.hint')}>
				<span class="ch-label mono">{$_('contact.telegram_label')}</span>
				<span class="ch-value">
					<svg class="tg-logo" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path
							d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"
						/>
					</svg>
					{$_('components.telegram.add')}
				</span>
			</a>
			<a class="channel line" href={lineUrl} rel="noopener" title={$_('components.line.hint')}>
				<span class="ch-label mono">{$_('contact.line_label')}</span>
				<span class="ch-value">
					<span class="line-logo" aria-hidden="true"></span>
					{$_('components.line.add')}
				</span>
			</a>
		</div>
	</div>
</section>

<style>
	.contact {
		position: relative;
		min-height: 70vh;
		display: flex;
		align-items: center;
		padding-block: clamp(3rem, 8vw, 7rem);
		overflow: hidden;
	}
	.moon-bg {
		position: absolute;
		right: -6%;
		top: 50%;
		transform: translateY(-50%);
		opacity: 0.5;
		pointer-events: none;
	}
	.copy {
		position: relative;
		z-index: 1;
		max-width: 40rem;
	}
	.copy .eyebrow {
		display: block;
		margin-bottom: 1.4rem;
	}
	.copy h1 {
		margin: 0 0 1.4rem;
	}
	.copy p {
		font-size: var(--step-0);
		margin: 0 0 2.5rem;
	}
	.channels {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr));
		gap: 1rem;
		max-width: 36rem;
	}
	.channel {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1.4rem 1.5rem;
		border: 1px solid var(--ink-700);
		border-radius: var(--radius-box);
		background: oklch(0.18 0.018 255 / 0.6);
		transition:
			border-color 0.25s var(--ease-out-quint),
			transform 0.25s var(--ease-out-quint),
			background 0.25s var(--ease-out-quint);
	}
	.channel:hover {
		border-color: var(--moon);
		transform: translateY(-3px);
		background: oklch(0.21 0.02 255 / 0.8);
	}
	.ch-label {
		font-size: 0.72rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--text-faint);
	}
	.ch-value {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: var(--step-0);
		color: var(--text);
	}
	.channel:hover .ch-value {
		color: var(--moon-bright);
	}
	.telegram .ch-value {
		color: #2aabee;
	}
	.telegram:hover {
		border-color: #2aabee;
	}
	.telegram:hover .ch-value {
		color: #3cb9f5;
	}
	.tg-logo {
		width: 22px;
		height: 22px;
	}
	.line .ch-value {
		color: #06c755;
	}
	.line:hover {
		border-color: #06c755;
	}
	.line:hover .ch-value {
		color: #08d95f;
	}
	.line-logo {
		width: 22px;
		height: 22px;
		background: url(/img/line_v3@3x.png) center / 22px auto no-repeat;
	}

	@media (max-width: 720px) {
		.moon-bg {
			right: -30%;
			opacity: 0.25;
		}
	}
</style>
