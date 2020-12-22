function preload() {
var car, wall;
var speed, weight;
}

function setup() {
createCanvas(1600,400);
speed= random(75, 100);
weight = (400,1500);
  car = createSprite(50, 250, 20, 20);
  car.velocityX = speed;
   wall = createSprite(1550, 250, 15, height / 8);
   wall.shapeColor = (80, 80, 80);

   car1 = createSprite(50, 150, 20, 20);
   car1.velocityX = speed;
   wall1 = createSprite(1550, 150, 15, height / 8);
   wall1.shapeColor = (80, 80, 80);

  car2 = createSprite(50, 50, 20, 20);
  car2.velocityX = speed;
   wall2 = createSprite(1550, 50, 15, height / 8);
   wall2.shapeColor = (80, 80, 80);

   car3 = createSprite(50, 350, 20, 20);
   car3.velocityX = speed;
   wall3 = createSprite(1550, 350, 15, height / 8);
   wall3.shapeColor = (80, 80, 80);

   
 }

  function draw(){
  background(0,0,0);  
  if((wall.x- car.x)<(car.width+wall.width)/4){
    car.velocityX=0;
    var deformation= 0.5 * weight * speed * speed/22500;
    if(deformation>180){
      car.shapeColor= color(255,0, 0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(124,252,0);
    }
   }
   if((wall.x- car1.x)<(car1.width+wall.width)/4){
    car1.velocityX=0;
    var deformation= 0.5 * weight * speed * speed/22509;
    if(deformation>180){
      car1.shapeColor= color(255, 0, 0);
    }
    if(deformation<180 && deformation>100){
      car1.shapeColor=(255,255,0);
    }
    if(deformation<100){
      car1.shapeColor=color(124,252,0);
    }
   }
   if((wall.x- car2.x)<(car.width+wall.width)/4){
    car2.velocityX=0;
    var deformation= 0.5 * weight * speed * speed/22509;
    if(deformation>180){
      car2.shapeColor= color(255,0, 0);
    }
    if(deformation<180 && deformation>100){
      car2.shapeColor=(255,255,0);
    }
    if(deformation<100){
      car2.shapeColor=color(124,252,0);
    }
   }
   if((wall.x- car3.x)<(car.width+wall.width)/4){
    car3.velocityX=0;
    var deformation= 0.5 * weight * speed * speed/22509;
    if(deformation>180){
      car3.shapeColor= color(255,0, 0);
    }
    if(deformation<180 && deformation>100){
      car3.shapeColor=(255,255,0);
    }
    if(deformation<100){
      car3.shapeColor=color(124,252,0);
    }
   }

  drawSprites();

}
