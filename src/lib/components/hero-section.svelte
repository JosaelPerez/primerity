<script>
	import StackCarousel from './stack-carousel.svelte';
</script>

<!-- Compact section -->
<section class="flex flex-col items-center justify-center sm:hidden">
	<div>
		<h1 class="text-center text-2xl font-bold text-slate-800">
			Building Modern<br />Websites that Empower<br />
			<span class="primary-gradient clip-gradient">Business Growth</span>
		</h1>
	</div>

	<p class="mt-4 text-center text-base text-slate-500">
		We build websites you and<br />your business deserve.<br />No calls. No meetings.
		<span class="font-bold">Just Results.</span>
	</p>

	<button
		class="mt-4 rounded-full bg-slate-900 px-4 py-2 text-sm text-white shadow-lg shadow-slate-400 hover:opacity-90"
		>Get In Touch</button
	>
	<StackCarousel class="mt-8" />
</section>

<!-- Small section -->
<section class="hidden flex-col items-center justify-center sm:flex lg:hidden">
	<div>
		<h1 class="text-center text-5xl font-bold text-slate-800">
			Building Modern<br />Websites that Empower<br />
			<span class="primary-gradient clip-gradient">Business Growth</span>
		</h1>
	</div>

	<p class="mt-4 text-center text-xl text-slate-500">
		We build websites you and your business deserve.<br />No calls. No meetings.
		<span class="font-bold">Just Results.</span>
	</p>
	<button
		class="mt-4 rounded-full bg-slate-900 px-4 py-2 text-base text-white shadow-lg shadow-slate-400 hover:opacity-90"
		>Get In Touch</button
	>
	<StackCarousel class="mt-12" />
</section>

<!-- Large section -->
<section class="hidden flex-col items-center justify-center lg:flex 2xl:hidden">
	<div>
		<h1 class="text-center text-6xl font-bold text-slate-800">
			Building Modern<br />Websites that Empower<br />
			<span class="primary-gradient clip-gradient">Business Growth</span>
		</h1>
	</div>

	<p class="mt-8 text-center text-2xl text-slate-500">
		We build websites you and your business deserve.<br />No calls. No meetings.
		<span class="font-bold">Just Results.</span>
	</p>
	<button
		class="mt-12 rounded-full bg-slate-900 px-4 py-2 text-lg text-white shadow-lg shadow-slate-400 hover:opacity-90"
		>Get In Touch</button
	>
	<StackCarousel class="mt-16" />
</section>

<!-- 2XL section -->
<section class="hidden flex-col items-center justify-center 2xl:flex">
	<div>
		<h1 class="text-center text-6xl font-bold text-slate-800">
			Building Modern Websites<br />that Empower
			<span class="primary-gradient clip-gradient">Business Growth</span>
		</h1>
	</div>

	<p class="mt-12 text-center text-2xl text-slate-500">
		We build websites you and your business deserve.<br />No calls. No meetings.
		<span class="font-bold">Just Results.</span>
	</p>
	<button
		class="mt-12 rounded-full bg-slate-900 px-8 py-4 text-xl text-white shadow-lg shadow-slate-400 hover:opacity-90"
		>Get In Touch</button
	>
	<StackCarousel class="mt-32" />
</section>
