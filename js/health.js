/**
 * By Corey Ford 2024
 * All rights reserved
 */
export default class Health {
    constructor(){
        this.hunger = 0.5;
        this.sleep = 0.5;
        this.cleanliness = 0.5;
        this.fun = 0.5;
    }

    isDead(){
        // print(this.hunger);
        if (this.hunger <= 0.00001 
            && this.sleep <= 0.00001
            && this.cleanliness <= 0.00001
            && this.fun <= 0.00001){
                return true;
            }
        else{
            return false;
        }
    }

    getMood(){
        let sadThreshold = 0.25;       //if sadness reaches threshold show 'sad' image shown
        if (this.hunger <= sadThreshold 
            || this.sleep <= sadThreshold
            || this.cleanliness <= sadThreshold
            || this.fun <= sadThreshold){
                return "sad";
            }

        let happyThreshold =  0.75;    //if happines reached threshold 'happy' image shown
        if (this.hunger >= happyThreshold
            && this.sleep >= happyThreshold
            && this.cleanliness >= happyThreshold
            && this.fun >= happyThreshold){
                return "happy";
            }

        return "normal";
    }


    modifyHunger(amount){
        this.hunger+=amount;
        this.hunger = this.hunger < 0 ? 0 : this.hunger > 1 ? 1 : this.hunger;
    }

    modifySleep(amount){
        this.sleep+=amount;
        this.sleep = this.sleep < 0 ? 0 : this.sleep > 1 ? 1 : this.sleep;
    }

    modifyCleanliness(amount){
        this.cleanliness+=amount;
        this.cleanliness = this.cleanliness < 0 ? 0 : this.cleanliness > 1 ? 1 : this.cleanliness;
    }

    modifyFun(amount){
        this.fun+=amount;
        this.fun = this.fun < 0 ? 0 : this.fun > 1 ? 1 : this.fun;
    }

    randomlyReduceHealth(){
        let speed = -0.02;
        switch (int(random(0,5))) {
            case 0:
                this.modifySleep(speed);
                break;
            case 1:
                this.modifyHunger(speed);
                break;
            case 2:
                this.modifyCleanliness(speed);
                break;

            case 3:
                this.modifyFun(speed);
            default:
                //do nothing!
            }
    }

    draw(){
        textSize(25); 
        stroke("white"); // change box outline colour
        fill(221,176,255);
        rect(127,18,565,190,10);
        
        let fullBarWidth = 365;
        fill("black");
        
        strokeWeight(0);
        
        fill("white");
        text("Hunger", 200, 55);
        fill("black");
        rect(300,30,fullBarWidth,30,10); //bottom
        fill(255,212,229,);
        rect(300,30,fullBarWidth * this.hunger,30,10); //top

        fill("white");
        text("Sleep", 200, 95);
        fill("black");
        rect(300,70,fullBarWidth,30,10);
        fill(255,212,229,);
        rect(300,70,fullBarWidth * this.sleep,30,10); //top

        fill("white");
        text("Cleanliness", 200, 135); // bottom
        fill("black");
        rect(300,110,fullBarWidth,30,10);
        fill(255,212,229);
        rect(300,110,fullBarWidth * this.cleanliness,30,10); //top // created rounded rectangles by changing the fith value

        fill("white");
        text("Fun", 200, 175);
        fill("black");
        rect(300,150,fullBarWidth,30,10);
        fill(255,212,229);
        rect(300,150,fullBarWidth * this.fun,30,10); //top

        strokeWeight(50); // Set stroke weight.    
    }
}

