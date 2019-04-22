function Ball(x, y, r) {
  var options = {
    restitution: 0.3,
    friction: 0,
    density: 1
  }
  this.r = r/2;
  this.body = Bodies.circle(x, y, this.r, options);
  this.body.label = "ball";
  World.add(world, this.body);
  return this;
}

Ball.prototype.show = function() {
  fill("blue");
  noStroke();
  ellipse(this.body.position.x + .5, this.body.position.y, this.r * 2);
}

Ball.prototype.translateX = function(x) {
  Matter.Body.translate(this.body, {x:x, y:0});
  if (this.body.position.x < 0 || this.body.position.x > gHeight) {
    Matter.Body.translate(this.body, {x:-x * box_row, y:0});
  }
}

Ball.prototype.column = function() {
  return floor(this.body.position.x / boxheight)
}