function setup() {
  createCanvas(800,800);




  angleMode(DEGREES);

}

function draw() {
  background("black"); 
  
  h = hour();
  m = minute();
  s = second();
  
  sAngle = map(s,0,60,0,360);
  mAngle = map(m,0,60,0,360);
  hAngle = map(h,0,12,0,360)

  translate(width/2,height/2);

  push();
  rotate(sAngle);
  stroke(255,0,0);
  strokeWeight(5);
  line(150,0,0,0);
  pop();

  push();
  rotate(mAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(150,0,0,0);
  pop();

  push();
  rotate(hAngle);
  stroke(0,255,0);
  strokeWeight(9);
  line(150,0,0,0);
  pop();

  noFill()
  arc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);

  drawSprites();
}
