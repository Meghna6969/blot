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

const highBeak = bt.join(beak,mouthLine)

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

bt.translate(toes1,[72.4,152]);
bt.rotate(toes1, 597);
drawLines(toes1);


const toes2= [
bt.nurbs([
    [10, -77],
    [10, -86],
    [3, -88]
  ])
]

bt.translate(toes2,[83.7,140]);
bt.rotate(toes2, 519);
drawLines(toes2);


const toes3= [
  bt.nurbs([
    [5, -84.7],
     [5, -91],
    [3, -88]
  ])
]

bt.translate(toes3,[90.5,150]);
bt.rotate(toes3, 395);
drawLines(toes3);


const toes4= [
  bt.nurbs([
    [4, -85.5],
     [7, -87],
    [3, -88]
  ])
]

bt.translate(toes4,[79.6,141]);
bt.rotate(toes4, 268);
drawLines(toes4);

const toes5= [
  bt.nurbs([
    [5, -82.1],
     [12, -93],
    [3, -88]
  ])
]

bt.translate(toes5,[73.4,139]);
bt.rotate(toes5, 279);
drawLines(toes5);

const nail = [
    ([
    [0, 0],
     [0, 0],
    [-1, 3]
  ])
]

bt.translate(nail,[76.4,47]);
bt.rotate(nail, 354);
drawLines(nail);


const nail2 = [
    ([
    [0, 0],
     [0, 0],
    [-1, 3]
  ])
]

bt.translate(nail2,[77.5,47]);
bt.rotate(nail2, 354);
drawLines(nail2);

const nail3 = [
    ([
    [0, 4],
     [1, 0],
    [-1, 3]
  ])
]

bt.translate(nail3,[77.9,44]);
bt.rotate(nail3, 397);
drawLines(nail3);

const nail4 = [
    ([
    [0, 0],
     [0, 0],
    [-1, 3]
  ])
]

bt.translate(nail4,[84.3,50]);
bt.rotate(nail4, 354);
drawLines(nail4);


const nail5 = [
    ([
    [0, 0],
     [0, 0],
    [-1, 3]
  ])
]

bt.translate(nail5,[85.6,51]);
bt.rotate(nail5, 354);
drawLines(nail5);

const nail6 = [
    ([
    [0, 1],
     [1, 0],
    [-1, 0]
  ])
]

bt.translate(nail6,[85.8,50]);
bt.rotate(nail6, 368);
drawLines(nail6);

// toe nails done 
//other foot

// other foot
const foot = [
    ([
    [-16, 20],
     [-6, 12],
    [-1, 0]
  ])
]


bt.translate(foot,[107.6,43]);
bt.rotate(foot, 451);
//drawLines(foot);


const foot2 = [
   bt.nurbs ([
    [-13, 13],
     [-10, 12],
    [-1, 0]
  ])
]

bt.translate(foot2,[111.0,45]);
bt.rotate(foot2, 438);
//drawLines(foot2);


const foot3 = [
   bt.nurbs ([
    [6, 4],
     [5, 14],
    [-1, 0]
  ])
]

bt.translate(foot3,[90.2,41]);
bt.rotate(foot3, 523);
//drawLines(foot3);



// other leg nails
const nailO = [
   bt.nurbs ([
    [4, 0],
     [-1, 2],
    [-1, 0]
  ])
]

bt.translate(nailO,[109.2,58]);
bt.rotate(nailO, 665);
//drawLines(nailO);



const nailF = [
    ([
    [0, 0],
     [0, 0],
    [-1, 4]
  ])
]

bt.translate(nailF,[90.0,38]);
bt.rotate(nailF, 354);
//drawLines(nailF);


const nailW = [
    ([
    [0, 0],
     [0, 0],
    [-1, 3]
  ])
]

bt.translate(nailW,[91.4,39]);
bt.rotate(nailW, 354);
//drawLines(nailW);

const nailL = [
    ([
    [0, 4],
     [1, 0],
    [-1, 3]
  ])
]

bt.translate(nailL,[92.3,36]);
bt.rotate(nailL, 397);
//drawLines(nailL);


const rightFoot = bt.join(foot,foot2,foot3,nailO,nailF,nailW,nailL);
bt.rotate(rightFoot,11);
bt.scale(rightFoot,[0.9,0.9]);
bt.translate(rightFoot, [1,5]);

drawLines(rightFoot);

// Rightfoot Done

const lowerB = [
   bt.nurbs ([
    [-5, 8],
     [-5, 5],
    [-1, 3]
  ])
]

bt.translate(lowerB,[88.9,62]);
bt.rotate(lowerB, 350);
drawLines(lowerB);

const lowerB2 = [
   bt.nurbs ([
    [-1, 7],
     [-3, 5],
    [-1, 3]
  ])
]

bt.translate(lowerB2,[97.1,55]);
bt.rotate(lowerB2, 437);
drawLines(lowerB2);


const lowerB3 = [
   bt.nurbs ([
    [-7, 12],
     [-3, 3],
    [-1, 3]
  ])
]

bt.translate(lowerB3,[115.4,54]);
bt.rotate(lowerB3, 445);
drawLines(lowerB3);


// basic body done 
//DETAILS 

// face details 


const randsize =0.2*2+3
const base = 50
const radius = base / randsize
var xoff =  2 + 87
var yoff =  2 + 87.5
const divise = .04 + 1.4

//pupil
const shiny = [
  bt.nurbs([
    [xoff + radius, 0 + yoff],
    [xoff + radius / divise, radius / divise + yoff],
    [xoff, 0 + radius + yoff],
    [xoff - radius / divise, radius / divise + yoff],
    [xoff + -radius, 0 + yoff],
    [xoff - radius / divise, -radius / divise + yoff],
    [xoff, 0 - radius + yoff],
    [xoff + radius / divise, -radius / divise + yoff],
    [xoff + radius, 0 + yoff]
  ])
]
bt.scale(shiny,[0.1,-0.1]);
bt.translate(shiny,[-5,63]);
drawLines(shiny);
const sun = [
  bt.nurbs([
    [xoff + radius, 0 + yoff],
    [xoff + radius / divise, radius / divise + yoff],
    [xoff, 0 + radius + yoff],
    [xoff - radius / divise, radius / divise + yoff],
    [xoff + -radius, 0 + yoff],
    [xoff - radius / divise, -radius / divise + yoff],
    [xoff, 0 - radius + yoff],
    [xoff + radius / divise, -radius / divise + yoff],
    [xoff + radius, 0 + yoff]
  ])
]
bt.scale(sun,[0.2,-0.2]);
bt.translate(sun,[-4,63]);
bt.difference(sun,shiny);
drawLines(sun,{fill: "#080A07", stroke: "#080A07" });




const eye = [
   bt.nurbs ([
    [-7, 12],
     [-3, 3],
    [-1, 3]
  ])
]

bt.translate(eye,[115.4,54]);
bt.rotate(eye, 445);
drawLines(eye);


const faceD = [
   bt.nurbs ([
    [-7, 12],
     [-3, 3],
    [-1, 3]
  ])
]

bt.translate(faceD,[115.4,54]);
bt.rotate(faceD, 445);
drawLines(faceD);







