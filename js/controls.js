/**
 * By Corey Ford 2024
 * All rights reserved
 */
export default class Controls {
    constructor(){
        this.numControls = 4;
        this.controlCoords = [];        

        this.innerW = 120;
        this.innerH = 105;
    }

    setup(){             
        let padding = 20;
        for (let i = 0; i < this.numControls; i++) {    

            let x = 140 + i * (this.innerW + padding);
            let y = 627;

            this.controlCoords.push({ //< add the co-ordinates to the this.controlCords structure
                topLeft: { x: x, 
                           y: y },
                bottomRight: { x: x + this.innerW, 
                               y: y + this.innerH }
            });
        }
    }

    draw(){
        fill(221,176,255); // Set fill colour of rectangles.
        strokeWeight(10); // Set stroke weight.
        textSize(75); // Set text size.
        textAlign(CENTER,CENTER);//textAlign(CENTER)

        // Draw outside rectangle
        //rect(127,610,565,140,10);


        //==========================================================
        // TASK 2: EXTEND THIS CODE TO DRAW EMOJI's FOR EACH BUTTON

        for (let i = 0; i < this.numControls; ++i) { 
            rect(this.controlCoords[i].topLeft.x, //< Draw inside rectangles
                this.controlCoords[i].topLeft.y, 
                this.innerW, 
                this.innerH, 
                50);

        textAlign(CENTER,CENTER);
        textSize(45); //adjusting size
        if (i === 0) text("🍗", this.controlCoords[i].topLeft.x + this.innerW / 2, this.controlCoords[i].topLeft.y + this.innerH / 2); // Food
        if (i === 1) text("💤", this.controlCoords[i].topLeft.x + this.innerW / 2, this.controlCoords[i].topLeft.y + this.innerH / 2); // Sleep
        if (i === 2) text("🛁", this.controlCoords[i].topLeft.x + this.innerW / 2, this.controlCoords[i].topLeft.y + this.innerH / 2); // Bath
        if (i === 3) text("🥳", this.controlCoords[i].topLeft.x + this.innerW / 2, this.controlCoords[i].topLeft.y + this.innerH / 2); // Party
        }  
        //===========================================================
    }

    clicked(){

        // TASK 3===================================================================

        // 1) Create a loop for each of the controls.
        // 2) Use this.controlCoords[i] to access get the top left and bottom right 
        // co-ordinates for the current button to be clicked. Store this in a variable.
        // 3) Use the variable to check whether mouseX and mouseY are within the boundary 
        // for that rectangle.
        // 4) If clicked, return the correct emoji for that button. If not clicked, return "none";
        
        // HINT: Refer to Exercise 17 from class. A similar solution is hidden in this project.
        //https://coreys-teaching.notion.site/Conditionals-0f93375465da41c180dbec8483a2259f
        //============================================================================

        for (let i = 0; i < this.numControls; i++) {
            let button = this.controlCoords[i];

            // If the mouse position is within the button's bounds, return the corresponding emoji
            if (mouseX >= button.topLeft.x && mouseX <= button.bottomRight.x &&
                mouseY >= button.topLeft.y && mouseY <= button.bottomRight.y) {
                if (i === 0) return "🍗"; // Food button clicked
                if (i === 1) return "💤"; // Sleep button clicked
                if (i === 2) return "🛁"; // Bath button clicked
                if (i === 3) return "🥳"; // fun button clicked
            }
        }
        return "none"; // No button clicked
    }


}

