<script lang="ts">
	import { _ } from 'svelte-i18n'
</script>

<div>
	<button
		class="btn"
		title={$_('components.line.hint')}
		on:click={() => window.open(`https://lin.ee/qXW81U0`, '_blank')}
	>
		<span class="line-logo" />
		{$_('components.line.add')}
	</button>
</div>

<style>
	button {
		background-color: #06c755;
		color: #fff;
	}

	button:hover {
		background-color: #02a52f;
	}

	button .line-logo {
		width: 30px;
		height: 100%;
		background: url(../img/line_v3@3x.png) 0 center no-repeat;
		background-size: 30px auto;
	}
</style>
