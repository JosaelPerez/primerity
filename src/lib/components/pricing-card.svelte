<script lang="ts">
	export let title: string;
	export let price: string;
	export let turnaroundTime: string;
</script>

<ul
	class="rounded-xl p-4 w-[450px] min-h-[700px] flex flex-col shadow-md shadow-slate-300 border border-slate-200"
>
	<li class="text-xl primary-gradient clip-gradient">{title}</li>
	<li class="text-md text-slate-500">up to 5 sections</li>
	<li class="text-4xl font-bold text-slate-900 my-8">${price}/page</li>
	<li class="text-md text-slate-600 mb-8">
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod debitis eius praesentium corporis
	</li>
	<div class="flex flex-col gap-4 flex-grow">
		<li class="text-base text-slate-800">
			<img src="check.svg" alt="check" class="inline w-4 mr-2" />One request / page at a time
		</li>
		<li class="text-md text-slate-800">
			<img src="check.svg" alt="check" class="inline w-4 mr-2" />Unlimited revisions
		</li>
		<li class="text-md text-slate-800">
			<img src="check.svg" alt="check" class="inline w-4 mr-2" />CMS integration
		</li>
		<li class="text-md text-slate-800">
			<img src="check.svg" alt="check" class="inline w-4 mr-2" />First month hosting included
		</li>
		<li class="text-md text-slate-800">
			<img src="check.svg" alt="check" class="inline w-4 mr-2" />{turnaroundTime} days turnaround time
		</li>
		<li class="text-md text-slate-800">
			<img src="check.svg" alt="check" class="inline w-4 mr-2" />Private communication channel
		</li>
	</div>
	<button class="p-[1px] primary-gradient rounded-md w-full">
		<div class="bg-white h-full w-full rounded-md flex justify-center items-center">
			<span
				class="flex primary-gradient clip-gradient w-full rounded p-2 bg-white items-center justify-center font-bold"
				>Buy Now</span
			>
		</div>
	</button>
</ul>
