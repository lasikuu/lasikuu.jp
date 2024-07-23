<script lang="ts">
	import { _ } from 'svelte-i18n'
	import Email from '../../lib/components/email.svelte'
	import Line from '../../lib/components/line.svelte'
</script>

<svelte:head>
	<title>{$_('contact.title')}</title>
	<meta name="description" content={$_('contact.description')} />
</svelte:head>

<div class="text-column">
	<div class="text-center">
		<div class="max-w-lg">
			<h1>{$_('contact.title')}</h1>
			<p class="py-6">
				{$_('contact.content')}
			</p>
			<div class="grid grid-flow-col justify-center gap-8">
				<Email />
				<Line />
			</div>
		</div>
	</div>
</div>
