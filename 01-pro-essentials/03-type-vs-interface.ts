// 🥋 03 - Type vs Interface

// Interface Example
interface User {
  id: string;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}

// Type Alias Example
type Point = { x: number; y: number };
type Move = (p: Point) => Point;

// ❌ Types cannot merge like interfaces can
// interface User { age: number } // works
// type Point { z: number } // ❌ nope

// 🧠 Drill:
// Create a discriminated union comparing interface vs type and
// inspect how IntelliSense differs

// Example: type Animal = { kind: "cat"; meow: () => void } | { kind: "dog"; bark: () => void }
