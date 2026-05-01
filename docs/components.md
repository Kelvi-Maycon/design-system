# Components

Catálogo de componentes prontos. Todos seguem **shadow philosophy zero**, **hover signature em texto terracotta**, e **press scale 0.98 só em `:active`**.

---

## Buttons

3 sizes (sm / md / lg) × 3 variants (primary / secondary / outline) + icon-only.

```html
<button class="btn btn-primary">Salvar</button>
<button class="btn btn-secondary">Cancelar</button>
<button class="btn btn-outline">Voltar</button>

<button class="btn btn-sm btn-primary">Small</button>
<button class="btn btn-lg btn-primary">Large</button>

<button class="btn btn-outline btn-icon-only" aria-label="Mais">
  <svg>…</svg>
</button>

<!-- com ícone líder -->
<button class="btn btn-primary">
  <svg width="16" height="16">…</svg>
  Publicar edição
</button>
```

### Variants

| Variant | Background | Color | Hover |
|---|---|---|---|
| `btn-primary`   | `--color-primary-500` | `--text-on-primary` | bg → `--color-primary-700` |
| `btn-secondary` | `--text-primary` (ink) | `--surface-card`   | bg → `--color-ink-2` |
| `btn-outline`   | transparent           | `--text-primary`    | text + border → `--color-primary-500` |

### Estados

- `:hover` — color/bg shift apenas
- `:active` — `transform: scale(0.98)`
- `:focus-visible` — `box-shadow: var(--ring-focus)` (anel duplo: surface + accent)

---

## Cards

Surface `card`, radius `lg`, padding `32px`, border subtle. Hover muda a borda pra `strong`.

```html
<article class="card">
  <svg class="card-icon">…</svg>
  <span class="tag">Editorial</span>
  <h3 class="card-title">Manuscritos do Atelier</h3>
  <p class="card-body">Coleção curada de ensaios visuais…</p>
  <a href="#" class="card-link">Ler edição</a>
</article>
```

`card-link` ganha um `→` que desliza no hover. `card-icon` herda `--color-primary-500`.

---

## Tags & Pills

### Tag (neutra)

```html
<span class="tag">Editorial</span>
```

Background `--surface-tag` (#E7E1D1), font mono uppercase tracking +0.14em.

### Pill positiva (sage)

Para estados "rodando", "concluído", "ativo" — qualquer feedback positivo.

```html
<span class="pill-positive">
  <span class="dot"></span>
  Rodando
</span>

<span class="pill-positive">✓ Concluído</span>

<!-- variante invertida -->
<span class="pill-positive pill-positive--filled">Ativo</span>
```

| | Background | Color |
|---|---|---|
| `.pill-positive` | sage-soft (#DDE0CC) | sage (#6F7A5C) |
| `.pill-positive--filled` | sage (#6F7A5C) | sage-soft (#DDE0CC) |

---

## Theme toggle

Botão fixo no canto superior direito, troca tema com View Transition se disponível.

```html
<button class="theme-toggle" id="themeToggle">
  <svg class="icon-sun">…</svg>
  <svg class="icon-moon">…</svg>
</button>
```

```js
const root = document.documentElement;
const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
const apply = () => {
  root.setAttribute("data-theme", next);
  localStorage.setItem("ds-theme", next);
};
if (document.startViewTransition) document.startViewTransition(apply);
else apply();
```

---

## Motion

Animação só em `transform` e `opacity`. Anima `width`/`height` via `grid-template-rows: 0fr → 1fr` quando precisa.

| Token | Valor | Uso |
|---|---|---|
| `--duration-instant` | 100ms | feedback de press |
| `--duration-fast`    | 200ms | hover, focus |
| `--duration-normal`  | 300ms | enter/exit em popovers |
| `--duration-slow`    | 500ms | page-level transitions |
| `--ease-out-quart`   | `cubic-bezier(.25,1,.5,1)` | default |
| `--ease-out`         | `cubic-bezier(.16,1,.3,1)` | mais agressivo |

**Reduced motion** é sistema paralelo — fade no lugar de slide, durations vão pra 1ms. Não use `animation: none`.

---

## Hover signature

Padrão único e consistente: **texto migra pra terracotta**.

```css
.minha-coisa {
  transition: color var(--duration-fast) var(--ease-out-quart);
}
.minha-coisa:hover {
  color: var(--color-primary-500);
}
```

Sem scale, sem opacity, sem translate, sem underline animado. Uma única interação em todo o sistema.

---

## Focus ring

Double-outline: anel interno do `--surface-bg` + anel externo accent.

```css
:focus-visible {
  outline: none;
  box-shadow: var(--ring-focus); /* 0 0 0 2px bg, 0 0 0 4px primary */
}
```

Funciona em qualquer componente. Sem `:focus` (sem `:visible`) — só aparece em navegação por teclado.

---

## Press scale

`scale(0.98)` apenas em `:active`. **Nunca em `:hover`** — isso é AI slop reflex.

```css
.btn:active { transform: scale(0.98); }
```
