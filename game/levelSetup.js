function levelSetup(l) {

  if (l === levels.length - 1) {
    states = {mainMenu: true, levelSelector:false, levelDropping:false, levelDropped:false, levelPlay: false};
    return ;
  }

  level = l;
  box_col = levels[level]["box_col"];
  ball.setColumn(levels[l]["ball_start"]);
  

  if (levelArrangements[l]["played"]) {
    boxes = levelArrangements[l]["setup"];
    placed = levelArrangements[l]["placed"];
  } else {
    placed = 0;
    resetGrid();
    for (var i = 0; i < levels[l]["boxes"].length; i++) {
      boxes[levels[l]["boxes"][i][0]][levels[l]["boxes"][i][1]] = new boxObj(levels[l]["boxes"][i][2], levels[l]["boxes"][i][3]);
    }
    levelArrangements[l]["played"] = true;
  }

  wormhole_pairs = [];
  if (levels[l].hasOwnProperty("wormhole_pairs")) {
    for (var i = 0; i < levels[l]["wormhole_pairs"].length; i++) {
      var new_wh_pair = new wh_pair(levels[l]["wormhole_pairs"][i]);
      wormhole_pairs.push(new_wh_pair);
    }
  }

  
  conveyor_balls = [];
  conveyor_endings = [];
  if (levels[l].hasOwnProperty("conveyor_balls")) {
    for (var i = 0; i < levels[l]["conveyor_balls"].length; i++) {
      // console.log(levels[l]["conveyor_balls"][i].x);
      // console.log(boxheight);
      var x1 = levels[l]["conveyor_balls"][i]["wh_to_x"];
      var y1 = levels[l]["conveyor_balls"][i]["wh_to_y"];
      var x2 = levels[l]["conveyor_balls"][i]["wh_from_x"];
      var y2 = levels[l]["conveyor_balls"][i]["wh_from_y"];
      var balls_between = levels[l]["conveyor_balls"][i]["num_between"];

      conveyor_endings.push(createVector(x1, y1));
      conveyor_endings.push(createVector(x2, y2));

      for (var bb = 0; bb < balls_between; bb++) {
        var lx = lerp(x1, x2 , bb/balls_between);
        var ly = lerp(y1, y2 , bb/balls_between);
        conveyor_balls.push(
        new Ball(
          lx,
          ly,
          levels[l]["conveyor_balls"][i]["r"],
          levels[l]["conveyor_balls"][i]
          )
        )
      }
    }
  }
  permitted = deepcopy(levels[l]["permitted"][0]) - deepcopy(placed);
  goal = deepcopy(levels[l]["goal"]);

  var perm = permitted;
  trisLeft.html(perm);
}

function resetGrid() {
  conveyor_balls = [];
  for (var x = 0; x < box_row; x++) {
    for (var y = 1; y < box_row; y++) {
      boxes[x][y] = new boxObj();
    }
  }
}