export const currencyFormatter = new Intl.NumberFormat(undefined, {
	style: "currency",
	currency: "EUR"
})

export const dateFormatter = new Intl.DateTimeFormat(undefined, {
	year: "numeric",
	month: "long",
	day: "2-digit"
})

/**
 * Returns an iterator going from `from` to `to` or over the length
 * of the array if it is the only parameter
 * @param {number|any[]} from start of the range or an array
 * @param {number=} to end of the range (inclusive, optional)
 * @param {number=} step defaults to 1
 */
export function* range(from, to, step = 1) {
	let isarray = Array.isArray(from),
		f = isarray ? 0 : from,
		t = isarray ? from.length - 1 : to
	for (let i = f; i <= t; i += step) yield isarray ? [from[i], i] : i
}

/**
 * Parses the dimension and returns it as `[w, h]`
 * @param {string} str
 */
export function str2dim(str) {
	return str.split("x").map(n => parseInt(n))
}

/**
 * A bunch of magic numbers
 * @param {number} i
 * @param {number} cw
 * @param {number} bw
 * @param {number} bh
 */
export function startPosition(i, cw, bw, bh) {
	let startx, starty

	if (i <= 3) starty = -bh / 3.5
	else if (i <= 5) starty = bh / 4
	else if (i <= 7) starty = bh / 1.5
	else starty = 4 * (bh / 3.2)

	if (i <= 3) startx = (i * 1.66 - 1) * (bw / 3)
	else if (i <= 7) startx = (i % 2 ? 4 : -1) * (bw / 3)
	else startx = ((i - 8) * 1.66 - 1) * (bw / 3)

	startx *= cw
	starty *= cw
	return { startx, starty }
}
