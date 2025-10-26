# 🧬 Day 4 — Advanced Type Patterns

> “This is where TypeScript stops feeling like a linter and starts feeling like a language of constraints.”

## 📘 What You’ll Learn

- Builder and Fluent patterns — with type-level enforcement
- Branded types for domain safety
- Singleton patterns with generic instance tracking
- Advanced inference flow and recursion

## 💥 Mental Model

You’re no longer “writing TypeScript.”  
You’re designing a **type language inside TypeScript** — a meta-system that expresses how data _is allowed to evolve_.

Every pattern here reflects a software architecture idea:
| TypeScript Concept | Architectural Analogy |
|--------------------|-----------------------|
| Branded Types | Domain modeling |
| Builder Pattern | Object creation lifecycle |
| Fluent APIs | Query and chaining DSLs |
| Singleton | Controlled state |
| Infer Flow | Compiler reasoning |

## 🧗 Challenge Progression

| Stage | Focus             | Skill                     |
| ----- | ----------------- | ------------------------- |
| 1     | Builder Pattern   | Type-driven design        |
| 2     | Branded Types     | Domain safety             |
| 3     | Fluent Interfaces | Self-referential generics |
| 4     | Singletons        | Instance control          |
| 5     | Infer Flow        | Inference reasoning       |

## 🧠 Interview Triggers

- "How would you enforce build order with types?"
- "When should you use branded types over enums?"
- "How would you make a fluent API type-safe?"
- "What’s the difference between a recursive conditional type and a mapped type?"

## 🔮 Next Step

Next up: **Day 5 — React Types**  
That’s where you’ll learn how to wield this entire toolkit inside React apps — components, hooks, context, and render props, all fully typed.
