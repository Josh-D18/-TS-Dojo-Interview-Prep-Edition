// 🧬 Now we move to the “thinking in generics” level.

// 1️⃣ Create a generic Repository<T> interface that:
// - has methods getAll, getById, save, delete
// - all strongly typed for the given entity type

// 2️⃣ Make a DataFetcher<T> class that:
// - stores a URL
// - has fetchAll() and fetchOne(id) returning typed data

// 3️⃣ Build a type-safe EventEmitter<TEvents> that:
// - enforces valid event names and payloads

// 4️⃣ Optional: Create a generic Cache<T> class that:
// - uses a Map under the hood
// - ensures values retrieved are correctly typed

// 🧠 Meta-question: What’s the difference between an “open generic” abstraction and a “closed generic” specialization?
