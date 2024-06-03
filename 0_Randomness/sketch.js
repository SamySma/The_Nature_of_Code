let walker;
// An array to keep track of how often random
// numbers are picked
let randomCounts = []; 
let total = 20;
let zoff = 0.0;

let land;
let theta = 0.0;

function setup() {
  // Create a canvas of 400x400 pixels
  createCanvas(500, 500, WEBGL);
  noiseDetail(8, 0.5);


  land = new Terrain(20,800,400);

  // for (let i = 0; i < total; i++){
  //   randomCounts[i] = 0;
  // }
  
  // Slider
  // sdSlider = createSlider(1,100,50);
  // sdSlider.position(10,10);
  walker = new Walker();
  background(255);
}

// let t = 0
function draw(){
  // let n = noise(t);
  // let m = noise(t+5);
  // let x = map(n,0,1,0,width);
  // let y = map(m,0,1,0,height);
  // // noStroke();
  // fill(random(0,100),random(0,50),255,50);
  // ellipse(x,y,x,y);
  // t += 0.01;

// let  x = noise(0,width);
// circle(x,180,16);

  // walker.step();
  // walker.show();
// let sd = sdSlider.value()
//   let x = randomGaussian(250,sd)
//   let y = randomGaussian(250,sd)

//   let r = randomGaussian(127,sd)
//   let g = randomGaussian(127,sd)
//   let b = randomGaussian(127,sd)
  

//   noStroke();
//   fill(r,g,b,10)
//   circle(x,y,16)
  // loadPixels();
  // let xoff = 0.0;
  // for (let x = 0; x < width; x++) {
  //   for (let y = 0; y < height; y++) {
  //     let yoff = 0.0;
  //     let index = (x + y * width) * 4;      
  //     let bright = map(noise(xoff,yoff), 0, 1, 0, 255);
      
  //     pixels[index] = bright; // r
  //     pixels[index + 1] = bright; // g
  //     pixels[index + 2] = bright; // b
  //     pixels[index + 3] = 255; // alpha

  //     xoff += 0.01;
  //     yoff += 0.01;
  //   }
  // }
  // updatePixels();
  
  // -- LANDSCAPE --
  land.calculate();
  background(255);
  push();
  translate(0, 20, -200);
  rotateX(PI / 3);
  rotateZ(theta);
  land.render();
  pop();

  theta += 0.0025;

}
