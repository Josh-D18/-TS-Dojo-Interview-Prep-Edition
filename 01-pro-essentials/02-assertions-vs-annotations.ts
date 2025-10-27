// 🥋 02 - Assertions vs Annotations

// Annotation
const age: number = 28;

// Assertion
const el = document.querySelector("input") as HTMLInputElement;

// ❌ Dangerous: asserting something that isn’t true
const bad = "not a number" as unknown as number;

// 🧠 Drill 1: Find three cases where assertions are *necessary*

//-- When you know a value is of a certain type and need typescript to trust you
//-- Check to see if the type returned or passed into a function is the type that I expect it to be
//-- Narrow a value to be a more specific type

// 🧠 Drill 2: Find three cases where annotations are safer

//-- Specify that a value is a specific type before run time
//-- The compiler knows that the value is the type defined
//-- Errors will be thrown if the value is reassigned to another type because there is no doubt that the variable is of the specified type

// 🧠 Drill 3: Create a fake runtime bug caused by a bad assertion
function runtimeBug(value: string) {
  const string_2 = document.querySelector(value) as unknown;
  return string_2.innerText;
}

// Example idea:
// const maybeEl = document.querySelector("#nonexistent") as HTMLDivElement
// console.log(maybeEl.innerText) // runtime boom 💥

// Drill 1 — where assertions are necessary (improved)

// DOM APIs / event targets — when event handlers give you a EventTarget and you know it’s an HTMLInputElement:
// e.g. (e.target as HTMLInputElement).value.

// Third-party JSON / unknown data — you parsed something or receive unknown from a library and you validated it manually, so you assert to a narrower type.
// e.g. after runtime validation, const user = parsed as User.

// Interop with poorly-typed libraries or generics — when a lib returns any/unknown, or TypeScript can’t infer a generic return type and you legitimately know the shape.
// e.g. const cached = cache.get(key) as T.

// Drill 2 — where annotations are safer (improved)

// Public API / function signatures — annotate params/returns so callers and the compiler get correct contracts.

// Long-lived or reassigned vars — let state: State; makes intent clear before runtime assignment.

// Complex object shapes — interfaces/types for objects (DTOs, configs) ensure structure and enable IDE/autocomplete and refactoring safety.

// Annotations = long-term guardrails. Assertions = short-term safety valves.

// Drill 3 — a better fake runtime bug (explain, don’t just dump)

// Your runtimeBug idea is valid: bad assertions create runtime crashes. A clearer teaching example:

// Show the unsafe version (what you wrote).

// Then show a safe rewrite pattern (check for null, validate, then assert).

// Final takeaways (practical rules)

// Prefer annotations for API and long-term correctness. They’re your contract.

// Use assertions only when you’ve already done runtime checks or when TypeScript cannot know something you did verify.

// When asserting DOM nodes, always account for null (check or fail fast).

// Treat as unknown as T like a nuclear option — fine for tests or contrived examples, not for production.

function getInputValue() {
  const el = document.querySelector("#username");

  if (el instanceof HTMLInputElement) {
    return el.value;
  }
}

type Data = {
  name: string;
  age: number;
};

const response = '{"name": "Josh", "age": 28}';
const parsed = JSON.parse(response);

if (
  typeof parsed === "object" &&
  parsed !== null &&
  "age" in parsed &&
  typeof (parsed as any).age === "number"
) {
  const user: Data = parsed as Data;
  console.log(user.age.toFixed(2));
}

const fileInput = document.querySelector("#file");
if (fileInput instanceof HTMLInputElement) {
  fileInput.addEventListener("change", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLInputElement)) return;
    if (!target.files || target.files.length === 0) return;

    const file = target.files[0];
    console.log(file.name);
  });
}
