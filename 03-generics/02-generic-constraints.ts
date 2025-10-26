// 🧠 Constraints are like “rules of engagement” for your generics.

// 1️⃣ Constrained merge
// Write a function merge<T, U> that only merges if both are objects.

// 2️⃣ Length checker
// Build a generic function that only accepts items that *have a length property*.

// 3️⃣ Extract keys from shape
// Write a type that extracts only the keys whose values are string.

// 4️⃣ Deep constraint
// Write a function that accepts an object that has a nested `meta.id` string.

// 5️⃣ Optional parameter constraint
// Build a function that only works if a type has a certain key present (using `extends keyof`).

// 🪄 Hint for self: Try chaining constraints (`T extends U, U extends Record<string, any>`).
