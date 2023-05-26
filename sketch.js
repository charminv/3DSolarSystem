// function setup() {
//   createCanvas(400, 400, WEBGL);
// }

// function draw() {
//   background(0, 0, 255);
//   orbitControl(4, 4);
//   rotateX(frameCount * 0.01);
//   rotateY(frameCount * 0.01);
//   normalMaterial();
//   sphere(48);
//   torus(48, 5);
//   noFill();
//   stroke(255);
//   box(120);
// }

let angle = 0;
let cam;
let sphereX, sphereY, sphereZ, sphereX1, sphereY1;
let bgImg, sunImg, mercuryImg, venusImg, earthImg, marsImg, jupiterImg, saturnImg, uranusImg, neptuneImg;

function preload() {
  bgImg = loadImage("Planet Textures/2k_stars_milky_way.jpg");
  sunImg = loadImage("Planet Textures/2k_sun.jpg");
  mercuryImg = loadImage("Planet Textures/2k_mercury.jpg");
  venusImg = loadImage("Planet Textures/2k_venus_surface.jpg");
  earthImg = loadImage("Planet Textures/2k_mercury.jpg");
  marsImg = loadImage("Planet Textures/2k_mars.jpg");
  jupiterImg = loadImage("Planet Textures/2k_jupiter.jpg");
  saturnImg = loadImage("Planet Textures/2k_saturn.jpg");
  uranusImg = loadImage("Planet Textures/2k_uranus.jpg");
  neptuneImg = loadImage("Planet Textures/2k_neptune.jpg");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  sun = new Planet(20, 0, 0, 0);
  mercury = new Planet(10, 100, 5, 1);
  venus = new Planet(20, 60, 3, 2);
  earth = new Planet(25, 100, 2, 3);
  mars = new Planet(15, 130, 1.5, 4);
  jupiter = new Planet(35, 180, 1, 5);
  saturn = new Planet(30, 220, 0.75, 6);
  uranus = new Planet(25, 260, 0.5, 7);
  neptune = new Planet(20, 300, 0.25, 8);
  cam = createCamera();
  //orbitControl();
}

function draw() {
  orbitControl();
  background(0);
  //push();
  sun.show(0);
  push();
  mercury.show(1);
  pop();
  push();
  venus.show(2);
  pop();
  earth.show(3);
  mars.show(4);
  jupiter.show(5);
  saturn.show(6);
  uranus.show(7);
  neptune.show(8);
  //sun.show(0);
  //pop();

  mercury.update();
  venus.update();
  earth.update();
  mars.update();
  jupiter.update();
  saturn.update();
  uranus.update();
  neptune.update();

}

// function mousePressed(){
//   cam.setPosition(sphereX, sphereY, 0);
// }

// function draw() {
//   background(0);
//   // texture(bgImg);
//   // plane(width, height);
//   orbitControl(4, 4);
//   // directionalLight(255,255,255,0,0,3);
//   noStroke();
//   // ambientLight(0,0,255);
//   // ambientMaterial(0,0,255);
//   // cam.setPosition(sphereX1, sphereY1, 800);
//   translate(0, 0, -100);


//   sphereX = 100 * cos(angle);
//   sphereY = 100 * sin(angle);

//   sphereX1 = 250 * cos(angle);
//   sphereY1 = 250 * sin(angle);

//   push();
//   translate(sphereX, sphereY, 0);
//   //textFont();
//   //text("hell0",0,0);
//   //rotateZ(angle);
//   texture(mercuryImg);
//   //normalMaterial();
//   sphere(10);
//   noFill();
//   // stroke(255);
//   // box(45);
//   pop();

//   push();
//   translate(sphereX1, sphereY1, 0);
//   //textFont();
//   //text("hell0",0,0);
//   //rotateZ(angle);
//   texture(mercuryImg);
//   //normalMaterial();
//   sphere(25);
//   noFill();
//   // stroke(255);
//   // box(45);
//   pop();

//   push();
//   translate(0, 0, 0);

//   torus(100, 0.2);
//   texture(sunImg);
//   sphere(40);
//   pop();

//   angle += 0.05;
// }

class Planet {
  constructor(r, d, s, p) {
    this.radius = r;
    this.distance = d;
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

    circleX = this.distance * cos(this.angle);
    circleY = this.distance * sin(this.angle);
    translate(circleX, circleY, this.distance);

    // circleX = width/2 + this.distance ;
    // circleY = height/2 + this.distance ;

    // if (dist(mouseX, mouseY, circleX, circleY) < this.radius) {
    //     fill(255, 0, 0);
    //     info(mouseX, mouseY, n);
    //     arr[n] = 1;
    // } else {
    //     fill(255);
    //     arr[n] = 0;
    // }
    noFill();
    noStroke();

    if (this.planetNum == 0) {
      // hilight(this.planetNum);
      // image(sunImg, circleX - this.radius, circleY - this.radius, this.radius * 2, this.radius * 2);
      texture(sunImg);
      sphere(this.radius);

    } else if (this.planetNum == 1) {
      texture(mercuryImg);
      sphere(this.radius);
    } else if (this.planetNum == 2) {
      texture(venusImg);
      sphere(this.radius);
    } else if (this.planetNum == 3) {
      texture(earthImg);
      sphere(this.radius);
    } else if (this.planetNum == 4) {
      texture(marsImg);
      sphere(this.radius);
    } else if (this.planetNum == 5) {
      texture(jupiterImg);
      sphere(this.radius);
    } else if (this.planetNum == 6) {
      texture(saturnImg);
      sphere(this.radius);
    } else if (this.planetNum == 7) {
      texture(uranusImg);
      sphere(this.radius);
    } else if (this.planetNum == 8) {
      texture(neptuneImg);
      sphere(this.radius);
    }




  }
}

