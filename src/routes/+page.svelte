<script lang="ts">
	import { goto } from '$app/navigation'
	import Clients from '$lib/components/clients.svelte'
	import ProjectFlow from '$lib/components/project-flow.svelte'
	import { _ } from 'svelte-i18n'
</script>

<svelte:head>
	<title>LASIKUU</title>
	<meta name="description" content={$_('home.description')} />
</svelte:head>

<section>
	<div class="block text-center">
		<div class="max-w-xl">
			<h1 class="logo">{$_('home.title')}</h1>
			<p class="pt-6 text-xl">{$_('home.greeting')}</p>
			<p class="pb-6">
				{$_('home.intro')}
				<br />
				<br />
				{$_('home.intro2')}
			</p>
			<button class="dui-btn dui-btn-primary" onclick={() => goto('/contact')}>{$_('home.contactus')}</button>
		</div>
	</div>

	<div class="block">
		<h5>{$_('home.clients')}</h5>
		<Clients />
	</div>

	<div class="block">
		<h5>{$_('home.exampleproject')}</h5>
		<ProjectFlow />
	</div>
	<br />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 6rem;
	}
</style>
