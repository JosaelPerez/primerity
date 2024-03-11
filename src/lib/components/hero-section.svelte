<script>
	import StackCarousel from './stack-carousel.svelte';
</script>

<!-- Hero section -->
<section class="flex flex-col justify-center items-center mt-32">
	<h1 class="text-6xl text-center font-bold text-slate-800">
		Building Modern Websites<br />that Empower
		<span class="primary-gradient clip-gradient">Business Growth</span>
	</h1>
	<p class="text-2xl text-center m-12 text-slate-500">
		We build websites you and your business deserve.<br />No calls. No meetings.
		<span class="font-bold">Just Results.</span>
	</p>
	<button
		class="text-xl rounded-full px-8 py-4 text-white bg-slate-900 shadow-lg shadow-slate-400 hover:opacity-90"
		>Get In Touch</button
	>
	<div class="m-32">
		<StackCarousel />
	</div>
</section>
