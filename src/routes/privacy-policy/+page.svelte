<script lang="ts">
	import { _ } from 'svelte-i18n'
</script>

<svelte:head>
	<title>{$_('privacy.title')}</title>
	<meta name="description" content={$_('privacy.description')} />
</svelte:head>

<div class="text-column">
	<h1>{$_('privacy.title')}</h1>

	<p><b>Last Updated:</b> 2024/04/05</p>

	<p>
		LASIKUU ("we," "us," or "our") is committed to protecting the privacy and security of your personal information.
		This Privacy Policy explains how we collect, use, and protect the information you provide to us when you visit our
		website or use our services.
	</p>

	<h2>Information We Collect</h2>

	<ol>
		<li>
			<p>
				<b>Access Logs:</b> When you visit our website, we collect basic information that NGINX logs, such as your IP address,
				browser type, and device information. This data helps us analyze website traffic and improve user experience.
			</p>
		</li>
		<li>
			<p>
				<b>Client Information:</b> When you start a contract with us, we collect your name and email address to provide our
				services and process payments.
			</p>
		</li>
	</ol>

	<h2>How We Collect Information</h2>

	<p>We collect information through:</p>
	<ul>
		<li>NGINX access logs generated when you visit our website.</li>
		<li>Shynet analytics software, which we self-host, to gather website usage data.</li>
		<li>Directly from you when you provide your name and email during contract initiation.</li>
	</ul>

	<h2>Use of Information</h2>

	<p>We use the collected information for the following purposes:</p>
	<ul>
		<li>To provide and improve our services.</li>
		<li>To process payments securely through our payment processor, Stripe.</li>
		<li>To analyze website traffic and trends using analytics software.</li>
	</ul>

	<h2>Sharing of Information</h2>

	<p>
		We may share your name and email address with third-party service providers, such as Stripe, solely for payment
		processing purposes. These service providers are obligated to protect your information in accordance with industry
		standards.
	</p>

	<h2>Data Security</h2>

	<p>
		Your personal information is stored securely on encrypted servers. We implement and maintain appropriate technical
		and organizational measures to protect against unauthorized access, disclosure, alteration, or destruction of your
		information.
	</p>

	<h2>Your Rights</h2>

	<p>In accordance with Japanese law, you have the right to:</p>
	<ul>
		<li>Access and review your personal information held by us.</li>
		<li>Correct any inaccuracies in your information.</li>
		<li>Request deletion of your information, subject to legal obligations.</li>
	</ul>

	<h2>Contact Us</h2>

	<p>
		If you have any questions, concerns, or requests regarding your privacy or this Privacy Policy, please contact us at
		<a href="mailto:contact@lasikuu.jp">contact@lasikuu.jp</a>.
	</p>

	<h2>Changes to Privacy Policy</h2>

	<p>
		We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately
		upon posting the revised Privacy Policy on our website.
	</p>

	<p>By using our website or services, you agree to the terms outlined in this Privacy Policy.</p>
</div>

<style>
</style>
