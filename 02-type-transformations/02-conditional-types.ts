// 🧩 02 - Conditional Types
// Form:  T extends U ? X : Y

// Step 1: Build your own NonNullable
type MyNonNullable<T> = T extends null | undefined ? never : T

// Step 2: Custom utility
type IsString<T> = T extends string ? true : false

// Try testing with IsString<string>, IsString<number>

// Step 3: Distributive magic
type Letters = "a" | "b" | "c"
type AddBang<T> = T extends string ? `${T}!` : never
type Shouted = AddBang<Letters> // "a!" | "b!" | "c!"

// Step 4: Conditional transformation drill
// Build a type called Flatten<T> that unwraps arrays like string[] → string

// 🧠 Stretch goal: 
// Write a type called DeepOptional<T> that makes all nested properties optional.
