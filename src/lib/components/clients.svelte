<script lang="ts">
	const clients = [
		{
			name: 'Simucube',
			logo: 'simucube_symbol_logo_white_no-r_fixed-1024x818.png',
			url: 'https://simucube.com'
		},
		{
			name: 'Rare Agency Oy',
			logo: 'rare.svg',
			url: 'https://rare.fi'
		}
	]
</script>

<div class="flex flex-wrap justify-center">
	{#each clients as client}
		<a href={client.url}>
			<span class="img-container">
				<img width={100} src={`/img/clients/${client.logo}`} alt={client.name} />
			</span>
		</a>
	{/each}
</div>

<style>
	.img-container {
		margin: 1rem 1.5rem;
		width: 100px; /* Set the desired width */
		height: 100px; /* Set the desired height */
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: visible;
	}

	img {
		transition: transform 0.1s;
	}

	img:hover {
		transform: scale(1.1);
	}
</style>
