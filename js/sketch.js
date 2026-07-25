//* By Breana Gordon 2024
// * Extending Corey Ford 2024
 //* Extending BITPRINT (Evan Raskob) 2023
 //* All rights reserved
 //*/

// Libraries
import './../lib/p5.min.js';
import Pet from "./pet.js";
import Controls from "./controls.js";
import { makeGrid } from './gridSquare.js';

// Global Variables
let pet = new Pet();
let controls = new Controls();
let doingAction = false;
let grid, gridIsShown=false;
// TASK 4a. Create a global counter variable and set it to zero.
let actionCounter = 0; // this counter trackers how many frames an action has lasted

window.preload = function() {
  pet.preload();

}


window.setup = function() {
  createCanvas(800, 800);
  frameRate(1.5);
  background(238,203,255);
  noSmooth();
  grid = makeGrid(330, 390, 25);
  controls.setup();
}


window.draw = function() {

  if(pet.getHealth().isDead())
  {
    textSize(80);
    background("black");
    fill("pink");
    text("Game Over!",(width/2)-90,height/2);
  return;
}

    //=============================================================================
    // TASK 1:
    const animationData = pet.getDataForCurrentAnimation(); //get current animation data
    if (animationData[2] !== "no") {
        pet.setCurrentAnimation(animationData[2]); //switch animation if paired label exists
    }

 
    // draw onto the screen
    pet.draw();
    controls.draw();
    pet.getHealth().draw();

    // run animation for a fixed time when doing action
    if(doingAction){
      Counter++; // Increment counter (4b)
      if (Counter >= 3) { // Set frames limit
          pet.setCurrentAnimation('general1'); // Reset animation
          doingAction = false; //stop the action
          gridIsShown = false; 
      }

     
    }else{
      if(pet.getHealth().getMood()==='happy'){
        pet.setCurrentAnimation('happy');
      }
      if(pet.getHealth().getMood()==='sad'){
        pet.setCurrentAnimation('sad');
      }
      if(pet.getHealth().getMood()==='normal' && pet.currentAnimation !== 'general2'){
        pet.setCurrentAnimation('general1');
      }
     
      pet.getHealth().randomlyReduceHealth(); //<update health
    }

    // TASK 4b: increment the counter variable by 1 here so that it increases for each frame!

   
    //============================================================================
   
    //TASK 5: Modify the code below to draw a unique image for the final button.
   
    // Function to animate the cat moving
   
// Function to animate the sprite moving
if (gridIsShown) {
  // Step 1: Clear the grid
  for (let x = 0; x < grid.length; ++x) {
      for (let y = 0; y < grid[x].length; ++y) {
          grid[x][y].setColour(255, 255, 255); // Set all cells to white
      }
  }
  showGrid(); // Display the cleared grid

  //Fun coordinates
  const partyCoordinates = [
    [2, 2], [3, 2], [4,2],[5,2],
    [2,3],[],
    [2,4],[3,4],[4,4,],
    [2,5],

    [5,6],[5,7],[5,8],[6,8],[7,8],[7,7],[7,6],
    [8,9],[8,10],[8,11],[8,10],[9,9],[10,9],[10,10],[10,11],

  ];

  // Step 3: Apply the pattern
  for (const [x, y] of partyCoordinates) {
      if (grid[x] && grid[x][y]) { // Ensure coordinates are valid
          grid[x][y].setColour("pink"); // Set to pink
      } else {
          console.warn(`Invalid coordinate: (${x}, ${y})`);
      }
  }

  showGrid(); // Display the grid with the word 'fun'
}
}


window.mouseClicked = function(){
  const clickedEmoji = controls.clicked(mouseX, mouseY); //detect which button was clicked
 
  if(clickedEmoji !== "none" && !doingAction){
    switch (clickedEmoji) {
      case '🍗':
        pet.setCurrentAnimation("eating1");
        pet.getHealth().modifyHunger(0.2);
        break;
      case '💤':
        pet.setCurrentAnimation("bed1");
        pet.getHealth().modifySleep(0.2);
        break;
      case '🛁':
        pet.setCurrentAnimation("bath1");
        pet.getHealth().modifyCleanliness(0.2);
        break;
      case '🥳':

 //increase gift bar
        gridIsShown = true; //show the grid
         //decrease time grid shwon becuase it stays for to long after

        pet.getHealth().modifyFun(0.2);
        // Show the grid for a short period of time (e.g., 1 second)
        setTimeout(() => {
        gridIsShown = false; // Hide the grid
        showGrid(); // Update the grid to reflect the change
        }, 1000); // 1000 milliseconds = 1 second

        break;

        break;
      default:
        console.log('Option for this emoji does not exist!');
    }

    //TASK 4d: Here the animation has started so reset the counter to zero.
    Counter = 0; //reset the counter
    doingAction = true; //set the action state to true
  }
}
window.keyPressed = function(){
  if (key==='1'){
    pet.setCurrentAnimation("eating1");
    pet.getHealth().modifyHunger(0.2);
  }
  else if (key ==='2'){
    pet.setCurrentAnimation("bed1");
    pet.getHealth().modifySleep(0.2);
  }

  else if (key==='3'){
    pet.setCurrentAnimation("bath1");
    pet.getHealth().modifyCleanliness(0.2);
  }

  else if (key === '4'){
    pet.getHealth().modifyFun(0.2);
    gridIsShown = true; //show the grid
         //decrease time grid shwon becuase it stays for to long after

        pet.getHealth().modifyFun(0.2);
        // Show the grid for a short period of time (e.g., 1 second)
        setTimeout(() => {
        gridIsShown = false; // Hide the grid
        showGrid(); // Update the grid to reflect the change
        }, 1000); // 1000 milliseconds = 1 second


  }
  }
 

let showGrid = function() {
  // Clear the area for the animation grid with a white background
  fill("pink"); // Set fill color to white
 // noStroke(); // Remove the border around the rectangle
  rect(250, 180, 330, 390); // Dimensions of the animation grid area

  // Draw the grid cells on top of the white background
  for (let x = 0; x < grid.length; ++x) { // Loop through grid rows
    for (let y = 0; y < grid[x].length; ++y) { // Loop through grid columns
   
      grid[x][y].draw(false);  // Draw individual grid squares
    }
  }
};