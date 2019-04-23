function drawSelector() {
	var rowitem = 10;
	var levwid = width/rowitem;
	for (var i = 0; i < levels.length - 1; i++) {
		strokeWeight(1);
		stroke("black");
		if (mouseRect(levwid * (i % rowitem), levwid * floor(i/rowitem), levwid, levwid)) {
			fill("#cffff0");
		} else {
			fill("#545861");
		}
		rect(levwid * (i % rowitem), levwid * floor(i/rowitem), levwid, levwid);
		fill("black");
		noStroke();
		textSize(40);
		text(i + 1, levwid * (i % rowitem) + levwid * .5, levwid * floor(i/rowitem) + levwid * .5);
		if (mouseIsPressed && mouseRect(levwid * (i % rowitem), levwid * floor(i/rowitem), levwid, levwid)) {
			states = {levelSelector:false, levelDropping:false, levelDropped:false, levelPlay: true};
			levelSetup(i);
		}
	}
}

function mouseRect(rx, ry, rw, rh) {
	return mouseX < rx + rw && mouseX > rx && mouseY < ry + rh && mouseY > ry;
}