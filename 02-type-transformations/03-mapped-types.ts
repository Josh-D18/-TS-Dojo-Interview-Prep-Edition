// 🗺️ 03 - Mapped Types
// Think of this as “for loops for types”

type Person = {
  name: string;
  age: number;
  email?: string;
};

// Step 1: Basic map
type ReadonlyPerson = {
  readonly [K in keyof Person]: Person[K];
};

// Step 2: Conditional mapping
type OptionalPerson = {
  [K in keyof Person]?: Person[K];
};

// Step 3: Key remapping
type Prefixed<T> = {
  [K in keyof T as `user_${K & string}`]: T[K];
};

type PrefixedPerson = Prefixed<Person>;

// Step 4: Mutation practice
type Mutable<T> = { -readonly [K in keyof T]: T[K] };
type Nullable<T> = { [K in keyof T]: T[K] | null };

// 🧠 Bonus:
// Write a Mapped type that converts all property names to UPPERCASE.
