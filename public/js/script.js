import { angleDegrees, magnitude } from "./index1";
console.log(angleDegrees);
console.log(magnitude);
const canvas = document.getElementById("meterCanvas");
const context = canvas.getContext("2d");

// Assuming you have the angle (in degrees) and velocity magnitude
// Example angle in degrees
const velocity = magnitude; // Example velocity magnitude
const maxVelocity = 10; // Example maximum velocity

// Assuming the radius of the meter
const meterRadius = 150;

// Calculate the length of the arrow based on the velocity magnitude
const arrowLength = (velocity / maxVelocity) * meterRadius;

// Convert the angle from degrees to radians
const angleRadians = (angleDegrees - 90) * (Math.PI / 180);

// Calculate the position of the arrow's tip
const arrowX = canvas.width / 2 + Math.cos(angleRadians) * arrowLength;
const arrowY = canvas.height / 2 + Math.sin(angleRadians) * arrowLength;

// Function to draw the meter
function drawMeter() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the meter
  context.beginPath();
  context.arc(canvas.width / 2, canvas.height / 2, meterRadius, 0, 2 * Math.PI);
  context.lineWidth = 4;
  context.strokeStyle = "#d35400";
  context.stroke();

  // Create a linear gradient for the arrow color
  const gradient = context.createLinearGradient(
    canvas.width / 2,
    canvas.height / 2,
    arrowX,
    arrowY
  );
  gradient.addColorStop(0, "rgba(255, 165, 0, 1)");
  gradient.addColorStop(1, "rgba(255, 215, 0, 1)");

  // Draw the arrow sector
  context.beginPath();
  context.moveTo(canvas.width / 2, canvas.height / 2);
  context.arc(
    canvas.width / 2,
    canvas.height / 2,
    arrowLength,
    (angleDegrees - 10) * (Math.PI / 180),
    (angleDegrees + 10) * (Math.PI / 180),
    false
  );
  context.closePath();
  context.fillStyle = gradient;
  context.fill();
}

// Initial draw
drawMeter();

// // Add event listeners to handle hover event
// canvas.addEventListener('mousemove', handleHover);
// canvas.addEventListener('mouseout', handleHover);

// // Function to handle hover event
// function handleHover(event) {
//   // Clear the canvas and redraw the meter
//   drawMeter();

//   // Apply glowing effect when hovering
//   if (event.type === 'mousemove') {
//     context.shadowBlur = 20;
//     context.shadowColor = 'orange';
//   } else if (event.type === 'mouseout') {
//     context.shadowBlur = 0;
//   }
