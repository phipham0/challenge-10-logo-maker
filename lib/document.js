const {Triangle, Square, Circle} = require('./shapes.js');

function createDocument(textcolor, text, color, shape) {
  let shapeRender = "";
  if (shape == "Square") {
    shapeRender = new Square(color).render();
  }
  if (shape == "Circle") {
    shapeRender = new Circle(color).render();
  }
  if (shape == "Triangle") {
    shapeRender = new Triangle(color).render();
  }
  
  
  return `
  <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  ${shapeRender}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>

</svg>
  `;
}

module.exports = { createDocument };