# Typography

**2 voices + mono.** Garamond para títulos (Cond grandes, Narrow menores), Instrument Sans para corpo e UI, JetBrains Mono para specs e código.

---

## Famílias

| Token | Família | Origem | Uso |
|---|---|---|---|
| `--font-display` | `Garamond Cond` | local (`fonts/itc-garamond/`) | display, H1, H2 |
| `--font-heading` | `Garamond Cond` | local | aliases para display |
| `--font-subhead` | `Garamond Narrow` | local | H3, card titles, section meta |
| `--font-body`    | `Instrument Sans` | Google Fonts | body, UI, botões, labels |
| `--font-mono`    | `JetBrains Mono` | Google Fonts | code, specs, tags, dados |

### ITC Garamond Std — pesos disponíveis

Cond e Narrow têm o mesmo set: Light (300), Book (400), Bold (700), todos com itálico.

```
fonts/itc-garamond/
├── ITCGaramondStd-LtCond.ttf      (300)
├── ITCGaramondStd-LtCondIta.ttf   (300 italic)
├── ITCGaramondStd-BkCond.ttf      (400)
├── ITCGaramondStd-BkCondIta.ttf   (400 italic)
├── ITCGaramondStd-BdCond.ttf      (700)
├── ITCGaramondStd-BdCondIta.ttf   (700 italic)
├── ITCGaramondStd-LtNarrow.ttf    (300)
├── ITCGaramondStd-LtNarrowIta.ttf (300 italic)
├── ITCGaramondStd-BkNarrow.ttf    (400)
├── ITCGaramondStd-BkNarrowIta.ttf (400 italic)
├── ITCGaramondStd-BdNarrow.ttf    (700)
└── ITCGaramondStd-BdNarrowIta.ttf (700 italic)
```

---

## Hierarquia · 8 níveis

Escala major third 1.25 · base 17px.

| Nível | Classe | Tamanho | Família | Weight | Line-h | Tracking |
|---|---|---|---|---|---|---|
| Display | `.t-display` | 78px / 4.875rem | Garamond Bk Cond | 400 | 0.95 | -0.025em |
| H1      | `.t-h1`      | 52px / 3.25rem  | Garamond Bk Cond | 400 | 1     | -0.02em  |
| H2      | `.t-h2`      | 33px / 2.06rem  | Garamond Bk Cond | 400 | 1.15  | -0.015em |
| H3      | `.t-h3`      | 26px / 1.625rem | Garamond Bd Narrow | 700 | 1.2 | -0.005em |
| Body    | `.t-body`    | 17px / 1.06rem  | Instrument Sans | 400 | 1.55 | 0 |
| Small   | `.t-small`   | 14px / 0.875rem | Instrument Sans | 400 | 1.5 | 0 |
| Micro   | `.t-micro`   | 12px / 0.75rem  | Instrument Sans | 600 | 1   | +0.16em (uppercase) |
| Mono    | `.t-mono`    | 14px / 0.875rem | JetBrains Mono | 400 | 1.6 | -0.01em |

### Princípios

- **Letter-spacing escala com size** — negative em display/heading, 0 em body, positive em micro/uppercase
- **Body mínimo 17px** — nunca abaixo
- **Display em Book (400) Cond** — não Bold. Tamanho dá presença, peso pesado vira manchete
- **H3 em Bold Narrow** — em tamanhos menores a Narrow ganha o peso pra hierarquia
- **Body em sans deliberadamente** — separação clara entre títulos serif e corpo sans amplifica o ar editorial

---

## Idiosyncratic rule · Drop cap

Drop cap em **Garamond Book Condensed terracotta** na primeira letra de seções principais. Uso restrito — não decoração genérica.

```html
<p class="t-body drop-cap">
  Aqui mora o corpo de texto.…
</p>
```

```css
.drop-cap::first-letter {
  font-family: var(--font-display);
  font-weight: 400;
  float: left;
  font-size: 5.4em;
  line-height: 0.85;
  margin: 0.04em 0.08em -0.05em 0;
  color: var(--color-primary-500);
  letter-spacing: -0.02em;
}
```

---

## Carregamento

### Local (Garamond)

`@font-face` em `styles/typography.css` aponta para `../fonts/itc-garamond/`.

### Google Fonts (Instrument Sans + JetBrains Mono)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=JetBrains+Mono:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
```

`font-display: swap` em todos os faces — render imediato com fallback, swap quando carregar.

---

## Dark mode

Pesos ficam iguais — Garamond Cond/Narrow têm contraste suficiente nas duas direções. Apenas `color` muda (via tokens semantic).
