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
  if (wormhole_info != false) {
    this.body = Bodies.circle(x * boxheight, y * boxheight, this.r, wormhole_options);
    this.r = this.r * boxheight;
    this.has_wormhole = true;
    this.wh_from_x = wormhole_info["wh_from_x"] * boxheight;
    this.wh_from_y = wormhole_info["wh_from_y"] * boxheight;
    this.wh_to_x = wormhole_info["wh_to_x"] * boxheight;
    this.wh_to_y = wormhole_info["wh_to_y"] * boxheight;
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
  fill(101, 191, 182);
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


function wh_pair(wh_obj) {
  this.wh1 = wh_obj.wh1;
  this.wh2 = wh_obj.wh2;
  this.c = wh_obj.c;
  this.r = boxheight * 2;
  this.transport_time = 31;
  this.rot_ang = 60;
  console.log(this);
  return this;
}

wh_pair.prototype.update = function() {
  this.transport_time += 1;
  if (this.transport_time >= 31) {
    if (dist(this.wh1.x * boxheight, this.wh1.y * boxheight, ball.body.position.x, ball.body.position.y) < 35) {
      ball.setPosition(this.wh2.x * boxheight, this.wh2.y * boxheight);
      this.transport_time = 0;
    } else if (dist(this.wh2.x * boxheight, this.wh2.y * boxheight, ball.body.position.x, ball.body.position.y) < 35) {
      ball.setPosition(this.wh1.x * boxheight, this.wh1.y * boxheight);
      this.transport_time = 0;
    }
  }
}

wh_pair.prototype.show = function() {
  noStroke();
  fill(this.c);
  ellipse(this.wh1.x * boxheight, this.wh1.y * boxheight, this.r - 4, this.r - 4);
  ellipse(this.wh2.x * boxheight, this.wh2.y * boxheight, this.r - 4, this.r - 4);
  this.rot_ang += .2;

  drawspiral(this.wh1.x * boxheight, this.wh1.y * boxheight, this.r, this.rot_ang);
  drawspiral(this.wh2.x * boxheight, this.wh2.y * boxheight, this.r, this.rot_ang);
}

function drawspiral(x, y, r, angle) {
  push();
  translate(x, y);
  rotate(angle);
   image(spiral_img, 0, 0, r, r);
  pop();
}
