<script>
	import { fade } from "svelte/transition"
	import Box from "../components/Box"
	import { spacers } from "../data/data"

	let selected = spacers[0]
</script>

<svelte:head>
  <title>Calibron 12</title>
</svelte:head>

<main
	class="overflow-hidden flex-center flex-col relative"
	in:fade={{ duration: 200, delay: 200 }}
	out:fade={{ duration: 200 }}
	oncontextmenu="return false">
	<label class="my-4">
		Spacer: 
		<select bind:value={selected}>
			{#each spacers as spacer}
				<option value={spacer}>{spacer}</option>
			{/each}
			<option value={null}>None</option>
		</select>
	</label>
	<Box spacer={selected} />
</main>
