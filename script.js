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
    Println(this.velocity);
  }

  update = function(){
    this.velocity += this.gravity;
    
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

function setup() {
  createCanvas(400, 600);
  bird = new Bird(30);
}

function draw() {
  background(100);
  bird.update();
  bird.show();
}

function keyPressed() {
  if (key == ' ') {
    bird.up();

  }
}