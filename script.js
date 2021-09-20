let
function setup(){
  createCanvas(700,600);
  ball = new Ball();
}
class Ball{
  
  constructor(x=50, y= height/2, g=0,6, v=0, l=-20 ) {
    this.x = x;
    this.y = y;
    this.gravity = g;
    this.velocity = v;
    this.lift = l;

  }
}
