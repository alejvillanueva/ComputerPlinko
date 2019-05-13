function drawSelector() {
	background("#BABCBB");
	var rowitem = 10;
	var levwid = gWidth/rowitem;
	for (var i = 0; i < levelsBeat; i++) {
	// for (var i = 0; i < levels.length - 1; i++) {
		strokeWeight(1);
		stroke("#FDC3C2");
		if (mouseRect(levwid * (i % rowitem), levwid * floor(i/rowitem), levwid, levwid)) {
			fill("#FDC3C2");
		} else {
			fill("#65666B");
		}
		rect(levwid * (i % rowitem), levwid * floor(i/rowitem), levwid, levwid);
		fill("white");
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