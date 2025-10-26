# 🥋 TypeScript Dojo: Interview Prep Edition

> “This is not a tutorial.  
> This is a dojo — where you spar with the compiler until you think in types.”

Welcome to your **TypeScript Interview Training Ground** — a 5-day intensive inspired by Matt Pocock’s _Total TypeScript_ and sharpened for real-world engineering interviews.  
Each module hits the exact pain points that separate “I know TypeScript” from “I think in TypeScript.”

---

## ⚔️ The Training Arc

| Day  | Folder                                                  | Theme                | Focus                                                  |
| ---- | ------------------------------------------------------- | -------------------- | ------------------------------------------------------ |
| 🥇 1 | [`01-pro-essentials/`](./01-pro-essentials)             | Pro Essentials       | From type basics to OOP, this is your foundation dojo. |
| 🧩 2 | [`02-type-transformations/`](./02-type-transformations) | Type Transformations | Learn to bend unions, conditions, and mapped types.    |
| 🧠 3 | [`03-generics/`](./03-generics)                         | Generics             | Deepen your inference power and abstraction design.    |
| 🧬 4 | [`04-advanced-patterns/`](./04-advanced-patterns)       | Advanced Patterns    | Fluent builders, branded types, and singleton design.  |
| ⚛️ 5 | [`05-react-types/`](./05-react-types)                   | React + TypeScript   | Real-world component, hook, and context mastery.       |

Each folder contains 5–7 TypeScript “katas” — short but deadly exercises you debug, refactor, or redesign.  
Your job isn’t to complete them fast — it’s to _make the compiler your ally._

---

## 🧘 How to Train

1. **Clone the dojo**
   ```bash
   git clone https://github.com/yourusername/ts-dojo-interview-prep.git
   cd ts-dojo-interview-prep
   npm install
   (You’ll need Node 20.19+ and TypeScript 5+)
   ```

# Warm up your environment

- **Run** `tsc --noEmit` often — this dojo uses compiler errors as your sparring partner.
- **Use** VSCode’s hover info and Ctrl+Click aggressively.
- **Don’t** Google “answers.” Instead, Google **concepts**.

---

## Train daily (30–90 mins per session)

- **Day 1–2** → Comfort with syntax & guards
- **Day 3** → Generics mastery
- **Day 4** → Architecture patterns
- **Day 5** → React systems

---

## Do “Code Kendo” rounds

- Pick one exercise and **refactor it without breaking types**.
- Add one new constraint and see how far inference carries you.

---

## 💥 Interview-Level Drills

| Skill             | Challenge                                               |
| ----------------- | ------------------------------------------------------- |
| Type Narrowing    | Debug an API response type mismatch                     |
| Mapped Types      | Design a settings system with partial overrides         |
| Conditional Types | Create a type-safe validation schema                    |
| Generics          | Build a reusable data hook that infers API return shape |
| React Typing      | Type a polymorphic component with inferred props        |
| Context Typing    | Make a dynamic global store with strong inference       |

> These are the types of challenges that come up at **Meta, Shopify, Stripe, and Vercel** interviews.  
> You’ll walk in knowing not just **how** to type — but **why**.

---

## 🧩 Bonus Mode

Once you’ve finished all 5 dojos, build a **Mini React App** that uses:

- `useLocalStorage<T>` from Day 5
- A `Builder` from Day 4 to generate filters
- A `DeepReadonly` utility from Day 3
- A `List<T>` from Day 5 to render typed UI
- Branded types for your IDs and domain logic

Combine all 5 days into one small project — it’s the best interview story you can tell.

---

## 🧙 Philosophy

This repo teaches a mindset:

**Don’t fight the compiler — collaborate with it.**

Every red squiggle is a whisper from TypeScript saying:

> “You forgot to consider something.”

When you can hear that whisper before it appears, you’ve become a TypeScript wizard.

---

## 🏁 Your Mission

Here’s your sprint plan (You do not have to follow it. You can work at your own pace):

| Day   | Focus                        | Outcome                           |
| ----- | ---------------------------- | --------------------------------- |
| Day 1 | Essentials + Transformations | Master compiler intuition         |
| Day 2 | Generics                     | Abstract safely, avoid `any`      |
| Day 3 | Advanced Patterns            | Show senior-level design thinking |
| Day 4 | React Types                  | Build and debug real components   |
| Day 5 | Integration                  | Mock interview simulation         |

---

Run through each file like a **kata**.  
No shortcuts. No AI. Just you and the compiler.

> “When you can make TypeScript predict what you mean before you write it —  
> that’s when you’ve crossed from dev to engineer.”

Good luck, warrior.  
**Now type your destiny.**
