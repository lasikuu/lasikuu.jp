<script lang="ts" module>
	export type ServiceIconName = 'embedded' | 'ai' | 'product' | 'integration' | 'advisory'
</script>

<script lang="ts">
	// Custom-stroke service glyphs in an instrument/almanac key, 1.5 stroke,
	// consistent across the set. Deliberately not the Lucide default look.
	interface Props {
		name: ServiceIconName
		size?: number
		class?: string
	}
	let { name, size = 28, class: cls = '' }: Props = $props()
</script>

<svg
	class={cls}
	width={size}
	height={size}
	viewBox="0 0 32 32"
	fill="none"
	stroke="currentColor"
	stroke-width="1.5"
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
>
	{#if name === 'product'}
		<!-- a framed viewport (web/app) over a stacked base (backend): a built product -->
		<rect x="5" y="5" width="22" height="13" rx="1.5" />
		<path d="M5 9h22" />
		<circle cx="7.5" cy="7" r="0.4" fill="currentColor" />
		<path d="M10 13.5c2-1.6 3.6 1.6 5.6 0s3.6-1.6 5.6 0" />
		<ellipse cx="16" cy="23" rx="8" ry="2.4" />
		<path d="M8 23v3c0 1.3 3.6 2.4 8 2.4s8-1.1 8-2.4v-3" />
	{:else if name === 'ai'}
		<!-- a small moon-node network: model as constellation -->
		<circle cx="16" cy="9" r="2.4" />
		<circle cx="8" cy="20" r="2.4" />
		<circle cx="24" cy="20" r="2.4" />
		<circle cx="16" cy="24" r="1.6" fill="currentColor" stroke="none" />
		<path d="M14.3 10.7 9.4 18M17.7 10.7 22.6 18M9.8 21.6 14.6 23.4M22.2 21.6 17.4 23.4" />
	{:else if name === 'integration'}
		<!-- two nodes joined by a link: systems connected -->
		<rect x="3" y="12" width="9" height="8" rx="1.5" />
		<rect x="20" y="12" width="9" height="8" rx="1.5" />
		<path d="M12 16h2.5a2 2 0 0 1 2 2v0a2 2 0 0 0 2 2H20" />
		<path d="M12 16h-1M21 16h-1" />
		<circle cx="16" cy="9" r="1.4" />
		<path d="M16 10.4V14" />
	{:else if name === 'advisory'}
		<!-- sightline dial with bezel ticks and a focus point: a second opinion -->
		<circle cx="16" cy="16" r="11" />
		<path d="M16 5v3M27 16h-3M16 27v-3M5 16h3" />
		<path d="m16 16 5 2.5" />
		<circle cx="16" cy="16" r="2.2" fill="currentColor" stroke="none" />
	{:else if name === 'embedded'}
		<!-- two interlocking marks: deployed into the team -->
		<circle cx="12" cy="13" r="5" />
		<circle cx="20" cy="19" r="5" />
		<path d="M14.8 16.2 17.2 15.8" />
	{/if}
</svg>
