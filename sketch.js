
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running
var ground;
var banana ,bananaImage, obstacle, obstacleImage
var survivalTime = 0;
var obstacleGroup;
var bananaGroup;

function preload(){
  
  
  monkey_running =    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(50,300,30,15);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(0,340,800,5);
  ground.velocityX = -2;
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
  
}


function draw() {
  background(220);
  
  if(gameState === PLAY){
 textSize(25);
 text("survivalTime: " + survivalTime, 100,50);
  survivalTime = survivalTime + Math.round(random(getFrameRate()/60));
    
  if(ground.x<0){
    ground.x = 400;
  }
  
  if(keyDown("space") && monkey.y >= 300){
    monkey.velocityY = -16;
    //onkey.gravity = 2;
      
  }
    
   monkey.velocityY = monkey.velocityY + 0.8;
    
  monkey.collide(ground);
  
  banana();

  obstacles();
  }
  
   
    /* if(obstacleGroup .isTouching(monkey)){
    gameState = END;
  }
 
  if(gameState === END){
    ground.velocityX = 0;
    obstacleGroup.setVelocityXEach = 0;
     obstacleGroup.setVelocityYEach = 0;
    
    monkey.velocityY = 0;
    bananaGroup.setVelocityXEach = 0;
      
  }  */
  
drawSprites();  
 
}

function banana(){
  if(frameCount % 80 === 0){
    var banana = createSprite(260,300,15,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.09;
    banana.velocityX = -2;
    
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount % 300 === 0){
    var obstacles = createSprite(270,320,18,11);
    obstacles.addImage(obstaceImage);
    obstacles.scale = 0.1;
    obstacles.velocityX = -4;
    obstacles.lifetime = 100;
    
    obstacleGroup.add(obstacles);
  }
}


