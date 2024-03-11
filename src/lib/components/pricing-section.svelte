<script>
	import PricingCard from './pricing-card.svelte';
</script>

<!-- Pricing section -->
<section class="mt-16" id="pricing-section">
	<div class="flex flex-col items-center justify-start">
		<h2 class="text-5xl font-bold text-slate-800">
			Flexible prices that make everyone <span
				class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
				>feel welcome!
			</span>
		</h2>
		<p class="text-xl text-slate-500 mt-4">
			Just choose the option that makes the most sense for you and your business
		</p>

		<div class="flex my-20 gap-4">
			<PricingCard title="Development" price="300" turnaroundTime="3-4" />
			<PricingCard title="Design + Development" price="500" turnaroundTime="7-10" />
			<PricingCard title="SEO" price="500" turnaroundTime="7-10" />
		</div>
	</div>
</section>
