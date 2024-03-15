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

<!-- Compact version -->
<section id="pricing-section" class="flex w-full flex-col items-center justify-start sm:hidden">
	<h2 class="text-center text-2xl font-bold text-slate-800">
		Flexible prices that make everyone <span class="primary-gradient clip-gradient"
			>feel welcome!
		</span>
	</h2>

	<p class="mt-4 text-center text-sm text-slate-500">
		Just choose the option that makes the most<br />sense for you and your business
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
</section>

<!-- Small version -->
<section
	id="pricing-section"
	class="hidden w-full flex-col items-center justify-start sm:flex lg:hidden"
>
	<h2 class="text-center text-4xl font-bold text-slate-800">
		Flexible prices that make everyone <span class="primary-gradient clip-gradient"
			>feel welcome!
		</span>
	</h2>
	<p class="mt-4 px-8 text-center text-xl text-slate-500">
		Just choose the option that makes the most sense for you and your business
	</p>

	<div class="mt-12 flex gap-4">
		<PricingCard {...development}></PricingCard>
		<PricingCard {...designDevelopment}></PricingCard>
	</div>
</section>

<!-- Large version -->
<section
	id="pricing-section"
	class="hidden w-full flex-col items-center justify-start lg:flex 2xl:hidden"
>
	<h2 class="text-center text-4xl font-bold text-slate-800">
		Flexible prices that make everyone <span class="primary-gradient clip-gradient"
			>feel welcome!
		</span>
	</h2>
	<p class="mt-4 px-8 text-center text-xl text-slate-500">
		Just choose the option that makes the most sense for you and your business
	</p>

	<div class="mt-8 flex gap-4">
		<PricingCard {...development}></PricingCard>
		<PricingCard {...designDevelopment}></PricingCard>
	</div>
</section>

<!-- 2XL version -->
<section id="pricing-section" class="hidden w-full flex-col items-center justify-start 2xl:flex">
	<h2 class="text-center text-5xl font-bold text-slate-800">
		Flexible prices that make everyone <span class="primary-gradient clip-gradient"
			>feel welcome!
		</span>
	</h2>
	<p class="mt-4 px-8 text-center text-2xl text-slate-500">
		Just choose the option that makes the most sense for you and your business
	</p>

	<div class="mt-16 flex gap-8">
		<PricingCard {...development}></PricingCard>
		<PricingCard {...designDevelopment}></PricingCard>
	</div>
</section>
