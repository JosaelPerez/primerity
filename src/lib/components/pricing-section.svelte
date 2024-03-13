<script>
	import PricingCard from './pricing-card.svelte';

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

<!-- Pricing section -->
<section id="pricing-section">
	<div class="flex flex-col items-center justify-start py-16">
		<h2 class="text-5xl font-bold text-slate-800">
			Flexible prices that make everyone <span
				class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
				>feel welcome!
			</span>
		</h2>
		<p class="text-xl text-slate-500 mt-4">
			Just choose the option that makes the most sense for you and your business
		</p>

		<div class="flex mt-20 gap-4">
			<PricingCard {...development}></PricingCard>
			<PricingCard {...designDevelopment}></PricingCard>
		</div>
	</div>
</section>
