class Parede{
    constructor(x,y,w,h){
        //this.
        
        var options = {
            isStatic: true
          }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;

        World.add(world,this.body);
    }

    show(){

        push();
        fill("green");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        pop();
    }
}