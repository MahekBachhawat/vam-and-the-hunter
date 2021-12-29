var vam1,vam2,Hunter,road,invisiblewall1,invisiblewall2,button
var gameState="start"


function preload() {
  roadImage=loadImage("road.png")
  vam1Image=loadImage("vam1.png")
  vam2Image=loadImage("vam2.png")
  HunterImage=loadImage("hunter.png")
  buttonImage=loadImage("playbutton.png")
}


function setup() {
  createCanvas(1800,750);

  

  road=createSprite(900,400,1000,800)
  road.addImage("roadpic",roadImage);
  road.scale=2.2;

  invisiblewall1=createSprite(280,375,10,750)
  invisiblewall2=createSprite(1000,375,10,750)
  invisiblewall1.visible=false;
  invisiblewall2.visible=false;


  vam1=createSprite(700,400)
  vam1.addImage("vam1pic",vam1Image);
  vam1.scale=0.5;

  vam2=createSprite(500,400)
  vam2.addImage("vam2pic",vam2Image);
  vam2.scale=0.5
  
  Hunter=createSprite(851,774)
  Hunter.addImage("hunterpic",HunterImage);
  Hunter.scale=0.5;
  


}

function draw() 
{
  background(30);
  
  drawSprites();
  textSize(25)
  fill("white")
  text(mouseX+","+mouseY,mouseX,mouseY)

 if(gameState==="start"){
    button=createSprite(width/2,height/2-100)
    button.addImage("buttonpic",buttonImage)
    button.scale=0.5;

    if(mousePressedOver(button)){
    gameState="play"
    }
 } 
 if(gameState==="play"){ 
   
 }

  Hunter.collide(invisiblewall1)
  Hunter.collide(invisiblewall2)
  
}




