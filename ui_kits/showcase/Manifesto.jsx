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
        ["Voice tipográfica", "2 voices + mono. ITC Garamond Cond/Narrow para títulos · Instrument Sans para corpo · JetBrains Mono para specs."],
        ["Shadow philosophy", "Zero. Profundidade vem de alternância de surfaces (paper / paper-soft / card / tag)."],
        ["Hover signature", <>Texto migra pra <em style={{color:"var(--color-primary-500)",fontStyle:"italic"}}>terracotta</em>. Sem scale, sem opacity, sem translate.</>],
        ["Accent restrito", "Primary CTA · focus ring · active state · hover signature · drop cap. Nada além disso."],
        ["Idiosyncratic rule", "Drop cap em ITC Garamond Book Condensed terracotta na primeira letra de seções. Micro labels uppercase tracking +0.16em."],
      ].map(([dt, dd], i) => (
        <div className="manifesto-row" key={i}>
          <dt>{dt}</dt><dd>{dd}</dd>
        </div>
      ))}
    </dl>
  </header>
);

window.Manifesto = Manifesto;
