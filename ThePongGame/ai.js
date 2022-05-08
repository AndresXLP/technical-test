function Ai() {
  this.x = width - 15;
  this.y = height / 2;
  this.v = 6;
  this.w = 10;
  this.h = 80;
  this.points = 0;
  this.show = function () {
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  };
  this.move = function (ball) {
    if (ball.x > width / 2) {
      if (ball.y > this.y) {
        this.y += this.v;
      } else if (ball.y < this.y) {
        this.y -= this.v;
      }
    }
    if (this.y > height - this.h / 2) {
      this.y = height - this.h / 2;
    }
    if (this.y < 125 - this.h / 2) {
      this.y = 125 - this.h / 2;
    }
  };
}
