const Spacing = () => (
  <section>
    <SectionHead num="03" label="Spacing" title="Grid 4pt + sub-8 micro"
      meta="2 · 3 · 6 micro · 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 128 escala" />
    <div>
      {[2,3,4,6,8,12,16,24,32,48,64,128].map(n => (
        <div className="spacing-row" key={n}>
          <span className="spacing-token">--raw-{n}</span>
          <span className="spacing-value">{n}px</span>
          <span className="spacing-bar" style={{ width: n }} />
        </div>
      ))}
    </div>
  </section>
);

const Radius = () => (
  <section>
    <SectionHead num="04" label="Radius" title="Curvas discretas, paper-feel"
      meta="Modern minimal · child = parent × 0.75" />
    <div className="radius-grid">
      {[["xs","2px",2],["sm","4px",4],["md","8px",8],["lg","12px",12],["xl","16px",16],["2xl","24px",24],["full","∞",9999]].map(([n,v,r]) => (
        <div className="radius-cell" key={n} style={{ borderRadius: r }}>
          <span className="r-name">{n}</span>
          <span className="r-val">{v}</span>
        </div>
      ))}
    </div>
  </section>
);

const Depth = () => (
  <section>
    <SectionHead num="05" label="Depth" title="Sem shadow. Surfaces."
      meta="Shadow philosophy: zero · Profundidade = alternância de superfícies" />
    <div className="depth-grid">
      <div className="depth-cell d-bg"><span className="d-label">Surface · base</span><span className="d-token">--surface-bg · #F5F1E8</span></div>
      <div className="depth-cell d-alt"><span className="d-label">Surface · alt</span><span className="d-token">--surface-alt · #EFEADE</span></div>
      <div className="depth-cell d-card"><span className="d-label">Surface · card</span><span className="d-token">--surface-card · #FBF8F0</span></div>
      <div className="depth-cell d-tag"><span className="d-label">Surface · tag</span><span className="d-token">--surface-tag · #E7E1D1</span></div>
    </div>
  </section>
);

window.Spacing = Spacing;
window.Radius = Radius;
window.Depth = Depth;
