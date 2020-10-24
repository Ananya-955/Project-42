var hr, min,sec;
var hrAngle, minAngle, secAngle;


function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  

}

function draw() {
  background(255,255,255);  

  translate(200,200);
  rotate(-90);
  hr=hour();
  min=minute();
  sec=second();

  stroke(0);
  fill(255);
  strokeWeight(10);
  ellipse(0,0,320,320);

  hrAngle=map(hr % 12, 0,12,0,360);
  minAngle=map(min, 0,60,0,360);
  secAngle=map(sec, 0, 60,0,360);

  push();
  rotate(secAngle);
  stroke("red");
  strokeWeight(8);
  line(0,0 ,100,0);
  pop();

  push();
  rotate(minAngle);
  stroke("blue");
  strokeWeight(8);
  line(0,0 ,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("green");
  strokeWeight(8);
  line(0,0 ,50,0);
  pop();

  drawSprites();
}