export default function Sidebar({ onGo }) {
  return (
    <nav className="sidebar">
      <div className="sideTitle">Menu</div>

      <button className="sideBtn" onClick={() => onGo("about")}>About</button>
      <button className="sideBtn" onClick={() => onGo("skills")}>Skills</button>
      <button className="sideBtn" onClick={() => onGo("experience")}>Experience</button>

      <button className="sideBtn" onClick={() => onGo("docs")}>Work Docs</button>
      <div className="sideSub">
        <button className="sideSubBtn" onClick={() => onGo("docs", "gitsn")}>Gitsn</button>
        <button className="sideSubBtn" onClick={() => onGo("docs", "nucare")}>Nucare</button>
        <button className="sideSubBtn" onClick={() => onGo("docs", "intellian")}>Intellian</button>
      </div>

      <button className="sideBtn" onClick={() => onGo("blog")}>Blog</button>

      <div className="sideDivider" />
      <button className="sideBtn" onClick={() => onGo("top")}>Top ↑</button>
    </nav>
  );
}
