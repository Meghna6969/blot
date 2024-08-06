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
    [beakLength * 0.1, beakW],
    [beakLength * 0.8, beakW * 0.85],
    [beakLength, 2]
  ])
]
bt.translate(bottomEdge, [44.5, 88]);


const topEdge = [
  bt.nurbs([
    [-3, -1],
    [beakLength * 0.5, 4],
    [beakLength * 1.6, beakW * -1.89],
    [beakLength, 0]
  ])
]
bt.translate(topEdge, [43, 94]);
bt.rotate(topEdge, 46);


const beak = bt.join(topEdge, bottomEdge);
bt.rotate(beak, 59);
// draw it
drawLines(beak);

const joint = [
  bt.nurbs([
    [-3, 2],
    [6, 1],
    [4, -2]
  ])
]
bt.translate(joint, [50, 98]);
bt.rotate(joint, -11);

drawLines(joint);

//BEAK DONE 

//MOUTH














