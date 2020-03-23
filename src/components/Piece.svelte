<script>
	import { str2dim } from "../tools"
	import { onMount, beforeUpdate, tick } from "svelte"

	export let spacer = false
	export let dimensions
	export let startx
	export let starty

	let w, h, wh, div, oldx, oldy,
		x = startx, y = starty,
		rotating = false

	$: cw = Math.round(wh / 72)
	$: [w, h] = str2dim(dimensions)
	$: x = startx - (w / 2) * cw
	$: y = starty - (h / 2) * cw
	
	async function rotate() {
		rotating = true
		await new Promise(r => setTimeout(r, 200))
		await tick()
		rotating = false
		x += (w / 2 - h / 2) * cw
		y += (h / 2 - w / 2) * cw
		;[w, h] = [h, w]
	}

	function handlemdown(e) {
		if (e.button == 2) rotate()
		else {
			window.addEventListener("mousemove", handlemmove)
			window.addEventListener("mouseup", handlemup)
			oldx = oldy = undefined
		}
	}

	function handlemmove(e) {
		if (oldx === undefined) {
			oldx = e.x
			oldy = e.y
		}
		x += e.x - oldx
		y += e.y - oldy
		oldx = e.x
		oldy = e.y
	}

	function handlemup(e) {
		x -= x % cw
		y -= y % cw
		window.removeEventListener("mousemove", handlemmove)
		window.removeEventListener("mouseup", handlemup)
	}

	onMount(() => {
		div.addEventListener("mousedown", handlemdown)
	})
</script>

<svelte:window bind:innerHeight={wh}/>

<div
	bind:this={div}
	oncontextmenu="return false"
	class="absolute transform cursor-move border border-black text-white flex-center
			font-semibold select-none transition-none duration-200 ease-in-out"
	style="width:{w * cw}px;height:{h * cw}px;z-index:{2000 - w * h};top:{y}px;left:{x}px"
	class:bg-red-700={!spacer}
	class:bg-gray-900={spacer}
	class:transition-transform={rotating}
	class:rotate-90={rotating}>
	<span
		class="transform transition-none duration-200 ease-in-out"
		class:transition-transform={rotating}
		class:-rotate-90={rotating}>
		{dimensions}</span>
</div>