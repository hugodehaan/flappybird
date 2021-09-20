var x, y;
function setup() {
	createCanvas(500, 400);

  x=0;
  y=200;
}

function draw(){
  background (255);
  ellipse (x,y,35,35);
  x=100;
  y=200;
}

