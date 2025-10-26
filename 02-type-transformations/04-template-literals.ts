// 🧵 04 - Template Literals
// TypeScript can generate *new* string types using templates.

type Sizes = "small" | "medium" | "large";
type Colors = "red" | "blue";

type ProductVariant = `${Sizes}-${Colors}`;
// Expected: "small-red" | "small-blue" | "medium-red" | ...

// Step 1: Build your own event system
type EventType = "click" | "hover" | "scroll";
type EventName<T extends string> = `${T}_event`;

type AppEvent = EventName<EventType>; // "click_event" | "hover_event" | ...

// Step 2: Combine template literals with unions
type Combine<A extends string, B extends string> = `${A}_${B}`;
type Combo = Combine<"on" | "off", "click" | "hover">; // "on_click" | "off_hover" ...

// Step 3: Infer challenge — reverse engineer what this type does:
type ExtractPrefix<T> = T extends `${infer Prefix}_${string}` ? Prefix : never;

// 🧠 Challenge: write ExtractSuffix<T>
