let ironMan;
let speed = 5;

function setup() {
  createCanvas(800, 600);
  ironMan = new IronMan();
}

function draw() {
  background(135, 206, 250); // Sky blue background
  
  ironMan.move(); // Call move function to apply continuous movement
  ironMan.display();
}

function keyPressed() {
  if (keyCode === 87) { // W key
    ironMan.moveUp();
  } else if (keyCode === 83) { // S key
    ironMan.moveDown();
  } else if (keyCode === 65) { // A key
    ironMan.moveLeft();
  } else if (keyCode === 68) { // D key
    ironMan.moveRight();
  }
}

class IronMan {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.size = 50;
  }

  display() {
    fill(255, 0, 0); // Iron Man's color
    ellipse(this.x, this.y, this.size, this.size);
  }

  move() {
    // No need to implement movement here, as it's handled by keyPressed()
  }

  moveUp() {
    this.y -= speed;
  }

  moveDown() {
    this.y += speed;
  }

  moveLeft() {
    this.x -= speed;
  }

  moveRight() {
    this.x += speed;
  }
}