---
name: impeccable
description: "High-craft frontend design and engineering skill by Paul Bakaus (pbakaus/impeccable). Use when designing, redesigning, shaping, auditing, critiquing, polishing, clarifying, distilling, or hardening UI/UX across websites, web applications, mobile frames, and design systems."
version: 4.5.2
source: https://github.com/pbakaus/impeccable
---

# Impeccable — Craft & Design System Standard

This skill equips you to produce out-of-distribution craft: moving past safe, generic AI-generated interfaces to design like an award-winning design director with impeccable standards for production-grade code, clear point of view, deep user empathy, and precise execution.

---

## 1. Core Philosophy & Mindset

- **The Brief Wins:** Honor pinned aesthetics, materials, brand fonts, and palettes. Never substitute your generic preferences for a clearly articulated creative brief.
- **Go All Out:** No hedging, no placeholder shortcuts, no half-finished components. Deliver complete, production-ready interfaces.
- **Refinement Preserves; Redesign Replaces:**
  - *Refinement (Polish/Harden):* Preserves incumbent identity, behavior, content, and scope. Fixes drift and elevates execution.
  - *Redesign:* Keeps core product truth, function, native affordances, and constraints, but treats the incumbent visual styling as evidence/anti-reference and establishes a new cohesive design language. Never split the difference into awkward halfway compromises.
- **Bounded Verification Passes:** Do not loop endlessly in micro-edits. Build fully, inspect across desktop and mobile viewports in a single batched pass, fix all issues in one consolidated pass, confirm once, and stop.
- **No Loaded Symbols in Decoration:** Keep divisive, military, or hate-adjacent motifs out of ornamental styling; always favor clean, purposeful geometric and typographic forms.

---

## 2. Design Modes

Identify the visitor's goal on the target surface:

| Mode | Context | Core Directive |
|---|---|---|
| **Persuade** | Landing pages, marketing, pricing, campaigns | The design *is* the product. Earn attention and conversion. Strong typographic voice, distinctive layout rhythm, authentic assets. |
| **Operate** | App UI, dashboards, tools, settings, active feeds, chats | The visitor is in a task. Scanability, speed, consistency, native expectations, and ergonomics outrank sheer expression. The tool disappears into the task; brand lives in precise micro-details. |
| **Read** | Docs, guides, articles, changelogs | Comprehension first. Strict reading measure (65–75ch), predictable hierarchy, quiet navigation, distraction-free reading cadence. |
| **Experience** | Showcases, portfolios, interactive galleries | The visitor is inside the work. The interface recedes and lets the artifacts/media lead from the very first viewport. |

---

## 3. The Craft Floor (Mandatory Baseline)

Every UI edit must satisfy these physical craft standards:

### Contrast & Legibility
- Body and placeholder text $\ge 4.5:1$, large headings $\ge 3:1$.
- On colored surfaces, tint secondary text from the surface hue or foreground; **never use flat muddy gray**.

### Depth & Elevation
- Shadows must have intentional offset and soft natural blur (`box-shadow: 0 4px 20px -2px rgba(0,0,0,0.4)`).
- Zero-offset colored halos or raw heavy drop-shadows are rejected as cheap decoration.
- Micro-borders: prefer subtle translucent borders (`border border-zinc-800/80` or `border-white/10`) over heavy shadows.

### Spacing & Rhythm
- Strict spacing scale (multiples of 4px / 8px).
- Tight semantic groupings; generous negative space between unrelated blocks.
- **Always provide more margin above a heading than below it** (e.g., `mt-8 mb-2`), ensuring visual grouping with its subsequent content.

### Typography
- **Prose measure:** 65–75 characters per line for readable body text.
- **Headings:** Tight tracking (`tracking-tight` or `-0.02em` to `-0.04em`) on display headings; comfortable neutral tracking on body.
- **Data & Badges:** Monospace labels, timestamps, and numerical metrics should be sized down (`text-xs` / `text-[11px] font-mono`) with medium or semibold weight.
- Clear, distinct typographic scale steps without micro-fragmentation.

### Full State Matrix
Every interactive element must provide authored styling for **all** states:
1. Default
2. Hover
3. Active / Pressed (`active:scale-95` or `active:scale-[0.98]`)
4. Focus-visible (`focus-visible:ring-1` / `outline-none`)
5. Disabled (`disabled:opacity-40 disabled:cursor-not-allowed`)
6. Loading (integrated spinner/skeleton, not isolated page-level spinners)
7. Error & Empty states (contextual recovery cues, not dead ends)

