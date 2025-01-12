let noiseMax = 2
let phase = 0
let zoff = 0
var xoff1 = 0
var xoff2 = 10000
let p5Canvas;
let chasingPoint;
let easing = 0.02;


P5Capture.setDefaultOptions({
  format: "gif",
  quality: 0.92,
  disableScaling: true,
  autoSaveDuration: 30,
})

function setup() {
  p5Canvas = createCanvas(1000, 1000);
  chasingPoint = createVector(0, 0);
  frameRate(30);
}

function draw() {
  // if (frameCount === 1) {
  //   const capture = P5Capture.getInstance();
  //   capture.start({
  //     format: "gif",
  //     duration: 300,
  //   });
  // }

  background(255);
  push();
  translate(width / 2, height / 2)
  stroke(255, 0, 0, 60)
  strokeWeight(4)
  noFill()
  beginShape()
  for (let a = 0; a < TWO_PI; a += 0.01) {
    let xoff = map(cos(a), -1, 1, 0, noiseMax)
    let yoff = map(sin(a), -1, 1, 0, noiseMax)
    let r = map(noise(xoff, yoff, zoff), 0, 1, width / 3, width / 2.5)

    let x = r * cos(a)
    let y = r * sin(a)

    // vertex(x-50, y)


    let targetPoint = createVector(x, y)
    let angle = atan2(targetPoint.y - chasingPoint.y, targetPoint.x - chasingPoint.x)
    chasingPoint = p5.Vector.lerp(chasingPoint, targetPoint, easing)

    push();
    translate(chasingPoint.x, chasingPoint.y);
    rotate(angle)
 
    point(0, -40);
    point(0, -10);
   point(0, 0+20);
   point(0, 0+50);
   point(0, 0+80);
   point(0, 0+110);
   point(0, 0+140);
  //  point(0, 0+170);
  //  point(0, 0+200);
  //  point(0, 0+230);
  //  point(0, 0+260);
  //  point(0, 0+290);
    fill("#FFC107")
    strokeWeight(3)
    pop();
  }
  endShape(CLOSE)

  zoff += 0.05
  pop();

  if (mouseIsPressed === true) {
    noiseMax = 10
  } else {
    noiseMax = 4
  }

  push();
  textSize(25);
  fill(255, 0, 0, 150)
  text('Welcome to the circle!', width / 2, 920);

  pop();

  textAlign(CENTER, CENTER);
  push();
  textSize(45);
  text('The person who does', width / 2, height / 2.7 + 50);
  text('not care about being', width / 2, height / 2.3 + 50);
  text('an artist is an artist.', width / 2, height / 2.0 + 50);
  textSize(20);
  textStyle(ITALIC);
  text('--Artist Manifesto', width / 2, height / 1.8 + 50);
  fill(0, 0, 0);
  pop();


}




