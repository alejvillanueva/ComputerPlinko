var won = false;
var lost = false;
var fallTime = 0;
var box_row = 15;
var level;
var levelsBeat = 0;
var droplets = [];
var dropletspeeds = [];
var dropsfallen = true;
var timeResting = 0;
var gWidth = 1000;
var gHeight = 700;
var boxheight, goal, permitted;
var placed = 0;
var boxes = [];
var slimecolor = "limegreen";
var hovering = [0, 0, 't'];
var states = {levelSelector:true, levelDropping:false, levelDropped:false, levelPlay: false};
var ball, world, engine;
var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

function setup() {
  mycanv = createCanvas(gWidth, gHeight);
  mycanv.position((windowWidth - gWidth)/2, (windowHeight - gHeight)/2);
  mycanv.style('z-index','-1');
  mycanv.mousePressed(myMousePressed)
  background("#545861");


  engine = Engine.create();
  world = engine.world;
  boxheight = gHeight/box_row;


  for (var x = 0; x < box_row; x++) {
    var temp = [];
    for (var y = 0; y < box_row; y++) {
      temp.push(new boxObj());
    }
    boxes.push(temp);
  }
  levelSetup(0);


  ball = new Ball(boxheight * (floor(box_row/2) + .5), 0, boxheight);
  world.gravity.y = 0;

  textAlign(CENTER, CENTER);
  for (var i = 0; i < 10; i++) {
    droplets.push(0);
    dropletspeeds.push(random(7, 15));
  }
}

function draw() {
  Engine.update(engine, 1000 / 30);
  noStroke();
  background("#545861");
  fill("#82f4d1");
  if (states["levelSelector"]) {
    drawSelector();
  }
  if (states["levelPlay"]) {
    levelPlay();
  }
  if (states["levelDropping"]) {
    levelDropping();
  }
  if (!dropsfallen) {
    drawslime();
  }
  if (states["levelDropped"]) {
    background(slimecolor);
    textSize(80);
    fill("black");
    if (won) {
      text("NICE!", gWidth/2, gHeight/2 );
      textSize(40);
      text("Press any key to proceed.", gWidth/2, gHeight/2 + 60);
    } else if (lost) {
      text("YOU LOST :(", gWidth/2, gHeight/2)
      textSize(40);
      text("Press any key to try again.", gWidth/2, gHeight/2 + 60);

    }
  }
  // debugWorld();
}

function debugWorld() {
  fill("white");
  for (var i = 0; i < world.bodies.length; i++) {
    ellipse(world.bodies[i].position.x, world.bodies[i].position.y, 15, 15);
    world.bodies[i].position.x
  }
  textSize(40);
  text(hovering, gWidth/2, gHeight/2);
}

function rendKey() {
  noStroke();
  var wid = floor((gWidth - gHeight)/boxheight);
  var trnsl = (gWidth - gHeight - wid * boxheight)/2;
  var tot = 0;
  push();
  translate(gHeight + (gWidth - gHeight)/2, gHeight/2 + 70);
  var from = color("limegreen");
  var to1 = color("yellow");
  var to2 = color("red");
  if (placed < floor((permitted + placed)/2)) {
    fill(lerpColor(from, to1, placed/floor(permitted/2)));
  } else {
    fill(lerpColor(to1, to2, (placed)/floor(permitted)));
  }
  textSize(200);
  text(permitted, 0, -50);
  translate(0, 70);
  textSize(40);
  text("triangles left", 0, 0)
  pop();
}

