# Paper Editorial · Design System

> A literary paper magazine reimagined as a product surface.

Warm-paper system with terracotta accent, built on 3-tier tokens (raw → semantic → component). Editorial typography in ITC Garamond paired with Instrument Sans for UI and JetBrains Mono for specs.

---

## Sources

- **GitHub:** `Kelvi-Maycon/design-system` (branch `main`) — fully imported into this project.
  - `README.md`, `index.html` (showcase), `styles/`, `fonts/itc-garamond/`, `docs/`.
- No Figma, no live product codebase given. The system itself is the product.

There is **one product surface** described in this system: the showcase page (`index.html`) — a single-page editorial catalog of tokens. There is no app, no marketing site, no docs site. The UI kit in `ui_kits/showcase/` recreates that surface as composable JSX.

---

## Index

```
.
├── README.md                  ← you are here
├── SKILL.md                   ← skill manifest for Claude Code
├── colors_and_type.css        ← consolidated tokens (single-file alias)
├── index.html                 ← original showcase (imported)
├── styles/
│   ├── index.css              entry point — imports tokens + typography + base + components
│   ├── tokens.css             Tier 1 raw + Tier 2 semantic + dark override
│   ├── typography.css         @font-face + .t-* classes + drop cap
│   ├── base.css               minimal reset + body
│   ├── components.css         buttons · cards · tags · pills · theme toggle
│   └── showcase.css           styles for the showcase page only (not part of the system)
├── fonts/itc-garamond/        ITC Garamond Std — Cond + Narrow, Lt/Bk/Bd, italic + roman
├── docs/
│   ├── colors.md              palette, OKLCH derivation, dark mode
│   ├── typography.md          hierarchy, families, classes, specs
│   ├── spacing.md             4pt scale + sub-8 micro, radius, layout maxes
│   └── components.md          buttons, cards, tags, pills, motion, focus
├── preview/                   small showcase cards rendered in the Design System tab
├── ui_kits/showcase/          UI kit — JSX components recreating the showcase
└── slides/                    (none — no slide template provided)
```

---

## Content fundamentals

The system is bilingual but defaults to **Brazilian Portuguese**. Voice is **editorial, pragmatic, slightly opinionated** — closer to a magazine masthead than a marketing site.

- **Tone:** confident, declarative, no marketing sparkle. Reads like an art-director's working memo.
- **Casing:** sentence case for headings ("Editorial paper magazine"). Micro labels are UPPERCASE with +0.16em tracking. Tags are UPPERCASE in mono.
- **Person:** mostly impersonal/declarative. No "we", no "you". Sentences describe what the system *is* and *does*.
- **Sentence shape:** short, fragmented, comma-joined. Em-dashes and middle dots (·) used as connectors. "Editorial calmness com acento terracotta. Densidade de revista impressa, não SaaS dashboard."
- **Code-switching:** technical terms stay in English (token, surface, hover, drop cap, ramp), prose stays in Portuguese. Don't translate "shadow" or "primary" — they're variable names spoken aloud.
- **Emoji:** none. Anywhere.
- **Symbolic markers used in copy:**
  - `·` (middle dot) as primary inline separator
  - `★` to mark the brand stop in a ramp (Primary 500 ★)
  - `→` after card links (rendered via `::after`, animated on hover)
  - `✓` only inside positive pills ("✓ Concluído")
  - `—` (em dash) for asides
- **Pet phrases:** "shadow philosophy zero", "hover signature", "idiosyncratic rule", "constraint over freedom", "AI slop reflex".
- **What it never sounds like:** "Welcome to our beautiful design system!", "Powerful tokens for modern teams", "🎨 Get started in 5 minutes".

Sample lines, verbatim from the source:

> Editorial calmness com acento terracotta. Densidade de revista impressa, não de SaaS dashboard.

> Toda peça começa por uma frase-tese. Sem metáfora, design system vira commodity — coerente em detalhes, morto em personalidade.

> Um bom sistema remove decisões. Cada token elimina escolha arbitrária — é o que separa coerência de improviso.

---

## Visual foundations

### Color
Three families. **Terracotta primary** (`#E9792B`, OKLCH hue 50.7) appears only in five places: primary CTAs, focus ring, active state, hover signature on text, drop cap. **Paper neutrals** are warm — every gray has a yellow undertone, hexes hand-picked (not OKLCH-derived) to preserve the cream tone. **Sage** (`#6F7A5C` / `#DDE0CC`) is the success/running pair; it's a complementary warm tone, not a generic green.

### Typography
Two voices + mono. ITC Garamond Cond (Book 400) for display/H1/H2; ITC Garamond Narrow (Bold 700) for H3/card titles; Instrument Sans for body/UI; JetBrains Mono for specs, tags, dot-points. Body never below 17px. Letter-spacing scales with size: negative on display/headings, 0 on body, +0.16em uppercase on micro.

### Spacing
4pt grid + sub-8 micro (2/3/6) for hairlines and optical alignment. Three layout max-widths (`--max-content` 820px / `--max-wide` 1200px / `--max-hero` 1400px) — never one global max. Always `gap`, never sibling `margin`. Vertical rhythm in multiples of 4.

### Backgrounds
**Paper, not images.** No full-bleed photography, no hand-drawn illustrations, no repeating patterns, no textures, no gradients. Background is one of four warm cream surfaces (`--surface-bg` / `alt` / `card` / `tag`). Visual rhythm comes from alternating these surfaces.

### Animation
Curtas, contidas, calmas. Two easings (`ease-out-quart` default, `ease-out` more aggressive); four durations (100/200/300/500ms). Animate **only `transform` and `opacity`**. For collapse/expand use `grid-template-rows: 0fr → 1fr`, never animate `width`/`height`. Reduced-motion is a **parallel system** — durations drop to 1ms, fades replace slides — never `animation: none`.

