var won = false;
var lost = false;
var fallTime = 0;
var maxFallTime = 800;
var box_row = 15;
var box_col = 15;
var score = 0;
var level;
var ticker;
var levelsBeat = 1;
var droplets = [];
var dropletspeeds = [];
var dropsfallen = true;
var timeResting = 0;
var gWidth = 1000;
var gHeight = 700;
var boxheight, goal, permitted;
var placed = 0;
var boxes = [];
var levelArrangements = [];
var slimecolor = "limegreen";
var hovering = [0, 0, 't'];
var states = {mainMenu: true, levelSelector:false, levelDropping:false, levelDropped:false, levelPlay: false};
var piecePlacing = {triangle: true, seesaw: false};
var ball, world, engine;
var conveyor_balls = [];
var conveyor_endings = [];
var wormhole_pairs = [];
var spiral_img;
var trisLeft, trisLeft_text, bigBox, returnButton; 

var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

function preload() {
<<<<<<< HEAD
  spiral_img = loadImage('assets/spiral.png');
=======
   spiral_img = loadImage('assets/spiral.png');
>>>>>>> cebd86f4db90439aac3dfb255de2b14a72a83dec
}

function setup() {
  boxheight = gHeight/box_row;
  gWidth = 15 * boxheight;
  mycanv = createCanvas(gWidth, gHeight);
  mycanv.position((windowWidth - 350 - gWidth)/2, (windowHeight - gHeight)/2);
  // mycanv.position((windowWidth - gWidth)/2, (windowHeight - gHeight)/2);
  mycanv.style('z-index','-1');
  mycanv.mousePressed(myMousePressed)
  background("#545861");
  imageMode(CENTER);
  angleMode(DEGREES);

  //Set levels beat again for debugging
  // levelsBeat = levels.length - 1;

  engine = Engine.create();
  world = engine.world;

  // big ass box
  bigBox = createDiv("");
  bigBox.addClass('sidebar');

  //Tri Left Num
  trisLeft = createDiv(score);
  trisLeft.addClass('permitted');
  bigBox.child(trisLeft);
  trisLeft.hide();

  trisLeft_text = createDiv("triangles left");
  trisLeft_text.addClass('triLeft');
  bigBox.child(trisLeft_text);
  trisLeft_text.hide();

  //Button
  returnButton = createButton("Return To Menu");
  returnButton.addClass('returnButton');
  returnButton.mousePressed(toMenu);
  bigBox.child(returnButton);
  returnButton.hide();

  for (var x = 0; x < box_row; x++) {
    var temp = [];
    for (var y = 0; y < box_row; y++) {
      temp.push(new boxObj());
    }
    boxes.push(temp);
  }

  for (var i = 0; i < levels.length; i++) {
    var temp = { placed: 0, setup: deepcopy(boxes), played : false, stars: -1 };
    levelArrangements.push(temp);
  }

  ball = new Ball(boxheight * (floor(box_row/2) + .5), 0, boxheight);

  ticker = new p5(scoreTicker, "c1");

  levelSetup(0);

  ticker.stopLoop();

  world.gravity.y = 0;

  textAlign(CENTER, CENTER);
  for (var i = 0; i < 10; i++) {
    droplets.push(0);
    dropletspeeds.push(random(7, 15));
  }
  bigBox.hide();
}

function draw() {
  Engine.update(engine, 1000 / 30);
  noStroke();
  background("#545861");
  fill("#82f4d1");

  if (states["mainMenu"]){
    drawMenu();
  }
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
    textFont("Gugi");
    if (won) {
      score = calculateScore(placed - 1);
      levelArrangements[level]["stars"] = score;

      var messages = ["", "Okay!", "Nice!", "Excellent!"];
      text(messages[score], gWidth/2, gHeight/2 - 125);

      threeStar(width/2, height/2, 70, score);

      textSize(40);
      text("Press any key to proceed.", gWidth/2, gHeight/2 + 120);
    } else if (lost) {
      text("YOU LOST :(", gWidth/2, gHeight/2)
      textSize(40);
      text("Press any key to try again.", gWidth/2, gHeight/2 + 60);

    }
  }
  // debugWorld();
}

