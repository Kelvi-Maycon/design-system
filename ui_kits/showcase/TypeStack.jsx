// TypeStack — 8 levels with right-side mono specs.
const TypeRow = ({ children, spec }) => (
  <div className="type-row">
    <div>{children}</div>
    <div className="type-spec" dangerouslySetInnerHTML={{__html: spec}} />
  </div>
);

const TypeStack = () => (
  <section>
    <SectionHead num="02" label="Typography" title="Duas vozes, um sistema"
      meta="Garamond Cond/Narrow nos títulos · Instrument Sans no corpo · JetBrains Mono nos specs" />
    <div className="type-stack">
      <TypeRow spec="Display<br>Garamond Bk Cond<br>78px / 0.95 / -0.025em<br>weight 400">
        <div className="t-display">Reimagine.</div>
      </TypeRow>
      <TypeRow spec="H1<br>Garamond Bk Cond<br>52px / 1 / -0.02em<br>weight 400">
        <div className="t-h1">Editorial paper magazine</div>
      </TypeRow>
      <TypeRow spec="H2<br>Garamond Bk Cond<br>33px / 1.15 / -0.015em<br>weight 400">
        <div className="t-h2">Construção tipográfica</div>
      </TypeRow>
      <TypeRow spec="H3<br>Garamond Bd Narrow<br>26px / 1.2 / -0.005em<br>weight 700">
        <div className="t-h3">Decisões de coração</div>
      </TypeRow>
      <TypeRow spec="Body<br>Instrument Sans<br>17px / 1.55 / 0<br>weight 400">
        <p className="t-body drop-cap">
          Aqui mora o corpo de texto. A página respira em creme, com tipografia clássica e acento terracotta. <em>Acentuação portuguesa</em> — ção, ã, ê, ó, à — testa o desenho dos diacríticos. O drop cap inicial usa Book Condensed em terracotta, idiossincrasia única do sistema.
        </p>
      </TypeRow>
      <TypeRow spec="Small<br>Instrument Sans<br>14px / 1.5 / 0<br>weight 400">
        <div className="t-small">Texto secundário, com peso menor e cor de apoio. Bom pra captions, legendas, helper text e parágrafos auxiliares.</div>
      </TypeRow>
      <TypeRow spec="Micro<br>Instrument Sans<br>12px / 1 / +0.16em<br>uppercase · weight 600">
        <div className="t-micro">Categoria · 12 de Maio</div>
      </TypeRow>
      <TypeRow spec="Mono<br>JetBrains Mono<br>14px / 1.6 / -0.01em<br>code &amp; specs">
        <div className="t-mono">--color-primary-500: #E9792B;<br />--font-body: "Instrument Sans";<br />scale: 1.25 · base: 17px</div>
      </TypeRow>
    </div>
  </section>
);

window.TypeStack = TypeStack;
