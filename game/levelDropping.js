function levelDropping() {
  fallTime += 1;
  rendBoxes();
  rendLines();
  rendKey();
  rendYellowTris();
  
  stroke("yellow");
  strokeWeight(2);
  for (var i = 0; i < conveyor_endings.length; i += 2) {
    var x = conveyor_endings[i].x;
    var y = conveyor_endings[i].y;
    var x1 = conveyor_endings[i + 1].x;
    var y1 = conveyor_endings[i + 1].y;
    line(x * boxheight, y * boxheight, x1 * boxheight, y1 * boxheight);
  }
  noStroke();
  for (var i = 0; i < conveyor_balls.length; i++) {
    conveyor_balls[i].update();
    conveyor_balls[i].show();
  }
  fill("purple");
  for (var i = 0; i < conveyor_endings.length; i++) {
    ellipse(conveyor_endings[i].x * boxheight, conveyor_endings[i].y * boxheight, 20, 20);
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