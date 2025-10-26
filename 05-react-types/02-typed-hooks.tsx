// 🪝 Typed Hooks — generic React functions that never lie.

// 1️⃣ Create a custom hook `useLocalStorage<T>(key: string, initialValue: T)`
// - Returns [T, setValue]
// - Persists automatically to localStorage
// - Challenge: Ensure it correctly infers T.

// 2️⃣ Create a `useFetch<T>` hook
// - Takes a URL and returns a typed data state (data: T | null, error, loading).
// - Hint: Use discriminated unions for state handling.

// 3️⃣ Create a `useEventListener` hook
// - Generic over event type (e.g. MouseEvent, KeyboardEvent)
// - Should only accept valid event names for the target element.

// 💬 Meta exercise: what’s the difference between `useCallback` and `useMemo` when typing return values?
