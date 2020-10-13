
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bg = loadImage("bg.jpg")
}

function setup() {
	createCanvas(1600, 700);

    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,16000,50);
	Tree = new Tree(1200,370,1200,700);
	boy1 = new Boy(250,550)
    stone = new Stone(175,465)
    mango1 = new Mango(1300,150,50,50);
    mango2 = new Mango(1000,250,50,50);
    mango3 = new Mango(1200,100,50,50);
    mango4 = new Mango(1200,300,50,50);
    mango5 = new Mango(1250,200,50,50);
    mango6 = new Mango(1350,300,50,50);

    Matter.Body.setStatic(mango1.body,true)
  Matter.Body.setStatic(mango2.body,true)
  Matter.Body.setStatic(mango3.body,true)
  Matter.Body.setStatic(mango4.body,true)
  Matter.Body.setStatic(mango5.body,true)
  Matter.Body.setStatic(mango6.body,true)
    
    slingShot = new SlingShot(stone.body,{x:175,y:465});
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(bg);
  ground.display();
  Tree.display()
  boy1.display()
  stone.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  
  slingShot.display()
  

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);

  drawSprites();
  Matter.Body.setStatic(boy1.body)
  Matter.Body.setStatic(Tree.body)

  
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
 
  }
  function mouseReleased(){
   slingShot.fly()
  
  }
  function keyPressed(){
    if (keyCode === 32){
      slingShot = new SlingShot(stone.body,{x:175,y:465});
    }
  }
  function detectcollision(Lstone,Lmango){
    mangoBodyPosition = Lmango.body.position
    stoneBodyPosition = Lstone.body.position
      
    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
    if(distance<=Lmango.width+Lmango.height+Lstone.width+Lstone.height){
      Matter.Body.setStatic(Lmango.body,false)
     World.add(world,Lmango)
    }
  }


