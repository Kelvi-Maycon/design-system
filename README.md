# Paper Editorial · Design System

> A literary paper magazine reimagined as a product surface.

Design system warm-paper com acento terracotta, construído sobre tokens 3-tier (raw → semantic → component), tipografia editorial em ITC Garamond e UI sans em Instrument Sans.

---

## Decisões upstream

| | |
|---|---|
| **Tese** | Editorial calmness com acento terracotta. Densidade de revista impressa, não SaaS dashboard. |
| **Neutro** | Warm — paper cream com undertone amarelado em todos os grays. |
| **Voice** | 2 voices + mono (Garamond Cond/Narrow · Instrument Sans · JetBrains Mono). |
| **Shadow** | Zero — profundidade via alternância de 4 surfaces. |
| **Hover signature** | Texto migra pra terracotta. Sem scale, sem opacity, sem translate. |
| **Accent restrito** | Primary CTA · focus ring · active state · hover signature · drop cap. |
| **Idiosyncratic rule** | Drop cap em Garamond Book Cond terracotta no início de seções principais. |

---

## Stack

- **Tokens:** CSS custom properties em 3 tiers (`raw → semantic → component`)
- **Color:** OKLCH para o primary ramp, hex direto para os neutrals warm customizados
- **Type:** ITC Garamond Std (local) + Instrument Sans + JetBrains Mono (Google Fonts)
- **Theme:** Light default + dark mode com chroma reduzido (×0.6) e lightness ajustada (+5%)

---

## Estrutura

```
.
├── index.html              Showcase / catálogo visual
├── styles/
│   ├── index.css           Entry point — importa tudo
│   ├── tokens.css          Tier 1 (raw) + Tier 2 (semantic) + dark override
│   ├── typography.css      @font-face + classes tipográficas
│   ├── base.css            Reset mínimo + body
│   └── components.css      Buttons · Cards · Tags · Pills · Theme toggle
├── styles/showcase.css     Estilos exclusivos da página de demonstração
├── fonts/itc-garamond/     ITC Garamond Std (Cond + Narrow, todas as variantes)
└── docs/
    ├── colors.md
    ├── typography.md
    ├── spacing.md
    └── components.md
```

---

## Uso

### 1. Importar o entry point

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=JetBrains+Mono:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">

<link rel="stylesheet" href="styles/index.css">
```

### 2. Setar o tema

```html
<html data-theme="light">
<!-- ou -->
<html data-theme="dark">
```

### 3. Usar os tokens

```css
.minha-tela {
  background: var(--surface-bg);
  color: var(--text-primary);
  padding: var(--raw-32);
  border-radius: var(--radius-lg);
}

.meu-titulo {
  font-family: var(--font-heading);
  font-size: var(--raw-text-52);
  font-weight: 400;
  letter-spacing: -0.02em;
}
```

### 4. Ou usar as classes prontas

```html
<h1 class="t-display">Reimagine.</h1>
<h2 class="t-h1">Editorial paper magazine</h2>
<p class="t-body drop-cap">Aqui mora o corpo de texto…</p>

<button class="btn btn-primary">Publicar</button>
<button class="btn btn-outline">Cancelar</button>

<span class="pill-positive"><span class="dot"></span> Rodando</span>

<article class="card">
  <span class="tag">Editorial</span>
  <h3 class="card-title">Título do card</h3>
  <p class="card-body">Conteúdo…</p>
  <a class="card-link">Ler mais</a>
</article>
```

---

## Documentação

- [Colors](docs/colors.md) — paleta completa, OKLCH, status, dark mode
- [Typography](docs/typography.md) — hierarquia, fontes, classes, especificações
- [Spacing](docs/spacing.md) — escala 4pt + sub-8 micro, layout maxes
- [Components](docs/components.md) — buttons, cards, tags, pills, motion, radius

---

## Compliance

- Sem `rgba(0,0,0,X)` em lugar nenhum — shadows são `none` ou `ring-focus` tinted
- Sem `hover:scale-*` ou `hover:-translate-y-*` em hover — só em `:active`
- Sem gradient text, sem sparkle decorativo, sem dashed-borders ornamentais
- Reduced-motion em sistema paralelo (não `animation: none`)
- Dark mode não é light invertido — chroma e lightness re-calculados
- Fontes escapando do reflex BAN 4: nada de Inter/DM Sans/Lora/Fraunces
