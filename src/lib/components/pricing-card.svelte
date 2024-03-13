<script lang="ts">
	import Button from './ui/button/button.svelte';

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
	class="rounded-xl p-4 w-[500px] min-h-[700px] flex flex-col shadow-md shadow-slate-300 border border-slate-200 relative"
>
	<li class="text-3xl primary-gradient clip-gradient">{title}</li>

	{#if subtitle}
		<li class="text-lg text-slate-500">{subtitle}</li>
	{/if}

	{#if price}
		<li class="text-4xl font-bold text-slate-900 my-6">${price.value}/{price.unit}</li>
	{/if}

	<li class="text-md text-slate-600 mb-8">{description}</li>

	<div class="flex flex-col gap-4 flex-grow">
		{#each features as feature}
			<li class="text-md text-slate-800">
				<img src="check.svg" alt="check" class="inline w-4 mr-2" />{feature}
			</li>
		{/each}
	</div>

	<button class="p-[1px] primary-gradient rounded-md w-full">
		<div class="bg-white h-full w-full rounded-md flex justify-center items-center">
			<span
				class="flex primary-gradient clip-gradient w-full rounded p-2 bg-white items-center justify-center font-bold"
				>{cta}</span
			>
		</div>
	</button>
</ul>
