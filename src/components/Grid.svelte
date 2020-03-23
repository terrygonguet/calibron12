<script>
	import { onMount } from "svelte"
	import { box } from "../data/data"
	import { str2dim } from "../tools"

	let w, h, canvas, ctx

	async function draw() {
		await new Promise(r => setTimeout(r, 500))
		ctx.beginPath()
		ctx.strokeStyle = "#888"
		let [bw, bh] = str2dim(box)
		const cellwidth = w / bw
		for (let x = 1; x < bw; x++) {
			ctx.moveTo(x * cellwidth - 0.5, -0.5)
			ctx.lineTo(x * cellwidth - 0.5, h + 0.5)
		}
		for (let y = 1; y < bh; y++) {
			ctx.moveTo(-0.5, y * cellwidth - 0.5)
			ctx.lineTo(w + 0.5, y * cellwidth - 0.5)
		}
		ctx.stroke()
	}

	onMount(() => {
		ctx = canvas.getContext("2d")
		draw()
	})
</script>

<svelte:window on:resize={draw} />

<canvas
	bind:clientHeight={h}
	bind:clientWidth={w}
	bind:this={canvas}
	width={w}
	height={h}
	class="absolute top-0 left-0 w-full h-full">
	</canvas>
