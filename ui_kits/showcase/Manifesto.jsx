// Manifesto — display thesis + dl grid of upstream decisions.
const Manifesto = () => (
  <header className="manifesto">
    <div className="manifesto-eyebrow">Design System · v0.1</div>
    <h1 className="manifesto-thesis">
      A literary <em>paper magazine</em><br />
      reimagined as a product surface.
    </h1>
    <dl className="manifesto-grid">
      {[
        ["Tese", "Editorial calmness com acento terracotta. Densidade de revista impressa, não de SaaS dashboard."],
        ["Neutro", "Warm — paper cream com undertone amarelado em todos os grays."],
        ["Voice tipográfica", "Garamond Cond só em Display/H1/H2 (roman). A partir de H3 tudo é Garamond Narrow Bd 700. Body em Instrument Sans, specs em JetBrains Mono."],
        ["Italic policy", <>Toda ênfase serif — <em>qualquer</em> &lt;em&gt; em títulos — usa Garamond <em>Narrow</em> Italic. Cond Italic é compactada demais e fica proibida.</>],
        ["Shadow philosophy", "Zero. Profundidade vem de alternância de surfaces (paper / paper-soft / card / tag)."],
        ["Hover signature", <>Texto migra pra <em style={{color:"var(--color-primary-500)"}}>terracotta</em>. Sem scale, sem opacity, sem translate.</>],
        ["Accent restrito", "Primary CTA · focus ring · active state · hover signature de texto. Sem letras grandes laranjas fora do fluxo do texto."],
        ["Hierarquia", "Salto de família + peso entre H2 e H3 garante leitura clara. Micro labels uppercase tracking +0.16em em mono."],
      ].map(([dt, dd], i) => (
        <div className="manifesto-row" key={i}>
          <dt>{dt}</dt><dd>{dd}</dd>
        </div>
      ))}
    </dl>
  </header>
);

window.Manifesto = Manifesto;
