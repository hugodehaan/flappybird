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
  pipes.push(new Pipe());
}

class Pipe {
  constructor(top, bottom, x, w, speed){
  this.top = random(height/2-5);
  this.bottom = this.top + 200
  this.buis = height - this.bottom
  this.x = width;
  this.w = 50;
  this.speed = 5;
  }


  show = function(){
    if (this.x < 64 && this.x > 32) {
      if (this.bottom <= bird.y || this.top >= bird.y) {
       gameState = 2;
      }
    }
    else{
     fill("green");
    }

    rect(this.x, 0, this.w, this.top);
    rect(this.x, this.bottom, this.w, this.buis);
  }

  update = function(){
    this.x -= this.speed;
  }

}

function preload(){
  img1 = loadImage('img/flappybird.png');
}

function game() {
  background(img1);
  bird.update();
  bird.show(); 
  


 for (var i = 0; i < pipes.length; i++) {
   pipes[i].show();
   pipes[i].update();
 }
 
 if(frameCount % 100 ==0){
   pipe = new Pipe(600);
   pipes.push(pipe);
 }

}
function keyPressed() {
  if (keyCode == 49) {
    gameState = 1;
  }

  if (keyCode == 50) {
    gameState = 2;
  }

  if (keyCode == 51) {
    gameState = 0;
  }
  if (key == ' ') {
    bird.up();
  }
}



var gameState = 0;
function draw(){
  text("gameState"+ gameState, 25,25);
  if(gameState == 0){
    menu();
  }
  if (gameState == 2){
    gameOver();
  }
  if (gameState == 1){
    game();
  }
}


function menu() {
  background("yellow");
  text("MENU", 25, 45);
  text("1. start", 25, 65);
  text("2. game over", 25, 85);
  text("3. terug naar menu", 25, 105);
}

function gameOver() {
  background("blue");
  text("GAME OVER", 25, 45);
  x = 0;
}
