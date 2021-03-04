var canvas;
var ball = {
	x: 300,
	y: 200,
	xspeed: 4,
	yspeed: -3
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
	background(random(255), random(255), random(255));
}

function mousePressed() {
	background(random(255), random(255), random(255));
}

function draw() {
	move();
	bounce();
	display();
}

function move() {
	ball.x = ball.x + ball.xspeed;
	ball.y = ball.y + ball.yspeed;
}

function bounce() {
	if (ball.x > width || ball.x < 0) {
		ball.xspeed = ball.xspeed * -1;
	}
	if (ball.y > height || ball.y < 0) {
		ball.yspeed = ball.yspeed * -1;
	}
}

function display() {
	strokeWeight(0);
	fill(random(255), random(255), random(255));
	ellipse(ball.x, ball.y, 50, 50);
}