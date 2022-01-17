var ghost, ghostImg
var climber, climberImg
var tower, towerImg
var borderLeft,borderRight
var endbackground
var gameoverImg, gameover
var gamestate = "play"

function preload(){
  ghostImg = loadImage("ghost-standing.png")
  climberImg = loadImage("climber.png")
  towerImg = loadImage("tower.png")
  gameoverImg = loadImage("game over.png")
}

function setup(){
  createCanvas(600,600);
  background(0)

  tower = createSprite(300,300,300,300)
  tower.velocityY = 3
  tower.addImage(towerImg)
  
borderRight = createSprite(550,300,20,700)
borderLeft = createSprite(40,300,20,700)


  climber = createSprite(300,-20,200,200)
  climber.addImage(climberImg) 
  climbersGroup = new Group();

  ghost = createSprite(300,500)
  ghost.scale = 0.3
  ghost.addImage("ghost",ghostImg)

  endbackground = createSprite(600,600,6000,6000)
  endbackground.visible = false

  gameover = createSprite(300,250,200,200)
  gameover.visible=false
  gameover.addImage(gameoverImg)




}

function draw(){

if (gamestate === "play"){
  if(keyDown("left_arrow")){
    ghost.velocityX = -5
  }
  if(keyDown("right_arrow")){
    ghost.velocityX = 5
  }




if(tower.y > 400){
  tower.y = 275}

  tower.velocityY = 3
  
if(borderLeft.isTouching(ghost)){
ghost.velocityX = 5
}
if(borderRight.isTouching(ghost)){
  ghost.velocityX = -5
  }


  borderRight.visible = false
  borderLeft.visible = false

  if(climber.isTouching(ghost)){
    gamestate = "end"
  
  }
}

spawnDoors()


if (gamestate === "end"){
gameover.visible=true
  endbackground.visible=true

}

climber.debug=true

  drawSprites()
}

function spawnDoors(){
  if (frameCount % 240 === 0) {
    climber.x = Math.round(random(120,400));
    climbersGroup.add(climber);
    climber.velocityY = 5
    climber.lifetime = 100;
  
    
  }
}



