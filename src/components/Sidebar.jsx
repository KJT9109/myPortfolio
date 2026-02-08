export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sideTitle">Menu</div>

      <a className="sideLink" href="#about">About</a>
      <a className="sideLink" href="#skills">Skills</a>
      <a className="sideLink" href="#experience">Experience</a>
      <a className="sideLink" href="#docs">Work Docs</a>
      <a className="sideLink" href="#blog">Blog</a>

      <div className="sideDivider" />

      <a className="sideLink" href="#top">Top ↑</a>
    </nav>
  );
}
