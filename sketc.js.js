let symmetry = 6;
let angle = 360 / symmetry;
let points = [];

function setup() {
  createCanvas(720, 400);
  angleMode(DEGREES);
  background(50);
  stroke(255);
  strokeWeight(2);
  noFill();
  frameRate(60);
}

function draw() {
  translate(width / 2, height / 2);

  // Only record points while mouse is pressed inside canvas
  if (mouseIsPressed && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let x = mouseX - width / 2;
    let y = mouseY - height / 2;
    points.push(createVector(x, y));

    for (let i = 0; i < symmetry; i++) {
      rotate(angle);
      drawSmoothLine(points);

      push();
      scale(1, -1); // Mirror vertically
      drawSmoothLine(points);
      pop();
    }
  } else {
    // When mouse is released, reset the stroke
    points = [];
  }
}

function drawSmoothLine(pts) {
  beginShape();
  for (let i = 0; i < pts.length; i++) {
    curveVertex(pts[i].x, pts[i].y);
  }
  endShape();
}
