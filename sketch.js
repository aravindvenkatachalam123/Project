const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ground;
var paper;
function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,700,800,20)
	box1 = new Box(660,690,250,10);
    box2=new Box(760,640,20,100);
    box3=new Box(560,640,20,100);
  paper=new Paper(56, 46, 55, 55);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 paper.display();
  box1.display() ;
  box2.display();
  box3.display();
  ground.display();
  drawSprites();

 
}



