class Dustbin {
    constructor(x,y,w,h) {
        var options = {
            friction:0.5,
            restitution: 0.3,
            isStatic:false,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.image = loadImage("dustbin.png")
        World.add(world, this.body);
        this.width = w;
        World.add(world, this.width);
        this.height = h;
        World.add(world,this.height);  
        this.body.addImage = this.image;      
    }

    display(){
    var pos =this.body.position;
      rectMode(CENTER);
    //  rect(pos.x, pos.y,this.width,this.height);
    image(this.image , pos.x, pos.y,this.width,this.height);

    }
}