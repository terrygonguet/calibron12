<script>
	import { pieces, boxSpacer, boxNoSpacer } from "../data/data"
	import Piece from "./Piece"
	import { str2dim, startPosition } from "../tools"

	export let spacer

	let h, startPositions
	const TAU = 2 * Math.PI, step = TAU / pieces.length
	$: [bw, bh] = str2dim(spacer ? boxSpacer : boxNoSpacer)
	$: cw = Math.round(h / 72)
	$: {startPositions = pieces.map((_, i) => startPosition(i, cw, bw, bh)); cw}

	// setTimeout(() => console.log(pieces.map((_, i) => startPosition(i, cw))), 1000)
</script>

<svelte:window bind:innerHeight={h}/>

<div
	class="relative border-2 border-black box-content transition-all duration-300 ease-in-out"
	style="width:{bw * cw}px;height:{bh * cw}px"
	oncontextmenu="return false">
	{#if spacer}
		<Piece dimensions={spacer} spacer={true} startx={bw / 2 * cw} starty={bh / 2 * cw} />
	{/if}
	{#each pieces as piece, i}
		<Piece
			dimensions={piece}
			spacer={false}
			{...startPositions[i]} />
	{/each}
</div>