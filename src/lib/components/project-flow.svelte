<script lang="ts">
	import { _ } from 'svelte-i18n'
</script>

<div>
	<ul class="dui-steps dui-steps-vertical lg:dui-steps-horizontal">
		<li class="dui-step dui-step-primary">{$_('components.projectflow.steps.1')}</li>
		<li class="dui-step dui-step-primary">{$_('components.projectflow.steps.2')}</li>
		<li class="dui-step dui-step-primary">{$_('components.projectflow.steps.3')}</li>
		<li class="dui-step dui-step-primary">{$_('components.projectflow.steps.4')}</li>
		<li class="dui-step">{$_('components.projectflow.steps.5')}</li>
	</ul>
</div>
