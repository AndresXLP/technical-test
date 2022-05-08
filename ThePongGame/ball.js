var sign = random('+', '-');
function Ball() {
  this.x = width / 2;
  this.y = height / 2;
  this.vx = 5;
  this.vy = 5;

  this.show = function () {
    ellipse(this.x, this.y, 15, 15);
  };

  this.move = function () {
    if (this.y < 50) this.vy = 5;
    if (this.y > height) this.vy = -5;

    this.x += this.vx;
    this.y += this.vy;
  };

  this.collide = function (player) {
    var d = dist(this.x, this.y, player.x, player.y);
    if (d < 15 + 15) return true;
    return false;
  };
}
