// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start


// store final lines here

const width = 147;
const height = 142;

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


const mouthLine = [
  bt.nurbs([
    [29, 1],
    [23, -2],
    [19, -1]
  ])
]

bt.translate(mouthLine,[30.5,88]);
bt.rotate(mouthLine, -25);
drawLines(mouthLine);

//curve at the mouth
const mouthCurve = [
  bt.nurbs([
    [-3, -97],
    [-7, -90],
    [1, -87]
  ])
]

bt.translate(mouthCurve,[59.2,184]);
bt.rotate(mouthCurve, -129);
drawLines(mouthCurve);

// done mouth 

// head

const headL = [
  bt.nurbs([
    [-1, -98],
    [-1, -89],
    [1, -92]
  ])
]

bt.translate(headL,[49.0,198]);
bt.rotate(headL, -6);
drawLines(headL);


const head2 = [
  bt.nurbs([
    [-3, -93],
    [-1, -96],
    [1, -92]
  ])
]

bt.translate(head2,[52.9,201]);
bt.rotate(head2, 202);
drawLines(head2);

const head = [
bt.nurbs([
    [-23, -89],
    [-19, -94],
    [2, -88]
  ])
]

bt.translate(head,[76.6,196]);
bt.rotate(head, 161);
drawLines(head);


