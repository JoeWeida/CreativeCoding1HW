let ironMan;
let speed = 5;
let building;

function setup() {
  createCanvas(800, 600);
  ironMan = new IronMan();
  building = new Building();
}

function draw() {
  background(135, 206, 250); 
  
  ironMan.move(); 
  ironMan.display();
  building.display();
  drawSun(width - 100, 100, 50); 
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
    fill(255, 0, 0); 
    ellipse(this.x, this.y, this.size, this.size);
  }

  move() {
   
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

class Building {
  constructor() {
    this.x = 200;
    this.y = height - 200;
    this.width = 100;
    this.height = 200;
  }

  display() {
    fill(100); 
    rect(this.x, this.y, this.width, this.height);
  }
}

function drawSun(x, y, radius) {
  fill(255, 255, 0); 
  ellipse(x, y, radius * 2, radius * 2);
}