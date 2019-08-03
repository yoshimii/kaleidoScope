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

context.globalAlpha = 0.6;//makes pieces transparent

const init = function(){

}

// Draws a five pointed star
 function draw() {
      context.beginPath();// Starts a new shape path
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

    function draw() {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
      
          for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 3; j++) {

                ctx.fillStyle = 'rgb(255, 217, 16)';
              ctx.beginPath();
              var x = 25 + j * 50; // x coordinate
              var y = 25 + i * 50; // y coordinate
              var radius = 20; // Arc radius
              var startAngle = 0; // Starting point on circle
              var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
              var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise
      
              ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
      
                
                    ctx.fill();
               
              }
            }
          }
        }
      


draw();

// Step 1: Create a path



// Step 2: call methods that specify paths to be drawn

// Optional Step 3: call closePath(); closes shape by drawing a straight line from the current point to the start.