function calculateScore(trisUsed) {
  if (levels[level]["permitted"][0] === levels[level]["permitted"][1] && 
    levels[level]["permitted"][1] === levels[level]["permitted"][2]) {
    return 3;
  }
  if (levels[level]["permitted"][0] === 0) {
    return 3;
  }
  var stars = 3;
  for (var i = 0; i < 3; i++) {
    if(trisUsed <= levels[level]["permitted"][i]){
      stars = i + 1;
    }
  }
  return stars;
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



function rendLines() {
  strokeWeight(1);
  stroke(color("#6b6d73"));
  for (var i = 0; i < box_row; i++) {
    fill("#545861");
    rect(boxheight * i, -boxheight/2, boxheight, boxheight);
    fill("#D90479");
    rect(boxheight * i, gHeight-boxheight/2, boxheight, boxheight);
  }
  
  stroke("#6b6d73");
  noFill();

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

  fill("#545861");
  noStroke();
  rect(boxheight * goal, gHeight-boxheight/2, boxheight, boxheight);


  fill("#545861");
  rect(box_col * boxheight, 0, gWidth, gHeight);


  strokeWeight(6);
  stroke("#545861");
  fill("#545861");
  line(0, gHeight - boxheight/2, gHeight, gHeight - boxheight/2);
  line(0, boxheight/2, gHeight, boxheight/2);
  stroke(color("#6b6d73"));
  line(box_col * boxheight + 3, 0, box_col * boxheight + 3, gHeight);
  // line(gHeight + 2, 0, gHeight + 2, gHeight);
}


function myMousePressed() {
  if (states["levelPlay"]) {
    levelPlaymousePressed();
  }
  if (states["levelDropping"]) {
    levelDroppingmousePressed();
  }
  if (won || lost) {
    goOff();
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
    states = {mainMenu: true, levelSelector:false, levelDropping:false, levelDropped:false, levelPlay: false};
    return ;
  }
  if (won || lost) {
    goOff();
  }
}

function goOff() {
  World.clear(world);
  ball = new Ball(boxheight * (floor(box_row/2) + .5), 0, boxheight);
  if (won && level < levels.length - 2) {
    levelSetup(level + 1);
    returnButton.show();
    trisLeft.show();
    trisLeft_text.show();
    levelsBeat = max(levelsBeat, level + 1);
  } else if (lost) {
    returnButton.show();
    trisLeft.show();
    trisLeft_text.show();
    levelSetup(level);
  } else {
    won = false; lost = false; world.gravity.y = 0;
    // ball = new Ball(boxheight * (floor(box_row/2) + .5), 0, boxheight);
    states = {levelSelector:true, levelDropping:false, levelDropped:false, levelPlay: false};
    newdrip();
    return ;
  }

  won = false; lost = false; world.gravity.y = 0;
  states = {levelSelector: false, levelPlay:true, levelDropping:false, levelDropped:false};
  newdrip();
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
  mycanv.position((windowWidth - 350 - gWidth)/2, (windowHeight - gHeight)/2);
}

function toMenu(){
  bigBox.hide();
  returnButton.hide();
  trisLeft.hide();
  trisLeft_text.hide();
  ticker.stopLoop();
  if(states["levelPlay"]){
      levelArrangements[level]["setup"] = deepcopy(boxes);
      levelArrangements[level]["placed"] = deepcopy(placed);
      goToSelect = true;
      states = {mainMenu: true, levelSelector: false, levelDropping:false, levelDropped:false, levelPlay: false};
  } else{
      states = {mainMenu: true, levelSelector:false, levelDropping:false, levelDropped:false, levelPlay: false};
  }
}


