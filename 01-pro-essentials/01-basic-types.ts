// 🥋 01 - Basic Types

// 👉 Practice declaring values with explicit vs inferred types
let username: string = "Josh";
let level = 10; // inferred
let isAdmin: boolean = false;

// Unknown vs any — spot the difference
let mysteryValue: unknown = "could be anything";
let chaos: any = 42;

// TODO: write a function that safely logs the type of an unknown value
// without using "any"

// Union drill
// TODO: Create a function that accepts string | number and returns a consistent string

// Challenge: refactor this function to remove 'any'
function double(value: any) {
  return value * 2;
}

// Optional: Try making a literal type for roles ('user' | 'admin' | 'guest')
// and create a function that enforces it
