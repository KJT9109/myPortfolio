import { useEffect, useState } from "react";

export default function BlogPreview() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}posts.json`)
      .then((r) => r.json())
      .then((d) => setItems(d.items ?? []))
      .catch(() => setItems([]));
  }, []);

  return (
    <section>
      <h2>블로그 최근 글</h2>
      <div style={{ display: "grid", gap: 12 }}>
        {items.map((p) => (
          <a key={p.link} href={p.link} target="_blank" rel="noreferrer"
             style={{ padding: 14, border: "1px solid #eee", borderRadius: 12, textDecoration: "none" }}>
            <div style={{ fontWeight: 700 }}>{p.title}</div>
            <div style={{ opacity: 0.7, fontSize: 13, marginTop: 6 }}>{p.description}</div>
          </a>
        ))}
      </div>

      <div style={{ marginTop: 12 }}>
        <a href="https://kjt9109.tistory.com/" target="_blank" rel="noreferrer">블로그 전체 보기 →</a>
      </div>
    </section>
  );
}

