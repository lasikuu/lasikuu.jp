<script lang="ts">
	import { page } from '$app/state'
</script>

<div class="block text-center">
	<h2>
		{#if page.status === 404}
			404 - not found
		{:else if page.status === 403}
			403 - forbidden
		{:else}
			500 - server error
		{/if}
	</h2>
</div>
