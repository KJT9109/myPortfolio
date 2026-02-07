import BlogPreview from "./components/BlogPreview";
import "./App.css";

function App() {
  return (
    <main style={{ padding: 40, maxWidth: 960, margin: "0 auto" }}>
      <header style={{ marginBottom: 60 }}>
        <h1>김지태</h1>
        <p>프론트엔드 개발자</p>
        <p style={{ opacity: 0.7 }}>
          사용자 경험과 유지보수를 고려한 웹 개발을 지향합니다.
        </p>
      </header>

      <section style={{ marginBottom: 80 }}>
        <h2>블로그</h2>
        <p style={{ opacity: 0.7 }}>
          공부한 내용과 문제 해결 과정을 기록합니다.
        </p>
        <BlogPreview />
      </section>

      <footer style={{ marginTop: 80, opacity: 0.6 }}>
        © {new Date().getFullYear()} 김지태
      </footer>
    </main>
  );
}

export default App;

