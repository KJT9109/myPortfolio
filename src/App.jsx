import { useState } from "react";
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
  const [selectedCompany, setSelectedCompany] = useState(null);

  const goTo = (sectionId, companyKey = null) => {
    if (companyKey) setSelectedCompany(companyKey);

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="top" className="page">
      <div className="layout">
        <Sidebar onGo={goTo} />

        <main className="content">
          <Header />

          <Section id="about"><About /></Section>
          <Section id="skills"><Skills /></Section>
          <Section id="experience"><Experience /></Section>

          <Section id="docs">
            <CompanyDocs selectedCompany={selectedCompany} />
          </Section>

          <Section id="blog"><Blog /></Section>
        </main>
      </div>
    </div>
  );
}
