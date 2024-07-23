<script lang="ts">
	import Timeline from '$lib/components/timeline.svelte'
	import { _ } from 'svelte-i18n'
</script>

<svelte:head>
	<title>{$_('about.title')}</title>
	<meta name="description" content={$_('about.description')} />
</svelte:head>

<div class="text-column">
	<h1>{$_('about.title')}</h1>
	<p>{$_('about.content')}</p>
	<p>{$_('about.name_explanation')}</p>
	<br />
	<h3>{$_('about.timeline')}</h3>
	<Timeline />
</div>
