
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	
	//Create the Bodies Here.

	engine = Engine.create();
	world = engine.world;
	var paperBall = new paperBall(780,687,20,20);
	paperBallSprite.addImage(paperIMG)
	ball.ellipse(100,687,10,10);
	var bin = new bin(780,687,200,10);
	binSprite.addImage(binIMG)
	World.add(world,ball);
	World.add(world,bin);
	World.add(world,bottomBody);
	World.add(world,leftBody);
	World.add(world,rightBody);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW) {


	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});


}

}

