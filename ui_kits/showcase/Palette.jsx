// Palette — primary ramp + paper neutrals + sage + status.
const Swatch = ({ bg, name, hex, role }) => (
  <div className="swatch">
    <div className="swatch-color" style={{ background: bg }} />
    <div className="swatch-meta">
      <span className="swatch-name">{name}</span>
      <span className="swatch-hex">{hex}</span>
      <span className="swatch-oklch">{role}</span>
    </div>
  </div>
);

const PrimaryRamp = () => (
  <div className="palette-group">
    <div className="palette-label">Primary — Terracotta</div>
    <div className="swatches">
      <Swatch bg="oklch(97% 0.02 50.7)" name="Primary 50"   hex="oklch(97% 0.02 50.7)" role="surface tint" />
      <Swatch bg="oklch(93% 0.05 50.7)" name="Primary 100"  hex="oklch(93% 0.05 50.7)" role="subtle" />
      <Swatch bg="oklch(75% 0.14 50.7)" name="Primary 300"  hex="oklch(75% 0.14 50.7)" role="soft" />
      <Swatch bg="#e9792b"              name="Primary 500 ★" hex="#E9792B" role="brand" />
      <Swatch bg="oklch(40% 0.18 50.7)" name="Primary 700"  hex="oklch(40% 0.18 50.7)" role="hover" />
      <Swatch bg="oklch(30% 0.14 50.7)" name="Primary 800"  hex="oklch(30% 0.14 50.7)" role="deep" />
      <Swatch bg="oklch(20% 0.08 50.7)" name="Primary 900"  hex="oklch(20% 0.08 50.7)" role="deepest" />
    </div>
  </div>
);

const Neutrals = () => (
  <div className="palette-group">
    <div className="palette-label">Neutral — Paper warm</div>
    <div className="swatches">
      {[
        ["#fbf8f0","Card","#FBF8F0","surface card"],
        ["#f5f1e8","Paper","#F5F1E8","surface base"],
        ["#efeade","Paper soft","#EFEADE","surface alt"],
        ["#e7e1d1","Tag bg","#E7E1D1","surface tag"],
        ["#d8d2c0","Divider","#D8D2C0","border subtle"],
        ["#c7c0ac","Divider 2","#C7C0AC","border strong"],
        ["#b5af9f","Muted soft","#B5AF9F","muted+"],
        ["#8b857a","Muted","#8B857A","text muted"],
        ["#4a463e","Ink 3","#4A463E","text apoio"],
        ["#2b2822","Ink 2","#2B2822","text dark 2"],
        ["#1a1814","Ink","#1A1814","text principal"],
      ].map(([bg,n,h,r]) => <Swatch key={n} bg={bg} name={n} hex={h} role={r} />)}
    </div>
  </div>
);

const SagePills = () => (
  <div className="palette-group">
    <div className="palette-label">Sage — positivo / pills "rodando"</div>
    <div className="swatches">
      <Swatch bg="#dde0cc" name="Sage soft" hex="#DDE0CC" role="pill bg / surface" />
      <Swatch bg="#6f7a5c" name="Sage" hex="#6F7A5C" role="success / running" />
    </div>
    <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
      <span className="pill-positive"><span className="dot" /> Rodando</span>
      <span className="pill-positive">✓ Concluído</span>
      <span className="pill-positive pill-positive--filled">Ativo</span>
    </div>
  </div>
);

const Status = () => (
  <div className="palette-group">
    <div className="palette-label">Status — warning / error / info</div>
    <div className="swatches">
      <Swatch bg="oklch(70% 0.16 75)"  name="Warning" hex="oklch(70% 0.16 75)"  role="hue +24" />
      <Swatch bg="oklch(52% 0.18 28)"  name="Error"   hex="oklch(52% 0.18 28)"  role="hue −22" />
      <Swatch bg="oklch(55% 0.10 240)" name="Info"    hex="oklch(55% 0.10 240)" role="hue +189" />
    </div>
  </div>
);

const Palette = () => (
  <section>
    <SectionHead num="01" label="Color" title="Paleta paper & terracotta" meta="7 stops primary OKLCH · 11 neutrals warm · 2 sage · 3 status" />
    <PrimaryRamp />
    <Neutrals />
    <SagePills />
    <Status />
  </section>
);

window.Palette = Palette;
