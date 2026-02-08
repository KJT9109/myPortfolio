export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sideTitle">Menu</div>

      <a className="sideLink" href="#about">About</a>
      <a className="sideLink" href="#skills">Skills</a>
      <a className="sideLink" href="#experience">Experience</a>

      <a className="sideLink" href="#docs">Work Docs</a>
      <div className="sideSub">
        <a className="sideSubLink" href="#docs?company=gitsn">Gitsn</a>
        <a className="sideSubLink" href="#docs?company=nucare">Nucare</a>
        <a className="sideSubLink" href="#docs?company=intellian">Intellian</a>
      </div>

      <a className="sideLink" href="#blog">Blog</a>

      <div className="sideDivider" />
      <a className="sideLink" href="#top">Top ↑</a>
    </nav>
  );
}
