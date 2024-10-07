let angle = 10;
let step = 5;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  if (!mouseIsPressed) {
    let rotatingLines = new RotatingLines();
    rotatingLines.display();
  }

  let ring1 = new Ring(200, 200, [130, 127, 125, 120, 115], [
    [random(255), random(255), random(255)],
    [34, 87, 125],
    [27, 69, 99],
    [21, 51, 69],
    [18, 36, 51],
  ]);
  ring1.display();

  let ring2 = new Ring(200, 200, [102, 100, 97, 95, 92, 90, 85], [
    [38, 48, 56],
    [90, 125, 142],
    [177, 209, 227],
    [157, 184, 199],
    [87, 110, 128],
    [39, 50, 59],
    [18, 36, 51],
  ]);
  ring2.display();

  let ring3 = new Ring(200, 200, [75, 72, 70, 67, 65, 63, 62, 58], [
    [18, 36, 51],
    [2, 63, 71],
    [2, 95, 107],
    [221, 251, 255],
    [195, 225, 230],
    [155, 182, 186],
    [18, 36, 51],
    [14, 26, 36],
  ]);
  ring3.display();

  let center = new GrayscaleCenter();
  center.display();

  let bullsEye = new BullsEye();
  bullsEye.display();
}

class RotatingLines {
  constructor() {
    this.angle = 10;
    this.step = 5;
  }

  display() {
    push();
    translate(width * 0.5, height * 0.5);
    this.angle += 0.5;
    rotate(this.angle);
    for (let i = 0; i < 360; i += this.step) {
      rotate(this.step);
      let r = random(255);
      let g = random(255);
      let b = random(255);
      stroke(mouseX, r, g, b);
      line(0, 100, width * random(0.2, 0.5), 100);

      fill(mouseX, r, g, b);
      noStroke();
      ellipse(160, 160, 5, 5);
    }
    pop();
  }
}

class Ring {
  constructor(x, y, radii, colors) {
    this.x = x;
    this.y = y;
    this.radii = radii;
    this.colors = colors;
  }

  display() {
    ellipseMode(RADIUS);
    for (let i = 0; i < this.radii.length; i++) {
      fill(mouseX, ...this.colors[i]);
      noStroke();
      ellipse(this.x, this.y, this.radii[i], this.radii[i]);
    }
  }
}

class GrayscaleCenter {
  constructor() {
    this.radii = [95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 23];
    this.grays = [50, 80, 120, 110, 90, 80, 60, 50, 35, 25, 70, 70, 225, 212, 255, 212];
  }

  display() {
    ellipseMode(CENTER);
    for (let i = 0; i < this.radii.length; i++) {
      fill(mouseX, this.grays[i]);
      ellipse(200, 200, this.radii[i], this.radii[i]);
    }
  }
}

class BullsEye {
  constructor() {
    this.radii = [20];
    this.color = [5, 34, 70];
  }

  display() {
    ellipseMode(CENTER);
    fill(mouseX, ...this.color);
    ellipse(200, 200, this.radii[0], this.radii[0]);
  }
}
