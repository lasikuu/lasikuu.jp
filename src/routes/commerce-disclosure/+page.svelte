<script lang="ts">
	import { _ } from 'svelte-i18n'
</script>

<svelte:head>
	<title>{$_('comdisclosure.title')} — LASIKUU</title>
	<meta name="description" content={$_('comdisclosure.description')} />
</svelte:head>

<div class="prose-page">
	<h1>{$_('comdisclosure.title')}</h1>

	<table>
		<tbody>
			<tr>
				<th>{$_('comdisclosure.type.heading')}</th>
				<td>{$_('comdisclosure.type.content')}</td>
			</tr>
			<tr>
				<th>{$_('comdisclosure.legalname.heading')}</th>
				<td>{$_('comdisclosure.legalname.content')}</td>
			</tr>
			<tr>
				<th>{$_('comdisclosure.address.heading')}</th>
				<td>{$_('comdisclosure.address.content')}</td>
			</tr>
			<tr>
				<th>{$_('comdisclosure.tel.heading')}</th>
				<td>{$_('comdisclosure.tel.content')}</td>
			</tr>
			<tr>
				<th>{$_('comdisclosure.email.heading')}</th>
				<td>{$_('comdisclosure.email.content')}</td>
			</tr>
			<tr>
				<th>{$_('comdisclosure.headofops.heading')}</th>
				<td>{$_('comdisclosure.headofops.content')}</td>
			</tr>
			<tr>
				<th>{$_('comdisclosure.additionalfees.heading')}</th>
				<td>{$_('comdisclosure.additionalfees.content')}</td>
			</tr>
			<tr>
				<th>{$_('comdisclosure.cancelpolicy.heading')}</th>
				<td>{$_('comdisclosure.cancelpolicy.content')}</td>
			</tr>
			<tr>
				<th>{$_('comdisclosure.returns.heading')}</th>
				<td>{$_('comdisclosure.returns.content')}</td>
			</tr>
			<tr>
				<th>{$_('comdisclosure.delivery.heading')}</th>
				<td>{$_('comdisclosure.delivery.content')}</td>
			</tr>
			<tr>
				<th>{$_('comdisclosure.payment.heading')}</th>
				<td>{$_('comdisclosure.payment.content')}</td>
			</tr>
			<tr>
				<th>{$_('comdisclosure.paymentperiod.heading')}</th>
				<td>{$_('comdisclosure.paymentperiod.content')}</td>
			</tr>
			<tr>
				<th>{$_('comdisclosure.pricing.heading')}</th>
				<td>{$_('comdisclosure.pricing.content')}</td>
			</tr>
		</tbody>
	</table>
</div>

<style>
	table {
		border-collapse: collapse;
		margin: 2rem 0;
		width: 100%;
	}

	tr {
		display: flex;
		align-items: baseline;
		border-bottom: 1px solid var(--ink-700);
	}

	tr:first-child {
		border-top: 1px solid var(--ink-700);
	}

	th {
		width: 34%;
		text-align: left;
		padding: 0.9rem 1rem 0.9rem 0;
		font-family: var(--font-mono);
		font-size: 0.78rem;
		font-weight: 500;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--moon);
	}

	td {
		width: 66%;
		text-align: left;
		padding: 0.9rem 0;
		color: var(--text-muted);
		line-height: 1.6;
	}

	@media (max-width: 600px) {
		tr {
			flex-direction: column;
		}
		th,
		td {
			width: 100%;
			padding-bottom: 0.3rem;
		}
		td {
			padding-bottom: 0.9rem;
		}
	}
</style>
