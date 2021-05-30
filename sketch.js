var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;

// arrays
var particles = [];
var plinkos = [];
var divisions=[];

// variables
var divisionHeight=300;
var score =0;

// function setup
function setup(){

// create canvas
createCanvas(800, 800);

// engine and world
engine = Engine.create();
world = engine.world;
ground = new Ground(width/2,height,width,20);

// divisions
for (var k = 0; k <=width; k = k + 80) {
divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

// Plinkos line 1
for (var j = 75; j <=width; j=j+50) {
plinkos.push(new Plinko(j,75));
}

// Plinkos line 2
for (var j = 50; j <=width-10; j=j+50) {
plinkos.push(new Plinko(j,175));
}

// Plinkos line 3
for (var j = 75; j <=width; j=j+50) {
plinkos.push(new Plinko(j,275));
}

// Plinkos line 4
for (var j = 50; j <=width-10; j=j+50) {
plinkos.push(new Plinko(j,375));
}}

// function draw
function draw(){

// background
background("black");

//score text
textSize(20)
text("Score : "+score,20,30);

// engine update
Engine.update(engine);
 
for (var i = 0; i < plinkos.length; i = i+1) {
plinkos[i].display();
}

// score and new particle
if(frameCount%60===0){
particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
score = score+1;
}


for (var j = 0; j < particles.length; j = j+1) {
particles[j].display();
}

for (var k = 0; k < divisions.length; k = k+1) {
divisions[k].display();
}}