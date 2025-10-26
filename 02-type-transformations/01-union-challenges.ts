// 🧬 01 - Union Challenges
// Goal: Master union manipulation — TypeScript’s version of polymorphic kung fu.

// Step 1: Basic union
type Status = "success" | "error" | "pending";

// Create a function that logs messages differently depending on status
// Example idea: logStatus("success") -> ✅ Success!
// TODO: add a missing status case and see what happens when you forget to handle it (exhaustiveness check)

// Step 2: Union extraction
type OnlySuccess = Extract<Status, "success">;
type NotPending = Exclude<Status, "pending">;

// Step 3: Optional exercise — build your own Extract/Exclude from scratch
// type MyExtract<T, U> = ???
// type MyExclude<T, U> = ???

// 🧠 Bonus:
// Create a union of event names and make a type that extracts only “click” events.
