var PLAY=1;
var END=0;
var gameState=1;

var sword,fruit1,fruit2,fruit3,fruit4,monster1,monster2;
var swordImage,monsterImage1,monsterImage2,gameoverImage;
var fruitGroup,enemyGroup;
var gameover;

var score=0;


function preload() {
  
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  monsterImage1 = loadImage("alien1.png")
  swordImage = loadImage("sword.png");
  gameoverImage = loadImage("gameover.png")
  
  backgroundImage = loadImage("Background.jpg")

  
}

function setup() {
  
  createCanvas(600,400);
  
  bg=createSprite(0,0,600,600);
  bg.addImage(backgroundImage);
  bg.scale=4;
  
  sword = createSprite(40,200,20,20);  
  sword.scale=0.7;
  sword.addImage(swordImage);
  
  fruitGroup = new Group();
  enemyGroup = new Group();
  
}

function draw() {
  background(0);
  
  if(gameState === PLAY){
 
  Enemy();
  fruits();
     
  sword.y=World.mouseY;
  sword.x=World.mouseX;
  
     
   if(fruitGroup.isTouching(sword)) {
    fruitGroup.destroyEach();
    score=score+1;
   }
     
 else if(enemyGroup.isTouching(sword)) {
      
  gameState = END;
    
  fruitGroup.destroyEach();
  enemyGroup.destroyEach();
  fruitGroup.velocityX=0;
  enemyGroup.velocityX=0;
   
  sword.addImage(gameoverImage);
  sword.scale=1.7;
  sword.x=295;
  sword.y=195;
 }
  }
  
  drawSprites();
  textFont("Lucida Handwriting");
  textSize(20);
  fill("white");
  text("Score : " + score,500,50);
  
}

function fruits() {
  
  if(World.frameCount%80===0){ 
   fruit=createSprite(400,200,20,20);
   fruit.scale=0.2;
   
    r=Math.round(random(1,4)); 

     if(r == 1) {
      fruit.addImage(fruit1);
     } 
     else if (r == 2){
      fruit.addImage(fruit2)
     } 
     else if (r == 3){
      fruit.addImage(fruit3)
     } 
     else if (r == 4){
      fruit.addImage(fruit4)
     }

     fruit.y=Math.round(random(50,340));
     fruit.velocityX=-7;
     fruit.setlifetime=100;

     fruitGroup.add(fruit);
  }
  
}

 function Enemy(){
   
 if(World.frameCount%200 === 0) { 
  monster1=createSprite(600,200,20,20);
  monster1.addAnimation("moving1", monsterImage1);
  monster1.y=Math.round(random(25,390)); 
  monster1.velocityX=-8;
  monster1.setlifetime=50;

  enemyGroup.add(monster1);  

   }
   


 }

