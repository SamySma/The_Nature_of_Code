class Walker {
    
    // To initialize objects
    constructor (){

        // Data for each object
        this.x = width/2;
        this.y = height/2;
        this.tx = 0;
        this.ty = 10000;
    }


    // Methods

    /**
     * show(): Draws object
     */
    show(){
        stroke(0);
        point(this.x, this.y);
    }

    

    /**
     * step(): Directs Walker to take a step.
     */
    step(){

        // let xstep = 0
        // let ystep = 0 
        // let randomNum = random(1)
        
        // Following mouse direction 50% of the time
        // if (randomNum < 0.5){

        //     xstep = (mouseX - this.x > 0) ? 1: -1;
        //     ystep = (mouseY - this.y > 0) ? 1: -1
        // }
        // else{
        //     xstep = random(-1, 1);
        //     ystep = random(-1, 1);
        // }

        // let stepSize = 10; // max step size
        // let xstep = 0;
        // let ystep = 0;

        // while (true){
        //     // Pick a random value
        //         let r1 = random(1);
        //         let probability = r1**2;
        //         let r2 = random(1);

        //     // Does it qualify? If so, you're done!
        //         if (r2 < probability) {
        //             xstep += random(-stepSize,stepSize) * r1;
        //             ystep += random(-stepSize, stepSize) * r1;
        //             break;
        //         }
        // }

        // - Perlin noise - 
        
        this.x = map(noise(this.tx), 0, 1, 0, width);
        this.y = map(noise(this.ty), 0, 1, 0, height);

        this.tx += 0.01;
        this.ty += 0.01;
    }

 }