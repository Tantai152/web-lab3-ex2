# WBS - Lab 3 Exercise 2: Interactive Pioneer Directory

**Objective:** Reactive data explorer with 7 Vietnamese figures, derived state pipeline (zero `useEffect`), and a11y forms.

| Task ID | Description | Commit Message | File(s) |
|---|---|---|---|
| EX2-00 | Init rules & WBS | `chore(ex2): init project rules and WBS` | `project-rules.md`, `TASK_DECOMPOSITION.md` |
| EX2-01 | Create smartPeople schema (7 figures, stable IDs) | `feat(ex2): normalize smartPeople schema with stable IDs` | `src/data/smartPeople.js` |
| EX2-02 | Add search, IQ filter & toSorted (Derived State) | `feat(ex2): add search, IQ filter & toSorted` | `src/components/ScientistDirectory.jsx` |
| EX2-03 | Add delete/reset & aria-live status | `feat(ex2): add delete/reset & live status` | `src/components/ScientistDirectory.jsx` |
| EX2-04 | Mount in App | `feat(ex2): mount ScientistDirectory in App` | `src/App.jsx` |

## Flow

```mermaid
flowchart LR
    T1["1️⃣ Data Schema"] --> T2["2️⃣ Search & Filter"] --> T3["3️⃣ Delete & Status"] --> T4["4️⃣ Mount in App"]
```

## Anti-Patterns Banned

❌ `useEffect` cho filter/sort → compute trong render.

❌ `.sort()` (mutate) → `.toSorted()`.

❌ `<div>` soup → semantic tags.

❌ Orphan `<input>` → `<label htmlFor={useId()}>`.

❌ Index key → `key={p.id}`.

## Acceptance Criteria

□ SMART_PEOPLE có 7 người (incl. "Nguyễn Tất Tấn Tài"), stable IDs sp-1→sp-7.
□ visible compute 1 pass trong render (zero useEffect).
□ Numeric input: `e.target.valueAsNumber` + `Number.isNaN` guard.
□ `<output role="status" aria-live="polite">` announce filtered count.
□ Delete + Reset immutable update.
□ React Profiler: gõ 1 ký tự = đúng 1 render.