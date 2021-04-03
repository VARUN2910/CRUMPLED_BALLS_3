const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(840,250,20,160);
    box2 = new Box(920,340,180,20);
    box3 = new Box(1000,250,20,160);
    dustbin = new Bin(920,253,50,50);
    paper = new Ball(250,100,20,20);
    ground = new Ground(width/2,360,1200,20);
    Launcher1 = new Launcher(paper.body,{x:250, y:100});
}

function draw(){
    background(229, 229, 229);
    Engine.update(engine);
    paper.display();
    ground.display();
    box3.display();
    box2.display();
    box1.display();
    dustbin.display();
    Launcher1.display();
}
function mouseDragged(){
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  Launcher1.fly();
}