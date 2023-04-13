// let slider;
// function setup() {
//   createCanvas(windowWidth, windowWidth);
// q = windowWidth*0.8;
//   slider = createSlider(15, 50, 25, 3);
//   slider.position(10, windowWidth+10);
//   slider.style('width', '80px');

// }
// t = a = b = n = 0;
// draw = (_) => {
//   t += 0.003;
//   background(25, q);
//   let val = slider.value();
//   for (a = 0; a < q; a += val)
//     for (b = 0; b < q; b += val) {
//       n = TAU * (t + sin(TAU * t - dist(a, b, q / 2, q / 2) * 0.01));
//       fill(250,250,250,125);
//       circle(a + 20 * sin(n), b + 20 * cos(n), noise(a * 0.01, b * 0.01) * 30);
//     }
// }; 

/* Figura 2 */

// function setup() {
//   createCanvas(windowWidth, windowHeight, WEBGL)
//   angleMode(DEGREES)
// }

// function draw() {
//   background(30)

//   rotateX(60)

//   noFill()
//   stroke(255)

//   for (var i = 0; i < 50; i++) {
//     var r = map(sin(frameCount / 2), -1, 1, 100, 200)
//     var g = map(i, 0, 50, 100, 200)
//     var b = map(cos(frameCount), -1, 1, 200, 100)

//     stroke(r, g, b)

//     rotate(frameCount / 50)

//     beginShape()
//     for (var j = 0; j < 360; j += 60) {
//       var rad = i * 3
//       var x = rad * cos(j)
//       var y = rad * sin(j)
//       var z = sin(frameCount * 2 + i * 5) * 50

//       vertex(x, y , z)
//     }
//     endShape(CLOSE)
//   }
// }

/* Figura 2 con opción de moverla con el mouse */

// let lastMouseX, lastMouseY;
// let rotateXAmount = 60;
// let rotateYAmount = 0;

// function setup() {
//   createCanvas(windowWidth, windowHeight, WEBGL);
//   angleMode(DEGREES);
//   lastMouseX = mouseX;
//   lastMouseY = mouseY;
// }

// function draw() {
//   background(30);

//   rotateX(rotateXAmount);
//   rotateY(rotateYAmount);

//   noFill();
//   stroke(255);

//   for (let i = 0; i < 50; i++) {
//     const r = map(sin(frameCount / 2), -1, 1, 100, 200);
//     const g = map(i, 0, 50, 100, 200);
//     const b = map(cos(frameCount), -1, 1, 200, 100);

//     stroke(r, g, b);

//     rotate(frameCount / 50);

//     beginShape();
//     for (let j = 0; j < 360; j += 60) {
//       const rad = i * 3;
//       const x = rad * cos(j);
//       const y = rad * sin(j);
//       const z = sin(frameCount * 2 + i * 5) * 50;

//       vertex(x, y , z);
//     }
//     endShape(CLOSE);
//   }
// }

// function mouseDragged() {
//   const deltaX = mouseX - lastMouseX;
//   const deltaY = mouseY - lastMouseY;
//   rotateYAmount += deltaX / 10;
//   rotateXAmount += deltaY / 10;
//   lastMouseX = mouseX;
//   lastMouseY = mouseY;
// }

/* Figura 2 que se arrastra con el mouse pero responsive */

// let lastMouseX, lastMouseY;
// let rotateXAmount = 60;
// let rotateYAmount = 0;

// function setup() {
//   createCanvas(windowWidth, windowHeight, WEBGL);
//   angleMode(DEGREES);
//   lastMouseX = mouseX;
//   lastMouseY = mouseY;
// }

// function draw() {
//   background(30);

//   rotateX(rotateXAmount);
//   rotateY(rotateYAmount);

//   noFill();
//   stroke(255);

//   for (let i = 0; i < 50; i++) {
//     const r = map(sin(frameCount / 2), -1, 1, 100, 200);
//     const g = map(i, 0, 50, 100, 200);
//     const b = map(cos(frameCount), -1, 1, 200, 100);

