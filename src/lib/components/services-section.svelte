<script>
	import * as Carousel from '$lib/components/ui/carousel';
	import Autoplay from 'embla-carousel-autoplay';
	const services = [
		{
			title: 'Website design and development',
			description:
				'You bring your idea and we make it reality. Why just imagine if we can turn it into something real? We’ll build you a website that will make your brand level up to the sky.'
		},
		{
			title: 'Hosting, deployment and maintenance',
			description:
				'Rest assured as your idea comes to live. We take care of deploying your website to the worldand ensure everything runs smoothly with our best in-class deployment services.'
		},
		{
			title: 'Search Engine Optimization',
			description:
				'Take Advantage Over Competition by Unleashing the Power of SEO. Boost your online presence and attract more traffic to your website that converts into customers.'
		},
		{
			title: 'Beautiful Templates',
			description:
				"Transform your online presence with our cutting-edge templates that effortlessly elevate your brand's image. With a focus on modern aesthetics, our templates ensure your website stands out from the crowd while maintaining a seamless user experience."
		}
	];
</script>

<!-- Compact version -->
<section
	class="flex max-w-full flex-col items-center justify-start py-8 md:hidden"
	id="services-section"
>
	<h2 class="text-center text-2xl font-bold text-slate-800">
		Everything you need to<br />deploy your website!
	</h2>
	<p class="mt-4 px-8 text-center text-sm text-slate-500">
		We handle everything from design to deployment to get your website shipped and ready to go!
	</p>

	<Carousel.Root
		opts={{
			align: 'start',
			loop: true
		}}
		plugins={[
			Autoplay({
				delay: 3500
			})
		]}
		class="mt-8 w-full"
	>
		<Carousel.Content>
			{#each services as service}
				<Carousel.Item class="">
					<div class="p-1">
						<div class="h-64 rounded-lg border border-slate-200 px-8 py-8 shadow-md">
							<h3 class="text-md font-bold text-slate-800">{service.title}</h3>
							<p class="mt-4 text-sm text-slate-800">{service.description}</p>
						</div>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Carousel.Root>
</section>

<!-- Small version -->
<section
	class=" hidden max-w-full flex-col items-center justify-start py-8 sm:flex lg:hidden"
	id="services-section"
>
	<h2 class="text-center text-4xl font-bold text-slate-800">
		Everything you need to deploy your website!
	</h2>
	<p class="mt-4 px-8 text-center text-xl text-slate-500">
		We handle everything from design to deployment to get your<br />website shipped and ready to go!
	</p>

	<Carousel.Root
		opts={{
			align: 'start',
			loop: true
		}}
		plugins={[
			Autoplay({
				delay: 3500
			})
		]}
		class="mt-12 w-full"
	>
		<Carousel.Content>
			{#each services as service}
				<Carousel.Item class="basis-1/2">
					<div class="p-1">
						<div class="h-64 rounded-lg border border-slate-200 px-8 py-8 shadow-md">
							<h3 class="text-md font-bold text-slate-800">{service.title}</h3>
							<p class="mt-4 text-sm text-slate-800">{service.description}</p>
						</div>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Carousel.Root>
</section>

<!-- Large version -->
<section
	class="hidden max-w-full flex-col items-center justify-start pb-24 lg:flex 2xl:hidden"
	id="services-section"
>
	<h2 class="text-center text-4xl font-bold text-slate-800">
		Everything you need to deploy your website!
	</h2>
	<p class="mt-8 px-8 text-center text-2xl text-slate-500">
		We handle everything from design to deployment to get your website<br />shipped and ready to go!
	</p>

	<Carousel.Root
		opts={{
			align: 'start',
			loop: true
		}}
		plugins={[
			Autoplay({
				delay: 3500
			})
		]}
		class="mx-32 mt-16"
	>
		<Carousel.Content>
			{#each services as service}
				<Carousel.Item class="basis-1/2">
					<div class="p-1">
						<div class="h-64 rounded-lg border border-slate-200 px-8 py-8 shadow-md">
							<h3 class="text-lg font-bold text-slate-800">{service.title}</h3>
							<p class="mt-4 text-base text-slate-800">{service.description}</p>
						</div>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Carousel.Root>
</section>

<!-- 2XL version -->
<section
	class=" hidden max-w-full flex-col items-center justify-start py-32 2xl:flex"
	id="services-section"
>
	<h2 class="text-center text-4xl font-bold text-slate-800">
		Everything you need to deploy your website!
	</h2>
	<p class="mt-8 px-8 text-center text-2xl text-slate-500">
		We handle everything from design to deployment to get your website shipped and ready to go!
	</p>

	<Carousel.Root
		opts={{
			align: 'start',
			loop: true
		}}
		plugins={[
			Autoplay({
				delay: 3500
			})
		]}
		class="mx-56 mt-16"
	>
		<Carousel.Content>
			{#each services as service}
				<Carousel.Item class="basis-1/3">
					<div class="p-1">
						<div class="h-64 rounded-lg border border-slate-200 px-8 py-8 shadow-md">
							<h3 class="text-xl font-bold text-slate-800">{service.title}</h3>
							<p class="mt-4 text-base text-slate-800">{service.description}</p>
						</div>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Carousel.Root>
</section>
