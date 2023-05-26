let sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune;
let move = true;
let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let gravity = [100, 3.7, 8.87, 9.8, 3.7, 24.8, 10.4, 8.9, 11.2];
let orbitLength = ['0', '88 Days', '225 Days', '365.25 Days', '687 Days', '12 Years', '29.5 Years', '84 Years', '165 Years', '248 Years'];
let planetName = ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
let orbitPeri = [0, 2985000000, 6052000000, 937300000, 15292000000, 778330000000, 1426660000000, 2871480000000, 4504620000000, 5906380000000];
let dToE = ['91 Million', '46 - 70 Million', '38 - 261 Million', '0', '34-249 Million', '0.4 - 2.7 Billion', '1.3 - 2.3 Billion', '2.1 - 3.4 Billion', '2.8 - 4.5 Billion'];
let gradImg, sunImg, mercuryImg, venusImg, earthImg, marsImg, jupiterImg, saturnImg, uranusImg, neptuneImg;
let fontBold, fontReg;


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    sun = new Planet(50, 0, 0, 0);
    mercury = new Planet(10, 40, 5, 1);
    venus = new Planet(20, 60, 3, 2);
    earth = new Planet(25, 100, 2, 3);
    mars = new Planet(15, 130, 1.5, 4);
    jupiter = new Planet(35, 180, 1, 5);
    saturn = new Planet(30, 220, 0.75, 6);
    uranus = new Planet(25, 260, 0.5, 7);
    neptune = new Planet(20, 300, 0.25, 8);

}

function info(x, y, n) {
    fill('#ABB6BF');
    rect(x, y, 250, 140, 14);
    textFont(fontBold);
    fill('#0A181F');
    textStyle(BOLD);
    textSize(16);
    text(planetName[n], x + 25, y + 35);
    textFont(fontReg);
    textStyle(NORMAL);
    textSize(9);
    text('Gravity: ' + gravity[n] + ' m/s^2', x + 25, y + 55);
    textStyle(NORMAL);
    textSize(9);
    text('Orbit Duration: ' + orbitLength[n], x + 25, y + 75);
    textStyle(NORMAL);
    textSize(9);
    text('Perimeter: ' + orbitPeri[n] + ' Kms', x + 25, y + 95);
    textStyle(NORMAL);
    textSize(9);
    text('From Earth: ' + dToE[n] + ' Kms', x + 25, y + 115);

}


function preload() {
    fontBold = loadFont("Fonts/MonumentExtended-Ultrabold.ttf");
    fontReg = loadFont("Fonts/MonumentExtended-Ultralight.otf");
    gradImg = loadImage("Images/GradientBG.png");
    sunImg = loadImage("Images/Sun.png");
    mercuryImg = loadImage("Images/Mercury.png");
    venusImg = loadImage("Images/Venus.png");
    earthImg = loadImage("Images/Earth.png");
    marsImg = loadImage("Images/Mars.png");
    jupiterImg = loadImage("Images/Jupiter.png");
    saturnImg = loadImage("Images/Saturn.png");
    uranusImg = loadImage("Images/Uranus.png");
    neptuneImg = loadImage("Images/Neptune.png");

}

function draw() {

    background('#0A181F');

    image(gradImg, width / 2 - (600 * 0.7), height / 2 - (600 * 0.7), 600 * 0.7 * 2, 600 * 0.7 * 2);
    trails();
    sun.show(0);
    mercury.show(1);
    venus.show(2);
    earth.show(3);
    mars.show(4);
    jupiter.show(5);
    saturn.show(6);
    uranus.show(7);
    neptune.show(8);




    if (arr.indexOf(1) == -1) {
        mercury.update();
        venus.update();
        earth.update();
        mars.update();
        jupiter.update();
        saturn.update();
        uranus.update();
        neptune.update();
    }

}

function trails() {
    noFill();
    stroke('#545454');
    strokeWeight(0.3);
    ellipse(
        width / 2,
        height / 2,
        108,
        108
    );
    ellipse(
        width / 2,
        height / 2,
        150,
        150
    );
    ellipse(
        width / 2,
        height / 2,
        260,
        260
    );
    ellipse(
        width / 2,
        height / 2,
        260,
        260
    );
    ellipse(
        width / 2,
        height / 2,
        340,
        340
    );
    ellipse(
        width / 2,
        height / 2,
        470,
        470
    );
    ellipse(
        width / 2,
        height / 2,
        580,
        580
    );
    ellipse(
        width / 2,
        height / 2,
        680,
        680
    );
    ellipse(
        width / 2,
        height / 2,
        780,
        780
    );
}

function hilight(n) {
    if (arr.includes(1) && arr[n] == 1) {
        tint(255, 255, 255, 255);
    } else if (arr.includes(1) && arr[n] != 1) {
        tint(255, 255, 255, 50);
    } else {
        tint(255, 255, 255, 255);
    }
}

class Planet {
    constructor(r, d, s, p) {
        this.radius = r * 0.7;
        this.distance = d * 1.3;
        this.angle = random(TWO_PI);
        this.speed = s / 200;
        this.planetNum = p;
    }

    update() {
        this.angle += this.speed;
    }

    show(n) {
        let circleX;
        let circleY;

        circleX = width / 2 + this.distance * cos(this.angle);
        circleY = height / 2 + this.distance * sin(this.angle);

        // circleX = width/2 + this.distance ;
        // circleY = height/2 + this.distance ;

        if (dist(mouseX, mouseY, circleX, circleY) < this.radius) {
            fill(255, 0, 0);
            info(mouseX, mouseY, n);
            arr[n] = 1;
        } else {
            fill(255);
            arr[n] = 0;
        }


        if (this.planetNum == 0) {
            hilight(this.planetNum);
            image(sunImg, circleX - this.radius, circleY - this.radius, this.radius * 2, this.radius * 2);

        } else if (this.planetNum == 1) {
            hilight(this.planetNum);
            image(mercuryImg, circleX - this.radius, circleY - this.radius, this.radius * 2, this.radius * 2);
        } else if (this.planetNum == 2) {
            hilight(this.planetNum);
            image(venusImg, circleX - this.radius, circleY - this.radius, this.radius * 2, this.radius * 2);
        } else if (this.planetNum == 3) {
            hilight(this.planetNum);
            image(earthImg, circleX - this.radius, circleY - this.radius, this.radius * 2, this.radius * 2);
        } else if (this.planetNum == 4) {
            hilight(this.planetNum);
            image(marsImg, circleX - this.radius, circleY - this.radius, this.radius * 2, this.radius * 2);
        } else if (this.planetNum == 5) {
            hilight(this.planetNum);
            image(jupiterImg, circleX - this.radius, circleY - this.radius, this.radius * 2, this.radius * 2);
        } else if (this.planetNum == 6) {
            hilight(this.planetNum);
            image(saturnImg, circleX - this.radius, circleY - this.radius, this.radius * 2, this.radius * 2);
        } else if (this.planetNum == 7) {
            hilight(this.planetNum);
            image(uranusImg, circleX - this.radius, circleY - this.radius, this.radius * 2, this.radius * 2);
        } else if (this.planetNum == 8) {
            hilight(this.planetNum);
            image(neptuneImg, circleX - this.radius, circleY - this.radius, this.radius * 2, this.radius * 2);
        }


        noFill();
        noStroke();

    }
}
