function levelDropping() {
  fallTime += 1;
  rendBoxes();
  rendLines();
  rendKey();
  rendYellowTris();
  
  if (level === 18) {
    var q = 46.666666666666664;
    stroke("yellow");
    strokeWeight(2);
    line(9.25 * q, 4.5 * q, 9.25 * q, 12.5 * q);
    line(9.75 * q, 4.5 * q, 9.75 * q, 12.5 * q);
    noStroke();
    for (var i = 0; i < conveyor_balls.length; i++) {
      conveyor_balls[i].update();
      conveyor_balls[i].show();
    }
    fill("purple");
    ellipse(9.25 * q, 4.5 * q, 20, 20);
    ellipse(9.75 * q, 4.5 * q, 20, 20);
    ellipse(9.25 * q, 12.5 * q, 20, 20);
    ellipse(9.75 * q, 12.5 * q, 20, 20);
  }
  for (var i = 0; i < wormhole_pairs.length; i++) {
    wormhole_pairs[i].update();
    wormhole_pairs[i].show();
  }
  ball.show();
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
      slimecolor = "#F00713";
    } else {
      won = true;
      slimecolor = "#62CC85";
    }
    states = {levelPlay:false, levelDropping:false, levelDropped:true};
  }
}