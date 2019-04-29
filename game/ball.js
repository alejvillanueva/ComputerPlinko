function Ball(x, y, r, wormhole_info = false) {
  var options = {
    restitution: 0.3,
    friction: 0,
    density: 1
  }
  var wormhole_options = {
    restitution: 0.3,
    friction: 0,
    density: 1,
    isStatic: true
  }
  this.r = r/2;
  // this.body.label = "ball";
  if (wormhole_info != false) {
    this.body = Bodies.circle(x, y, this.r, wormhole_options);
    this.has_wormhole = true;
    this.wh_from_x = wormhole_info["wh_from_x"];
    this.wh_from_y = wormhole_info["wh_from_y"];
    this.wh_to_x = wormhole_info["wh_to_x"];
    this.wh_to_y = wormhole_info["wh_to_y"];
    this.x_vel = wormhole_info["x_vel"];
    this.y_vel = wormhole_info["y_vel"];
    this.body.isStatic = true;
    console.log(this.body);
  } else {
    this.body = Bodies.circle(x, y, this.r, options);
    this.has_wormhole = false;
  }
  World.add(world, this.body);
  return this;
}

Ball.prototype.update = function() {
  if (this.has_wormhole) {
    if (dist(this.body.position.x, this.body.position.y, this.wh_from_x, this.wh_from_y) < 5) {
      this.setPosition(this.wh_to_x, this.wh_to_y);
    }
    Matter.Body.setVelocity(this.body, {x: this.x_vel, y: this.y_vel});
    // this.body.force.y = -engine.world.gravity.y;
    this.setPosition(this.body.position.x + this.x_vel, this.body.position.y + this.y_vel);
  }
}

Ball.prototype.show = function() {
  fill("blue");
  if (this.has_wormhole) {
    fill("pink")
  }
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

Ball.prototype.setPosition = function(x, y) {
  Matter.Body.setPosition(this.body, {x: x, y: y})
}



