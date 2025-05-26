<script lang="ts">
	import GithubIcon from '$lib/icons/github.svelte'
	import GlobeIcon from '$lib/icons/globe.svelte'
	import { _ } from 'svelte-i18n'
</script>

<footer class="bg-base-300/50 bg-opacity-0 p-10">
	<div class="dui-footer mx-auto max-w-(--breakpoint-md) justify-center">
		<div class="flex flex-col gap-8 sm:flex-row sm:gap-12">
			<aside>
				<img src="/img/logo.svg" width="50" height="50" alt="Lasikuu logo" />
				<p>
					LASIKUU（ラシクウ）
					<br />
					{new Date().getFullYear()}
				</p>
			</aside>
			<nav class="flex flex-col gap-2">
				<h6 class="dui-footer-title">Social</h6>
				<div class="grid grid-flow-col gap-3">
					<a href="https://github.com/LASIKUU" title="github.com/LASIKUU">
						<GithubIcon />
					</a>
					<a href="https://kohana.fi" title="kohana.fi">
						<GlobeIcon />
					</a>
				</div>
			</nav>
			<nav class="flex flex-col gap-2">
				<h6 class="dui-footer-title footer">Company</h6>
				<a class="link-hover link" href="/about">About</a>
				<a class="link-hover link" href="/contact">Contact</a>
				<a class="link-hover link" href="/press-kit">Press kit</a>
			</nav>
			<nav class="flex flex-col gap-2">
				<h6 class="dui-footer-title">Legal</h6>
				<a class="link-hover link" href="/commerce-disclosure">{$_('meta.footer.comdisclosure')}</a>
				<a class="link-hover link" href="/privacy-policy">{$_('meta.footer.privacy')}</a>
				<a class="link-hover link" href="/terms-of-service">{$_('meta.footer.tos')}</a>
			</nav>
		</div>
	</div>
</footer>
