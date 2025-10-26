// 🌊 Fluent Interfaces — making type-safe chains that flow like sentences.

// 1️⃣ Build a chainable QueryBuilder class with methods:
// .select(fields), .where(condition), .orderBy(field), .execute()

// Type requirements:
// - .execute() returns the correct result type
// - each call should preserve accumulated state (types and values)

// 2️⃣ Add inference to detect when .execute() is called without .select() — disallow it.

// 3️⃣ Optional: add generics for model shape (User, Product, etc).

// ⚔️ Interview question: when do you use *this-based inference* vs *builder generics*?
