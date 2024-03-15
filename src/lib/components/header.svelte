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

<!-- Compact header -->
<header class="flex h-16 w-full items-center px-4 shadow-sm sm:hidden {$$props.class}">
	<nav class="flex h-full w-full items-center justify-end">
		<img src="menu.svg" alt="Menu" width="24px" height="24px" class="m-3 h-6 w-6" />
	</nav>
</header>

<!-- Small header -->
<header class=" hidden h-24 w-full items-center px-4 shadow-sm sm:flex lg:hidden {$$props.class}">
	<nav class="flex h-full w-full items-center justify-end">
		<img src="menu.svg" alt="Menu" width="36px" height="36px" class="m-2 h-9 w-9" />
	</nav>
</header>

<!-- Large header -->
<header class=" hidden h-24 w-full items-center px-4 shadow-sm lg:flex 2xl:hidden {$$props.class}">
	<nav class="flex h-full w-full items-center justify-between">
		<h1 class="text-xl font-bold text-slate-800">Primerity</h1>
		<ul class="flex h-full w-full items-center justify-center gap-12">
			{#each refs as ref}
				<li class="hover:primary-gradient hover:clip-gradient text-base hover:font-bold">
					<a href={ref.href}>{ref.title}</a>
				</li>
			{/each}
		</ul>

		<button
			class="text-nowrap rounded-full bg-slate-900 px-4 py-2 text-sm text-white hover:opacity-90"
			>Get In Touch</button
		>
	</nav>
</header>

<!-- Extra Large header -->
<header class=" hidden h-24 w-full items-center px-56 shadow-sm 2xl:flex {$$props.class}">
	<nav class="flex h-full w-full items-center justify-between">
		<h1 class="text-xl font-bold text-slate-800">Primerity</h1>
		<ul class="flex h-full w-full items-center justify-center gap-12">
			{#each refs as ref}
				<li class="hover:primary-gradient hover:clip-gradient text-base hover:font-bold">
					<a href={ref.href}>{ref.title}</a>
				</li>
			{/each}
		</ul>

		<button
			class="text-nowrap rounded-full bg-slate-900 px-4 py-2 text-sm text-white hover:opacity-90"
			>Get In Touch</button
		>
	</nav>
</header>
