var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var line1;
var line1,line2,sleepingline;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	line1 = new box(200,height,600,20)
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

packageBody = Bodies.circle(width/2 , 200 , 5 , restitution , isStatic )                                                                                                                      
	World.add(world, packageBody);
          	  

	//Create a Ground
	sleepingline = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, sleepingline);
	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  helicopterSprite.visible = false;
  ellipse(200,300,60,60);
}

function keyPressed() {
 if (keyCode === RIGHT_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



