var startButton;
var selectButton;

function drawMenu(){
	if(!startButton){
		startButton = createButton('Start');
		startButton.position(windowWidth/2 - 85, windowHeight /2);
		startButton.addClass('button');
		startButton.mousePressed(begin);
	}

	if(!selectButton){
		selectButton = createButton('Select Level');
		selectButton.position(windowWidth/2 - 85, windowHeight / 2 + 100);
		selectButton.addClass('button');
		selectButton.mousePressed(lvlSelect);
	}

	background(186, 186, 191);

	fill(242, 73, 118);
	textSize(80);
	textFont('Gugi');
	text("Computer Plinko", width / 2, height / 2 - 100);
}

function begin(){
	startButton = startButton.remove();
	selectButton = selectButton.remove();

	states = {mainMenu:false, levelSelector: false, levelPlay: true, levelDropping:false, levelDropped:false};
	levelSetup(levelsBeat - 1);

	}

function lvlSelect(){
	startButton = startButton.remove();
	selectButton = selectButton.remove();

	states = {mainMenu:false, levelSelector: true, levelPlay: false, levelDropping:false, levelDropped:false};
}
