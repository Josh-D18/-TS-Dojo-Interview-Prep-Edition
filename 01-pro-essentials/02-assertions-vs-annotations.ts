// 🥋 02 - Assertions vs Annotations

// Annotation
const age: number = 28;

// Assertion
const el = document.querySelector("input") as HTMLInputElement;

// ❌ Dangerous: asserting something that isn’t true
const bad = "not a number" as unknown as number;

// 🧠 Drill 1: Find three cases where assertions are *necessary*
// 🧠 Drill 2: Find three cases where annotations are safer
// 🧠 Drill 3: Create a fake runtime bug caused by a bad assertion

// Example idea:
// const maybeEl = document.querySelector("#nonexistent") as HTMLDivElement
// console.log(maybeEl.innerText) // runtime boom 💥
