function Player() {
  this.x = 15;
  this.y = height / 2;
  this.v = 5.5;
  this.w = 10;
  this.h = 80;
  this.points = 0;
  this.show = function () {
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  };
  this.move = function keyTyped() {
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.v;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.y += this.v;
    }
    if (this.y > height - this.h / 2) {
      this.y = height - this.h / 2;
    }
    if (this.y < 125 - this.h / 2) {
      this.y = 125 - this.h / 2;
    }
  };
}
