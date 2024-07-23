<script lang="ts">
	import { _ } from 'svelte-i18n'

	const address = 'contact@lasikuu.jp'
</script>

<div>
	<button class="btn" title={$_('components.email.hint')} on:click={() => window.open(`mailto:${address}`, '_blank')}>
		{address}
	</button>
</div>

<style>
	.btn {
		color: #fff;
	}
</style>
