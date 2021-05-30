// paticle class
class Particle{

// constructor
constructor(x, y,r){

// options
var options ={
restitution:0.4
}

// this.'s
this.r=r;
this.body = Bodies.circle(x, y, this.r,options);       
this.color=color(random(0, 255), random(0, 255), random(0, 255));

// add to world
World.add(world, this.body);
}

// display
display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x, pos.y);
rotate(angle);
fill(this.color)
ellipseMode(RADIUS);
ellipse(0, 0, this.r,this.r);
pop();
}};