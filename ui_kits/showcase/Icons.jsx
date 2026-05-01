/* ============================================================
   ICONS · Editorial set 1.5px
   - Stroke 1.5px, linecap/linejoin "round" leve
   - 1 ponto filled como assinatura em alguns ícones
   - viewBox 24×24, default render 18×18
   - Uso: <Icon name="search" size={18} />
   ============================================================ */

const ICONS = {
  // ---- BASIC NAV ----
  arrowRight: <><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></>,
  arrowLeft:  <><path d="M19 12H5"/><path d="M11 18l-6-6 6-6"/></>,
  arrowUpRight: <><path d="M7 17 17 7"/><path d="M8 7h9v9"/></>,
  chevron:    <path d="M9 6l6 6-6 6"/>,
  chevronDown: <path d="M6 9l6 6 6-6"/>,
  close:      <><path d="M6 6l12 12"/><path d="M18 6L6 18"/></>,
  plus:       <><path d="M12 5v14"/><path d="M5 12h14"/></>,
  minus:      <path d="M5 12h14"/>,
  more:       <><circle cx="6" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="18" cy="12" r="1.4" fill="currentColor" stroke="none"/></>,
  moreV:      <><circle cx="12" cy="6" r="1.4" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="12" cy="18" r="1.4" fill="currentColor" stroke="none"/></>,

  // ---- SEARCH / DISCOVER ----
  search:     <><circle cx="11" cy="11" r="6"/><path d="m20 20-4.3-4.3"/></>,
  filter:     <><path d="M4 5h16"/><path d="M7 12h10"/><path d="M10 19h4"/></>,
  command:    <path d="M9 6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3z"/>,

  // ---- EDITORIAL ----
  // Asterisk editorial — nossa "marca" tipográfica
  asterisk:   <><path d="M12 5v14"/><path d="M5 8.5l14 7"/><path d="M5 15.5l14-7"/></>,
  paragraph:  <><path d="M14 4h-4a4 4 0 0 0 0 8h4"/><path d="M14 4v16"/><path d="M18 4v16"/></>,
  pilcrow:    <><path d="M14 4h-3.5a3.5 3.5 0 0 0 0 7H14"/><path d="M14 4v16"/><path d="M18 4v16"/></>,
  quote:      <><path d="M7 10c0-3 1.5-5 4.5-5"/><path d="M14 10c0-3 1.5-5 4.5-5"/><circle cx="7.5" cy="13" r="2.5" fill="currentColor" stroke="none"/><circle cx="14.5" cy="13" r="2.5" fill="currentColor" stroke="none"/></>,
  bookmark:   <><path d="M6 4h12v17l-6-4-6 4z"/><circle cx="12" cy="11" r="1.4" fill="currentColor" stroke="none"/></>,
  feather:    <><path d="M20 4c-3 9-7 13-13 13l-1 4 4-1c10 0 14-4 14-13"/><path d="M6 17l8-8"/></>,

  // ---- DOCUMENTS ----
  document:   <><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/><path d="M10 13h7"/><path d="M10 17h5"/></>,
  documents:  <><path d="M9 3h6l5 5v11H9z"/><path d="M15 3v5h5"/><path d="M5 7v14h11"/></>,
  folder:     <><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></>,
  folderOpen: <><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2H3z"/><path d="M3 9h18l-2 9a2 2 0 0 1-2 1.5H5a2 2 0 0 1-2-1.5z"/></>,
  edit:       <><path d="M4 20h4l11-11-4-4L4 16z"/><path d="M14 5l4 4"/></>,

  // ---- LAYOUT / DESIGN ----
  grid:       <><rect x="4" y="4" width="7" height="7"/><rect x="13" y="4" width="7" height="7"/><rect x="4" y="13" width="7" height="7"/><rect x="13" y="13" width="7" height="7"/></>,
  layers:     <><path d="M12 4 3 9l9 5 9-5z"/><path d="M3 14l9 5 9-5"/></>,
  palette:    <><path d="M12 4a8 8 0 1 0 0 16c1.5 0 2-1 2-2 0-2 2-2 3-2h2a3 3 0 0 0 0-6 8 8 0 0 0-7-6z"/><circle cx="8" cy="11" r="1.2" fill="currentColor" stroke="none"/><circle cx="9" cy="7.5" r="1.2" fill="currentColor" stroke="none"/><circle cx="14" cy="7.5" r="1.2" fill="currentColor" stroke="none"/></>,
  ruler:      <><path d="M3 17 17 3l4 4L7 21z"/><path d="M7 7l2 2"/><path d="M10 4l2 2"/><path d="M13 9l2 2"/><path d="M9 13l2 2"/></>,

  // ---- TIME / STATUS ----
  clock:      <><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></>,
  calendar:   <><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16"/><path d="M9 3v4"/><path d="M15 3v4"/><circle cx="12" cy="15" r="1.4" fill="currentColor" stroke="none"/></>,
  check:      <path d="M5 12.5 10 17 19 7"/>,
  checkCircle:<><circle cx="12" cy="12" r="8"/><path d="M8.5 12.2 11 14.7 15.5 9.5"/></>,
  alert:      <><path d="M12 4 2 20h20z"/><path d="M12 11v4"/><circle cx="12" cy="17.5" r="1.1" fill="currentColor" stroke="none"/></>,

  // ---- PEOPLE ----
  user:       <><circle cx="12" cy="9" r="4"/><path d="M4 21c1-5 5-7 8-7s7 2 8 7"/></>,
  users:      <><circle cx="9" cy="9" r="3.5"/><path d="M3 21c1-4 3.5-6 6-6s5 2 6 6"/><circle cx="17" cy="11" r="2.5"/><path d="M16 21c0-3 2-5 4-5"/></>,

  // ---- SETTINGS / META ----
  settings:   <><circle cx="12" cy="12" r="3"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="M4.2 4.2l2.1 2.1"/><path d="M17.7 17.7l2.1 2.1"/><path d="M2 12h3"/><path d="M19 12h3"/><path d="M4.2 19.8l2.1-2.1"/><path d="M17.7 6.3l2.1-2.1"/></>,
  sliders:    <><path d="M4 7h10"/><circle cx="17" cy="7" r="2"/><path d="M4 17h6"/><circle cx="13" cy="17" r="2"/><path d="M16 17h4"/></>,
  tag:        <><path d="M3 11V4h7l11 11-7 7z"/><circle cx="7.5" cy="7.5" r="1.4" fill="currentColor" stroke="none"/></>,

  // ---- IO ----
  download:   <><path d="M12 4v12"/><path d="M7 11l5 5 5-5"/><path d="M5 20h14"/></>,
  upload:     <><path d="M12 20V8"/><path d="M7 13l5-5 5 5"/><path d="M5 4h14"/></>,
  link:       <><path d="M10 14a4 4 0 0 0 5.7 0L19 11a4 4 0 1 0-5.7-5.7L12 6.5"/><path d="M14 10a4 4 0 0 0-5.7 0L5 13a4 4 0 1 0 5.7 5.7L12 17.5"/></>,
  share:      <><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.5 11l7-4"/><path d="M8.5 13l7 4"/></>,
  external:   <><path d="M14 4h6v6"/><path d="M20 4l-9 9"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></>,

  // ---- LOGIC ----
  brace:      <><path d="M9 4c-2 0-3 1-3 3v2c0 2-1 3-2 3 1 0 2 1 2 3v2c0 2 1 3 3 3"/><path d="M15 4c2 0 3 1 3 3v2c0 2 1 3 2 3-1 0-2 1-2 3v2c0 2-1 3-3 3"/></>,
  code:       <><path d="m9 8-5 4 5 4"/><path d="m15 8 5 4-5 4"/><path d="M14 4l-4 16"/></>,

  // ---- MEDIA ----
  image:      <><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="1.5" fill="currentColor" stroke="none"/><path d="M21 16l-5-5-9 8"/></>,
  video:      <><rect x="3" y="6" width="13" height="12" rx="2"/><path d="m22 8-6 4 6 4z"/></>,
  mic:        <><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></>,

  // ---- THEME ----
  sun:        <><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.2 4.2l1.4 1.4"/><path d="M18.4 18.4l1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M4.2 19.8l1.4-1.4"/><path d="M18.4 5.6l1.4-1.4"/></>,
  moon:       <path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"/>,

  // ---- CHAT / COMM ----
  message:    <><path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-7l-5 4z"/></>,
  bell:       <><path d="M6 9a6 6 0 1 1 12 0v5l2 3H4l2-3z"/><path d="M10 21a2 2 0 0 0 4 0"/></>,
  inbox:      <><path d="M3 13l3-9h12l3 9"/><path d="M3 13v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6"/><path d="M3 13h5l1 3h6l1-3h5"/></>,
};

const Icon = ({ name, size = 18, sw = 1.5, className = "", style = {}, ...rest }) => {
  const path = ICONS[name];
  if (!path) return null;
  return (
    <svg
      className={"icon " + className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {path}
    </svg>
  );
};

window.Icon = Icon;
window.ICONS = ICONS;
