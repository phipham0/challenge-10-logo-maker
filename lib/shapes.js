class Triangle {
    constructor(color = "black") {
      this.color = color;
    }
    setColor(color) {
      this.color = color;
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
      }
  }

class Circle {
    constructor(color) {
        this.color = color;
    }
    render() {
        return `<circle cx="150" cy="100" r="75" fill="${this.color}" />`;
        }
    }

class Square {
    constructor(color) {
        this.color = color;
    }
    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.color}" />`;
        }
    }
  
  module.exports = {Triangle, Circle, Square};
  