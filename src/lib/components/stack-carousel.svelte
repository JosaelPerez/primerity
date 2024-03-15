<script>
	import * as Carousel from '$lib/components/ui/carousel';
	import Autoplay from 'embla-carousel-autoplay';

	const logos = [
		{
			src: 'nodejs.svg',
			alt: 'NodeJS',
			width: 100
		},
		{
			src: 'svelte.svg',
			alt: 'Svelte',
			width: 170
		},
		{
			src: 'tailwind.svg',
			alt: 'Tailwind',
			width: 220
		},
		{
			src: 'payload.svg',
			alt: 'Payload CMS',
			width: 200
		},
		{
			src: 'vercel.svg',
			alt: 'Vercel',
			width: 150
		}
	];
</script>

<div class="hidden items-center justify-evenly gap-12 lg:flex">
	<img src="nodejs.svg" alt="NodeJS" width="100" />
	<img src="svelte.svg" alt="Svelte" width="170" />
	<img src="tailwind.svg" alt="Tailwind" width="220" />
	<img src="payload.svg" alt="Payload" width="200" />
	<img src="vercel.svg" alt="Vercel" width="150" />
	<div class="flex items-center gap-4">
		<img src="vitejs.svg" alt="ViteJS" width="50" />
		<p class="text-2xl font-bold text-slate-900">ViteJS</p>
	</div>
</div>

<!-- Laptop version -->
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
	class="mt-4 2xl:hidden"
>
	<Carousel.Content>
		{#each logos as logo}
			<Carousel.Item class="flex items-center justify-center">
				<div class="flex items-center justify-center p-1">
					<img src={logo.src} alt={logo.alt} width={logo.width} />
				</div>
			</Carousel.Item>
		{/each}
		<Carousel.Item class="flex items-center justify-center">
			<div class="flex items-center justify-center p-1">
				<img src="vitejs.svg" alt="ViteJS" width="50" />
				<p class="text-3xl font-bold text-slate-900">ViteJS</p>
			</div>
		</Carousel.Item>
	</Carousel.Content>
</Carousel.Root>
