let angle = 0;
let canvas;
let cam;
let counter = 0;
let spd = 0.05;
let sphereX, sphereY, sphereZ, sphereX1, sphereY1;
let bgImg, sunImg, mercuryImg, venusImg, earthImg, marsImg, jupiterImg, saturnImg, uranusImg, neptuneImg;
let planetImgs;
let freeview = false;
let freeControl, nextP, preP, resetCam;
let sizes = [0, 6, 8, 12, 11, 15, 11, 10, 9];
let orbitLength = ['0', '88 Days', '225 Days', '365.25 Days', '687 Days', '12 Years', '29.5 Years', '84 Years', '165 Years', '248 Years'];
let planetName = ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
let orbitPeri = [0, 2985000000, 6052000000, 937300000, 15292000000, 778330000000, 1426660000000, 2871480000000, 4504620000000, 5906380000000];
let dToE = ['91 Million', '46 - 70 Million', '38 - 261 Million', '0', '34-249 Million', '0.4 - 2.7 Billion', '1.3 - 2.3 Billion', '2.1 - 3.4 Billion', '2.8 - 4.5 Billion'];
let gravity = [100, 3.7, 8.87, 9.8, 3.7, 24.8, 10.4, 8.9, 11.2];
let fontBold, fontReg, fontTitle;
let swich = true;

let pointer = 1;

function preload() {
    fontBold = loadFont("Fonts/MonumentExtended-Ultrabold.ttf");
    fontReg = loadFont("Fonts/MonumentExtended-Ultralight.otf");
    fontTitle = loadFont("Fonts/BLADRMF_.TTF");
    bgImg = loadImage("Planet Textures/2k_stars_milky_way.jpg");
    sunImg = loadImage("Planet Textures/2k_sun.jpg");
    mercuryImg = loadImage("Planet Textures/2k_mercury.jpg");
    venusImg = loadImage("Planet Textures/2k_venus_surface.jpg");
    earthImg = loadImage("Planet Textures/2k_earth_daymap.jpg");
    marsImg = loadImage("Planet Textures/2k_mars.jpg");
    jupiterImg = loadImage("Planet Textures/2k_jupiter.jpg");
    saturnImg = loadImage("Planet Textures/2k_saturn.jpg");
    uranusImg = loadImage("Planet Textures/2k_uranus.jpg");
    neptuneImg = loadImage("Planet Textures/2k_neptune.jpg");
    planetImgs = [sunImg, mercuryImg, venusImg, earthImg, marsImg, jupiterImg, saturnImg, uranusImg, neptuneImg];
}

function setup() {
    canvas = createCanvas(800, 800, WEBGL);
    canvas.position(0, 0);
    cam = createCamera();
    setInterval(swicher, 500);

}

function setPos() {
    //camera();
    //cam.setPosition(0, 0, 800);
    camera(0, 0, (height / 2.0) / tan(PI * 30.0 / 180.0), 0, 0, 0, 0, 1, 0);
    if (freeview) {
        freeview = !freeview;
    }

}

function swicher() {
    swich = !swich;
}

function freeRoam() {
    freeview = !freeview;
}
function planet(r, s, p) {
    push();
    sX = 100 * cos(angle);
    sY = 100 * sin(angle);
    translate(sX, sY, 0);
    texture(planetImgs[p]);
    sphere(r * 2);
    noFill();
    //cam.setPosition(0, 0, width);
    pop();
    angle += s;
}

function nextC() {
    if (pointer < 8) {
        pointer++;
    } else {
        pointer = 1;
    }
}

function prevC() {
    if (pointer < 1) {
        pointer = 8;
    } else {
        pointer--;
    }
}

function checkCursor() {
    if (freeview) {
        canvas.style("cursor", CROSS);
    } else {
        canvas.style("cursor", "default");
    }
}

function draw() {
    freeControl = createButton(freeview ? "Exit Roam" : "Free Roam");
    freeControl.mousePressed(freeRoam);
    freeControl.position(20, 800);

    resetCam = createButton("Reset Camera");
    resetCam.mousePressed(setPos);
    resetCam.position(120, 800);

    nextP = createButton("Previous Planet");
    nextP.mousePressed(prevC);
    nextP.position(550, 800);

    preP = createButton("Next Planet");
    preP.mousePressed(nextC);
    preP.position(695, 800);

    //checkCursor();






    background(0);
    if (!freeview) {
        push();
        textSize(48);
        textFont(fontTitle);
        textAlign(CENTER);
        fill(255);
        text("Planet", 0, -238);
        text("Playbook", 0, -198);
        if (swich) {
            fill(255, 0, 222);
        } else {
            fill(6, 234, 255);
        }

        text("Planet", 0, -240);
        text("Playbook", 0, -200);
        pop();
    }

    if (!freeview) {
        push();
        textSize(24);
        textFont(fontBold);
        textAlign(CENTER);
        fill(255);
        text(planetName[pointer], -240, 0);
        pop();
        push();
        let x = 100;
        let y = -75;
        textAlign(LEFT);
        textFont(fontReg);
        textStyle(NORMAL);
        textSize(10);
        text('Gravity: ' + gravity[pointer] + ' m/s^2', x + 25, y + 55);
        textStyle(NORMAL);
        textSize(10);
        text('Orbit Duration: ' + orbitLength[pointer], x + 25, y + 75);
        textStyle(NORMAL);
        textSize(10);
        text('Perimeter: ' + orbitPeri[pointer] + ' Kms', x + 25, y + 95);
        textStyle(NORMAL);
        textSize(10);
        text('From Earth: ' + dToE[pointer] + ' Kms', x + 25, y + 115);
        pop();
        //text("Playbook", 0, -198);
    }

    if (!freeview) {
        push();
        rectMode(CENTER);
        //fill(255);
        push();
        translate(-400, 350, 0);
        fill(255);
        textSize(14);
        textAlign(CENTER);
        textFont(fontReg);
        let s1 = 'Click on the buttons below to interact with the planet and the system'
        let s2 = 'Try all of them and explore!! No right way!!'
        text(s1, 400, 0);
        text(s2, 400, 30);
        pop();
        noFill();
        stroke(255);
        rect(-0, 390, 760, 140, 14);

        pop();
    }

    if (freeview) {
        orbitControl(4, 4);
    }

    noStroke();
    translate(0, 0, -100);

    //planet(5, 0.06, 200, 3);
    planet(sizes[pointer], 0.01, pointer);




    push();
    translate(0, 0, 0);

    torus(100, 0.2);
    texture(sunImg);
    sphere(40);
    pop();


}