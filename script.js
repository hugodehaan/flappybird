class Bird {
  constructor(height) {
    this.y = 200;
    this.x = 64;

    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0;
  }


  show() {
    fill(255);
    ellipse(this.x, this.y, 32, 32);
  }

  up = function() {
    this.velocity += this.lift;
    //Println(this.velocity);
  }

  update = function(){
    this.velocity += this.gravity;
    //this.velocity += 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}

var bird;
var pipes = [];

function setup() {
  createCanvas(600, 500);
  bird = new Bird(30);
  pipes.push(new pipe());
}

class Pipe {
  constructor(top, bottom, x, w, speed)
  top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 20;
  this.speed = 5;

  show = function(){
    fill(255);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  update = function(){
    this.x -= this.speed;
  }
}

function draw() {
  background(100);
  bird.update();
  bird.show(); 
 
 for (var i = 0; i < pipes.length; i++) {
   pipes[i].show();
   pipes[i].update();
 }
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}