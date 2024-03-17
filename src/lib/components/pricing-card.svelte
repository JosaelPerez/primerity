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

<ul
	class="relative flex min-h-[550px] max-w-[475px] flex-col rounded-md border border-slate-200 p-4 shadow-md shadow-slate-300 sm:basis-1/2 lg:min-h-[700px] 2xl:min-h-[700px]"
>
	<li class="primary-gradient clip-gradient text-xl font-bold sm:text-2xl 2xl:text-3xl">{title}</li>

	{#if subtitle}
		<li class="text-secondary text-base sm:text-lg 2xl:text-xl">{subtitle}</li>
	{/if}

	{#if price}
		<li class="text-primary my-4 text-3xl font-bold sm:text-4xl 2xl:mt-6 2xl:text-4xl">
			${price.value}/{price.unit}
		</li>
	{/if}

	<li class="text-secondary text-base sm:mt-4 lg:mt-6 lg:text-lg">{description}</li>

	<div class="mt-4 flex flex-grow flex-col gap-2">
		{#each features as feature}
			<li class="text-secondary text-base lg:text-lg">
				<img src="check.svg" alt="check" class="mr-2 inline w-4" />{feature}
			</li>
		{/each}
	</div>

	<button class="primary-gradient mt-4 w-full rounded-md p-[1px]">
		<div class="flex h-full w-full items-center justify-center rounded-md bg-white">
			<span
				class="primary-gradient clip-gradient flex w-full items-center justify-center rounded bg-white p-2 text-base font-bold 2xl:text-lg"
				>{cta}</span
			>
		</div>
	</button>
</ul>
