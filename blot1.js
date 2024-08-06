// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start


// store final lines here

const width = 128;
const height = 125;

setDocDimensions(width, height);

const beakLength = 10
const beakW = 2.8

const finalLines = [];

const bottomEdge = [
  bt.nurbs([
    [-2, -1],
    [beakLength * 0.6, beakW],
    [beakLength * 0.8, beakW * 0.97],
    [beakLength, 2]
  ])
]
bt.translate(bottomEdge, [47, 89]);


const topEdge = [
  bt.nurbs([
    [-2, -1],
    [beakLength * 0.4, beakW],
    [beakLength * 1.7, beakW * 0.10],
    [beakLength, 0]
  ])
]
bt.translate(topEdge, [44, 94]);
bt.rotate(topEdge, 46);

const beak = bt.join(topEdge, bottomEdge);
bt.rotate(beak, 51);
// draw it
drawLines(beak);