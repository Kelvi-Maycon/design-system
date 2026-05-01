# UI kit · Showcase

A pixel-near recreation of the Paper Editorial showcase as composable JSX. The original system has only one product surface — the showcase page itself — so this kit is faithful to that.

## Files

- `index.html` — interactive showcase, click-thru: theme toggle, button hover/press states, card hover border, scroll-spy section nav.
- `Manifesto.jsx` — display thesis + dl grid of decisions
- `Palette.jsx` — primary ramp + paper neutrals + sage + status
- `TypeStack.jsx` — display → mono with right-side specs
- `Spacing.jsx` — 4pt + sub-8 bars
- `Radius.jsx` — radius cells xs → full
- `Depth.jsx` — 4 surfaces, no shadow
- `Motion.jsx` — duration + easing cards + interactive hover demo
- `Buttons.jsx` — primary/secondary/outline × 3 sizes
- `CardsGrid.jsx` — 3 article cards with icon, tag, title, body, link
- `Compliance.jsx` — guardrail checklist
- `SectionHead.jsx` — eyebrow + title + italic meta
- `ThemeToggle.jsx` — fixed top-right with View Transitions

## Notes
- Components share state via `window` (multi-script Babel scope).
- All visual decisions come from `../../styles/index.css` tokens — no inline magic numbers.
- Theme persists in localStorage under key `ds-theme`.
