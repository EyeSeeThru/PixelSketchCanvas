let canvasSize = 600;
let pixelSize = 10;
let pixelArray = [];

function setup() {
  createCanvas(canvasSize, canvasSize);
  
  // Initialize the pixel array
  for(let i = 0; i < canvasSize; i += pixelSize) {
    let row = [];
    for(let j = 0; j < canvasSize; j += pixelSize) {
      row.push(0);
    }
    pixelArray.push(row);
  }
}

function draw() {
  background(255);
  
  // Draw the pixels
  for(let i = 0; i < pixelArray.length; i++) {
    for(let j = 0; j < pixelArray[i].length; j++) {
      if(pixelArray[i][j] == 1) {
        fill(0);
      } else {
        fill(255);
      }
      rect(j * pixelSize, i * pixelSize, pixelSize, pixelSize);
    }
  }
}

function mouseDragged() {
  // Draw a pixel at the mouse position
  let i = floor(mouseY / pixelSize);
  let j = floor(mouseX / pixelSize);
  if(i >= 0 && i < pixelArray.length && j >= 0 && j < pixelArray[i].length) {
    pixelArray[i][j] = 1;
  }
}

function mousePressed() {
  // Erase a pixel at the mouse position
  let i = floor(mouseY / pixelSize);
  let j = floor(mouseX / pixelSize);
  if(i >= 0 && i < pixelArray.length && j >= 0 && j < pixelArray[i].length) {
    pixelArray[i][j] = 0;
  }
}
