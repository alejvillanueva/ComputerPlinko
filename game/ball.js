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
  this.setColumn(this.column() + x);
  if (this.column() < 0) {
    this.setColumn(0);
  } else if (this.column() > box_col - 1) {
    this.setColumn(box_col - 1);
  }
}

Ball.prototype.column = function() {
  return floor(this.body.position.x / boxheight)
}

Ball.prototype.setColumn = function(new_x) {
  // takes a number 0 through box_col - 1
  Matter.Body.setPosition(this.body, {x: (new_x + .5) * boxheight, y: 0})
}