function rendLines() {
  strokeWeight(1);
  stroke(color("#6b6d73"));
  for (var i = 0; i < box_row; i++) {
    fill("#545861");
    rect(boxheight * i, -boxheight/2, boxheight, boxheight);
    fill("red");
    rect(boxheight * i, gHeight-boxheight/2, boxheight, boxheight);
  }

  fill("#545861");
  rect(boxheight * goal, gHeight-boxheight/2, boxheight, boxheight);

  
  stroke("#6b6d73");
  noFill();
  for (var i = 0; i < box_row; i++) {
    // line( i * boxheight, boxheight, gHeight - boxheight * i, gHeight - boxheight)
  }
  for (var i = 0; i < box_row; i++) {
    line(i * boxheight, boxheight, i * boxheight, gHeight - boxheight);
    line(0, i * boxheight, gHeight, i * boxheight);
    if (i < box_row - 1 && i > 0) {
      line(0, gHeight - (i + 1) * boxheight, i * boxheight,gHeight - boxheight);
      line(gHeight - (i - 1) * boxheight, boxheight, gHeight, i * boxheight);
      line(0, (i + 1) * boxheight, i * boxheight, boxheight);
      line((i + 1) * boxheight, gHeight - boxheight, gHeight, i * boxheight);
    }
  }
  line(boxheight, boxheight, gHeight - boxheight, gHeight - boxheight);
  line(boxheight * 2, boxheight, gHeight, gHeight - boxheight);
  line(boxheight, gHeight - boxheight, gHeight - boxheight, boxheight);

  strokeWeight(5);
  stroke("#545861");
  fill("#545861");
  line(0, gHeight - boxheight/2, gHeight, gHeight - boxheight/2);
  line(0, boxheight/2, gHeight, boxheight/2);
  stroke(color("#6b6d73"));
  line(gHeight + 2, 0, gHeight + 2, gHeight);
}


function myMousePressed() {
  if (states["levelPlay"]) {
    levelPlaymousePressed();
  }
  if (states["levelDropping"]) {
    levelDroppingmousePressed();
  }
}


function keyPressed() {
  if (states["levelPlay"]) {
    levelPlaykeyPressed();
  }
  
  if (states["levelDropping"]) {
    levelDroppingkeyPressed();
  }

  if (won && level >= levels.level - 1) {
    states = {levelSelector:true, levelDropping:false, levelDropped:false, levelPlay: false};
    return ;
  }
  if (won || lost) {
    if (won && level < levels.length - 2) {
      levelSetup(level + 1);
      levelsBeat = max(levelsBeat, level + 1);
    } else if (lost) {
      levelSetup(level);
    } else {
      won = false; lost = false; world.gravity.y = 0;
      World.clear(world);
      ball = new Ball(boxheight * (floor(box_row/2) + .5), 0, boxheight);
      states = {levelSelector:true, levelDropping:false, levelDropped:false, levelPlay: false};
      newdrip();
      return ;
    }

    won = false; lost = false; world.gravity.y = 0;
    World.clear(world);
    ball = new Ball(boxheight * (floor(box_row/2) + .5), 0, boxheight);
    states = {levelSelector: false, levelPlay:true, levelDropping:false, levelDropped:false};
    newdrip();
    
  }
}

function drawslime() {
  fill(slimecolor);
  beginShape();
  vertex(0, gHeight);
  
  for (var i = 0; i < 10; i++) {
    curveVertex(i * gWidth/10, droplets[i]);
  }
  vertex(gWidth, droplets[9]);
  vertex(gWidth, gHeight);
  endShape(CLOSE);
  for (var i = 0; i < 10; i++) {
    droplets[i] += dropletspeeds[i] * .5;
    droplets[i] += random(0, 15);
  }
  dropsfallen = dropletsfallen();
}

function dropletsfallen() {
  for (var i = 0; i < 10; i++) {
    if (droplets[i] <= gHeight + 15) {
      return false;
    }
  }
  return true;
}

function newdrip() {
  dropsfallen = false;
  for (var i = 0; i < 10; i++) {
    droplets[i] = 0;
  }
  for (var i = 0; i < 10; i++) {
    dropletspeeds[i] = random(7, 15);
  }
}

function windowResized() {
  mycanv = createCanvas(gWidth, gHeight);
}

