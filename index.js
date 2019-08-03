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

context.globalAlpha = 0.6;//makes pieces 

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.fillRect(0, 0, 1500, 1500);
    ctx.translate(canvas.width/2, canvas.height/2);
  
    // Create a circular clipping path
    ctx.beginPath();
    ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
    ctx.clip();
  
    // draw background
    var lingrad = ctx.createLinearGradient(0, -75, 0, 75);
    lingrad.addColorStop(0, 'magenta');
    lingrad.addColorStop(1, 'peachpuff');
    
    ctx.fillStyle = lingrad;
    ctx.fillRect(-75, -75, 150, 150);
  
    // draw stars
    for (var j = 1; j < 50; j++) {
      ctx.save();
      ctx.fillStyle = '#8bf0ba';
      ctx.translate(75 - Math.floor(Math.random() * 150),
                    75 - Math.floor(Math.random() * 150));
      drawStar(ctx, Math.floor(Math.random() * 9) + 2);
      ctx.restore();
    }
    
  }
  
  function drawStar(ctx, r) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(r, 0);
    for (var i = 0; i < 9; i++) {
      ctx.rotate(Math.PI / 5);
      if (i % 2 === 0) {
        ctx.lineTo((r / 0.525731) * 0.200811, 0);
      } else {
        ctx.lineTo(r, 0);
      }
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }


// Draws a five pointed star
//  function draw() {
 
//       context.beginPath();// Starts a new shape path
//       context.moveTo(startPos.x, startPos.y);//moves pen to drawing start point
//       context.lineTo(60, 30);//draws line from previous point to this point
//       context.lineTo(80, 30)
//       context.lineTo(65, 50);
//       context.lineTo(70, 70);
//       context.lineTo(50, 60);
//       context.lineTo(30, 70);
//       context.lineTo(35, 50);
//       context.lineTo(20, 30);
//       context.lineTo(40, 30);
//       context.lineTo(50, 10);
//       context.fill();
    
      
//     }

 
draw();
init();

// Step 1: Create a path



// Step 2: call methods that specify paths to be drawn

// Optional Step 3: call closePath(); closes shape by drawing a straight line from the current point to the start.

