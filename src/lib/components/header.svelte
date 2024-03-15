<script>
	const refs = [
		{
			href: '/',
			title: 'Home'
		},
		{
			href: '/#services-section',
			title: 'Services'
		},
		{
			href: '/#pricing-section',
			title: 'Pricing'
		},
		{
			href: '/templates',
			title: 'Templates'
		}
	];
</script>

<header class="flex h-16 items-center px-8 shadow-sm sm:h-20 sm:px-16 xl:px-32 2xl:px-80">
	<h1 class="text-base font-bold sm:text-xl lg:text-2xl">Primerity</h1>

	<nav class="flex h-full flex-grow items-center">
		<div class="hidden w-full items-center md:flex">
			<ul class="flex h-full w-full items-center justify-center md:gap-6 lg:gap-12">
				{#each refs as ref}
					<li
						class="hover:primary-gradient hover:clip-gradient text-sm hover:font-bold md:text-base"
					>
						<a href={ref.href}>{ref.title}</a>
					</li>
				{/each}
			</ul>

			<button
				class="text-nowrap rounded-full border-2 bg-slate-900 px-4 py-2 text-sm text-white hover:opacity-90"
				>Get In Touch</button
			>
		</div>

		<div class="flex h-full flex-grow items-center justify-end text-sm sm:text-base md:hidden">
			Menu
		</div>
	</nav>
</header>
