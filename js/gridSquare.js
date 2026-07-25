/**
 * By Corey Ford 2024
 * All rights reserved
 */

class GridSquare {
  constructor(x, y, squareSize, colour = [0,0,0,0]) {
    this.x = x + 250;
    this.y = y + 205;
    this.squareSize = squareSize - 0;
    this.colour = colour;
  }


  setColour(r, g, b) {
    if (typeof r === "string") {
      this.colour = r;
    } else {
      this.colour = [r, g, b, 255];
    }
  }

 draw(showText = false, blockAnimations = false) {
    if (blockAnimations) {  
    }

    push();
    noStroke();
    fill(this.colour);
    ellipse(this.x - 0.5, this.y - 0.5, this.squareSize + 1, this.squareSize + 1);

    if (showText) {
      fill(0);
      textSize(5);
      textAlign(CENTER);
   
      // Display the coordinates at the center of the square
      text( `(${(this.x - 250) / (this.squareSize + 5)}, ${(this.y - 180) / (this.squareSize + 5)})`,
        this.x + this.squareSize / 2,
        this.y + this.squareSize / 2
      );
      textAlign(LEFT);
    }
    pop();
  }
}

export function makeGrid(width, height, squareSize) {
  let grid = [];
  for (let x = 0; x < width; x += squareSize) {
    let row = [];
    for (let y = 0; y < height; y += squareSize) {
      let mySquare = new GridSquare(x, y, squareSize);
      row.push(mySquare);
    }
    grid.push(row);
  }
  return grid;
}

