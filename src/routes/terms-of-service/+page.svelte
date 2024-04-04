<script lang="ts">
	import { _ } from 'svelte-i18n'
</script>

<svelte:head>
	<title>{$_('tos.title')}</title>
	<meta name="description" content={$_('tos.description')} />
	<html lang={$_('meta.lang')} />
</svelte:head>

<div class="text-column">
	<h1>{$_('tos.title')}</h1>

	<p>Last Updated: 2024/04/05</p>

	<h2>1. Services Offered</h2>

	<p>
		We offer software development, technical consulting, architecture help, and design services ("Services") to clients.
	</p>

	<h2>2. Payment and Deliverables</h2>

	<p>
		Our standard billing is based on an hourly rate, with project budgets agreed upon with clients. One-time payments
		are also accepted. Project timelines and deliverables will vary depending on the agreement reached between LASIKUU
		and the client.
	</p>

	<h2>3. Communication</h2>

	<p>
		Client communication and feedback during project execution will primarily occur via email, chat, online calls, or
		real-life meetings, as agreed upon between LASIKUU and the client.
	</p>

	<h2>4. Project Revisions</h2>

	<p>
		Project revisions or changes requested by clients will be handled according to the terms outlined in the agreement.
		If changes are within the scope of the original agreement, they may fit into the original budget. Otherwise,
		adjustments will be discussed and agreed upon with the client.
	</p>

	<h2>5. Intellectual Property, Confidentiality, and Data Protection</h2>
	<p>
		<b>Intellectual Property:</b> All intellectual property rights, including but not limited to software code, designs,
		and content created by LASIKUU during the provision of Services, remain the property of LASIKUU unless otherwise agreed
		upon in writing.
	</p>
	<p>
		<b>Confidentiality:</b> LASIKUU agrees to keep all client information confidential and will not disclose it to third
		parties without the client's express consent, except as required by law.
	</p>
	<p>
		<b>Data Protection:</b> LASIKUU implements reasonable measures to protect client data and information provided during
		the course of our Services. However, LASIKUU is not responsible for the security of information transmitted over the
		internet or stored electronically.
	</p>
	<p>
		By engaging our Services, clients agree to abide by these terms regarding intellectual property rights,
		confidentiality, and data protection.
	</p>
	<h2>6. Dispute Resolution</h2>

	<p>
		Any disputes arising from these Terms of Service or related to our Services will be resolved through negotiation and
		mutual agreement between LASIKUU and the client. In the event of unresolved disputes, both parties may seek legal
		remedies as per the laws governing our jurisdiction.
	</p>

	<h2>7. Liability</h2>

	<p>
		LASIKUU shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from
		the use of or inability to use our Services, except as expressly provided in a written agreement between LASIKUU and
		the client.
	</p>

	<h2>8. Legal Disclaimers</h2>

	<p>
		LASIKUU reserves the right to update or modify these Terms of Service at any time without prior notice. By using our
		Services, clients agree to be bound by the most current version of these Terms.
	</p>

	<p>
		For any questions, concerns, or inquiries regarding our Terms of Service, please contact us at
		<a href="mailto:contact@lasikuu.jp">contact@lasikuu.jp</a>.
	</p>

	<p>By using our Services, you agree to the terms outlined in this Terms of Service document.</p>
</div>

<style>
</style>
