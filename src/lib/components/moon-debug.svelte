<script lang="ts">
	// Hidden easter egg + debug tool. Reveal by typing the word "moon" anywhere
	// on the page, or with Ctrl/Cmd + Shift + M. A slider then drives the phase
	// of every <Moon> on the site at once. Esc or the close button hides it and
	// clears the override.
	import { onMount } from 'svelte'
	import Moon from '$lib/components/moon.svelte'
	import { moonDebugOpen, moonPhaseOverride, phaseName } from '$lib/util/moonDebug'

	let phase = $state(0.62)
	const sequence = 'moon'
	let typed = ''

	function open() {
		moonDebugOpen.set(true)
		moonPhaseOverride.set(phase)
	}

	function close() {
		moonDebugOpen.set(false)
		moonPhaseOverride.set(null)
	}

	function onInput(v: number) {
		phase = v
		moonPhaseOverride.set(v)
	}

	onMount(() => {
		function handleKey(e: KeyboardEvent) {
			// shortcut: Ctrl/Cmd + Shift + M
			if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'm') {
				e.preventDefault()
				if ($moonDebugOpen) close()
				else open()
				return
			}
			if (e.key === 'Escape' && $moonDebugOpen) {
				close()
				return
			}
			// ignore typing inside form fields
			const t = e.target as HTMLElement | null
			if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return
			// secret word: type "moon"
			if (/^[a-z]$/i.test(e.key)) {
				typed = (typed + e.key.toLowerCase()).slice(-sequence.length)
				if (typed === sequence && !$moonDebugOpen) open()
			}
		}
		window.addEventListener('keydown', handleKey)
		return () => window.removeEventListener('keydown', handleKey)
	})

	const pct = $derived(Math.round(phase * 100))
</script>

{#if $moonDebugOpen}
	<div class="panel" role="dialog" aria-label="Moon phase debugger" aria-modal="false" tabindex="-1">
		<div class="preview">
			<Moon {phase} size={120} interactive={false} ignoreOverride />
		</div>

		<div class="controls">
			<header>
				<span class="eyebrow">Lunar instrument</span>
				<button class="close" onclick={close} aria-label="Close">×</button>
			</header>

			<p class="readout mono">
				<span class="name">{phaseName(phase)}</span>
				<span class="vals">phase {phase.toFixed(3)} · {pct}%</span>
			</p>

			<input
				type="range"
				min="0"
				max="1"
				step="0.001"
				value={phase}
				oninput={(e) => onInput(+e.currentTarget.value)}
				aria-label="Moon phase"
			/>

			<div class="presets">
				<button class="mono" onclick={() => onInput(0)}>New</button>
				<button class="mono" onclick={() => onInput(0.25)}>First ¼</button>
				<button class="mono" onclick={() => onInput(0.5)}>Full</button>
				<button class="mono" onclick={() => onInput(0.75)}>Last ¼</button>
			</div>

			<p class="hint mono">⌃⇧M to toggle · Esc to close</p>
		</div>
	</div>
{/if}

<style>
	.panel {
		position: fixed;
		bottom: clamp(1rem, 3vw, 2rem);
		right: clamp(1rem, 3vw, 2rem);
		z-index: 100;
		display: flex;
		gap: 1.25rem;
		align-items: center;
		padding: 1.25rem 1.4rem;
		background: oklch(0.16 0.018 255 / 0.9);
		backdrop-filter: blur(14px) saturate(1.1);
		border: 1px solid var(--ink-700);
		border-radius: var(--radius-box);
		box-shadow: 0 20px 60px -20px oklch(0.05 0.02 260 / 0.8);
		animation: rise 0.4s var(--ease-out-expo) both;
		max-width: min(92vw, 26rem);
	}
	.preview {
		flex: none;
	}
	.controls {
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
		min-width: 0;
		flex: 1;
	}
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}
	.close {
		background: none;
		border: none;
		color: var(--text-faint);
		font-size: 1.3rem;
		line-height: 1;
		cursor: pointer;
		padding: 0 0.2rem;
		transition: color 0.2s var(--ease-out-quint);
	}
	.close:hover {
		color: var(--moon-bright);
	}
	.readout {
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		font-size: 0.78rem;
	}
	.name {
		color: var(--moon);
		letter-spacing: 0.04em;
	}
	.vals {
		color: var(--text-faint);
		font-size: 0.72rem;
	}

	input[type='range'] {
		-webkit-appearance: none;
		appearance: none;
		width: 100%;
		height: 2px;
		background: var(--ink-700);
		border-radius: 999px;
		cursor: pointer;
		margin: 0.3rem 0;
	}
	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 14px;
		height: 14px;
		border-radius: 999px;
		background: var(--moon);
		box-shadow: 0 0 10px -1px var(--moon);
		cursor: pointer;
	}
	input[type='range']::-moz-range-thumb {
		width: 14px;
		height: 14px;
		border: none;
		border-radius: 999px;
		background: var(--moon);
		box-shadow: 0 0 10px -1px var(--moon);
		cursor: pointer;
	}

	.presets {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}
	.presets button {
		background: transparent;
		border: 1px solid var(--ink-700);
		color: var(--text-muted);
		border-radius: 0.25rem;
		padding: 0.25em 0.6em;
		font-size: 0.7rem;
		letter-spacing: 0.04em;
		cursor: pointer;
		transition:
			border-color 0.2s var(--ease-out-quint),
			color 0.2s var(--ease-out-quint);
	}
	.presets button:hover {
		border-color: var(--moon);
		color: var(--moon-bright);
	}
	.hint {
		margin: 0.1rem 0 0;
		font-size: 0.66rem;
		letter-spacing: 0.08em;
		color: var(--ink-600);
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(16px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}

	@media (max-width: 480px) {
		.panel {
			left: clamp(1rem, 3vw, 2rem);
			flex-direction: row;
		}
	}
</style>
