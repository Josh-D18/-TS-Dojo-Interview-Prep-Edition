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

function logType(value: unknown): void {
  console.log(value)
}


// Union drill
// TODO: Create a function that accepts string | number and returns a consistent string

function unionFunction(value: string | number){
  return typeof value === 'string' ? value : String(value) 
}

// Challenge: refactor this function to remove 'any'
function double(value: number) {
  return value * 2;
}

// Optional: Try making a literal type for roles ('user' | 'admin' | 'guest')
// and create a function that enforces it

type Roles = 'user' | 'admin' | 'guest'


function literalType(role: Roles): Roles{
  return role;
}

literalType('admin')