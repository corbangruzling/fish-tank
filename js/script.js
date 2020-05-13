const FRAMES_PER_SECOND = 30;
let fishes = [];
let canvas, context;

function startSimulationLoop() {
  //alert("Welcome to the Fish Tank");
  canvas = document.getElementById("simulation-canvas");
  context = canvas.getContext("2d");

  let positionX = Math.random() * canvas.width;
  let positionY = Math.random() * canvas.height;
  fishes.push(new Fish(positionX, positionY, 0,0));

  _updateSimulation();
}

function _updateSimulation () {
  _drawBackground();

  for(var i = 0; i < fishes.length; ++i) {
    console.log("lalalalala");
    console.log(fishes[i]);
    _drawFish(fishes[i]);
  }
}

function _drawBackground(){
  // draw background
  context.fillStyle = "#2222ff";
  context.fillRect(0, 0, canvas.width, canvas.height);
}
function _drawFish(fish){
  // draw fish
  context.beginPath();
  context.arc(fish.xPosition, fish.yPosition, fish.sizePx, 0, 2 * Math.PI, false);
  context.fillStyle = "red";
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = "black";
  context.stroke();
}
