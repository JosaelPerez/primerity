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

	<p class="text-secondary mt-4 text-center lg:mt-8">
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
		class="cta-button mt-4 text-base shadow-lg shadow-slate-400 lg:mt-12 lg:text-lg 2xl:px-8 2xl:py-4 2xl:text-xl"
		>Get In Touch</button
	>

	<StackCarousel class="mt-8 sm:mt-12 lg:mt-16 2xl:mt-32" />
</section>
