<script lang="ts">
	import { _ } from 'svelte-i18n'
</script>

<svelte:head>
	<title>{$_('comdisclosure.title')}</title>
	<meta name="description" content={$_('comdisclosure.description')} />
</svelte:head>

<div class="text-column">
	<h1>{$_('comdisclosure.title')}</h1>

	<table>
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
	</table>
</div>

<style>
	table {
		border-collapse: collapse;
		margin: 1rem 0;
	}

	tr {
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba(255, 255, 255, 0.33);
	}

	th {
		width: 33%;
		text-align: left;
		padding: 0.5rem;
	}

	td {
		width: 66%;
		text-align: left;
		padding: 0.5rem;
	}
</style>
