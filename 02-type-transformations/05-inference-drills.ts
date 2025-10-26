// 🧠 05 - Inference Drills
// Your goal: make TypeScript *do the work for you* via inference.

// Step 1: Infer return type
function makeUser(name: string, age: number) {
  return { name, age };
}
type User = ReturnType<typeof makeUser>;

// Step 2: Infer parameters
type Params = Parameters<typeof makeUser>;

// Step 3: Custom infer practice
type UnpackArray<T> = T extends (infer U)[] ? U : T;

// Step 4: Nested inference
type PromiseValue<T> = T extends Promise<infer U> ? U : T;

// 🧠 Drill: Write DeepPromiseValue<T> that keeps unwrapping until base type
// Example: Promise<Promise<string>> → string
