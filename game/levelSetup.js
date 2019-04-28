function levelSetup(l) {
  if (l === levels.length - 1) {
    states = {levelSelector:true, levelDropping:false, levelDropped:false, levelPlay: false};
    return ;
  }
  level = l;
  box_col = levels[level]["box_col"];
  // ball = new Ball(boxheight * (floor(box_row/2) + .5), 0, boxheight);
  ball.setColumn(levels[l]["ball_start"]);
  console.log(ball.column())
  resetGrid();
  // console.log(levels[l]["permitted"]);
  // permitted = Object.assign(levels[l]["permitted"], permitted);
  permitted = deepcopy(levels[l]["permitted"]);
  // console.log(permitted);
  goal = deepcopy(levels[l]["goal"]);
  // console.log(levels[l]["boxes"]);
  for (var i = 0; i < levels[l]["boxes"].length; i++) {
      boxes[levels[l]["boxes"][i][0]][levels[l]["boxes"][i][1]] = new boxObj(levels[l]["boxes"][i][2], levels[l]["boxes"][i][3]);
  }
  placed = 0;
}

function resetGrid() {
  for (var x = 0; x < box_row; x++) {
  // for (var x = 0; x < box_col; x++) {
    for (var y = 1; y < box_row; y++) {
      boxes[x][y] = new boxObj();
    }
  }
}