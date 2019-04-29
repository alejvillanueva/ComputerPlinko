function levelDropping() {
  fallTime += 1;
  rendBoxes();
  rendLines();
  rendKey();
  rendYellowTris();
  ball.show();
  for (var i = 0; i < conveyor_balls.length; i++) {
    conveyor_balls[i].update();
    conveyor_balls[i].show();
  }
  ballVelocityCheck();
}

function levelDroppingmousePressed() {
  // hangin' around
}

function levelDroppingkeyPressed() {
  // hangin' around
}

function rendYellowTris() {
  // console.log(world);
  fill("yellow");
  for (var i = 0; i < world.bodies.length; i++) {
    if (world.bodies[i].label == "falltri") {
      var verts = world.bodies[i].vertices;
      triangle(verts[0].x, verts[0].y, verts[1].x, verts[1].y, verts[2].x, verts[2].y);
    }
  }
}

function ballVelocityCheck() {
  if (dist(ball.body.position.x, ball.body.position.y, ball.body.positionPrev.x, ball.body.positionPrev.y) < .05) {
    timeResting += 1;
  } else {
    timeResting = 0;
  }
  if (fallTime > 800 || timeResting > 40 /*|| (timeResting > 30 && ball.body.position.y < gHeight - boxheight)*/) {
    if (ball.column() != goal || ball.body.position.y < gHeight - boxheight/2) {
      lost = true;
      slimecolor = "red";
    } else {
      won = true;
      slimecolor = "limegreen";
    }
    states = {levelPlay:false, levelDropping:false, levelDropped:true};
  }
}