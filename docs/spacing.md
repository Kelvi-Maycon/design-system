# Spacing & Layout

Grid base 4pt + sub-8 micro (2/3/6) para alinhamentos finos. Tokens em três tiers — sempre prefira os semantic, não os raw, em código de aplicação.

---

## Escala raw

| Token | Valor |
|---|---|
| `--raw-2`   | 2px  |
| `--raw-3`   | 3px  |
| `--raw-4`   | 4px  |
| `--raw-6`   | 6px  |
| `--raw-8`   | 8px  |
| `--raw-12`  | 12px |
| `--raw-16`  | 16px |
| `--raw-20`  | 20px |
| `--raw-24`  | 24px |
| `--raw-32`  | 32px |
| `--raw-40`  | 40px |
| `--raw-48`  | 48px |
| `--raw-64`  | 64px |
| `--raw-80`  | 80px |
| `--raw-128` | 128px |

### Quando usar sub-8

- `--raw-2` · borda fina, hairline divider
- `--raw-3` · alinhamento ótico (badge dot, ícone vs texto)
- `--raw-6` · gap entre dot e label em pill, espaço interno de chip pequeno

---

## Layout · Max-widths por seção

Nunca use `max-width: 1200px` global. Cada contexto tem sua largura ideal.

| Token | Valor | Uso |
|---|---|---|
| `--max-content` | 820px  | leitura · prose · settings |
| `--max-wide`    | 1200px | dashboards · pricing |
| `--max-hero`    | 1400px | hero · above-the-fold |

```css
.shell {
  max-width: var(--max-hero);
  margin: 0 auto;
  padding: var(--raw-48) var(--raw-32) var(--raw-128);
}

.prose-section {
  max-width: var(--max-content);
}
```

---

## Radius

| Token | Valor | Uso típico |
|---|---|---|
| `--radius-xs`   | 2px    | hairline UI · tags pequenas |
| `--radius-sm`   | 4px    | botões, inputs |
| `--radius-md`   | 8px    | cards pequenos, popovers |
| `--radius-lg`   | 12px   | cards grandes, modais |
| `--radius-xl`   | 16px   | hero cards |
| `--radius-2xl`  | 24px   | feature blocks |
| `--radius-full` | 9999px | pills, avatars |

### Regra nested 75%

Filho dentro de pai com radius. Filho recebe radius = parent × 0.75.

```css
.card {
  border-radius: var(--radius-lg); /* 12px */
}
.card .card-tag {
  border-radius: calc(var(--radius-lg) * 0.75); /* 9px */
}
```

Já temos token pronto: `--card-radius-inner`.

---

## Componente — paddings

Tokens dedicados pra evitar números mágicos:

```css
--btn-padding-sm: 6px 12px;
--btn-padding-md: 8px 20px;
--btn-padding-lg: 12px 24px;
--card-padding:   32px;
--input-padding:  8px 12px;
--icon-text-gap:  8px;
```

---

## Princípios

1. **Sempre `gap`, nunca `margin` para siblings.** Elimina margin collapse e coloca o controle no pai.
2. **Container queries pra componentes**, viewport queries só pra page layout.
3. **Cards não são obrigatórios.** Spacing + alinhamento criam agrupamento natural. Nunca aninhe card dentro de card.
4. **Vertical rhythm em múltiplos de 4** — todo gap interno entre blocos respeita a escala.
