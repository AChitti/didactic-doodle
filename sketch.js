
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ground, binBottom;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=new Ball(100,350,40)
	binBottom=new Trashcan(1000,height-22,200,20);
	ground=new Ground(600,height,1200,20);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("gold");
  ball.display();
  ground.display();
  binBottom.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode==UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:85,y:-85})
	}
}


