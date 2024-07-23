<script lang="ts">
	import { _ } from 'svelte-i18n'
</script>

<div>
	<ul class="steps steps-vertical lg:steps-horizontal">
		<li class="step step-primary">{$_('components.projectflow.steps.1')}</li>
		<li class="step step-primary">{$_('components.projectflow.steps.2')}</li>
		<li class="step step-primary">{$_('components.projectflow.steps.3')}</li>
		<li class="step step-primary">{$_('components.projectflow.steps.4')}</li>
		<li class="step">{$_('components.projectflow.steps.5')}</li>
	</ul>
</div>
