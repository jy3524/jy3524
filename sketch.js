var canvas;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
	background(143,188,143);
}

function draw () {
	noStroke();
	fill(255,255,255,30);
	ellipse(mouseX,mouseY,30,30);
}

function mousePressed() {
	background(143,188,143);
}
