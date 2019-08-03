const view = document.getElementById("canvas");
const context = view.getContext("2d");
const shapes = [];
const size = 2;
const gridHidth = 30;
const gridHeight = 30;
const target = {x: 0, y: 0};//an object with a coordinate
const startPos = {x: 0, y: 0};//an object with a coordinate
const colors =["#8bf0ba", "#0e0fed", "#f2b1d8", "magenta", "blue"];
const offset = 50;//Action speed
let updateCount = 0;

//Let's Get Into Shapes!

