var x = 100
var y = 200
var movement = 10

function setup()
{
    createCanvas(300,500);
    movement = floor(random() * 10) + 1;
}
function draw() {
    background(100);
    ellipse(150,250,300,400);
    textSize(35);
    text('Whats up Brother!', 10, 30);
    text('Joe Weida', 80, 490);
    rect(x,330,100,40);
    circle(x,200,65);
    circle(200,y,65);
    triangle(150,290, 100, 290, 150, 210);
    line(100, 350, 200, 350);
    if (x >=200|| x <=0)
    {
        movement*=-1
    }
{
    x+=movement
 }

}
