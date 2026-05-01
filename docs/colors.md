# Colors

Sistema cromático em três famílias: **terracotta primary**, **paper neutrals warm** e **sage para estados positivos**. Status (warning/error/info) derivam do hue do primary com chroma reduzido.

---

## Primary — Terracotta

Ramp 7-stop em OKLCH (hue `50.7`), com chroma peak no ★500. Brand color é o `#E9792B` (entrada do usuário) — os outros stops foram derivados via `coloraide`.

| Token | Light | Uso |
|---|---|---|
| `--color-primary-50`  | `oklch(97% 0.02 50.7)` | surface tint sutil |
| `--color-primary-100` | `oklch(93% 0.05 50.7)` | hover background |
| `--color-primary-300` | `oklch(75% 0.14 50.7)` | secondary accent |
| `--color-primary-500` ★ | `#E9792B` | brand · CTA · drop cap |
| `--color-primary-700` | `oklch(40% 0.18 50.7)` | hover do CTA |
| `--color-primary-800` | `oklch(30% 0.14 50.7)` | active deep |
| `--color-primary-900` | `oklch(20% 0.08 50.7)` | deepest |

**Dark mode:** chroma × 0.68 (de 0.22 → 0.15) + lightness +10% no ★500.

---

## Neutral — Paper warm

Paleta editorial paper com undertone amarelado. Hexes diretos (não OKLCH-derivados) para preservar o tom exato.

### Surfaces (backgrounds)

| Token | Hex | Uso |
|---|---|---|
| `--color-card`       | `#FBF8F0` | cards, popovers |
| `--color-paper`      | `#F5F1E8` | surface base / body bg |
| `--color-paper-soft` | `#EFEADE` | surface alternativa |
| `--color-paper-tag`  | `#E7E1D1` | tags, chips, pills neutras |

### Borders

| Token | Hex | Uso |
|---|---|---|
| `--color-divider`   | `#D8D2C0` | borda fina · separator |
| `--color-divider-2` | `#C7C0AC` | borda forte · outline |

### Text & ink

| Token | Hex | Uso |
|---|---|---|
| `--color-muted-soft` | `#B5AF9F` | text muted+ |
| `--color-muted`      | `#8B857A` | text muted (caption, helper) |
| `--color-ink-3`      | `#4A463E` | text apoio |
| `--color-ink-2`      | `#2B2822` | text dark secundário |
| `--color-ink`        | `#1A1814` | text principal · headings |

---

## Sage — Estados positivos

Par próprio para success / "rodando" / pills positivas. Harmoniza com terracotta no eixo complementar quente.

| Token | Hex | Uso |
|---|---|---|
| `--color-sage`      | `#6F7A5C` | text/icon de success, running |
| `--color-sage-soft` | `#DDE0CC` | background de pills positivas |

```html
<span class="pill-positive"><span class="dot"></span> Rodando</span>
<span class="pill-positive">✓ Concluído</span>
<span class="pill-positive pill-positive--filled">Ativo</span>
```

---

## Status

`success` aponta direto para sage. Os outros derivam do hue do primary com chroma reduzido.

| Token | Light | Notas |
|---|---|---|
| `--color-success`      | `#6F7A5C` (sage) | sage como success |
| `--color-success-soft` | `#DDE0CC` (sage-soft) | bg de success |
| `--color-warning`      | `oklch(70% 0.16 75)` | hue +24 do primary |
| `--color-error`        | `oklch(52% 0.18 28)` | hue −22 do primary |
| `--color-info`         | `oklch(55% 0.10 240)` | hue oposto, chroma baixo |

---

## Semantic surfaces / text / borders

Em vez de usar os hexes diretos, prefira os semantic tokens — eles trocam automaticamente em dark mode.

```css
/* Surfaces */
--surface-bg     /* paper */
--surface-alt    /* paper-soft */
--surface-card   /* card */
--surface-tag    /* paper-tag */

/* Text */
--text-primary    /* ink */
--text-secondary  /* ink-3 */
--text-muted      /* muted */
--text-on-primary /* card (sobre primary-500) */
--text-accent     /* primary-500 */

/* Borders */
--border-subtle   /* divider */
--border-strong   /* divider-2 */
```

---

## Dark mode

Override apenas no Tier 2 (semantic). Chroma e lightness são recalculados — não é light invertido.

```css
[data-theme="dark"] {
  --color-primary-500: oklch(65% 0.15 50.7); /* chroma ×0.68 */
  --color-paper:       oklch(14% 0.008 50.7); /* hue 50.7 preservado */
  --color-ink:         oklch(94% 0.012 50.7);
  /* ... */
}
```

Toggle via JavaScript:

```js
document.documentElement.setAttribute("data-theme", "dark");
```
