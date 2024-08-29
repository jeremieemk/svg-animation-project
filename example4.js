// example4.js

// JavaScript animation using requestAnimationFrame
const circle = document.getElementById("js-circle");
let position = 100;
let direction = 1;

function animate() {
  position += 2 * direction;
  if (position > 700 || position < 100) {
    direction *= -1;
  }
  circle.setAttribute("cx", position);
  requestAnimationFrame(animate);
}

animate();
