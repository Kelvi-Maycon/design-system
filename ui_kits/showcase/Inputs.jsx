// Inputs + SearchBar specimen
const Inputs = () => (
  <section>
    <SectionHead num="09" label="Inputs" title="Pílulas suaves"
      meta="Radius 16px · hover border 300 · focus border 500 + ring chroma 18%" />

    <div className="inputs-grid">
      <div className="input-group">
        <label className="input-label">Padrão</label>
        <input className="input" type="text" defaultValue="Walter Benjamin" />
      </div>
      <div className="input-group">
        <label className="input-label">Placeholder</label>
        <input className="input" type="email" placeholder="seu.email@atelier.editorial" />
      </div>
      <div className="input-group" style={{gridColumn:"1 / -1"}}>
        <label className="input-label">Search · with kbd hint</label>
        <div className="input-search">
          <Icon name="search" size={16} />
          <input className="input" type="search" placeholder="Procurar edição, autor, assunto…" />
          <span className="kbd-trail">⌘ K</span>
        </div>
      </div>
      <div className="input-group">
        <label className="input-label">Disabled</label>
        <input className="input" type="text" disabled defaultValue="Não editável" />
      </div>
      <div className="input-group">
        <label className="input-label">Numérico</label>
        <input className="input" type="number" defaultValue="42" />
      </div>
      <div className="input-group" style={{gridColumn:"1 / -1"}}>
        <label className="input-label">Textarea</label>
        <textarea className="input textarea" rows={4} placeholder="Escreva o resumo da edição…" />
      </div>
    </div>
  </section>
);

window.Inputs = Inputs;
