<script>
	import StackCarousel from './stack-carousel.svelte';
</script>

<section class="flex flex-col items-center justify-start">
	<h1 class="text-primary text-center font-bold">
		<span class="xl:hidden">
			<span class="text-nowrap">Building Modern</span><br />
			<span class="text-nowrap">Websites that Empower</span><br />
			<span class="primary-gradient clip-gradient text-nowrap">Business Growth</span>
		</span>
		<span class="hidden xl:inline">
			Building Modern Websites<br />that Empower
			<span class="primary-gradient clip-gradient">Business Growth</span>
		</span>
	</h1>

	<p class="mt-4 text-center text-slate-500 lg:mt-8">
		<span class="sm:hidden">
			We build websites you and<br />your business deserve.<br />No calls. No meetings.
			<span class="font-bold">Just Results.</span>
		</span>
		<span class="hidden sm:inline">
			We build websites you and your business deserve.<br />No calls. No meetings.
			<span class="font-bold">Just Results.</span>
		</span>
	</p>

	<button
		class="mt-4 rounded-full bg-slate-900 px-4 py-2 text-base text-white shadow-lg shadow-slate-400 hover:opacity-90 lg:mt-12 lg:text-lg 2xl:px-8 2xl:py-4 2xl:text-xl"
		>Get In Touch</button
	>

	<StackCarousel class="mt-8 sm:mt-12 lg:mt-16 2xl:mt-32" />
</section>
