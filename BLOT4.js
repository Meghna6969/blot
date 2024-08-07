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
    [-15, -91],
    [6, -91],
    [2, -88]
  ])
]

bt.translate(head,[69.0,198]);
bt.rotate(head, 171);
drawLines(head);

const head3= [
bt.nurbs([
    [-15, -91],
    [-4, -91],
    [2, -88]
  ])
]

bt.translate(head3,[85.7,194]);
bt.rotate(head3, 140);
drawLines(head3);


const head4= [
bt.nurbs([
    [-28, -91],
    [-4, -91],
    [2, -88]
  ])
]

bt.translate(head4,[101.6,177]);
bt.rotate(head4, 105);
drawLines(head4);

const head5= [
bt.nurbs([
    [-7, -91],
    [-4, -91],
    [2, -88]
  ])
]

bt.translate(head5,[62.2,172]);
bt.rotate(head5, 70);
drawLines(head5);


const head6= [
bt.nurbs([
    [-50, -56],
    [25, -81],
    [2, -88]
  ])
]

bt.translate(head6,[75.2,124]);
bt.rotate(head6, 113);
drawLines(head6);




const head7= [
bt.nurbs([
    [-38, -128],
    [25, -105],
    [2, -88]
  ])
]

bt.translate(head7,[109.1,156]);
bt.rotate(head7, 63);
drawLines(head7);



const head8= [
bt.nurbs([
    [-31, -136],
    [-5, -66],
    [2, -88]
  ])
]

bt.translate(head8,[100.6,155]);
bt.rotate(head8, 405);
drawLines(head8);