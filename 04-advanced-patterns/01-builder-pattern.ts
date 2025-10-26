// 🧱 The Builder Pattern — Type-safe step-by-step object construction.

// 1️⃣ Build a type-safe "UserBuilder" that ensures required steps before "build()".
// Example idea:
// - must setName() before setEmail()
// - must call build() last

// The challenge: enforce the build order at the *type level*, not runtime.

// 2️⃣ Create a fluent-style builder for a Config object.
// Each setter returns a new builder with the previous properties frozen in.

// 3️⃣ Add conditional constraints:
// Example: if "mode" === "production", require "apiKey" before build().

// ⚔️ Interview variant: how would you model *mutually exclusive* builder states?
