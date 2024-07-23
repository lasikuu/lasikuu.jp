<script lang="ts">
	import GithubIcon from '$lib/icons/github.svelte'
	import GlobeIcon from '$lib/icons/globe.svelte'
	import { _ } from 'svelte-i18n'
</script>

<footer>
	<div class="max-w-screen-md">
		<div class="footer gap-12 bg-base-200 p-10 text-base-content">
			<aside>
				<img src="/img/logo.svg" width="50" height="50" alt="Lasikuu logo" />
				<p>
					LASIKUU（ラシクウ）
					<br />
					2024
				</p>
			</aside>
			<nav>
				<h6 class="footer-title">Social</h6>
				<div class="grid grid-flow-col gap-3">
					<a href="https://github.com/LASIKUU" title="github.com/LASIKUU">
						<GithubIcon />
					</a>
					<a href="https://kohana.fi" title="kohana.fi">
						<GlobeIcon />
					</a>
				</div>
			</nav>
			<nav>
				<h6 class="footer-title">Company</h6>
				<a class="link-hover link" href="/about">About</a>
				<a class="link-hover link" href="/contact">Contact</a>
				<a class="link-hover link" href="/press-kit">Press kit</a>
			</nav>
			<nav>
				<h6 class="footer-title">Legal</h6>
				<a class="link-hover link" href="/commerce-disclosure">{$_('meta.footer.comdisclosure')}</a>
				<a class="link-hover link" href="/privacy-policy">{$_('meta.footer.privacy')}</a>
				<a class="link-hover link" href="/terms-of-service">{$_('meta.footer.tos')}</a>
			</nav>
		</div>
	</div>
</footer>

<style lang="postcss">
	footer {
		display: flex;
		justify-content: center;
		@apply bg-base-200 text-base-content;
	}
</style>
