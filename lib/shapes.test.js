const {Triangle, Square, Circle} = require('../lib/shapes.js');

const triangleTestCase = '<polygon points="150, 18 244, 182 56, 182" fill="green" />';
const squareTestCase = `<rect x="75" y="25" width="150" height="150" fill="#FFF000" />`;
const circleTestCase = `<circle cx="150" cy="100" r="75" fill="red" />`;

describe('Shapes', () => {
    describe('Triangle', () => {
      it('should render blue triangle formatted in svg', () => {
        const triangle = new Triangle('green');
        expect(triangle.render()).toEqual(triangleTestCase);
      });
    }),
    describe('Square', () => {
      it('should render yellow(hexadecimal) square formatted in svg', () => {
        const square = new Square('#FFF000');
        expect(square.render()).toEqual(squareTestCase);
      });
    }),
    describe('circle', () => {
      it('should render red circle formatted in svg', () => {
        const circle = new Circle('red');
        expect(circle.render()).toEqual(circleTestCase);
      });
    }),
    // Modules test case
    describe('triangle', () => {
      it('should render blue formatted in svg', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
      });
    })
  });
