---
name: paper-editorial-design
description: Use this skill to generate well-branded interfaces and assets for Paper Editorial — a warm-paper editorial design system with terracotta accent, ITC Garamond + Instrument Sans typography, shadow-zero philosophy, and a strict "hover signature: text-to-terracotta" pattern. Works for production code or throwaway prototypes/mocks/decks.
user-invocable: true
---

Read `README.md` in this skill, then explore the other files. Key sources of truth:

- `README.md` — content fundamentals, visual foundations, iconography, guardrails
- `colors_and_type.css` — single-file consolidation of tokens
- `styles/index.css` — canonical entry point (tokens → typography → base → components)
- `docs/colors.md`, `docs/typography.md`, `docs/spacing.md`, `docs/components.md` — deep references
- `fonts/itc-garamond/` — local Garamond Std faces (Cond + Narrow, Lt/Bk/Bd, italic + roman)
- `ui_kits/showcase/` — JSX components recreating the editorial showcase
- `preview/*.html` — small specimens of every system primitive

If creating visual artifacts (slides, mocks, throwaway prototypes), copy `styles/`, `fonts/`, and any `ui_kits/showcase/*.jsx` you need into the output and link `styles/index.css`. For production code, treat the tokens as the contract and read the `docs/` files to internalize the rules.

If invoked without further guidance, ask the user what they want to build, ask focused design questions, then act as an expert designer. Refuse to produce: emoji UI, gradient text, hover-scale, shadowed cards, dashed ornamental borders, Inter/DM Sans/Lora/Fraunces. Default voice for Portuguese copy: editorial, declarative, no marketing sparkle. Use `·` (middle-dot) liberally, `→` after card links, `★` to mark brand tokens. Drop cap is reserved for the first letter of major prose sections.

Hover signature is non-negotiable: text migrates to terracotta. No scale, no opacity, no translate. Press scale (0.98) is `:active` only.
