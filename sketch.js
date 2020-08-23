var pc;
var npc,npc1,npc2,npc3;
var ground;
var pcWalking;
var backgroundIMG;
var background1;
var mode = prompt("What is Better? Greenhouse Gasses o")

function preload(){
pcWalking = loadImage("pcWalk.png");
npc = loadImage("NPC.png");
backgroundIMG = loadImage("sky.png");
}

function setup() {
  createCanvas(1000,1000);
  pc = createSprite(200, 700, 50, 50);
  pc.addImage("pcWalking",pcWalking);
  npc1 = createSprite(400,700,50,50);
  npc1.addImage("npc",npc);
  npc2 = createSprite(600,700,50,50);
  npc2.addImage("npc",npc);
  npc3 = createSprite(800,700,50,50);
  npc3.addImage("npc",npc);
  
  
}



function draw() {
  background1(255);
  
  //if(background1) { 
    //background(background1);
  //}  
 
 

  if(keyDown(LEFT_ARROW)){
    changePosition(-1,0);
}
else if(keyDown(RIGHT_ARROW)){
    changePosition(1,0);
}
else if(keyDown(UP_ARROW)){
    changePosition(0,-1);
}
  
  
  drawSprites();
}
function changePosition(x,y){
  pc.x = pc.x + x;
  pc.y = pc.y + y;
}
