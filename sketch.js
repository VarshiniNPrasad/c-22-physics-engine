// Name aliasing
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
//bodies are used to create physics engine bodies 
//body module is used to set property to physics engine bodies

var myEngine,myWorld;
var ground,ball,ball2;

function setup() {
  createCanvas(400,400);

  //Create your own world
  myEngine= Engine.create();
  myWorld=myEngine.world;

 //Create Ground Object
 //JSON Format- KEY- VALUE Pair
 //Key-isStatic, Value- true
 var groundOptions={
   isStatic:true,
   density:1
 }
 ground= Bodies.rectangle(200,370,400,10,groundOptions);
 World.add(myWorld,ground);
 
  var ballOptions={
    density:0.05,
    restitution: 1
  }
  
 ball = Bodies.circle(100,100,20,ballOptions);
 World.add(myWorld,ball);
 ball2 = Bodies.circle(300,200,30,ballOptions);
 World.add(myWorld,ball2);

}

function draw() {
  background("black");  
  Engine.update(myEngine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  ellipseMode(RADIUS);
  ellipse(ball2.position.x,ball2.position.y,30,30);
  
}