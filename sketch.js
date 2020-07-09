var speed,weight,bullet;
var wall,thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  wall=createSprite(1200, 200, thickness, height/2);
  car=createSprite(50,200,50,50);
  speed=random(223,231);
  thickness=random(22,83);
  weight=random(30,52);
}

function draw() {
  background("orange");  
  car.velocityX=speed;
 damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if (car.isTouching(wall)){
    car.velocityX=0;
    if (damage<10){
      wall.shapeColor="green";
    }
   
    else if (damage>10){
      wall.shapeColor="red";
    }
  }
  textSize(50);
  text("BULLET AND WALL",700,50);
  drawSprites();
}