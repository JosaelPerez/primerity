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
			<section class="flex flex-col justify-center items-center mt-32">
				<h1 class="text-6xl text-center font-bold text-slate-800">
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

			<!-- Pricing section -->
			<section class="mt-16">
				<div class="flex flex-col items-center justify-start">
					<h2 class="text-4xl font-bold text-slate-800">
						Flexible prices that make everyone <span
							class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
							>feel welcome!
						</span>
					</h2>
					<p class="text-xl text-slate-500 mt-4">
						Just choose the option that makes the most sense for you and your business
					</p>

					<div class="flex mt-12">
						<ul class="border rounded-lg border-slate-200 p-4 mx-12 min-w-80">
							<li class="text-xl">Development</li>
							<li class="text-md text-slate-500">up to 5 sections</li>
							<li class="text-4xl font-bold text-slate-900 mb-8">$300/page</li>
							<div class="flex flex-col gap-2">
								<li class="text-base text-slate-800">
									<img src="check.svg" alt="check" class="inline w-4 mr-2" />One request / page at a
									time
								</li>
								<li class="text-md text-slate-800">
									<img src="check.svg" alt="check" class="inline w-4 mr-2" />Unlimited revisions
								</li>
								<li class="text-md text-slate-800">
									<img src="check.svg" alt="check" class="inline w-4 mr-2" />CMS integration
								</li>
								<li class="text-md text-slate-800">
									<img src="check.svg" alt="check" class="inline w-4 mr-2" />3-4 days turnaround
									time
								</li>
							</div>
							<button
								class="p-[1px] bg-gradient-to-r from-blue-600 to-purple-600 text-transparent rounded-md w-full mt-24"
							>
								<div class="bg-white h-full w-full rounded-md flex justify-center items-center">
									<span
										class="flex bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text w-full rounded p-2 bg-white items-center justify-center font-bold"
										>Buy Now</span
									>
								</div>
							</button>
						</ul>
						<ul>
							<li>Design + Development</li>
							<li>up to 5 sections*</li>
							<li>$500/page</li>
							<li>up to 5 sections*</li>
							<li>One request / page at a time</li>
							<li>Unlimited revisions</li>
							<li>CMS integration</li>
							<li>7-10 days turnaround time</li>
						</ul>
						<ul>
							<li>SEO</li>
							<li>Coming soon...</li>
						</ul>
					</div>
				</div>
			</section>
		</main>

		<footer class="bg-slate-900 h-64"></footer>
	</body>
</html>
