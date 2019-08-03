const view = document.getElementById("canvas");
const context = view.getContext("2d");//Retrieves the 2d rendering context
const shapes = [];
const size = 2;//appears to set size in pixels
const gridHidth = 30;//sets pieces per row
const gridHeight = 30;//sets pieces per column
const target = {x: 0, y: 0};//an object with a coordinate
const startPos = {x: 50, y: 10};//an object with a coordinate
const colors =["#8bf0ba", "#0e0fed", "#f2b1d8", "magenta", "blue"];
const offset = 50;//Action speed
let updateCount = 0;

//Let's Get Into Shapes!//This is where I stop to read MDN
// Draws two squares and clears one
// function draw() {
//     var canvas = document.getElementById('canvas');
//     if (canvas.getContext) {
//       var ctx = canvas.getContext('2d');
  
//       ctx.fillRect(25, 25, 100, 100);
//       ctx.clearRect(45, 45, 60, 60);
//       ctx.strokeRect(50, 50, 50, 50);
//     }
//   }

// for (let i = 0; i< )
  function draw() {
      context.beginPath();//initialize drawing
      context.moveTo(startPos.x, startPos.y);//moves pen to drawing start point
      context.lineTo(60, 30);//draws line from previous point to this point
      context.lineTo(80, 30)
      context.lineTo(65, 50);
      context.lineTo(70, 70);
      context.lineTo(50, 60);
      context.lineTo(30, 70);
      context.lineTo(35, 50);
      context.lineTo(20, 30);
      context.lineTo(40, 30);
      context.lineTo(50, 10);
      context.fill();
    }

draw();

// Step 1: Create a path



// Step 2: call methods that specify paths to be drawn

// Optional Step 3: call closePath(); closes shape by drawing a straight line from the current point to the start.

