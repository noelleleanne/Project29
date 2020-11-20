class Block{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.4,
          'friction':0.1
          //'density':0.6
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("white")
      rect(0, 0, this.width, this.height);
      pop();
    }
}