### Hover states
**One signature, system-wide:** text migrates to terracotta. No scale, no opacity, no translate, no underline animation. Outline buttons also shift their border to terracotta. Cards shift their border from `--border-subtle` to `--border-strong`. The card link's `→` glyph translates +3px on hover.

### Press states
`transform: scale(0.98)` on `:active` only — never on hover. Hover-scale is explicitly banned ("AI slop reflex").

### Borders
1px solid, two strengths: `--border-subtle` (#D8D2C0, hairlines/dividers) and `--border-strong` (#C7C0AC, outlines/separators). Hairline (`--raw-2`) is reserved for fine borders. No dashed ornamental borders.

### Shadow / depth
**Shadow philosophy zero.** No `rgba(0,0,0,X)` anywhere in the system. Depth is achieved by **alternating between four warm surfaces** (`--surface-bg` / `alt` / `card` / `tag`). The only allowed shadow is the focus ring: a 2px inner ring of `--surface-bg` plus a 2px outer ring of primary — making a clean double-outline.

### Transparency / blur
Not used. Surfaces are fully opaque. No backdrop-filter blur, no glass morphism, no scrim overlays. The cream tones already do the lifting that blur would do elsewhere.

### Corner radii
Discreet. Scale: 2 / 4 / 8 / 12 / 16 / 24 / full (9999px). Buttons + inputs at 4px (`--radius-sm`). Cards at 12px (`--radius-lg`). Pills at full. **Nested-75% rule:** child element radius = parent × 0.75 — pre-baked as `--card-radius-inner`.

### Cards
`--surface-card` (#FBF8F0), 1px `--border-subtle`, `--radius-lg` (12px), padding `--card-padding` (32px), no shadow. Hover shifts border to `--border-strong`. Cards never nest inside cards. Internal vertical rhythm uses `gap: var(--raw-16)` on a CSS grid.

### Layout rules
`.shell` is the page wrapper, `max-width: var(--max-hero)`, centered. Sections separated by `border-top: 1px solid var(--border-subtle)`. Section heads are a 2-col grid: title left, italic meta right (`--font-subhead` italic, in muted). No fixed headers, no sticky sidebars in the showcase.

### Imagery vibe
None present in the system. If introduced, the brief is: warm color cast, paper grain acceptable, no cool tones, no neon, no AI-photography. Black-and-white photography would also fit. Avoid blue-purple gradients.

### Idiosyncratic rules (signature moves)
1. **Drop cap** in Garamond Book Cond terracotta on the first letter of major prose sections — `5.4em`, `line-height: 0.85`, floated left. Used sparingly, never decoratively.
2. **Italic Garamond meta** — section meta lines run in `--font-subhead` italic, right-aligned, `--text-21`, in `--text-muted`. Looks like a magazine pull-quote.
3. **Mono micro-labels** — eyebrows above sections are `--font-mono` UPPERCASE with `letter-spacing: 0.16em` to 0.22em. Reads as engraved metadata, not as a title.

---

## Iconography

The repo ships **two inline SVGs** as part of the showcase:
- A **sun** icon (light theme indicator) and a **moon** icon (dark theme indicator), both inline in `index.html` on `.theme-toggle`.
- Card icons in the showcase are a **bookmark**, **clock**, and **star** — also inline SVG, stroke 1.6, `currentColor` (which inherits `--color-primary-500` via `.card-icon`).
- Button-row uses an **arrow-right** (`M5 12h14M12 5l7 7-7 7`, stroke 2) and a horizontal **dots-three** (three circles, stroke 2.2) — also inline.

There is **no icon font, no sprite, no SVG library** in the codebase. There are also **no PNG icons, no logo files, no brand illustrations** — only the inline SVG above. Emoji is **explicitly banned** (no emoji cards, no emoji as bullets). Unicode is used only for symbolic markers in copy: `·`, `★`, `→`, `✓`, `—`.

**Iconography rules:**
- Stroke style — outlined, **stroke-width 1.6 (cards) or 2 (UI)**, `stroke-linecap: round`, `stroke-linejoin: round`. Never filled glyphs.
- Sizing — 14px (small button), 16px (button leading), 18px (theme toggle), 28px (card hero icon).
- Color — `currentColor`. The icon takes the parent's color, which is usually `--color-primary-500` for card icons, `--text-primary` elsewhere.
- Substitution policy — **Lucide** is the closest CDN match (same outlined / 1.5–2 stroke / round caps language). When an icon is needed and not in the repo, **load Lucide via CDN** (`https://unpkg.com/lucide@latest`) and flag the substitution. Heroicons-outline is an acceptable fallback. Do **not** invent custom SVG glyphs from scratch.
- No emoji. No filled icons. No two-tone duotone. No colored brand icons embedded inline.

⚠ **Substitution flagged:** No logo or wordmark exists in the source. The UI kit and slides synthesize a wordmark from typography only (the words "Paper Editorial" set in Garamond Cond, with a `·` separator). If you have a real logo file, drop it into `assets/` and update.

---

## Compliance (guardrails — copy these verbatim into prompts)

- No `rgba(0,0,0,X)` — shadows are `none` or focus-ring only
- No `hover:scale-*`, `hover:-translate-y-*`, or `hover:opacity` — those are press states
- No gradient text, no sparkle decorations, no dashed ornamental borders
- Reduced-motion is a parallel system, never `animation: none`
- Dark mode is not light inverted — chroma and lightness recalculated
- Forbidden fonts: Inter, DM Sans, Lora, Fraunces, Roboto, Poppins
- No emoji, ever
- Drop cap: only on the first letter of major prose sections
