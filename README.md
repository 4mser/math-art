# Math Art

An interactive 3D sine-wave sculpture made with [p5.js](https://p5js.org) in WebGL. It's adapted from Colorful Coding's *Sine Wave* sketch and adds automatic rotation, mouse-drag rotation, zoom, a responsive canvas, and sliders that reshape the geometry in real time.

## Run it

It's a static page with no build step:

```bash
git clone https://github.com/4mser/math-art.git
cd math-art
npx serve .
```

Then open the local URL. You can also open `index.html` through any static server.

## Files

- `sketch.js`: the p5.js sketch, with the geometry, sliders and rotation controls
- `index.html` / `style.css`: the page and the control panel
- `libraries/`: the bundled p5.js

Credit: based on the *Sine Wave* sketch from the Colorful Coding channel.