### Browser Surfaces & Attention to Detail
- Theme the details most engineers forget: text selection color (`::selection`), caret color, focus rings, custom scrollbars, and tabular numerical alignment (`tabular-nums`).

### Motion & Micro-interactions
- Transition duration: **150ms–200ms** with `ease-out`.
- Motion must convey state change, physics, or feedback — never decorative lag that slows users down.
- Single authored moments rather than scattered entrance animations on every card.

---

## 4. Refuse: Anti-Patterns & Generic AI Slop

Reject these lazy category habits:

1. **Cards-as-a-Crutch:** Do not default to identical icon + heading + paragraph boxes everywhere. Use whitespace, divider lines, and typography for layout. Never nest cards inside cards.
2. **Kicker / Eyebrow Ban:** Avoid tiny decorative uppercase labels floating right above headings (e.g. `FEATURES`). Let the heading stand on its own strength.
3. **Gratuitous Gradients:** Avoid generic purple-to-blue or pink mesh gradients on cards or text. Gradients must feel intentional and grounded in the material palette.
4. **Hard Offset Shadows:** Avoid cartoonish `box-shadow: 4px 4px 0px #000` unless the system is explicitly retro-neobrutalist.
5. **Monospace Costume:** Monospace belongs on code, data, timestamps, coordinates, and metrics — not on arbitrary marketing copy to fake a "technical" vibe.
6. **Modal Overuse:** Never interrupt the user with a modal for tasks that can be performed inline, in a bottom sheet, or via progressive disclosure.
7. **Fake Icons & Emoji Substitutes:** Do not use random emoji where an interface icon is needed. Use consistent SVG icon sets (e.g., Lucide) with matching stroke width (`1.5px` or `2px`).
8. **Decorative Glassmorphism:** Avoid excessive blur/glass effects where a clean opaque or subtle translucent surface serves legibility better.

---

## 5. Command Playbooks & Workflows

When directing or executing design tasks, follow these operational workflows:

### `shape` (Pre-code Design Planning)
- Unpack user intent, map edge cases, verify information architecture before writing component code.
- Pin down the primary user action on the screen.

### `critique` (Heuristic Review)
- Score visual hierarchy, cognitive load, accessibility contrast, state coverage, and layout consistency.
- Identify the 1–3 highest-leverage fixes.

### `audit` (Technical Quality Checks)
- Inspect accessibility (WCAG AA), contrast ratios, DOM structure, semantic HTML tags, keyboard navigation, and responsive reflow at 375px, 768px, and 1280px+.

### `polish` (Craft & Finish)
- Refine existing code without rewriting architecture.
- Tighten border radii hierarchy (inner nested elements must have smaller radiuses than outer containers).
- Align optical centers, normalize icon sizes and paddings, unify typography scale.

### `distill` (Remove Clutter & Simplify)
- Strip everything that does not earn its place.
- Cut copy in half. Merge redundant buttons into clear single primary actions.
- Replace complex multi-level cards with clean alignment and whitespace.

### `bolder` / `quieter` (Energy Calibration)
- **Bolder:** Crank contrast, amplify typographic scale, introduce strong accent contrast, commit to distinctive point-of-view.
- **Quieter:** Lower aggressive saturation, replace noisy borders with subtle zinc dividers, soften typography, let content breathe.

### `harden` (Production Readiness)
- Cover long-string text overflows (`truncate` / `break-words`), network loading states, offline states, error toasts, and zero-data empty states.

### `clarify` (UX Writing & Hierarchy)
- Turn vague labels into direct action verbs ("Сохранить" instead of "Готово", clear feedback toasts).

---

## 6. Operate Mode: In-App Product UI Principles

For active interfaces (dating feeds, chat lists, dialogs, profile settings):

- **Earned Familiarity:** Navigation patterns (bottom tab bar, top header, chat bubbles) should feel instantly intuitive without requiring manual exploration.
- **Restrained Palette:** Let content, avatars, and user text take center stage. Brand colors (such as Pure Yellow `#FFD60A`) are reserved strictly for primary actions, active indicators, and high-priority notices.
- **Structural Responsiveness:** Adapt layout to viewports structurally (e.g. fixed mobile frame for desktop, full-viewport flex containers on mobile) rather than using unpredictable fluid type clamps.
- **Speed in Flow:** Instant interaction feedback with 150ms transitions. Never make users wait on cosmetic choreography.
