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

<section id="services-section" class="flex max-w-full flex-col items-center justify-start">
	<h2 class="text-primary text-center font-bold">
		<span class="sm:hidden">Everything you need to deploy your website!</span>
		<span class="hidden sm:inline">Everything you need to deploy your website!</span>
	</h2>
	<p class="text-secondary mt-4 px-8 text-center">
		<span class="sm:hidden">
			We handle everything from design to deployment to get your website shipped and ready to go!
		</span>
		<span class="hidden sm:max-lg:inline">
			We handle everything from design to deployment to get your website shipped and ready to go!
		</span>
		<span class="hidden lg:max-2xl:inline">
			We handle everything from design to deployment to get your website<br />
			shipped and ready to go!
		</span>
		<span class="hidden 2xl:inline">
			We handle everything from design to deployment to get your website shipped and ready to go!
		</span>
	</p>

	<Carousel.Root
		opts={{
			align: 'start',
			loop: true,
			watchDrag: false
		}}
		plugins={[
			Autoplay({
				delay: 3500
			})
		]}
		class="mt-8 w-full lg:mx-32 lg:mt-16 lg:max-w-[70%] 2xl:mx-56 "
	>
		<Carousel.Content>
			{#each services as service}
				<Carousel.Item class="md:basis-1/2 lg:basis-1/2 2xl:basis-1/3">
					<div class="p-1">
						<div
							class="h-80 rounded-lg border border-slate-200 px-8 py-8 shadow-md md:h-96 lg:h-80 xl:h-64"
						>
							<h3 class="text-primary font-bold">{service.title}</h3>
							<p class="text-secondary mt-4 text-justify lg:text-base">{service.description}</p>
						</div>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Carousel.Root>
</section>
