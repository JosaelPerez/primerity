<script lang="ts">
	export let title: string;
	export let subtitle: string | null = null;
	export let description: string;
	export let price: Price | null = null;
	export let features: string[];
	export let cta: string;

	type Price = {
		value: number;
		unit: string;
	};
</script>

<!-- Compact version -->
<ul
	class="relative flex min-h-[550px] max-w-[475px] flex-col rounded-md border border-slate-200 p-4 shadow-md shadow-slate-300 sm:hidden"
>
	<li class="primary-gradient clip-gradient text-xl">{title}</li>

	{#if subtitle}
		<li class="text-base text-slate-500">{subtitle}</li>
	{/if}

	{#if price}
		<li class="my-4 text-3xl font-bold text-slate-900">${price.value}/{price.unit}</li>
	{/if}

	<li class="text-base text-slate-600">{description}</li>

	<div class="mt-4 flex flex-grow flex-col gap-2">
		{#each features as feature}
			<li class="text-base text-slate-800">
				<img src="check.svg" alt="check" class="mr-2 inline w-4" />{feature}
			</li>
		{/each}
	</div>

	<button class="primary-gradient mt-4 w-full rounded-md p-[1px]">
		<div class="flex h-full w-full items-center justify-center rounded-md bg-white">
			<span
				class="primary-gradient clip-gradient flex w-full items-center justify-center rounded bg-white p-2 text-sm font-bold"
				>{cta}</span
			>
		</div>
	</button>
</ul>

<!-- Small version -->
<ul
	class="relative hidden min-h-[550px] max-w-[475px] basis-1/2 flex-col rounded-md border border-slate-200 p-4 shadow-md shadow-slate-300 sm:flex lg:hidden"
>
	<li class="primary-gradient clip-gradient text-2xl">{title}</li>

	{#if subtitle}
		<li class="text-lg text-slate-500">{subtitle}</li>
	{/if}

	{#if price}
		<li class="mt-4 text-4xl font-bold text-slate-900">${price.value}/{price.unit}</li>
	{/if}

	<li class="mt-4 text-base text-slate-600">{description}</li>

	<div class="mt-4 flex flex-grow flex-col gap-2">
		{#each features as feature}
			<li class="text-base text-slate-800">
				<img src="check.svg" alt="check" class="mr-2 inline w-4" />{feature}
			</li>
		{/each}
	</div>

	<button class="primary-gradient mt-4 w-full rounded-md p-[1px]">
		<div class="flex h-full w-full items-center justify-center rounded-md bg-white">
			<span
				class="primary-gradient clip-gradient flex w-full items-center justify-center rounded bg-white p-2 text-sm font-bold"
				>{cta}</span
			>
		</div>
	</button>
</ul>

<!-- Large version -->
<ul
	class="relative hidden min-h-[700px] max-w-[475px] basis-1/2 flex-col rounded-md border border-slate-200 p-4 shadow-md shadow-slate-300 lg:flex 2xl:hidden"
>
	<li class="primary-gradient clip-gradient text-2xl">{title}</li>

	{#if subtitle}
		<li class="text-lg text-slate-500">{subtitle}</li>
	{/if}

	{#if price}
		<li class="mt-4 text-4xl font-bold text-slate-900">${price.value}/{price.unit}</li>
	{/if}

	<li class="mt-4 text-base text-slate-600">{description}</li>

	<div class="mt-4 flex flex-grow flex-col gap-2">
		{#each features as feature}
			<li class="text-base text-slate-800">
				<img src="check.svg" alt="check" class="mr-2 inline w-4" />{feature}
			</li>
		{/each}
	</div>

	<button class="primary-gradient mt-4 w-full rounded-md p-[1px]">
		<div class="flex h-full w-full items-center justify-center rounded-md bg-white">
			<span
				class="primary-gradient clip-gradient flex w-full items-center justify-center rounded bg-white p-2 text-sm font-bold"
				>{cta}</span
			>
		</div>
	</button>
</ul>

<!-- 2XL version -->
<ul
	class="relative hidden min-h-[700px] max-w-[475px] flex-col rounded-2xl border border-slate-200 p-4 shadow-md shadow-slate-300 2xl:flex"
>
	<li class="primary-gradient clip-gradient text-3xl">{title}</li>

	{#if subtitle}
		<li class="text-xl text-slate-500">{subtitle}</li>
	{/if}

	{#if price}
		<li class="mt-5 text-4xl font-bold text-slate-900">${price.value}/{price.unit}</li>
	{/if}

	<li class="mt-6 text-lg text-slate-600">{description}</li>

	<div class="mt-4 flex flex-grow flex-col gap-2">
		{#each features as feature}
			<li class="text-lg text-slate-800">
				<img src="check.svg" alt="check" class="mr-2 inline w-4" />{feature}
			</li>
		{/each}
	</div>

	<button class="primary-gradient mt-4 w-full rounded-md p-[1px]">
		<div class="flex h-full w-full items-center justify-center rounded-md bg-white">
			<span
				class="primary-gradient clip-gradient flex w-full items-center justify-center rounded bg-white p-2 text-lg font-bold"
				>{cta}</span
			>
		</div>
	</button>
</ul>
