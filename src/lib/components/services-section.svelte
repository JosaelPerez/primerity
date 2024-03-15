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

<section
	class="flex flex-col justify-start items-center max-w-full py-4 lg:py-16"
	id="services-section"
>
	<h2 class="text-3xl lg:text-5xl font-bold text-slate-800 text-center">
		Everything you need to deploy your website!
	</h2>
	<p class="text-xl text-slate-500 mt-4 text-center">
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
		class="w-full mt-4 lg:mt-16"
	>
		<Carousel.Content>
			{#each services as service}
				<Carousel.Item class="">
					<div class="p-1">
						<div class="border border-slate-200 rounded-lg shadow-md px-8 py-8 h-64 lg:min-h-64">
							<h3 class="text-md font-bold text-slate-800 lg:text-xl">{service.title}</h3>
							<p class="text-sm text-slate-800 lg:text-md mt-4">{service.description}</p>
						</div>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Carousel.Root>
</section>
