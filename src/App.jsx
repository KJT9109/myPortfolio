import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import CompanyDocs from "./components/CompanyDocs";
import Blog from "./components/BlogPreview";
import Sidebar from "./components/Sidebar";
import "./App.css";

function Section({ id, children }) {
  return (
    <section id={id} className="section">
      {children}
    </section>
  );
}

export default function App() {
  return (
    <div id="top" className="page">
      <div className="layout">
        <Sidebar />

        <main className="content">
          <Header />

          <Section id="about">
            <About />
          </Section>

          <Section id="skills">
            <Skills />
          </Section>

          <Section id="experience">
            <Experience />
          </Section>

          <Section id="docs">
            <CompanyDocs />
          </Section>

          <Section id="blog">
            <Blog />
          </Section>
        </main>
      </div>
    </div>
  );
}
