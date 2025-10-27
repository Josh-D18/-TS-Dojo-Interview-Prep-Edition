// 🥋 03 - Type vs Interface

// Interface Example
interface Users {
  id: string;
  name: string;
}

interface Admin extends Users {
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

interface newUser {
  kind: "user";
  id: string;
  name: string;
}

interface newAdmin {
  kind: "admin";
  id: string;
  permissions: string[];
}

type Job =
  | ({ jobTitle: string; yearStarted: string } & newUser)
  | ({ jobTitle: string; yearStarted: string } & newAdmin);

const employee: Job = {
  jobTitle: "CEO",
  yearStarted: "2001",
  id: "1234",
  name: "John",
  kind: "user",
};

// Example: type Animal = { kind: "cat"; meow: () => void } | { kind: "dog"; bark: () => void }
