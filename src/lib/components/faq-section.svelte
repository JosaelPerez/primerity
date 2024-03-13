<script>
	import * as Accordion from '$lib/components/ui/accordion';
	const faq = [
		{
			id: 'item-1',
			question: 'What is the turnaround time?',
			answer:
				'We deliver each page within 10 days, but this can be reduced down to 4 days if you already have the design.'
		},
		{
			id: 'item-2',
			question: 'How do you communicate?',
			answer:
				'We use Gmail, Slack and WhatsApp to communicate. We prefer Gmail and Whatsapp for the first interactions then moving to Slack to continue further with the communication. This way conversations keep async and we can focus on building your website.'
		},
		{
			id: 'item-3',
			question: 'What is the process of working with you?',
			answer:
				'You can reach out us via Gmail and Whatsapp telling us about your project, then we will add you to a Slack communication channel to continue research and development.'
		},
		{
			id: 'item-4',
			question: 'What happens if I do not like the design?',
			answer: 'We provide unlimited revisions until you are happy with the design.'
		},
		{
			id: 'item-5',
			question: 'Are there any refunds?',
			answer:
				"We provide refunds only if we haven't started working on your website. Once we start working on your website, we don't provide any refunds."
		},
		{
			id: 'item-6',
			question: 'What is your Stack?',
			answer:
				'We work mainly with SvelteKit and TailwindCSS to build every website. With this combination we can ensure smooth development and fast website performance.'
		},
		{
			id: 'item-7',
			question: 'Why no calls or meetings?',
			answer:
				'Calls and meetings can consume time that could be focused on building your website where you get the most value. For this reason, we want to avoid them as much as possible. We prefer async communication over calls and meetings. We are confident that we can build your website without getting on a call.'
		},
		{
			id: 'item-8',
			question: 'What happens if I have to make some changes in the website after it is delivered?',
			answer:
				'We provide support to guide you on making changes to your website when using a content management system (CMS). Is there is no CMS available on your website or the changes required further development, we can still make the changes for a fixed price set after a review.'
		}
	];
</script>

<!-- FAQs -->
<section class="justify-center flex flex-col items-center py-16">
	<h2 class="text-3xl font-bold text-slate-800">Frequenly asked questions</h2>
	<p class="text-xl text-slate-500 mt-4">
		Can’t find the answer you’re looking for? Reach out to us and we will get in touch with you
	</p>

	<Accordion.Root class="w-full sm:max-w-[70%] pt-12" multiple>
		{#each faq as item}
			<Accordion.Item value={item.id}>
				<Accordion.Trigger class="text-slate-800 text-md">{item.question}</Accordion.Trigger>
				<Accordion.Content class="text-slate-500 text-md">{item.answer}</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>
</section>
