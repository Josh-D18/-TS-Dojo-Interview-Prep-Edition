// 🥋 04 - Narrowing and Guards

// Example: narrowing with typeof
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log("String:", value.toUpperCase());
  } else {
    console.log("Number:", value.toFixed(2));
  }
}

// Custom Type Guard
function isString(value: unknown): value is string {
  return typeof value === "string";
}

// Literal + "in" narrowing
type Responses =
  | { status: "success"; data: string }
  | { status: "error"; message: string };

function handleResponse(r: Responses) {
  if (r.status === "success") {
    console.log(r.data);
  } else {
    console.error(r.message);
  }
}

// Bonus: Create a lying type guard and see what havoc it causes
function isNumber(value: unknown): value is number {
  return true;
}

function isStringGuard(value: unknown): value is string {
  return false
}