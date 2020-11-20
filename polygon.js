class Polygon{
    constructor(){
        var options={
            
            
             isStatic:false
        }
        
        this.body = Matter.Bodies.circle(150,400,20,options);
        World.add(world,this.body)
        Matter.Body.setDensity(this.body,5);
        
        this.image = loadImage("polygon.png");
    }
    display(){
        ellipseMode(RADIUS)
        fill("blue");
        circle(this.body.position.x,this.body.position.y,20)
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    }
}