// division clas
class Divisions{

// constructor
constructor(x, y, w, h) {
var options = {
isStatic: true
}

// this.'s
this.body = Bodies.rectangle(x, y, w, h, options);
this.w = w;
this.h = h;

// add to world
World.add(world, this.body);
}

// display
display(){
var pos = this.body.position;
rectMode(CENTER);
fill("white");
rect(pos.x, pos.y, this.w, this.h);
}};