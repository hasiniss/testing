var box;





function setup() {
  createCanvas(400,400);
box = createSprite (58,108,34,34)

}

function draw() 
{
  background(30);

if (keyIsDown(LEFT_ARROW)){
  box.x = box.x -2
}
if (keyIsDown(RIGHT_ARROW)){
  box.x = box.x + 2
}





drawSprites();
}




