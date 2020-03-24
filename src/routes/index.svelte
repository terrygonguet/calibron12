<script>
	import { fade } from "svelte/transition"
</script>

<svelte:head>
  <title>Calibron 12 - Home</title>
</svelte:head>

<main
	class="flex-center flex-col"
	in:fade={{ duration: 200, delay: 200 }}
	out:fade={{ duration: 200 }}>
	<section class="max-w-1k">
		<h1 class="text-center text-4xl font-bold my-8">Calibron 12</h1>
		<p class="my-4">
			This is a (very rough) web version of the Calibron 12 puzzle from 1933.
			Like many people <a href="https://gonguet.com/me" class="a" target="_blank">I</a> discovered it through
			<a href="https://youtu.be/f6tHqOmIj1E?t=1284" class="a" target="_blank">a Vsauce video</a>
			and wanted to make it because I enjoy making puzzles much more than solving them.
			The goal is to order the pieces so that they fit neatly in the borders.
			There are 2 versions of this puzzle: with a spacer and without. There is only one solution
			without a spacer and a few dozens for each spacer. You can learn (so much) more info about this puzzle
			<a href="https://www.gathering4gardner.org/g4g12gift/Miller_Baxter-Mystery_of_the_Calibron.pdf" target="_blank" class="a">here</a>.
		</p>
		<p class="my-4">
			This only works on desktop/laptop because I'm too lazy to try to make that work on tiny phones.
		</p>
		<p class="my-4">
			<strong class="underline">Right click</strong> to rotate pieces.
		</p>
		<a href="game" class="block flex justify-center my-8">
			<button class="btn">PLAY</button>
		</a>
	</section>
</main>