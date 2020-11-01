var backgroundIMG, roadImg, playerImg, enemiesImg, cityImg;
var road, player, enemies, obstacles, city;
var obstacleImg1, obstacleImg2, obstacleImg3;
var enemyImg
var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload (){
backgroundIMG = loadImage("Objects/722735.png");
roadImg = loadImage("Objects/namans looping road 3.png");
playerImg = loadAnimation("Objects/run0.png","Objects/run1.png","Objects/run2.png","Objects/run3.png","Objects/run4.png","Objects/run5.png","Objects/run6.png","Objects/run7.png","Objects/run8.png", "Objects/run9.png");
playerJumpImg = loadAnimation("Objects/jump.png");
obstacleImg1 = loadImage("Objects/Barrel1.png");
obstacleImg2 = loadImage("Objects/Barrel2.png");
obstacleImg3 = loadImage("Objects/Box.png");
enemyImg = loadImage("Objects/enemy1.png");
}


function setup() {
  createCanvas(1360,626);
  road = createSprite(680,512, 1360, 100);
  road.addImage(roadImg);
  road.scale = 0.4;  
  road.velocityX = -3;
  road.x = road.width/2;

  player = createSprite(500, 375, 20, 20);
  player.scale = 0.25;
  player.addAnimation("running",playerImg);

  
  
}

function draw() {
  background(backgroundIMG);  

  if (road.x < 0){
    road.x = road.width/2;
  }

  if (keyDown(DOWN_ARROW)){
    player.y = player.y +10;
  }
  if (keyDown(UP_ARROW)){
    player.y = player.y -10;
  }

  if(keyDown("space")){
    player.changeAnimation("jump", playerJumpImg);
  }

spawnObstacles();
spawnObstacles2();
spawnObstacles3();
  
  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 200 === 0) {
    var obstacle = createSprite(600,400,10,40);
    obstacle.velocityX = -3;
    obstacle.scale = 0.3;

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle.addImage(obstacleImg1);
              break;
      case 2: obstacle.addImage(obstacleImg2);
              break;
      case 3: obstacle.addImage(obstacleImg3);
              break;
  
    }
  }
}

function spawnObstacles2() {
  if(frameCount % 200 === 0) {
    var obstacle = createSprite(600,300,10,40);
    obstacle.velocityX = -3;
    obstacle.scale = 0.3;

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle.addImage(obstacleImg1);
              break;
      case 2: obstacle.addImage(obstacleImg2);
              break;
      case 3: obstacle.addImage(obstacleImg3);
              break;
  
    }
  }
}

function spawnObstacles3() {
  if(frameCount % 200 === 0) {
    var obstacle = createSprite(600,200,10,40);
    obstacle.velocityX = -3;
    obstacle.scale = 0.3;

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle.addImage(obstacleImg1);
              break;
      case 2: obstacle.addImage(obstacleImg2);
              break;
      case 3: obstacle.addImage(obstacleImg3);
              break;
  
    }
  }
}