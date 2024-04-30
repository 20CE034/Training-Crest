// Abstract classes
abstract class Shape {
  abstract calculateArea(): number;

  describe(): void {
    console.log("I am a shape.");
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  sideLength: number;

  constructor(sideLength: number) {
    super();
    this.sideLength = sideLength;
  }

  calculateArea(): number {
    return this.sideLength ** 2;
  }
}

class Triangle extends Shape {
  base: number;
  height: number;

  constructor(base: number, height: number) {
    super();
    this.base = base;
    this.height = height;
  }

  calculateArea(): number {
    return 0.5 * this.base * this.height;
  }
}

const circle = new Circle(5);
const square = new Square(4);
const triangle = new Triangle(3, 6);

circle.describe();
console.log("Area of circle:", circle.calculateArea());

square.describe();
console.log("Area of square:", square.calculateArea());

triangle.describe();
console.log("Area of triangle:", triangle.calculateArea());
