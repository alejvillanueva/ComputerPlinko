function drawSelector() {
	background("#bababf");
	var rowitem = 10;
	var levwid = gWidth/rowitem;
	for (var i = 0; i < levels.length - 1; i++) {
		strokeWeight(1);
		stroke("#FDC3C2");
		if (mouseRect(levwid * (i % rowitem), levwid * 1.3 * floor(i/rowitem), levwid, levwid * 1.3)) {
			fill("#FDC3C2");
		} else {
			fill("#65666B");
		}
		rect(levwid * (i % rowitem), levwid * 1.3 * floor(i/rowitem), levwid, levwid * 1.3);
		fill("white");
		noStroke();
		textSize(40);
		text(i + 1, levwid * (i % rowitem) + levwid * .5, levwid * 1.3 * floor(i/rowitem) + levwid * .5);
		threeStar(levwid * (i % rowitem) + levwid * .5, levwid * 1.3 * floor(i/rowitem) + levwid , 9, levelArrangements[i].stars);

		if (mouseIsPressed && mouseRect(levwid * (i % rowitem), levwid * 1.3 * floor(i/rowitem), levwid, levwid * 1.3)) {
			states = {levelSelector:false, levelDropping:false, levelDropped:false, levelPlay: true};
			trisLeft.show();
  			trisLeft_text.show();
			levelSetup(i);
		}
	}
	strokeWeight(1);
	stroke("#FDC3C2");
	line(gWidth - 1, 0, gWidth - 1, floor(levels.length/rowitem) * levwid * 1.3);
}

function mouseRect(rx, ry, rw, rh) {
	return mouseX < rx + rw && mouseX > rx && mouseY < ry + rh && mouseY > ry;
}