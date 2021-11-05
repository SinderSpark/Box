var box
function setup() {
  createCanvas(600,500);
  box = createSprite(300,300,10,10)
}

function draw() 
{
  background(30);
drawSprites()
if(keyDown("left")){
  box.x=box.x - 5
}
if(keyDown("right")){
  box.x=box.x + 5
}
if(keyDown("up")){
  box.y=box.y - 5
}
if(keyDown("down")){
  box.y=box.y + 5
}
}





