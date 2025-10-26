// 🎛️ Generic Props — making reusable components actually type-safe.

// 1️⃣ Create a <Select> component that works with generic options:
// <Select options={users} getLabel={u => u.name} getValue={u => u.id} />
// - Infer the generic type T from options
// - Enforce correct function parameter types

// 2️⃣ Create a <DataTable<T>> that:
// - Accepts columns: Array<{ key: keyof T, label: string }>
// - Accepts data: T[]
// - Type-checks each column key against T automatically.

// 3️⃣ Optional: Add sorting and filtering functions with type constraints.
// e.g. `onSort?(key: keyof T, order: 'asc' | 'desc')`

// ⚔️ Interview question: when do you *infer* generics vs explicitly declare them?
