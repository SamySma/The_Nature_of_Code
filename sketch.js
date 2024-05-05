// Define position and speed variables
let x = 0;
let speed = 3;

function setup() {
  // Create a canvas of 400x400 pixels
  createCanvas(400, 400);
}

function draw() {
  // Clear the background
  background(220);
  
  // Draw a circle
  circle(x, height / 2, 50);

  // Update the position of the circle
  x += speed;

  // Reverse the direction of the circle at the edges
  if (x > width || x < 0) {
    speed *= -1;
  }
}
