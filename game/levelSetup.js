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
  
  if (levels[l].hasOwnProperty("conveyor_balls")) {
    for (var i = 0; i < levels[l]["conveyor_balls"].length; i++) {
      console.log(levels[l]["conveyor_balls"][i].x);
      console.log(boxheight);
      conveyor_balls.push(
        new Ball(
          levels[l]["conveyor_balls"][i]["x"],
          levels[l]["conveyor_balls"][i]["y"],
          levels[l]["conveyor_balls"][i]["r"],
          levels[l]["conveyor_balls"][i]
          )
        )
    }
  }
  permitted = deepcopy(levels[l]["permitted"]) - deepcopy(placed);
  goal = deepcopy(levels[l]["goal"]);
}

function resetGrid() {
  conveyor_balls = [];
  for (var x = 0; x < box_row; x++) {
    for (var y = 1; y < box_row; y++) {
      boxes[x][y] = new boxObj();
    }
  }
}