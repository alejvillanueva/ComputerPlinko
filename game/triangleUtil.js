function collidePT(i,t,e,o,r,l,n,c) {
  // take a point x, y as first two args, then three other points in a triangle
  // (x1, y1, x2, y2, x3, y3), and returns whether they collide
  return abs((e-i)*(l-t)-(r-i)*(o-t)) + abs((r-i)*(c-t)-(n-i)*(l-t)) + 
  abs((n-i)*(o-t)-(e-i)*(c-t)) == abs((r-e)*(c-o)-(n-e)*(l-o));
}

function rendTri(x, y, tri) {
  noStroke();
  var x = boxheight * x;
  var y = boxheight * y;
  if (tri === "l") {
    triangle(x, y, x, y + boxheight, x + boxheight/2, y + boxheight/2);
  } else if (tri === "r") {
    triangle(x + boxheight, y + boxheight, x + boxheight/2, y + boxheight/2, x + boxheight, y);
  } else if (tri === "t") {
    triangle(x, y, x + boxheight, y, x + boxheight/2, y + boxheight/2);
  } else if (tri === "b") {
    triangle(x, y + boxheight, x + boxheight, y + boxheight, x + boxheight/2, y + boxheight/2);
  }
}

function boxObj(input = "", in2 = "") {
  // top, left, bottom, right
  this.t = 0; this.b = 0;
  this.l = 0; this.r = 0;
  for (var i = 0; i < input.length; i++) {
    this[input.charAt(i)] = 2;
  }
  for (var i = 0; i < in2.length; i++) {
    this[in2.charAt(i)] = 3;
  }
  return this;
}

boxObj.prototype.isEmpty = function() {
  return this.t === 0 && this.b === 0 && this.l === 0 && this.r === 0;
};

function checkHover() {
  if (mouseX >= gHeight || mouseY > gHeight) { return; }

  var x = mouseX - mouseX % boxheight;
  var y = mouseY - mouseY % boxheight;
  if (collidePT(mouseX, mouseY, x, y, x + boxheight, y, x + boxheight/2, y + boxheight/2)) {
    hovering = [floor(mouseX/boxheight), floor(mouseY/boxheight), "t"];
  }
  else if (collidePT(mouseX, mouseY, x, y + boxheight, x + boxheight, y + boxheight, x + boxheight/2, y + boxheight/2)) {
    hovering = [floor(mouseX/boxheight), floor(mouseY/boxheight), "b"];
  }
  else if (collidePT(mouseX, mouseY, x, y, x, y + boxheight, x + boxheight/2, y + boxheight/2)) {
    hovering = [floor(mouseX/boxheight), floor(mouseY/boxheight), "l"];
  }
  else if (collidePT(mouseX, mouseY, x + boxheight, y + boxheight, x + boxheight/2, y + boxheight/2, x + boxheight, y)) {
    hovering = [floor(mouseX/boxheight), floor(mouseY/boxheight), "r"];
  }
}

function addTrianglesToWorld() {
  var options = [{},{
    restitution: 0,
    friction: 0,
    isStatic: true
  },{
    restitution: 0,
    friction: 0,
    isStatic: true
  }, {
    restitution: 0,
    friction: .2,
    isStatic: false,
    label: "falltri"
  }]
  for (var j = 0; j < box_row; j++) {//x
    for (var i = 0; i < box_row; i++) {//y
      var c = j * boxheight;
      var d = i * boxheight;
      if (isTriType(boxes[j][i]["t"])) {
        var cent = Matter.Vertices.centre([{x:c, y:d},{x:c + boxheight, y:d},{x:c + boxheight/2, y:d + boxheight/2}]);
        var body = Bodies.fromVertices(cent.x, cent.y, [{x:c, y:d},{x:c + boxheight, y:d},{x:c + boxheight/2, y:d + boxheight/2}], options[boxes[j][i]["t"]]);
        World.add(world, body);
      }
      if (isTriType(boxes[j][i]["b"])) {
        var cent = Matter.Vertices.centre([{x:c, y:d + boxheight},{x:c + boxheight, y:d + boxheight},{x:c + boxheight/2, y:d + boxheight/2}]);
        var body = Bodies.fromVertices(cent.x, cent.y, [{x:c, y:d + boxheight},{x:c + boxheight, y:d + boxheight},{x:c + boxheight/2, y:d + boxheight/2}], options[boxes[j][i]["b"]]);
        World.add(world, body);
      }
      if (isTriType(boxes[j][i]["l"])) {
        var cent = Matter.Vertices.centre([{x:c, y:d},{x:c, y:d + boxheight},{x:c + boxheight/2, y:d + boxheight/2}]);
        var body = Bodies.fromVertices(cent.x, cent.y, [{x:c, y:d},{x:c, y:d + boxheight},{x:c + boxheight/2, y:d + boxheight/2}], options[boxes[j][i]["l"]]);
        World.add(world, body);
      }
      if (isTriType(boxes[j][i]["r"])) {
        var cent = Matter.Vertices.centre([{x:c + boxheight, y:d + boxheight},{x:c + boxheight/2, y:d + boxheight/2},{x:c + boxheight, y:d}]);
        var body = Bodies.fromVertices(cent.x, cent.y, [{x:c + boxheight, y:d + boxheight},{x:c + boxheight/2, y:d + boxheight/2},{x:c + boxheight, y:d}], options[boxes[j][i]["r"]]);
        World.add(world, body);
      }
    }
  }
}

function isTriType(x) {
  return x != 0 && x != 4; 
}

function deepcopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function threeStar(x, y, w, illuminated, tot = 3) {
  for (var i = 0; i < 3; i++) {
    if (i < illuminated) {
      star(x + (i - 1) * w * 2.2, y, w * (3/7), w, "yellow");
    } else if (i < tot) {
      star(x + (i - 1) * w * 2.2, y, w * (3/7), w, "black");
    }
  }
}

function star(x, y, radius1, radius2, c) {
  var npoints = 5;
  push();
  fill(c);
  angleMode(RADIANS);
  translate(x, y);
  rotate(- PI / 9.95);
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = cos(a) * radius2;
    let sy = sin(a) * radius2;
    vertex(sx, sy);
    sx = cos(a + halfAngle) * radius1;
    sy = sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  pop();
}

