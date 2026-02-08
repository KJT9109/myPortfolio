import BlogPreview from "./components/BlogPreview";
import "./App.css";

function App() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 40 }}>
      <header style={{ marginBottom: 80 }}>
        <h1>김지태</h1>
        <h2 style={{ fontWeight: 400 }}>Embedded Application Engineer</h2>
        <p style={{ marginTop: 20, opacity: 0.8 }}>
          임베디드 리눅스 환경에서<br />
          제품 단위 애플리케이션을 설계·개발해온 엔지니어입니다.
        </p>
      </header>

      <section style={{ marginBottom: 80 }}>
        <h3>About</h3>
        <p>
          임베디드 리눅스 기반 제품에서 동작하는 애플리케이션 개발을
          중심으로 경력을 쌓아왔습니다.
        </p>
        <p>
          프로토콜 연동, IPC, 이벤트 처리 등 시스템 단 애플리케이션 구조를
          설계하고 구현해왔으며, 안정성과 유지보수를 중요하게 생각합니다.
        </p>
      </section>

      <section style={{ marginBottom: 80 }}>
        <h3>Blog</h3>
        <BlogPreview />
      </section>

      <footer style={{ marginTop: 100, opacity: 0.6 }}>
        © {new Date().getFullYear()} 김지태
      </footer>
    </main>
  );
}

export default App;

