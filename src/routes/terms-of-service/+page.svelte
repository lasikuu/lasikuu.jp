<script lang="ts">
	import { _ } from 'svelte-i18n'
	import { AppLocale, langPreference } from '../../lib/util/i18n'
</script>

<svelte:head>
	<title>{$_('tos.title')} — LASIKUU</title>
	<meta name="description" content={$_('tos.description')} />
</svelte:head>

<div class="prose-page">
	<h1>{$_('tos.title')}</h1>

	{#if $langPreference === AppLocale.JA}
		<p><b>最終更新日：</b> 2026/06/20</p>

		<h2>1. 提供するサービス</h2>

		<p>
			当方は、ソフトウェア開発、技術コンサルティング、アーキテクチャ支援、デザインサービス（以下「本サービス」といいます）をお客様に提供します。
		</p>

		<h2>2. 支払いおよび成果物</h2>

		<p>
			当方の標準的な請求は時間単価に基づき、プロジェクトの予算はお客様との合意により定めます。一括払いにも対応しています。プロジェクトの期間および成果物は、LASIKUU
			とお客様との間で合意した内容に応じて異なります。
		</p>

		<h2>3. コミュニケーション</h2>

		<p>
			プロジェクト遂行中のお客様とのコミュニケーションおよびフィードバックは、LASIKUU
			とお客様との間で合意した方法により、主としてメール、チャット、オンライン通話、または対面での打ち合わせを通じて行います。
		</p>

		<h2>4. プロジェクトの修正</h2>

		<p>
			お客様から要望されたプロジェクトの修正または変更は、合意した条件に従って対応します。変更が当初の合意の範囲内である場合は、当初の予算内で対応できることがあります。それ以外の場合は、お客様と協議のうえ調整します。
		</p>

		<h2>5. 知的財産権、秘密保持およびデータ保護</h2>
		<p>
			<b>知的財産権：</b>本サービスの提供にあたり LASIKUU
			が作成したソフトウェアコード、デザイン、コンテンツを含むがこれらに限られない一切の知的財産権は、書面による別段の合意がない限り、LASIKUU
			に帰属します。
		</p>
		<p>
			<b>秘密保持：</b>LASIKUU
			は、お客様の情報を秘密として保持し、法令により求められる場合を除き、お客様の明示的な同意なく第三者に開示しません。
		</p>
		<p>
			<b>データ保護：</b>LASIKUU
			は、本サービスの提供過程で提供されたお客様のデータおよび情報を保護するため、合理的な措置を講じます。ただし、インターネット上で送信され、または電子的に保存される情報の安全性について、LASIKUU
			は責任を負いません。
		</p>
		<p>
			本サービスをご利用いただくことにより、お客様は知的財産権、秘密保持およびデータ保護に関する本規約に従うことに同意したものとします。
		</p>

		<h2>6. 準拠法および紛争解決</h2>

		<p>
			本利用規約、ならびに本利用規約または本サービスに起因し、もしくは関連して生じる一切の紛争は、日本法に準拠し、日本法に従って解釈されます。紛争が生じた場合、まず
			LASIKUU
			とお客様との間の誠実な協議による解決を図るものとします。協議によって解決できない場合、お客様と当方は、京都地方裁判所を第一審の専属的合意管轄裁判所とすることに合意します。
		</p>

		<h2>7. 責任の制限</h2>

		<p>
			LASIKUU は、LASIKUU
			とお客様との間の書面による合意に明示的に定める場合を除き、本サービスの利用または利用不能から生じるいかなる直接的、間接的、付随的、結果的または懲罰的損害についても、一切責任を負いません。
		</p>

		<h2>8. 免責事項</h2>

		<p>
			LASIKUU
			は、本利用規約をいつでも事前の通知なく更新または変更する権利を留保します。本サービスをご利用いただくことにより、お客様は最新版の本利用規約に拘束されることに同意したものとします。
		</p>

		<p>
			本利用規約に関するご質問、ご懸念、お問い合わせは、
			<a href="mailto:contact@lasikuu.jp">contact@lasikuu.jp</a> までご連絡ください。
		</p>

		<p>本サービスをご利用いただくことにより、お客様は本利用規約に定める内容に同意したものとみなされます。</p>
	{:else}
		<p><b>Last Updated:</b> 2026/06/20</p>

		<h2>1. Services Offered</h2>

		<p>
			We offer software development, technical consulting, architecture help, and design services ("Services") to
			clients.
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
			Project revisions or changes requested by clients will be handled according to the terms outlined in the
			agreement. If changes are within the scope of the original agreement, they may fit into the original budget.
			Otherwise, adjustments will be discussed and agreed upon with the client.
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

		<h2>6. Governing Law and Dispute Resolution</h2>

		<p>
			These Terms of Service, and any dispute arising out of or in connection with them or our Services, shall be
			governed by and construed in accordance with the laws of Japan. Any disputes will first be addressed through
			good-faith negotiation between LASIKUU and the client. If a dispute cannot be resolved, the parties agree that the
			Kyoto District Court shall have exclusive jurisdiction as the court of first instance.
		</p>

		<h2>7. Liability</h2>

		<p>
			LASIKUU shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from
			the use of or inability to use our Services, except as expressly provided in a written agreement between LASIKUU
			and the client.
		</p>

		<h2>8. Legal Disclaimers</h2>

		<p>
			LASIKUU reserves the right to update or modify these Terms of Service at any time without prior notice. By using
			our Services, clients agree to be bound by the most current version of these Terms.
		</p>

		<p>
			For any questions, concerns, or inquiries regarding our Terms of Service, please contact us at
			<a href="mailto:contact@lasikuu.jp">contact@lasikuu.jp</a>.
		</p>

		<p>By using our Services, you agree to the terms outlined in this Terms of Service document.</p>
	{/if}
</div>
