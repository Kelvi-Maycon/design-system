// Menu + Action Bar
const MenuShowcase = () => (
  <section>
    <SectionHead num="10" label="Menu & Action Bar" title="Comandos com hierarquia"
      meta="Popover · ícones outlined editoriais · keyboard hints · estado ativo flutuante" />

    <div className="menu-stage bg-dotted">
      <div className="menu-mock">
        <div className="menu" role="menu" aria-label="Comandos">
          <div className="menu-section">Documento</div>
          <button className="menu-item" role="menuitem">
            <Icon name="share" /> <span>Compartilhar arquivo</span>
            <span className="menu-kbd"><kbd>⌘</kbd><kbd>F</kbd></span>
          </button>
          <button className="menu-item" role="menuitem">
            <Icon name="link" /> <span>Abrir link</span>
            <span className="menu-kbd"><kbd>⌘</kbd><kbd>L</kbd></span>
          </button>
          <button className="menu-item menu-item--active" role="menuitem" aria-current="true">
            <Icon name="brace" /> <span>Embed tool</span>
            <span className="menu-kbd"><kbd>⌘</kbd><kbd>E</kbd></span>
          </button>
          <div className="menu-sep" role="separator" />
          <div className="menu-section">Sessão</div>
          <button className="menu-item" role="menuitem">
            <Icon name="calendar" /> <span>Adicionar agenda</span>
            <span className="menu-kbd"><kbd>⌘</kbd><kbd>A</kbd></span>
          </button>
          <button className="menu-item" role="menuitem">
            <Icon name="video" /> <span>Compartilhar tela</span>
            <span className="menu-kbd"><kbd>⌘</kbd><kbd>W</kbd></span>
          </button>
        </div>

        <div className="action-bar" role="toolbar" aria-label="Ações">
          <button className="btn btn-icon-only" aria-label="Câmera">
            <Icon name="video" />
          </button>
          <button className="btn btn-icon-only" aria-label="Mic">
            <Icon name="mic" />
          </button>
          <button className="btn btn-icon-only is-active" aria-label="Apps" aria-pressed="true">
            <Icon name="grid" />
          </button>
          <button className="btn btn-icon-only" aria-label="Gravar">
            <Icon name="checkCircle" />
          </button>
          <span className="sep" />
          <button className="btn btn-icon-only" aria-label="Sair">
            <Icon name="external" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

window.MenuShowcase = MenuShowcase;
