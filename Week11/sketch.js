var characterX = 100;
var characterY = 100;

var shapeX = 30;
var shapeY = 90;
var shapeXSpeed;
var shapeYSpeed;

var mouseShapeX;
var mouseShapeY;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

function setup() {
    createCanvas(500, 600);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(100, 50);
}

function draw() {
    background(0); 
    stroke(0);
    fill(255, 0, 0); 
    
    createBorders(10);

    textSize(20);
    text("EXIT", width - 50, height - 20);

    drawCharacter();
    characterMovement();

    fill(255, 255, 0); 
    
    square(shapeX, shapeY, 50);

    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;

    if (shapeX > width) {
        shapeX = 0;
    }
    if (shapeX < 0) {
        shapeX = width;
    }
    if (shapeY > height) {
        shapeY = 0;
    }
    if (shapeY < 0) {
        shapeY = height;
    }

    if (characterX > width && characterY > width - 50) {
        fill(255, 255, 0); 
        stroke(10);
        textSize(50);
        text("You Win!", width / 2 - 30, height / 2 - 50);
    }

    fill(255, 255, 0); 
    square(mouseShapeX, mouseShapeY, 100);
}

function characterMovement() {
    if (keyIsDown(w)) {
        characterY -= 10;
    }
    if (keyIsDown(s)) {
        characterY += 10;
    }
    if (keyIsDown(a)) {
        characterX -= 10;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 10;
    }
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
    console.log(characterX);
}

function drawCharacter() {
    fill(64, 224, 208); 
    circle(characterX, characterY, 25);
}

function createBorders(thickness) {
    rect(0, 0, width, thickness);
    rect(0, 0, thickness, height);
    rect(0, height - thickness, width, thickness);
    rect(width - thickness, 0, thickness, height - 50);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}