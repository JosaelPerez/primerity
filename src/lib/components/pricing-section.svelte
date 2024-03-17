<script>
	import PricingCard from './pricing-card.svelte';
	import * as Tabs from '$lib/components/ui/tabs';

	let development = {
		title: 'Website Development',
		subtitle: 'up to 5 sections',
		description:
			'Already have a design? Our custom development service tailored for professionals and businesses will help you to turn your design into a stunning online presence.',
		price: {
			value: 300,
			unit: 'page'
		},
		features: [
			'One request at a time',
			'Unlimited revisions',
			'Responsive design',
			'First month hosting included',
			'Private communitacion channel',
			'3-4 days turnaround time'
		],
		cta: 'Buy Now'
	};

	let designDevelopment = {
		title: 'Design + Development',
		subtitle: 'up to 5 sections',
		description:
			'Bring your idea and we handle the rest. From conceptualization to execution, we provide end-to-end support to transform your ideas into reality.',
		price: {
			value: 500,
			unit: 'page'
		},
		features: [
			'One request at a time',
			'Unlimited revisions',
			'Responsive design',
			'First month hosting included',
			'Private communitacion channel',
			'7-10 days turnaround time'
		],
		cta: 'Buy Now'
	};
</script>

<section id="pricing-section" class="flex w-full flex-col items-center justify-start">
	<h2 class="text-primary text-center font-bold">
		Flexible prices that make everyone <span class="primary-gradient clip-gradient"
			>feel welcome!
		</span>
	</h2>

	<p class="mt-4 text-center text-slate-500 sm:px-8">
		<span class="sm:hidden">
			Just choose the option that makes the most sense for you and your business
		</span>

		<span class="hidden sm:max-lg:inline">
			Just choose the option that makes the most sense for you and your business
		</span>
	</p>

	<Tabs.Root value="design" class="mt-8 flex w-full flex-col items-center gap-2">
		<Tabs.List>
			<Tabs.Trigger value="design">Design</Tabs.Trigger>
			<Tabs.Trigger value="development">Development</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="design">
			<PricingCard {...development}></PricingCard>
		</Tabs.Content>
		<Tabs.Content value="development">
			<PricingCard {...designDevelopment}></PricingCard>
		</Tabs.Content>
	</Tabs.Root>

	<div class="mt-12 hidden gap-4 sm:flex lg:gap-4 2xl:mt-16 2xl:gap-8">
		<PricingCard {...development}></PricingCard>
		<PricingCard {...designDevelopment}></PricingCard>
	</div>
</section>
