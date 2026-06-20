<script lang="ts">
	const clients = [
		{ name: 'Rare Agency Oy', logo: 'rare.svg', url: 'https://rare.fi', scale: 0.75 },
		{ name: 'Simucube', logo: 'simucube_symbol_logo_white_no-r_fixed-1024x818.png', url: 'https://simucube.com' },
		{ name: 'Chevon', logo: 'chevon.webp', url: 'https://chevon5thanniversary.jp' }
	]
</script>

<div class="strip">
	{#each clients as client (client.name)}
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a href={client.url} class="client" rel="noopener" title={client.name}>
			<span class="logo-box">
				<img
					src={`/img/clients/${client.logo}`}
					alt={`${client.name} logo`}
					loading="lazy"
					style:height={`${56 * (client.scale ?? 1)}px`}
				/>
			</span>
			<span class="name mono">{client.name}</span>
		</a>
	{/each}
</div>

<style>
	.strip {
		display: flex;
		flex-wrap: wrap;
		gap: clamp(2rem, 6vw, 5rem);
		align-items: center;
		justify-content: center;
	}
	.client {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.9rem;
		max-width: 9rem;
		opacity: 0.72;
		transition:
			opacity 0.3s var(--ease-out-quint),
			transform 0.3s var(--ease-out-quint);
	}
	.client:hover {
		opacity: 1;
		transform: translateY(-3px);
	}
	/* fixed-height band so every logo, whatever its scale, occupies the same
	   vertical space and the labels below line up on one baseline */
	.logo-box {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 56px;
	}
	img {
		width: auto;
		max-width: 100%;
		object-fit: contain;
		filter: brightness(0) invert(1);
	}
	.name {
		font-size: 0.74rem;
		letter-spacing: 0.1em;
		color: var(--text-faint);
		text-transform: uppercase;
		text-align: center;
		text-wrap: balance;
	}
</style>
