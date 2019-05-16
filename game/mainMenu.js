var startButton;
var selectButton;
var title;

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

	if(!title){
		title = createDiv('Computer Plinko');
		title.addClass('title');
		title.position(windowWidth / 2 - 317, windowHeight / 2 - 150);
	}

}

function begin(){
	startButton = startButton.remove();
	selectButton = selectButton.remove();
	title = title.remove();
	returnButton.show();
	trisLeft.show();
  	trisLeft_text.show();
	states = {mainMenu:false, levelSelector: false, levelPlay: true, levelDropping:false, levelDropped:false};
	// console.log(levelsBeat);
	levelSetup(levelsBeat - 1);
	bigBox.show();
	}

function lvlSelect(){
	startButton = startButton.remove();
	selectButton = selectButton.remove();
	title = title.remove();
	returnButton.show();
	bigBox.show();
	states = {mainMenu:false, levelSelector: true, levelPlay: false, levelDropping:false, levelDropped:false};
}
