var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
//  createCanvas(windowWidth, windowHeight);
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 10  ;
  
  ghost= createSprite(200,200,50,50)
  ghost.scale=0.3
  ghost.addImage("ghost",ghostImg)
  
  doorsGroup=new Group()
  climbersGroup=new Group()
  invisibleBlockGroup = new Group()
}

function draw() {
  background(200);
  
  if(gameState==="play"){
    if (keyDown("left_arrow")){
      ghost.x-=3
    }
    if (keyDown("right_arrow")){
      ghost.x+=3
    }
    if (keyDown("space")){
      ghost.velocityY=-10
    }
    ghost.velocityY+=0.8     
  
  if(tower.y > 400){
      tower.y = 300
    }
    spawnDoors();
Speed()
console.log(frameCount)
    if (climbersGroup.isTouching(ghost)){
      ghost.velocityY=0
    }

    if (invisibleBlockGroup.isTouching(ghost)||ghost.y>600){
ghost.destroy()
gameState="end"
    }
    drawSprites()
}
if (gameState==="end"){
  stroke("yellow");
  fill("yellow")
  textSize(30)
  text("game over",230,250,)
}
}

function spawnDoors(){
  if (frameCount%50===0){
    var door=createSprite(200,-50)
    var climber=createSprite(200,10)
    var invisibleBlock=createSprite(200,15)
    invisibleBlock.width=climber.width
    invisibleBlock.height=2
    door.x=Math.round(random(120,400))
    climber.x=door.x
    invisibleBlock.x=door.x;
    door.addImage(doorImg)
    climber.addImage(climberImg)
    door.velocityY=10
    climber.velocityY=10
    invisibleBlock.velocityY=10
    ghost.depth=door.depth;
    ghost.depth+=1
    door.lifetime=800;
    climber.lifetime=800;
    invisibleBlock.lifetime=800;
    doorsGroup.add(door)
    climbersGroup.add(climber)
    invisibleBlockGroup.add(invisibleBlock)
  }
}  
function Speed(){
  if (frameCount%100===0){
    var door=createSprite(200,-50)
    var climber=createSprite(200,10)
    var invisibleBlock=createSprite(200,15)
    invisibleBlock.width=climber.width
    invisibleBlock.height=2
    door.x=Math.round(random(120,400))
    climber.x=door.x
    invisibleBlock.x=door.x;
    door.addImage(doorImg)
    climber.addImage(climberImg)
    door.velocityY+=5
    climber.velocityY+=5
    invisibleBlock.velocityY+=5
    ghost.depth=door.depth;
    ghost.depth+=1
    door.lifetime=800;
    climber.lifetime=800;
    invisibleBlock.lifetime=800;
    doorsGroup.add(door)
    climbersGroup.add(climber)
    invisibleBlockGroup.add(invisibleBlock)
  }     
}