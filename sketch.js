
var car,wall;
var speed, weightx;
var restart;
var speedo=0

function setup() {
  createCanvas(1400,400);
  speed=random(55,90);
  weightx=random(400,1500);
  car=createSprite(100, 200, 30, 30);
  wall=createSprite(1300,200,60,200);
restart=createSprite(23,25,20,20);
restart.shapeColor="cyan";

 car.shapeColor="white";
 wall.shapeColor="white";

speedo=speed;
}

function draw() {
  background(0,0,0);  
 textSize(30);
  text("SPEED = ",500,50)
  text(speedo,635,50)
  car.velocityX=speed;
  car.weight=weightx;
  textSize(10)
  fill("cyan");
  text("RESTART",2,10);
 
if(wall.x-car.x<car.width/2+wall.width/2){
  car.velocityX=0;
  if((0.5*weightx*speed*speed)/22500<100){
   textSize(100);
    fill("lime")
    text("GOOD",500,200);
    car.x=1255 
    car.velocityX=0;
    wall.shapeColor="lime";
   }
   if((0.5*weightx*speed*speed)/22500<180 
   &&(0.5*weightx*speed*speed)/22500>100){
   car.x=1255
   car.velocityX=0;
    wall.shapeColor="yellow";
    textSize(100);
    fill("yellow")
    text("AVERAGE",400,200);
   }
   if((0.5*weightx*speed*speed)/22500>180){
     car.x=1255;
     car.velocityX=0;
     wall.shapeColor="red";
     textSize(100);
    fill("red")
    text("LETHAL",450,200);

   } 
}
if(mousePressedOver(restart)){
   
    restartg();
}

  drawSprites();
}

function restartg(){
    wall.shapeColor="white";
  car.x=100;
  wall.x=1300;
  speed=random(55,90);
  weightx=random(400,1500);
  car.velocityX=speed;
  car.weight=weightx;
 speedo=speed;
}