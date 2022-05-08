var player;
var ball;
var ai;
const totalBalls = 4;
let balls = [];
function setup() {
  createCanvas(730, 600);
  player = new Player();
  ball = new Ball();
  ai = new Ai();
  for (let i = 0; i < totalBalls; i++) balls.push(new Ball());
}

function draw() {
  background(0);
  rect(width / 2, height / 2 + 45, 1.5, height);
  rect(width / 2, 45, width, 2);
  textSize(32);
  textAlign(LEFT);
  text(`Player: ${player.points}`, 5, 30);
  fill(255);
  textSize(32);
  textAlign(RIGHT);
  text(`CPU: ${ai.points}`, width - 5, 30);
  fill(255);
  textSize(45);
  textAlign(CENTER, CENTER);
  setTimeout(() => {
    ball.move();
  }, 1000);
  player.move();
  ai.move(ball);
  ball.show();
  player.show();
  ai.show();

  if (ball.collide(player)) {
    ball.vx = 4;
  }
  if (ball.collide(ai)) {
    ball.vx = -4;
  }
  if (ball.x < 0) {
    ai.points++;
    throwNewBall();
  }
  if (ball.x > width) {
    player.points++;
    throwNewBall();
  }
}

function throwNewBall() {
  if (balls.length > 0) {
    ball = balls.pop();
  } else {
    alert('No balls left!');
    for (let i = 0; i < 4; i++) balls.push(new Ball());
    player.points = 0;
    ai.points = 0;
    return window.location.reload();
  }
}
