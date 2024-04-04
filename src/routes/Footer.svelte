<script lang="ts">
	import { _ } from 'svelte-i18n'
</script>

<footer>
	<p>lasikuu.jp</p>
	<div class="documents">
		<a href="/commerce-disclosure">{$_('meta.footer.comdisclosure')}</a>・
		<a href="/privacy-policy">{$_('meta.footer.privacy')}</a>・
		<a href="/terms-of-service">{$_('meta.footer.tos')}</a>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

	.documents {
		display: flex;
		justify-content: center;
	}
</style>
