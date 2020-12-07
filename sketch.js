const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tree,treeImg;
var boy, boyImg;

function preload()
{
	treeImg=loadImage("tree.png");
	boyImg=loadImage("boy.png");
}

function setup() 
{
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,480,1200,50);

    stone1 = new Stones(80,330,40,30);

    launcher1 = new Launchers(stone1.body,{x:80, y:330});
  
 	mango1 = new Mangoes(800,50,50,50);
	mango2 = new Mangoes(880,30,50,50);
	mango3 = new Mangoes(960,170,50,50);
  	mango4 = new Mangoes(860,140,50,50);
	mango5 = new Mangoes(750,130,50,50);
	mango6 = new Mangoes(620,160,50,50);
  	mango7 = new Mangoes(660,100,50,50);
  	mango8 = new Mangoes(700,20,50,50);
  
  	tree1 = createSprite(755,210);
	tree1.addImage(treeImg);
	tree1.scale=0.42;

	boy1 = createSprite(130,370);
	boy1.addImage(boyImg);
	boy1.scale=0.22;

	Engine.run(engine);
}
 
function draw() 
{
	rectMode(CENTER);
	background("skyblue");
	
	Engine.update(engine);

  	textSize(20);
	textFont("Bembo");
    strokeWeight(0.1);
    stroke("black");
    fill("black");
    text("Press Space To Hit Again!",50,50);

	detectCollision(stone1, mango1);
	detectCollision(stone1, mango2);
	detectCollision(stone1, mango3);
	detectCollision(stone1, mango4);
	detectCollision(stone1, mango5);
	detectCollision(stone1, mango6);
	detectCollision(stone1, mango7);
	detectCollision(stone1, mango8);

	ground.display();

	drawSprites();

	launcher1.display();
	stone1.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
}

function mouseDragged()
{
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
	launcher1.fly();
}

function detectCollision(lstone,lmango)
{
 	if(lstone.body.position.x - lmango.body.position.x < lmango.width + lstone.width
	&& lmango.body.position.x - lstone.body.position.x  < lmango.width + lstone.width
	&&lstone.body.position.y - lmango.body.position.y < lmango.height + lstone.height
	&& lmango.body.position.y - lstone.body.position.y < lmango.height + lstone.height)
	{
		Matter.Body.setStatic(lmango.body,false);
	}

}
 
function keyPressed()
{
	if(keyCode===32)
	{
		Matter.Body.setPosition(stone1.body,{x:80,y:330});
		launcher1.fly2(stone1.body);
	}
}