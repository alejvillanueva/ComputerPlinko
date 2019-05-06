function levelPlay() {
  var goToSelect = false;
  checkHover();
  rendBoxes();
  rendLines();
  if (permitted != 0) {
    rendMouse();
  }
  rendLines();
  ball.show();
  if (level === 14) {
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



  // button to go back to main level-select menu
  if (mouseRect(gHeight + (gWidth - gHeight)/2 - 100, gHeight - 100, 200, 40)) {
    fill("blue");
    if (mouseIsPressed) {
      goToSelect = true;
      states = {mainMenu: true, levelSelector: false, levelDropping:false, levelDropped:false, levelPlay: false};
    }
  } else {
    fill("grey");
  }
  rect(gHeight + (gWidth - gHeight)/2 - 100, gHeight - 100, 200, 40);
  textSize(20);
  fill("white");
  text("RETURN TO MENU",gHeight + (gWidth - gHeight)/2 , gHeight - 78);
  rendKey();
  if (goToSelect) {
    background("#545861");
  }
}

function levelPlaymousePressed() {
  if (hovering[1] > 0 && hovering[1] < box_row - 1 && hovering[0] < box_col) {
    // if part of level
    if (boxes[hovering[0]][hovering[1]][hovering[2]] === 2 || boxes[hovering[0]][hovering[1]][hovering[2]] === 3) { /*nothing*/ }
    // if triangle is already added
    else if (boxes[hovering[0]][hovering[1]][hovering[2]] === 1) {
      boxes[hovering[0]][hovering[1]][hovering[2]] = 0;
      permitted += 1;
      placed -= 1;
    }
    else if (0 < permitted) {//tri not added yet
      boxes[hovering[0]][hovering[1]][hovering[2]] = 1;
      permitted -= 1;
      placed += 1;
    }
  }
}

function levelPlaykeyPressed() {
  var options = {
    restitution: 1,
    friction: 0,
    isStatic: true
  };
  if (key == " ") {
    levelArrangements[level]["setup"] = deepcopy(boxes);
    levelArrangements[level]["placed"] = deepcopy(placed);
    world.gravity.y = .8;
    addTrianglesToWorld();
    // right wall physics rectangle
    World.add(world, Bodies.rectangle(box_col * boxheight + 20, gHeight, 40, gHeight * 2, options));
    // bottom floor physics rectangle
    World.add(world, Bodies.rectangle(0, gHeight + 20, gHeight * 2, 40, options));
    // left wall physics rectangle
    World.add(world, Bodies.rectangle(-10, gHeight, 20, gHeight * 2, options));
    for (var i = 1; i < box_row; i++) {
      World.add(world, Bodies.rectangle(i * boxheight, gHeight, 2, boxheight, options));
    }
    fallTime = 0;
    states = {levelPlay:false, levelDropping:true, levelDropped:false};
  }
  if (keyCode == LEFT_ARROW) {
    ball.translateX(-1);
  }
  if (keyCode == RIGHT_ARROW) {
    ball.translateX(1);
  }
}

function rendMouse() {
  if (piecePlacing["triangle"]) {
    rendTriToBePlaced();
  }
}

function rendTriToBePlaced() {
  if (boxes[hovering[0]][hovering[1]][hovering[2]] === 1) {
    fill("#cffff0");
  } else if (boxes[hovering[0]][hovering[1]][hovering[2]] === 0) {
    fill("#767981");
  } else if (boxes[hovering[0]][hovering[1]][hovering[2]] === 3) {
    fill("yellow");
  } else {
    fill("black");
  }
  if (hovering[1] > 0 && hovering[1] < box_row - 1) {
    rendTri(hovering[0], hovering[1], hovering[2]);
  }
}


function rendBoxes() {
  for (var x = 0; x < box_row; x++) {
    for (var y = 1; y < box_row; y++) {
      for (item in { t: "t", b: "b", l: "l", r: "r" } ) {
        if (boxes[x][y][item] === 1) {
          fill(color("#1cd59c"));
          rendTri(x, y, item);
        } else if (boxes[x][y][item] === 2) {
          fill(color("black"));
          rendTri(x, y, item);
        } else if (boxes[x][y][item] === 3) {
          if (states["levelDropping"]) {
            fill(color("#757a86"));
          } else if (states["levelPlay"]) {
            fill(color("yellow"));
          }
          rendTri(x, y, item);
        }
      }
    }
  }
}