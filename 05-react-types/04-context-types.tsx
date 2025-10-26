// 🌍 Context Types — the hardest thing to type cleanly.

// 1️⃣ Create a typed AuthContext with:
// interface AuthContextValue {
//   user: User | null
//   login: (token: string) => Promise<void>
//   logout: () => void
// }
// export const AuthContext = createContext<AuthContextValue | null>(null);

// 2️⃣ Create a hook `useAuth()` that throws an error if used outside the provider.
// - Ensure correct narrowing at type level (non-null).

// 3️⃣ Make a “DynamicContext” factory that can create new typed contexts on the fly.
// - Challenge: preserve generic type info through React.createContext + custom hook.

// ⚔️ Reflection: Why does React Context typing often require *non-null assertions* or custom hooks?
