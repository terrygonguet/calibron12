# Calibron 12

[This](https://calibron12.gonguet.com/) is a (very rough) web version of the Calibron 12 puzzle from 1933. Like many people I discovered it through [a Vsauce video](https://youtu.be/f6tHqOmIj1E?t=1284) and wanted to make it because I enjoy making puzzles much more than solving them. The goal is to order the pieces so that they fit neatly in the borders. There are 2 versions of this puzzle: with a spacer and without. There is only one solution without a spacer and a few dozens for each spacer. You can learn (so much) more info about this puzzle [here](https://www.gathering4gardner.org/g4g12gift/Miller_Baxter-Mystery_of_the_Calibron.pdf).

This only works on desktop/laptop because I'm too lazy to try to make that work on tiny phones.

**Right click** to rotate pieces.

## Development

```sh
git clone https://github.com/terrygonguet/calibron12 # clone repo
cd calibron12 # go in folder
npm install # install js dependencies
npm run dev # run dev server
```

To build for production simply run `npm run build`.
