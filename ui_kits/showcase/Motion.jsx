// Buttons + Motion specimens

const Motion = () => (
  <section>
    <SectionHead num="06" label="Motion" title="Curtas, contidas, calmas"
      meta="Bezier ease-out-quart · Anima só transform & opacity" />
    <button className="motion-demo" type="button">Passe o cursor</button>
    <div className="motion-grid">
      {[
        ["instant","100ms"],["fast","200ms"],["normal","300ms"],["slow","500ms"],
        ["ease-out-quart","cubic-bezier(.25,1,.5,1)"],["ease-out","cubic-bezier(.16,1,.3,1)"],
      ].map(([n,v]) => (
        <div className="motion-card" key={n}>
          <span className="m-name">{n}</span>
          <span className="m-val">{v}</span>
        </div>
      ))}
    </div>
  </section>
);

const Buttons = () => (
  <section>
    <SectionHead num="07" label="Buttons" title="Pílulas com personalidade"
      meta="Sempre ícone leading · pill radius · keyboard hints · ghost · FAB" />

    <div className="btn-row">
      <span className="btn-row-label">Small</span>
      <button className="btn btn-sm btn-primary" type="button">
        <Icon name="plus" size={13} /> Nova edição
      </button>
      <button className="btn btn-sm btn-secondary" type="button">
        <Icon name="bookmark" size={13} /> Salvar
      </button>
      <button className="btn btn-sm btn-outline" type="button">
        <Icon name="close" size={13} /> Cancelar
      </button>
      <button className="btn btn-sm btn-ghost" type="button">
        <Icon name="edit" size={13} /> Editar
      </button>
      <button className="btn btn-sm btn-outline btn-icon-only" aria-label="Mais">
        <Icon name="more" size={13} />
      </button>
    </div>

    <div className="btn-row">
      <span className="btn-row-label">Medium</span>
      <button className="btn btn-primary" type="button">
        <Icon name="feather" /> Publicar edição
      </button>
      <button className="btn btn-secondary" type="button">
        <Icon name="upload" /> Importar
      </button>
      <button className="btn btn-outline" type="button">
        <Icon name="search" /> Pesquisar
        <span className="kbd">⌘ K</span>
      </button>
      <button className="btn btn-ghost" type="button">
        <Icon name="arrowLeft" /> Voltar
      </button>
    </div>

    <div className="btn-row">
      <span className="btn-row-label">Large</span>
      <button className="btn btn-lg btn-primary" type="button">
        <Icon name="asterisk" size={16} /> Começar agora
      </button>
      <button className="btn btn-lg btn-outline" type="button">
        <Icon name="documents" size={16} /> Conheça o catálogo
      </button>
      <button className="btn btn-lg btn-secondary btn-icon-only" aria-label="Configurações">
        <Icon name="settings" size={18} />
      </button>
      <button className="fab" aria-label="Criar">
        <Icon name="plus" size={22} sw={1.6} />
      </button>
    </div>
  </section>
);

window.Motion = Motion;
window.Buttons = Buttons;
