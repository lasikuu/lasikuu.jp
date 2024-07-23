<script lang="ts">
	import { page } from '$app/stores'
</script>

<div class="block text-center">
	<h3>
		{#if $page.status === 404}
			404 - not found
		{:else if $page.status === 403}
			403 - forbidden
		{:else}
			500 - server error
		{/if}
	</h3>
</div>
