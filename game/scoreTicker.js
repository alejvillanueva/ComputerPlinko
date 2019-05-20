var scoreTicker = function(p) {
  var canv;
  var tickies = null;
  var totalTris;
  var tickerColors = ["", "#5eff93", "#ffff6b", "#f95736"];

  p.setup = function() {
    canv = p.createCanvas(350, 30);
    canv.style('z-index', 6);
    canv.position(windowWidth - 350, windowHeight - 30);
    // p.background("lime");
    canv.hide();
  }

  p.draw = function() {
    if (tickies != null && totalTris != 0) {    
      var bWid = 350/totalTris;
      var currColor = 0;
      p.noStroke();
      for (var i = 0; i < totalTris; i++) {
      	// console.log(tickerColors[calculateScore(i)]);
      	p.fill(tickerColors[calculateScore(i)]);
        p.rect(i * bWid, 0, bWid, 30);
      }
      p.stroke("#000000");
      p.strokeWeight(2);
      for (var i = 0; i < totalTris; i++) {
      	if (i < placed) {
          p.line((totalTris - i - 1) * bWid, 0, (totalTris - i) * bWid, 30);
          p.line((totalTris - i - 1) * bWid, 30, (totalTris - i) * bWid, 0);
      	}
      	if (i != 0) {
      	  p.line(i * bWid, 0, i * bWid, 30);
      	}
      }
  	} else {
      p.background("#5eff93");  
  	}
  }

  p.windowResized = function() {
    canv.position(windowWidth - 350, windowHeight - 30);
  }

  p.stopLoop = function(){
    canv.style("display", "none");
    p.noLoop();
  }

  p.reLoop = function(){
    canv.style("display", "block");
    p.loop();
  }

  p.setTicker = function(t) {
    tickies = t;
    totalTris = t[0];
  }

}