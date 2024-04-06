<script lang="ts">
	import { _ } from 'svelte-i18n'
	import Email from '../../locales/shared/email.svelte'
</script>

<svelte:head>
	<title>{$_('about.title')}</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>{$_('about.title')}</h1>
	<p>{$_('about.content')}</p>
	<p>
		<Email />
	</p>
</div>
