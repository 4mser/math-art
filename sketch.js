
let slider;
let rotateButton, dragRotateButton, toggleButton;

let rotateEnabled = true;
let dragRotateEnabled = false;
let zoom = 1;
let elementsVisible = true;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  slider = createSlider(1, 300, 60);
  slider.class('slider');

  rotateButton = createButton("Desactivar rotación automática");
  rotateButton.class('rotate button');
  rotateButton.mousePressed(() => {
    rotateEnabled = !rotateEnabled;
    rotateButton.html(rotateEnabled ? "Desactivar rotación automática" : "Activar rotación automática");
  });

  dragRotateButton = createButton("Activar rotación touch");
  dragRotateButton.class('mouseRotate button');
  dragRotateButton.mousePressed(() => {
    dragRotateEnabled = !dragRotateEnabled;
    dragRotateButton.html(dragRotateEnabled ? "Desactivar rotación touch" : "Activar rotación touch");
  });

  toggleButton = createImg('gear.svg');
  toggleButton.class('toggle-config');
  toggleButton.mousePressed(() => {
    elementsVisible = !elementsVisible;
    slider.style('display', elementsVisible ? 'none' : 'block');
    rotateButton.style('display', elementsVisible ? 'none' : 'block');
    dragRotateButton.style('display', elementsVisible ? 'none' : 'block');
  });
}

function draw() {
  background(30);

  if (rotateEnabled || dragRotateEnabled) {
    if (dragRotateEnabled) {
      let dx = map(mouseX, 0, width, -180, 180);
      let dy = map(mouseY, 0, height, -180, 180);
      rotateY(dx);
      rotateX(dy);
    } else {
      rotateX(frameCount / 10);
      rotateY(frameCount / 10);
    }
  }

  let step = slider.value();
  noFill();
  stroke(255);

  for (let i = 0; i < 50; i++) {
    let r = map(sin(frameCount / 2), -1, 1, 100, 200);
    let g = map(i, 0, 50, 100, 200);
    let b = map(cos(frameCount), -1, 1, 200, 100);

    stroke(r, g, b);

    rotate(frameCount / 50);

    beginShape();
    for (let j = 0; j < 360; j += step) {
      let rad = i * 3;
      let x = rad * cos(j);
      let y = rad * sin(j);
      let z = sin(frameCount * 2 + i * 5) * 50;

      vertex(x * zoom, y * zoom, z * zoom);
    }
    endShape(CLOSE);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseWheel(event) {
  zoom += event.delta / 1000;
  zoom = constrain(zoom, 1, 4);
  
}
