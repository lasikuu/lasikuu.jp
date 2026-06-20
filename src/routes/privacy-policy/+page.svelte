<script lang="ts">
	import { _ } from 'svelte-i18n'
	import { AppLocale, langPreference } from '../../lib/util/i18n'
</script>

<svelte:head>
	<title>{$_('privacy.title')} — LASIKUU</title>
	<meta name="description" content={$_('privacy.description')} />
</svelte:head>

<div class="prose-page">
	<h1>{$_('privacy.title')}</h1>

	{#if $langPreference === AppLocale.JA}
		<p><b>最終更新日：</b> 2026/06/20</p>

		<p>
			LASIKUU（以下「当方」といいます）は、お客様の個人情報のプライバシーと安全の保護に努めています。本プライバシーポリシーは、お客様が当方のウェブサイトを利用し、または当方のサービスをご利用になる際に、当方が提供を受けた情報をどのように収集・利用・保護するかについて説明するものです。
		</p>

		<h2>収集する情報</h2>

		<ol>
			<li>
				<p>
					<b>アクセスログ：</b>お客様が当方のウェブサイトを訪問された際、NGINX が記録する IP
					アドレス、ブラウザの種類、デバイス情報などの基本的な情報を収集します。これらのデータは、ウェブサイトのトラフィックを分析し、ユーザー体験を改善するために利用します。
				</p>
			</li>
			<li>
				<p>
					<b>お客様情報：</b
					>お客様との契約を開始する際、サービスの提供および決済処理のために、お名前およびメールアドレスを収集します。
				</p>
			</li>
		</ol>

		<h2>情報の収集方法</h2>

		<p>当方は、以下の方法で情報を収集します。</p>
		<ul>
			<li>ウェブサイト訪問時に生成される NGINX のアクセスログ。</li>
			<li>当方が自社運用する Shynet 解析ソフトウェアによるウェブサイト利用状況の収集。</li>
			<li>契約開始時にお客様ご自身からご提供いただくお名前およびメールアドレス。</li>
		</ul>

		<h2>情報の利用目的</h2>

		<p>収集した情報は、以下の目的で利用します。</p>
		<ul>
			<li>サービスの提供および改善のため。</li>
			<li>決済代行業者であるワイズ・ペイメンツ・ジャパン株式会社（Wise）を通じて安全に決済処理を行うため。</li>
			<li>解析ソフトウェアを用いてウェブサイトのトラフィックおよび傾向を分析するため。</li>
		</ul>

		<h2>情報の第三者提供</h2>

		<p>
			当方は、決済処理のためにのみ、お客様のお名前およびメールアドレスを、ワイズ・ペイメンツ・ジャパン株式会社（Wise）などの第三者サービス提供者に提供する場合があります。これらのサービス提供者は、業界標準に従ってお客様の情報を保護する義務を負います。
		</p>

		<h2>データの安全管理</h2>

		<p>
			お客様の個人情報は、暗号化されたサーバー上に安全に保管されます。当方は、情報への不正アクセス、漏えい、改ざんまたは滅失を防止するため、適切な技術的および組織的措置を講じ、これを維持します。
		</p>

		<h2>お客様の権利</h2>

		<p>日本の法令に従い、お客様は以下の権利を有します。</p>
		<ul>
			<li>当方が保有するお客様の個人情報の開示を求めること。</li>
			<li>情報に誤りがある場合に訂正を求めること。</li>
			<li>法令上の義務に反しない範囲で、情報の削除を求めること。</li>
		</ul>

		<h2>お問い合わせ</h2>

		<p>
			プライバシーまたは本プライバシーポリシーに関するご質問、ご懸念、ご請求がございましたら、
			<a href="mailto:contact@lasikuu.jp">contact@lasikuu.jp</a> までご連絡ください。
		</p>

		<h2>プライバシーポリシーの変更</h2>

		<p>
			当方は、本プライバシーポリシーをいつでも更新または変更する権利を留保します。変更後のプライバシーポリシーは、当方のウェブサイトに掲載された時点で直ちに効力を生じます。
		</p>

		<p>
			当方のウェブサイトまたはサービスをご利用いただくことにより、お客様は本プライバシーポリシーに定める内容に同意したものとみなされます。
		</p>
	{:else}
		<p><b>Last Updated:</b> 2026/06/20</p>

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
					<b>Client Information:</b> When you start a contract with us, we collect your name and email address to provide
					our services and process payments.
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
			<li>
				To process payments securely through our payment processor, Wise Payments Japan K.K.
				(ワイズ・ペイメンツ・ジャパン株式会社).
			</li>
			<li>To analyze website traffic and trends using analytics software.</li>
		</ul>

		<h2>Sharing of Information</h2>

		<p>
			We may share your name and email address with third-party service providers, such as Wise Payments Japan K.K.,
			solely for payment processing purposes. These service providers are obligated to protect your information in
			accordance with industry standards.
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
			If you have any questions, concerns, or requests regarding your privacy or this Privacy Policy, please contact us
			at <a href="mailto:contact@lasikuu.jp">contact@lasikuu.jp</a>.
		</p>

		<h2>Changes to Privacy Policy</h2>

		<p>
			We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective
			immediately upon posting the revised Privacy Policy on our website.
		</p>

		<p>By using our website or services, you agree to the terms outlined in this Privacy Policy.</p>
	{/if}
</div>