//     stroke(r, g, b);

//     rotate(frameCount / 50);

//     beginShape();
//     for (let j = 0; j < 360; j += 60) {
//       const rad = i * 3;
//       const x = rad * cos(j);
//       const y = rad * sin(j);
//       const z = sin(frameCount * 2 + i * 5) * 50;

//       vertex(x, y , z);
//     }
//     endShape(CLOSE);
//   }
// }

// function mouseDragged() {
//   const deltaX = mouseX - lastMouseX;
//   const deltaY = mouseY - lastMouseY;
//   rotateYAmount += deltaX / 10;
//   rotateXAmount += deltaY / 10;
//   lastMouseX = mouseX;
//   lastMouseY = mouseY;
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

/* Responsive */

// let lastMouseX, lastMouseY;
// let rotateXAmount = 60;
// let rotateYAmount = 0;
// let scaleFactor = 1.0;

// function setup() {
//   createCanvas(windowWidth, windowHeight, WEBGL);
//   angleMode(DEGREES);
//   lastMouseX = mouseX;
//   lastMouseY = mouseY;
// }

// function draw() {
//   background(30);

//   scale(scaleFactor);
//   rotateX(rotateXAmount);
//   rotateY(rotateYAmount);

//   noFill();
//   stroke(255);

//   for (let i = 0; i < 50; i++) {
//     const r = map(sin(frameCount / 2), -1, 1, 100, 200);
//     const g = map(i, 0, 50, 100, 200);
//     const b = map(cos(frameCount), -1, 1, 200, 100);

//     stroke(r, g, b);

//     rotate(frameCount / 50);

//     beginShape();
//     for (let j = 0; j < 360; j += 60) {
//       const rad = i * 3;
//       const x = rad * cos(j);
//       const y = rad * sin(j);
//       const z = sin(frameCount * 2 + i * 5) * 50;

//       vertex(x, y , z);
//     }
//     endShape(CLOSE);
//   }
// }

// function mouseDragged() {
//   const deltaX = mouseX - lastMouseX;
//   const deltaY = mouseY - lastMouseY;
//   rotateYAmount += deltaX / 1;
//   rotateXAmount += deltaY / 1;
//   lastMouseX = mouseX;
//   lastMouseY = mouseY;
// }

// function mouseWheel(event) {
//   const scrollAmount = event.deltaY;
//   if (scrollAmount > 0) {
//     scaleFactor *= 0.9;
//   } else if (scrollAmount < 0) {
//     scaleFactor *= 1.1;
//   }
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

/* Test 1 */

/* let lastMouseX, lastMouseY;
let rotateXAmount = 60;
let rotateYAmount = 0;
let scaleFactor = 1.0;
let slider;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  lastMouseX = mouseX;
  lastMouseY = mouseY;

  // Crea el control deslizable
  slider = createSlider(1, 100, 60);
  slider.position(10, 10);
}

function draw() {
  background(30);

  scale(scaleFactor);
  rotateX(rotateXAmount);
  rotateY(rotateYAmount);

  noFill();
  stroke(255);

  for (let i = 0; i < 50; i++) {
    const r = map(sin(frameCount / 2), -1, 1, 100, 200);
    const g = map(i, 0, 50, 100, 200);
    const b = map(cos(frameCount), -1, 1, 200, 100);

    stroke(r, g, b);

    rotate(frameCount / 50);

    beginShape();
    for (let j = 0; j < 360; j += slider.value()) { // Utiliza el valor del slider para j
      const rad = i * 3;
      const x = rad * cos(j);
      const y = rad * sin(j);
      const z = sin(frameCount * 2 + i * 5) * 50;

      vertex(x, y , z);
    }
    endShape(CLOSE);
  }
}

function mouseDragged() {
  const deltaX = mouseX - lastMouseX;
  const deltaY = mouseY - lastMouseY;
  rotateYAmount += deltaX / 2;
  rotateXAmount += deltaY / 2;
  lastMouseX = mouseX;
  lastMouseY = mouseY;
}

function mouseWheel(event) {
  const scrollAmount = event.deltaY;
  if (scrollAmount > 0) {
    scaleFactor *= 0.9;
  } else if (scrollAmount < 0) {
    scaleFactor *= 1.1;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
 */

