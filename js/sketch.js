'use strict';

function setup() {
    // Setup code goes here.
    // This function runs once.
    // The default canvas size, which is implied here, is 100 × 100 in pixels.
    // The 1-pixel gray border around the box is generated by style.css.
}

function draw() {
    strokeWeight(4);

    stroke(255, 0, 255);
    line(5, 5, 95, 95);

    stroke(0, 255, 0);
    line(95, 5, 5, 95);
}
