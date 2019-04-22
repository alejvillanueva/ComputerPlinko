function levelSetup(l) {
  level = l;
  resetGrid();
  // console.log(levels[l]["permitted"]);
  // permitted = Object.assign(levels[l]["permitted"], permitted);
  permitted = deepcopy(levels[l]["permitted"]);
  console.log(permitted);
  goal = deepcopy(levels[l]["goal"]);
  console.log(levels[l]["boxes"]);
  for (var i = 0; i < levels[l]["boxes"].length; i++) {
      boxes[levels[l]["boxes"][i][0]][levels[l]["boxes"][i][1]] = new boxObj(levels[l]["boxes"][i][2], levels[l]["boxes"][i][3]);
  }
  placed = 0;
}

function resetGrid() {
  for (var x = 0; x < box_row; x++) {
    for (var y = 1; y < box_row; y++) {
      boxes[x][y] = new boxObj();
    }
  }
}