/* Teset 2 */

/* let rotateWithMouse = false;
let slider;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  
  slider = createSlider(1, 100, 60); // Crea un slider con valores entre 1 y 100 y un valor inicial de 60
  slider.position(10, 10); // Posiciona el slider en la pantalla
  
  // Crea un botón para activar/desactivar la rotación con el mouse
  let button = createButton('Rotar con el mouse');
  button.position(10, 50);
  button.mouseClicked(() => {
    rotateWithMouse = !rotateWithMouse; // Cambia el valor de la variable rotateWithMouse al hacer clic en el botón
  });
}

function draw() {
  background(30);
  
  if (rotateWithMouse) { // Si la rotación con el mouse está activada
    let rotX = map(mouseY, 0, height, -90, 90); // Calcula el valor de rotación en X basado en la posición vertical del mouse
    let rotY = map(mouseX, 0, width, -90, 90); // Calcula el valor de rotación en Y basado en la posición horizontal del mouse
    rotateX(rotX); // Aplica la rotación en X
    rotateY(rotY); // Aplica la rotación en Y
  }
  
  let increment = slider.value(); // Obtiene el valor actual del slider
  
  noFill();
  stroke(255);

  for (var i = 0; i < 50; i++) {
    var r = map(sin(frameCount / 2), -1, 1, 100, 200);
    var g = map(i, 0, 50, 100, 200);
    var b = map(cos(frameCount), -1, 1, 200, 100);

    stroke(r, g, b);

    rotate(frameCount / 50);

    beginShape();
    for (var j = 0; j < 360; j += increment) { // Usa el valor del slider para incrementar el ángulo de rotación
      var rad = i * 3;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var z = sin(frameCount * 2 + i * 5) * 50;

      vertex(x, y , z);
    }
    endShape(CLOSE);
  }
}
 */

/* Test 4 */

/* let slider;
let rotateButton, dragRotateButton;

let rotateEnabled = true;
let dragRotateEnabled = false;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  slider = createSlider(1, 100, 60);
  slider.position(20, 20);

  rotateButton = createButton("Disable Rotation");
  rotateButton.position(20, 50);
  rotateButton.mousePressed(() => {
    rotateEnabled = !rotateEnabled;
    rotateButton.html(rotateEnabled ? "Disable Rotation" : "Enable Rotation");
  });

  dragRotateButton = createButton("Enable Drag Rotation");
  dragRotateButton.position(20, 80);
  dragRotateButton.mousePressed(() => {
    dragRotateEnabled = !dragRotateEnabled;
    dragRotateButton.html(
      dragRotateEnabled ? "Disable Drag Rotation" : "Enable Drag Rotation"
    );
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
      rotateX(frameCount / 2);
      rotateY(frameCount / 3);
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

      vertex(x, y, z);
    }
    endShape(CLOSE);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
 */

/* Test 5 */

let slider;
let rotateButton, dragRotateButton;

let rotateEnabled = true;
let dragRotateEnabled = false;
let zoom = 1;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  slider = createSlider(1, 300, 60);
  slider.class('slider')

  rotateButton = createButton("Desactivar rotación automática");
  rotateButton.class('rotate button')
  rotateButton.mousePressed(() => {
    rotateEnabled = !rotateEnabled;
    rotateButton.html(rotateEnabled ? "Desactivar rotación Automática" : "Activar rotación automática");
  });

  dragRotateButton = createButton("Activar rotación con el mouse");
  dragRotateButton.class('mouseRotate button')
  dragRotateButton.mousePressed(() => {
    dragRotateEnabled = !dragRotateEnabled;
    dragRotateButton.html(
      dragRotateEnabled ? "Desactivar rotación con el mouse" : "Activar rotación con el mouse"
    );
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
