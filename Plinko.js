// plinko class
class Plinko{

// constructor
constructor(x, y) {
var options = {
restitution: 1,
friction: 0,
isStatic:true
}

// this.'s
this.r = 5;
this.body = Bodies.circle(x, y, this.r, options);

// add to world
World.add(world, this.body);
}

// display
display() {
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x, pos.y);
rotate(angle);
imageMode(CENTER);
fill("white");
ellipseMode(RADIUS);
ellipse(0,0,this.r,this.r);
pop();
}};