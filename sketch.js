const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var engine, world;
var bola
var piso
var teto
var paredeE
var paredeD

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var bola_options = {
    restitution: 0.7,
      
  }

  bola = Bodies.circle(200,100,20,bola_options);
  World.add(world,bola);

  piso = new Parede(200,400,400,10);

}

function draw() {
  background("black");  

  Engine.update(engine);


  push();
  strokeWeight(2)
  stroke("purple");
  noFill()
  ellipseMode(RADIUS);
  ellipse(bola.position.x,bola.position.y,20);
  pop();


  piso.show();
  
  
}