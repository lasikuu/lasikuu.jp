<script lang="ts">
	import TimelineMiddleIcon from '$lib/icons/timeline-middle.svelte'
	import { _ } from 'svelte-i18n'
</script>

<div>
	<ul class="dui-timeline dui-timeline-vertical dui-timeline-snap-icon max-md:dui-timeline-compact">
		<li>
			<div class="dui-timeline-middle">
				<TimelineMiddleIcon />
			</div>
			<div class="dui-timeline-start mb-10 md:text-end">
				<time class="font-mono italic">20〇〇</time>
				<div class="text-lg font-black">{$_('timeline.future.title')}</div>
				{$_('timeline.future.content')}
			</div>
			<hr />
		</li>
		<li>
			<div class="dui-timeline-middle">
				<TimelineMiddleIcon />
			</div>
			<div class="dui-timeline-start mb-10 md:text-end">
				<time class="font-mono italic">2025</time>
				<div class="text-lg font-black">{$_('timeline.2025.title')}</div>
				{$_('timeline.2025.content')}
			</div>
			<hr />
		</li>
		<li>
			<hr />
			<div class="dui-timeline-middle">
				<TimelineMiddleIcon />
			</div>
			<div class="dui-timeline-end mb-10">
				<time class="font-mono italic">2024</time>
				<div class="text-lg font-black">{$_('timeline.2024.title')}</div>
				{$_('timeline.2024.content')}
			</div>
			<hr />
		</li>
		<li>
			<hr />
			<div class="dui-timeline-middle">
				<TimelineMiddleIcon />
			</div>
			<div class="dui-timeline-start mb-10 md:text-end">
				<time class="font-mono italic">2022</time>
				<div class="text-lg font-black">
					{$_('timeline.2022.title')}
				</div>
				{$_('timeline.2022.content')}
			</div>
			<hr />
		</li>
	</ul>
</div>
