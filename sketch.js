var robot,robot_running;
var backgroundPic,backroundImage;
var bc,bc1,sc,sc1;
var bcImage,bc1Image,scImage,sc1Image;
var obstaclesGroup;
var cloudGroup;
var line1,line2;


function preload(){
  robot_running=loadAnimation("robot1.png","robot2.png");
  backgroundImage=loadImage("background.png");
  bcImage=loadImage("big colom.png");
  bc1Image=loadImage("colom 1.1.png");
   scImage=loadImage("colom 2.2.png");
  sc1Image=loadImage("colom3.png");
}

function setup() {
  createCanvas( 600, 400);
 
  robot = createSprite(100,278,20,50);
robot.addAnimation("running",robot_running);
robot.scale = 0.35;
  
  backgroundpic = createSprite(0,0,600,400);
 backgroundpic.addImage("background",backgroundImage);
 backgroundpic.x = backgroundpic.width/2;
 backgroundpic.scale=2.5;

 
  
   backgroundpic.depth = robot.depth;
    robot.depth = robot.depth + 1;
  
  line1=createSprite(300,157,600,10);
  line1.shapeColor=("red");
  
   
  line2=createSprite(300,308,600,10);
 
  line2.visible= false;

  obstaclesGroup = new Group();
  cloudGroup = new Group();
  
}


function draw() {
  background(220);
  
 
  
 backgroundpic.velocityX=-3;
  if (backgroundpic.x < 95) {
  backgroundpic.x = backgroundpic.width / 2;
}
 
  if(keyDown("space")){
    robot.velocityY=-3;
  }
  robot.velocityY = robot.velocityY + 0.4;
  robot.velocitY=-4;
  
   
  
    
  
  
  spawnObstacles();
  spawnClouds();
  
  
  
  drawSprites();
}


function spawnObstacles(){
 if (frameCount % 20 === 0){
   var obstacle = createSprite(600,205,10,40);
   obstacle.velocityX = -6;

   
    // //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle.addImage(bcImage);
              break;
      case 2: obstacle.addImage(bc1Image);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 1;
    obstacle.lifetime = 300;
   
   //adding obstacles to the group
   obstaclesGroup.add(obstacle);
 }
}


function spawnClouds(){
 if (frameCount % 20 === 0){
   var cloud = createSprite(600,370,10,40);
   cloud.velocityX = -6;

   
    // //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: cloud.addImage(scImage);
              break;
      case 2: cloud.addImage(sc1Image);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    cloud.scale = 1;
    cloud.lifetime = 300;
   
   //adding obstacles to the group
   cloudGroup.add(cloud);
 }
}





  
