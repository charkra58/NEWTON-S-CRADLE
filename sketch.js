
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1
var bobObject2
var BobObject3
var bobObject4
var bobObject5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	bobObj1 = new BobObject1(300,600,50,50)
	bobObj2 = new BobObject2(320,620,50,50)
	bobObj3 = new BobObject3(340,640,50,50)
	bobObj4 = new bobObject4(360,660,50,50)
	bobObj5 = new bobObject5(380,680,50,50)



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



