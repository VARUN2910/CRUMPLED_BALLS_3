class Ball {
  constructor(x, y,radius) {
    var options = {
      'isStatic':false,
      'restitution':0.3,
      'friction':0.5,
      'density':1.3
    }
    this.body = Bodies.circle(x, y,radius, options);
    this.radius=radius
    this.image=loadImage("paper.png");    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    this.body.position.x=this.body.position.x
    this.body.position.y=this.body.position.y   
    push();

    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,70,70);
    pop();
  }
}
