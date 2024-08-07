// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start


// store final lines here

const width = 178;
const height = 178;

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
bt.translate(beak,[19,50]);
bt.scale(beak,[1.2,1.1]);
// draw it
drawLines(beak);

const joint = [
  bt.nurbs([
    [-3, 4],
    [6, 1],
    [4, -2]
  ])
]
bt.translate(joint, [70, 148]);
bt.rotate(joint, 6);

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

bt.translate(mouthLine,[50.0,138]);
bt.rotate(mouthLine, -25);
drawLines(mouthLine);

const highBeak = bt.join(topEdge,bottomEdge,mouthLine)

drawLines(highBeak);       


//curve at the mouth
const mouthCurve = [
  bt.nurbs([
    [-3, -97],
    [-7, -90],
    [1, -87]
  ])
]

bt.translate(mouthCurve,[79.1,234]);
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

bt.translate(headL,[67.6,248]);
bt.rotate(headL, -6);
drawLines(headL);


const head2 = [
  bt.nurbs([
    [-3, -93],
    [-1, -96],
    [1, -92]
  ])
]

bt.translate(head2,[71.7,251]);
bt.rotate(head2, 202);
drawLines(head2);

const head = [
bt.nurbs([
    [-15, -91],
    [6, -91],
    [2, -88]
  ])
]

bt.translate(head,[87.5,248]);
bt.rotate(head, 171);
drawLines(head);

const head3= [
bt.nurbs([
    [-15, -91],
    [-4, -91],
    [2, -88]
  ])
]

bt.translate(head3,[103.7,244]);
bt.rotate(head3, 140);
drawLines(head3);


const head4= [
bt.nurbs([
    [-28, -91],
    [-4, -91],
    [2, -88]
  ])
]

bt.translate(head4,[121.0,226]);
bt.rotate(head4, 102);
drawLines(head4);

const head5= [
bt.nurbs([
    [-7, -91],
    [-4, -91],
    [2, -88]
  ])
]

bt.translate(head5,[81.9,221]);
bt.rotate(head5, 70);
drawLines(head5);


const wing1 =[
bt.nurbs([
    [-49, -70],
    [-7, -67],
    [2, -88]
  ])
]

bt.translate(wing1,[103.8,174]);
bt.rotate(wing1, 117);
drawLines(wing1);




const wing2= [
bt.nurbs([
    [-41, -128],
    [25, -105],
    [2, -88]
  ])
]

bt.translate(wing2,[126.9,204]);
bt.rotate(wing2, 63);
drawLines(wing2);



const wing3= [
bt.nurbs([
    [-31, -136],
    [-38, -109],
    [2, -88]
  ])
]

bt.translate(wing3,[124.4,205]);
bt.rotate(wing3, 409);
drawLines(wing3);


const wing4= [
bt.nurbs([
    [-31, -136],
    [-7, -87],
    [3, -88]
  ])
]

bt.translate(wing4,[96.0,210]);
bt.rotate(wing4, 400);
drawLines(wing4);

//const bodyAll = bt.join(bottomEdge,topEdge,mouthLine,mouthCurve, headL,head2, head, head3,head4,head5,wing1,wing2,wing3,wing4);

//bt.translate(bodyAll, [31,7]);

//drawLines(bodyAll);

//DONE WINGS 

const toes1= [
bt.nurbs([
    [22, -97],
    [7, -98],
    [3, -88]
  ])
]

bt.translate(toes1,[69.9,152]);
bt.rotate(toes1, 597);
drawLines(toes1);


const toes2= [
bt.nurbs([
    [10, -77],
    [10, -86],
    [3, -88]
  ])
]

bt.translate(toes2,[81.0,140]);
bt.rotate(toes2, 519);
drawLines(toes2);


const toes3= [
  bt.nurbs([
    [5, -84.7],
     [5, -91],
    [3, -88]
  ])
]

bt.translate(toes3,[87.0,150]);
bt.rotate(toes3, 395);
drawLines(toes3);


const toes4= [
  bt.nurbs([
    [4, -85.5],
     [7, -87],
    [3, -88]
  ])
]

bt.translate(toes4,[76.9,141]);
bt.rotate(toes4, 268);
drawLines(toes4);

const toes5= [
  bt.nurbs([
    [5, -82.1],
     [12, -93],
    [3, -88]
  ])
]

bt.translate(toes5,[71.2,139]);
bt.rotate(toes5, 279);
drawLines(toes5);

const nail = [
    ([
    [0, 0],
     [0, 0],
    [-1, 3]
  ])
]

bt.translate(nail,[74.5,47]);
bt.rotate(nail, 354);
drawLines(nail);


const nail2 = [
    ([
    [0, 0],
     [0, 0],
    [-1, 3]
  ])
]

bt.translate(nail2,[75.8,47]);
bt.rotate(nail2, 354);
drawLines(nail2);

const nail3 = [
    ([
    [0, 4],
     [1, 0],
    [-1, 3]
  ])
]

bt.translate(nail3,[76.3,44]);
bt.rotate(nail3, 397);
drawLines(nail3);

//const nailAll=bt.join(nail, nail2,nail3);
//bt.translate (nailAll,[50,652]);





