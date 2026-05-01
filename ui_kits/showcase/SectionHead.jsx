// Section head pattern: mono eyebrow + serif title + italic meta right.
const SectionHead = ({ num, label, title, meta }) => (
  <div className="section-head">
    <div>
      <span className="section-num">{num} · {label}</span>
      <h2 className="section-title">{title}</h2>
    </div>
    <p className="section-meta">{meta}</p>
  </div>
);

window.SectionHead = SectionHead;
