// Lists + Tabs + Avatars + Counters + Progress
const Lists = () => (
  <section>
    <SectionHead num="11" label="Lists & Tabs" title="Linhas com hierarquia editorial"
      meta="Sections em mono · counters tabular · selected pill com shadow sutil" />

    <div className="lists-grid">
      <div className="list" aria-label="Diretório">
        <div className="list-section">Edições</div>
        <div className="list-row is-selected">
          <span className="checkbox is-checked"><Icon name="check" size={12} sw={2} /></span>
          <Icon name="folderOpen" />
          <span className="name">Manuscritos do Atelier</span>
          <span className="meta">12 itens</span>
          <Icon name="chevron" size={14} />
        </div>
        <div className="list-row">
          <span className="checkbox"></span>
          <Icon name="folder" />
          <span className="name">Decisões antes de tokens</span>
          <span className="meta">04 itens</span>
          <Icon name="chevron" size={14} />
        </div>
        <div className="list-row">
          <span className="checkbox is-checked"><Icon name="check" size={12} sw={2} /></span>
          <Icon name="document" />
          <span className="name">Constraint over freedom</span>
          <span className="meta">2.3 KB</span>
          <Icon name="chevron" size={14} />
        </div>

        <div className="list-section">Rascunhos</div>
        <div className="list-row">
          <span className="checkbox"></span>
          <Icon name="edit" />
          <span className="name">Tipografia como decisão de marca</span>
          <span className="meta">há 2h</span>
          <Icon name="chevron" size={14} />
        </div>
        <div className="list-row">
          <span className="checkbox"></span>
          <Icon name="edit" />
          <span className="name">Pastéis quentes em sistemas digitais</span>
          <span className="meta">ontem</span>
          <Icon name="chevron" size={14} />
        </div>
      </div>

      <div className="lists-side">
        <div className="lists-side-block">
          <h4 className="sub-section-title" style={{margin:"0 0 12px"}}>Tabs</h4>
          <div className="tabs" role="tablist">
            <button className="tab is-active" role="tab"><Icon name="grid" size={14} /> Todas</button>
            <button className="tab" role="tab"><Icon name="documents" size={14} /> Edições</button>
            <button className="tab" role="tab"><Icon name="palette" size={14} /> Tokens</button>
            <button className="tab" role="tab"><Icon name="users" size={14} /> Time</button>
          </div>
        </div>

        <div className="lists-side-block">
          <h4 className="sub-section-title" style={{margin:"0 0 12px"}}>Avatares</h4>
          <div className="avatar-group">
            <span className="avatar">SG</span>
            <span className="avatar">MR</span>
            <span className="avatar">JK</span>
            <span className="avatar">+4</span>
          </div>
        </div>

        <div className="lists-side-block">
          <h4 className="sub-section-title" style={{margin:"0 0 12px"}}>Progress</h4>
          <div className="progress"><span style={{width:"36%"}} /></div>
          <div className="progress-meta"><span>5,46 GB usados</span><span>15 GB</span></div>
          <div style={{height:16}} />
          <div className="progress progress--sage"><span style={{width:"72%"}} /></div>
          <div className="progress-meta"><span>Edição 04 · revisão</span><span>72%</span></div>
        </div>

        <div className="lists-side-block">
          <h4 className="sub-section-title" style={{margin:"0 0 12px"}}>Pills & counters</h4>
          <div style={{display:"flex", flexWrap:"wrap", gap:8, alignItems:"center"}}>
            <span className="pill-positive"><span className="dot"/> Publicado</span>
            <span className="tag">Editorial</span>
            <span className="counter">42</span>
            <span className="counter">128</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

window.Lists = Lists;
