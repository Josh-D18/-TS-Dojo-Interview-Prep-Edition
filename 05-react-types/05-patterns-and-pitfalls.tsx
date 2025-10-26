// 🧩 Patterns & Pitfalls — the boss battle of React + TypeScript.

// 1️⃣ Pattern: Type-safe forwardRef
// Create a <TextInput> component that forwards ref to <input> element.
// - Challenge: preserve HTMLInputElement typing.
// - Bonus: Make it generic over input vs textarea.

// 2️⃣ Pitfall: Over-narrowing props
// Demonstrate how using “extends” incorrectly breaks inference (e.g., <Button extends "a">).

// 3️⃣ Pattern: Type-safe higher-order components (HOCs)
// - Create a withAuth<T>(Component: React.ComponentType<T>) that injects a user prop
// - Challenge: ensure props merge correctly with the wrapped component’s props.

// 4️⃣ Pitfall: React.FC misuse
// - Show why using React.FC can break defaultProps or children typing.

// ⚔️ Meta: Why are React + TypeScript generics tricky? (Hint: JSX context + inference loss)
