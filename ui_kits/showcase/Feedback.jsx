// Feedback — Tooltip, Toast, Empty state
const Feedback = () => (
  <section>
    <SectionHead num="12" label="Feedback" title="Sinais discretos"
      meta="Tooltip ink · toasts surface-card · empty com pattern dotted" />

    <div className="feedback-grid">
      <div className="feedback-cell">
        <h4 className="sub-section-title" style={{margin:"0 0 16px"}}>Tooltip</h4>
        <div style={{display:"flex", gap:24, alignItems:"flex-end"}}>
          <span className="tooltip">Salvar como rascunho · ⌘ S</span>
          <span className="tooltip">Última edição há 2 minutos</span>
        </div>
      </div>

      <div className="feedback-cell">
        <h4 className="sub-section-title" style={{margin:"0 0 16px"}}>Toasts</h4>
        <div style={{display:"grid", gap:12}}>
          <div className="toast">
            <span className="icon-wrap"><Icon name="check" size={16} sw={2} /></span>
            <div>
              <div className="toast-title">Edição publicada</div>
              <div className="toast-body">Manuscritos do Atelier · 04</div>
            </div>
            <button className="btn btn-ghost btn-icon-only btn-sm" aria-label="Fechar">
              <Icon name="close" size={13} />
            </button>
          </div>
          <div className="toast toast--warn">
            <span className="icon-wrap"><Icon name="alert" size={16} /></span>
            <div>
              <div className="toast-title">Conexão instável</div>
              <div className="toast-body">Suas edições estão sendo salvas localmente.</div>
            </div>
            <button className="btn btn-ghost btn-icon-only btn-sm" aria-label="Fechar">
              <Icon name="close" size={13} />
            </button>
          </div>
        </div>
      </div>

      <div className="feedback-cell" style={{gridColumn:"1 / -1"}}>
        <h4 className="sub-section-title" style={{margin:"0 0 16px"}}>Empty state</h4>
        <div className="empty">
          <div className="empty-glyph">*</div>
          <h3 className="empty-title">Nada por aqui ainda</h3>
          <p className="empty-body">Comece criando sua primeira edição. Ela aparecerá nesta lista assim que for salva como rascunho.</p>
          <button className="btn btn-primary" type="button">
            <Icon name="plus" size={14} /> Criar edição
          </button>
        </div>
      </div>
    </div>
  </section>
);

window.Feedback = Feedback;
