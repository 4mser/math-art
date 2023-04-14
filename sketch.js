
let slider;
let slider2;
let slider3;
let slider4;
let slider5;
let slider6;
let slider7;

let configList, configItems;

let rotateButton, dragRotateButton, toggleButton;

let rotateEnabled = true;
let dragRotateEnabled = false;
let zoom = 1;
let elementsVisible = true;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  configList = select('#config-list')
  configItems = selectAll('#config-list li')

  slider = createSlider(1, 400, 1);
  slider.class('slider');


  slider2 = createSlider(1, 100, 20);
  slider2.class('slider2');

  slider3 = createSlider(1, 50, 4);
  slider3.class('slider3');

  slider4 = createSlider(0, 1000, 100);
  slider4.class('slider4');

  slider5 = createSlider(0, 5, 2);
  slider5.class('slider5');

  slider6 = createSlider(0, 200, 200);
  slider6.class('slider6');

  slider7 = createSlider(1, 250, 250);
  slider7.class('slider7');
  
  
  dragRotateButton = createButton("Activar rotación touch");
  dragRotateButton.class('mouseRotate button');
  dragRotateButton.mousePressed(() => {
    dragRotateEnabled = !dragRotateEnabled;
    dragRotateButton.html(dragRotateEnabled ? "Desactivar rotación touch" : "Activar rotación touch");
  });

  rotateButton = createButton("Desactivar rotación automática");
  rotateButton.class('rotate button');
  rotateButton.mousePressed(() => {
    rotateEnabled = !rotateEnabled;
    rotateButton.html(rotateEnabled ? "Desactivar rotación automática" : "Activar rotación automática");
  });


  toggleButton = createImg('gear.svg');
  toggleButton.class('toggle-config');
  toggleButton.mousePressed(() => {
    elementsVisible = !elementsVisible;

    configList.style('display', elementsVisible ? 'none' : 'block')

    slider.style('display', elementsVisible ? 'none' : 'block');
    slider2.style('display', elementsVisible ? 'none' : 'block');
    slider3.style('display', elementsVisible ? 'none' : 'block');
    slider4.style('display', elementsVisible ? 'none' : 'block');
    slider5.style('display', elementsVisible ? 'none' : 'block');
    slider6.style('display', elementsVisible ? 'none' : 'block');
    slider7.style('display', elementsVisible ? 'none' : 'block');
    rotateButton.style('display', elementsVisible ? 'none' : 'block');
    dragRotateButton.style('display', elementsVisible ? 'none' : 'block');
  });
}

function draw() {
  background(12);

  if (rotateEnabled || dragRotateEnabled) {
    if (dragRotateEnabled) {
      let dx = map(mouseX, 0, width, -180, 200);
      let dy = map(mouseY, 0, height, -180, 180);
      rotateY(dx);
      rotateX(dy);
    } else {
      rotateX(frameCount / 10);
      rotateY(frameCount / 10);
    }
  }

  let step = slider.value();
  let step2 = slider2.value();
  let step3 = slider3.value();
  let step4 = slider4.value();
  let step5 = slider5.value();
  let step6 = slider6.value();
  let step7 = slider7.value();
  noFill();
  stroke(255);

  for (let i = 0; i < step2; i++) {
    let r = map(sin(frameCount / 10), -1, 1, 100, step7);
    let g = map(i, 10, 50, 100, 200);
    let b = map(cos(frameCount), -1, 1, 200, step7);

    stroke(r, g, b);

    rotate(frameCount / step3);

    beginShape();
    for (let j = 0; j < 360; j += step) {
      let rad = i *3;
      let x = rad * cos(j);
      let y = rad * sin(j);
      let z = sin(frameCount * step5 + i * step6) * step4;

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
  zoom = constrain(zoom, 1, 6);
  
}
