<script>
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Primerity</title>
	</head>
	<body>
		<header class="flex h-24 w-full shadow-sm px-80 items-center justify-start">
			<h1 class="text-lg font-bold text-slate-900">Primerity</h1>

			<nav class="flex items-center justify-center flex-grow">
				<ul class="flex gap-12 text-slate-700">
					<li
						class="text-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent hover:font-bold"
					>
						Services
					</li>
					<li
						class="text-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent hover:font-bold"
					>
						Pricing
					</li>
					<li
						class="text-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent hover:font-bold"
					>
						Templates
					</li>
					<li
						class="text-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent hover:font-bold"
					>
						Blog
					</li>
				</ul>
			</nav>
			<button
				class="text-sm border-2 rounded-full px-4 py-2 text-white bg-slate-900 hover:opacity-90"
				>Get In Touch</button
			>
		</header>

		<main>
			<!-- Hero section -->
			<section class="flex flex-col justify-center items-center mx-80 mt-32">
				<h1 class="text-6xl text-center font-bold text-slate-700">
					Building Modern Websites<br />that Empower
					<span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
						>Business Growth</span
					>
				</h1>
				<p class="text-2xl text-center m-12 text-slate-500">
					We build websites you and your business deserve.<br />No calls. No meetings. Just Results.
				</p>
				<button
					class="text-xl rounded-full px-8 py-4 text-white bg-slate-900 shadow-lg shadow-slate-400 hover:opacity-90"
					>Get In Touch</button
				>
				<div class="flex items-center justify-evenly gap-12 m-32">
					<img src="nodejs.svg" alt="NodeJS" width="100" />
					<img src="svelte-wordmark.svg" alt="Svelte" width="170" />
					<img src="tailwind.svg" alt="Tailwind" width="220" />
					<img src="prisma.svg" alt="Prisma" width="140" />
					<img src="vercel.svg" alt="Vercel" width="150" />
					<div class="flex items-center gap-4">
						<img src="vitejs.svg" alt="ViteJS" width="50" />
						<p class="text-2xl font-bold text-slate-900">ViteJS</p>
					</div>
				</div>
			</section>
		</main>

		<footer></footer>
	</body>
</html>
