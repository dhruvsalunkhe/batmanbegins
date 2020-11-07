class Umbrella {
    constructor(x, y) {
      var options = {
          isStatic : true,
          restitution: 0.5
      }
      this.body = Matter.Bodies.circle(x, y, 30, options);
      this.x = x;
      this.y = y;

      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(255);
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  }
  