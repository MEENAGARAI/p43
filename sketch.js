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
  rotate(-90)

  push();
  rotate(sAngle);
  stroke(255,0,0);
  strokeWeight(5);
  line(0,0,150,0);
  pop();

  push();
  rotate(mAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,120,0);
  pop();

  push();
  rotate(hAngle);
  stroke(0,255,0);
  strokeWeight(9);
  line(0,0,90,0);
  pop();

  noFill()
  arc(0,0,400,400,0,sAngle);
  arc(0,0,370,370,0,mAngle);
  arc(0,0,340,340,0,hAngle);

  drawSprites();
}
