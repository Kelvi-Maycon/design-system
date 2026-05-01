// Cards — 3 variants: editorial horizontal, vertical, cover

const CardEditorial = ({ icon, headline, sub, edition, label, value, accent }) => (
  <article className="ed-card">
    <div className="ed-badge"><Icon name={icon} size={20} /></div>
    <div>
      <div className="ed-headline">{headline}</div>
      {sub && <div className="ed-sub">{sub}</div>}
    </div>
    <div className="ed-meta">
      <span className="ed-meta-label">Edição</span>
      <span className="ed-meta-value">{edition}</span>
    </div>
    <div style={{display:"flex", alignItems:"stretch", gap:"14px"}}>
      <div className="ed-meta">
        <span className="ed-meta-label">{label}</span>
        <span className={"ed-meta-value " + (accent ? "ed-meta-value--accent" : "")}>{value}</span>
      </div>
      <div className="ed-dots"><span/><span/><span/></div>
    </div>
  </article>
);

const CardArticle = ({ icon, eyebrow, title, body, footer, link, dotted }) => (
  <article className={"card " + (dotted ? "card--dotted" : "")}>
    <span className="card-eyebrow"><span className="dot"></span>{eyebrow}</span>
    <div className="card-icon-block"><Icon name={icon} size={20} /></div>
    <h3 className="card-title">{title}</h3>
    <p className="card-body">{body}</p>
    <div className="card-footer">
      <span>{footer}</span>
      <a href="#" className="card-link" onClick={(e)=>e.preventDefault()}>
        {link} <Icon name="arrowRight" size={14} />
      </a>
    </div>
  </article>
);

const CardCover = ({ icon, eyebrow, title, body, edition }) => (
  <article className="card-cover">
    <div className="cover">
      <Icon name={icon} size={48} sw={1.2} />
    </div>
    <div className="body">
      <span className="card-eyebrow"><span className="dot"></span>{eyebrow}</span>
      <h3 className="card-title">{title}</h3>
      <p className="card-body">{body}</p>
      <div className="card-footer">
        <span>Edição {edition}</span>
        <a href="#" className="card-link" onClick={(e)=>e.preventDefault()}>
          Abrir <Icon name="arrowUpRight" size={14} />
        </a>
      </div>
    </div>
  </article>
);

const CardsGrid = () => (
  <section>
    <SectionHead num="08" label="Cards" title="Editorial · com personalidade"
      meta="Eyebrow mono · ícone-bloco · headline italic · footer dividido · variantes cover/dotted" />

    <h4 className="sub-section-title">Editorial · horizontal</h4>
    <div className="cards-stack">
      <CardEditorial
        icon="asterisk"
        headline={<>10 automações com IA que <span className="tag-inline">na verdade</span> trabalham</>}
        sub="Fluxos de trabalho reais testados em ambientes de produção. Não é teoria."
        edition="01" label="Lançamento" value="Março 2026" accent />
      <CardEditorial
        icon="bookmark"
        headline={<>Manuscritos do Atelier <span className="tag-inline">curado</span></>}
        sub="Coleção curada de ensaios visuais, organizados por temperatura cromática."
        edition="02" label="Status" value="Em revisão" />
      <CardEditorial
        icon="clock"
        headline={<>Decisões antes de tokens — método em <em>4 atos</em></>}
        sub="Toda peça começa por uma frase-tese. Sem metáfora, design system vira commodity."
        edition="03" label="Publicado" value="Fev 2026" />
    </div>

    <h4 className="sub-section-title">Article · vertical com eyebrow</h4>
    <div className="cards-grid">
      <CardArticle icon="feather" eyebrow="Editorial" title="Manuscritos do Atelier"
        body="Coleção curada de ensaios visuais e tipográficos, organizados por temperatura cromática e voz de marca."
        footer="Edição 04" link="Ler edição" dotted />
      <CardArticle icon="ruler" eyebrow="Processo" title="Decisões antes de tokens"
        body="Toda peça começa por uma frase-tese. Sem metáfora, design system vira commodity — coerente em detalhes, morto em personalidade."
        footer="Método" link="Ver método" />
      <CardArticle icon="layers" eyebrow="Princípio" title="Constraint over freedom"
        body="Um bom sistema remove decisões. Cada token elimina escolha arbitrária — é o que separa coerência de improviso."
        footer="Manifesto" link="Ler princípios" dotted />
    </div>

    <h4 className="sub-section-title">Issue cover · com placeholder</h4>
    <div className="cards-grid">
      <CardCover icon="quote" eyebrow="Capa · 05" title="Tipografia como decisão de marca"
        body="Por que ITC Garamond — e não Inter — define o caráter editorial."
        edition="05" />
      <CardCover icon="palette" eyebrow="Capa · 06" title="Pastéis quentes em sistemas digitais"
        body="Estudo de paletas terracotta + paper, leitura suave em ambos os modos."
        edition="06" />
      <CardCover icon="grid" eyebrow="Capa · 07" title="Constraint-driven UI"
        body="Tokens como contrato editorial entre design e engenharia."
        edition="07" />
    </div>
  </section>
);

const Compliance = () => (
  <section>
    <SectionHead num="13" label="Compliance" title="Guardrails aplicados"
      meta="Decisões upstream auditáveis" />
    <div className="compliance">
      <ul>
        {[
          <><strong>Iconografia:</strong> set proprietário 1.5px, viewBox 24×24, render base 18px. Cantos levemente arredondados. 1 detalhe filled como assinatura editorial.</>,
          <><strong>Botões:</strong> sempre ícone leading · radius full · variantes primary/secondary/outline/ghost · FAB radius 2xl com shadow-pill.</>,
          <><strong>Cards:</strong> eyebrow mono uppercase · ícone-bloco com surface-alt · título italic Garamond Narrow · footer dividido por border-subtle. Variantes: editorial horizontal, article vertical, issue cover.</>,
          <><strong>Inputs:</strong> radius xl (16px) — pílula suave, não cilíndrica · focus pastel terracotta + ring 18% chroma.</>,
          <><strong>Sombras:</strong> apenas em flutuantes (selected pill, popover, action bar, FAB, toast) — usando ink hue, não rgba black.</>,
          <><strong>Pattern dotted:</strong> radial-gradient 1px / 22px em muted-soft. Aplicado pontualmente em alguns cards e empty state.</>,
          <><strong>Cores:</strong> primary 300/500 mantidos · 700/800/900 dessaturados em chroma 0.13/0.10/0.07.</>,
          <><strong>Tipografia:</strong> H1 Garamond Cond · H2/H3 Garamond Narrow regular (não bold) · body Instrument Sans · mono JetBrains.</>,
        ].map((c, i) => <li key={"comp-"+i}>{c}</li>)}
      </ul>
    </div>
  </section>
);

window.CardEditorial = CardEditorial;
window.CardArticle = CardArticle;
window.CardCover = CardCover;
window.CardsGrid = CardsGrid;
window.Compliance = Compliance;
