<script lang="ts">
	import { _ } from 'svelte-i18n'

	const address = 'contact@lasikuu.jp'
</script>

<div>
	<button
		class="dui-btn"
		title={$_('components.email.hint')}
		onclick={() => window.open(`mailto:${address}`, '_blank')}
	>
		{address}
	</button>
</div>
