class Bird {
  constructor(height) {
    this.y = 200;
    this.x = 64;

    this.gravity = 1;
    this.velocity = 0;
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, 32, 32);
  }
}

var bird;

function setup() {
  createCanvas(400, 600);
  bird = new Bird(30);
}

function draw() {
  background(100);
  bird.show();
}
