<script>
	import * as Accordion from '$lib/components/ui/accordion';
	const faq = [
		{
			id: 'item-1',
			question: 'What is the turnaround time?',
			answer:
				'We usually deliver the first draft within 1 week. The final website is delivered within 2 weeks.'
		},
		{
			id: 'item-2',
			question: 'How do you communicate?',
			answer:
				'We use email, Slack, WhatsApp and Signal to communicate. We strongly prefer slack and keep the conversations async so that we can focus on building your website.'
		},
		{
			id: 'item-3',
			question: 'What is the process of working with you?',
			answer: "Yes. It's animated by default, but you can disable it if you prefer."
		},
		{
			id: 'item-4',
			question: 'What happens if I do not like the design?',
			answer: "Yes. It's animated by default, but you can disable it if you prefer."
		},
		{
			id: 'item-5',
			question: 'Are there any refunds?',
			answer:
				"We provide refunds only if we haven't started working on your website. Once we start working on your website, we don't provide any refunds."
		},
		{
			id: 'item-6',
			question: 'What is your Tech Stack?',
			answer: "Yes. It's animated by default, but you can disable it if you prefer."
		},
		{
			id: 'item-7',
			question: 'Why no calls or meetings?',
			answer:
				"We are a small team and we want to focus on building your website. We have found that calls and meetings are a huge distraction and we want to avoid them as much as possible. We prefer async communication over calls and meetings. In the past, We've built huge softwares and SaaS applications without ever getting on a call. We are confident that we can build your website without getting on a call."
		},
		{
			id: 'item-8',
			question: 'What happens if I have to make some changes in the website after it is delivered?',
			answer:
				'We provide you with a video tutorial on how to make changes to your website. If you still need help, we can make changes for you at an hourly rate OR you can sign up for our retainer services. Contact us on the website chat for more details.'
		}
	];
</script>

<!-- FAQs -->
<section class="justify-center flex flex-col items-center mx-80">
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
