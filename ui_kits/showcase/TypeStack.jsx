// TypeStack — hierarquia tipográfica do Paper Editorial.
// Regras (atualizadas):
//   · Garamond Cond  → APENAS Display, H1, H2 (roman, nunca italic)
//   · Garamond Narrow Bd 700 → H3, H4, card titles
//   · TODO italic do serif → Garamond Narrow Italic
//   · Drop cap removido — sem letras laranjas fora do padrão
const TypeRow = ({ children, spec, guardrail }) => (
  <div className="type-row">
    <div>{children}</div>
    <div className="type-spec">
      <span dangerouslySetInnerHTML={{__html: spec}} />
      {guardrail && <span className="type-guardrail">{guardrail}</span>}
    </div>
  </div>
);

const TypeStack = () => (
  <section>
    <SectionHead num="02" label="Typography" title="Hierarquia clara, duas vozes"
      meta="Garamond Cond só em H1/H2 · Narrow Bd 700 a partir de H3 · todo italic em Narrow" />

    <div className="type-stack">

      <TypeRow
        spec="Display<br>Garamond Bk Cond · roman<br>78px / 0.95 / -0.025em<br>weight 400"
        guardrail="display · h1 · h2 only">
        <div className="t-display">Reimagine.</div>
      </TypeRow>

      <TypeRow
        spec="H1<br>Garamond Bk Cond · roman<br>52px / 1 / -0.02em<br>weight 400"
        guardrail="cond · nunca italic">
        <div className="t-h1">Editorial paper magazine</div>
      </TypeRow>

      <TypeRow
        spec="H2<br>Garamond Bk Cond · roman<br>42px / 1.1 / -0.018em<br>weight 400"
        guardrail="último nível em Cond">
        <div className="t-h2">Construção tipográfica</div>
      </TypeRow>

      <TypeRow
        spec="H3<br>Garamond Bd Narrow<br>26px / 1.2 / -0.005em<br>weight 700"
        guardrail="muda de família + peso">
        <div className="t-h3">Decisões de coração</div>
      </TypeRow>

      <TypeRow
        spec="H4<br>Garamond Bd Narrow<br>21px / 1.25 / -0.003em<br>weight 700"
        guardrail="cards · subseções">
        <div className="t-h4">Subtítulo de card</div>
      </TypeRow>

      <TypeRow
        spec="Italic policy<br>Garamond Narrow Italic<br>herda tamanho/peso do parent<br>Cond italic é proibida"
        guardrail="todo <em> serif → Narrow">
        <div className="t-h2">Voz <em>idiossincrática</em> em Narrow.</div>
      </TypeRow>

      <TypeRow
        spec="Body<br>Instrument Sans<br>17px / 1.55 / 0<br>weight 400"
        guardrail="nunca abaixo de 17px">
        <p className="t-body">
          Aqui mora o corpo de texto. A página respira em creme, com tipografia clássica e acento terracotta restrito a CTAs, focus ring e estados ativos. <em>Acentuação portuguesa</em> — ção, ã, ê, ó, à — testa o desenho dos diacríticos.
        </p>
      </TypeRow>

      <TypeRow
        spec="Small<br>Instrument Sans<br>14px / 1.5 / 0<br>weight 400"
        guardrail="captions · helper">
        <div className="t-small">Texto secundário, com peso menor e cor de apoio. Bom pra captions, legendas, helper text e parágrafos auxiliares.</div>
      </TypeRow>

      <TypeRow
        spec="Micro<br>Instrument Sans<br>12px / 1 / +0.16em<br>uppercase · weight 600"
        guardrail="eyebrows · metadados">
        <div className="t-micro">Categoria · 12 de Maio</div>
      </TypeRow>

      <TypeRow
        spec="Mono<br>JetBrains Mono<br>14px / 1.6 / -0.01em<br>code &amp; specs"
        guardrail="tokens · specs · tags">
        <div className="t-mono">--color-primary-500: #E9792B;<br />--font-body: "Instrument Sans";<br />scale: 1.25 · base: 17px</div>
      </TypeRow>

    </div>
  </section>
);

window.TypeStack = TypeStack;
