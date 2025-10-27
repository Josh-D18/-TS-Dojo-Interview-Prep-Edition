// 🥋 05 - OOP with Classes

abstract class Shape {
  constructor(public name: string) {}
  abstract area(): number;
}

class Circle extends Shape {
  #radius: number;
  constructor(radius: number) {
    super("circle");
    this.#radius = radius;
  }
  area(): number {
    return Math.PI * this.#radius ** 2;
  }
}

class Square extends Shape {
  private side: number;
  constructor(side: number) {
    super("square");
    this.side = side;
  }
  area(): number {
    return this.side * this.side;
  }
}

// 🧠 Drill:
// - Try making a new subclass (Triangle? Rectangle?)
// - Use `protected` to experiment with inheritance
// - Explain why `private` isn’t truly private at runtime

class Triangle extends Shape {
  protected side: number;
  constructor(side: number) {
    super("triangle");
    this.side = side;
  }

  area(): number {
    return this.side * 3;
  }
}

const triangle = new Triangle(3);
console.log(triangle.area());

// -- private can still be accessed during runtime in some instances and truly is not private to the class. TypeScript’s private is structural — it only exists at compile time.Once compiled to JS, it becomes a normal property (you could even console.log(triangle['side'])).
