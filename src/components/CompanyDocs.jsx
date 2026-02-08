import { useState } from "react";

const DOCS = {
  gitsn: {
    label: "지슨",
    file: "gitsn.pdf",
  },
  newcare: {
    label: "뉴케어",
    file: "nucare.pdf",
  },
  intellian: {
	label: "인텔리안테크놀로지스",
	file: "intellian.pdf",
  }
};

export default function CompanyDocs() {
  const [activeKey, setActiveKey] = useState("gitsn");
  const active = DOCS[activeKey];

  // GitHub Pages base 경로 대응
  const src = `${import.meta.env.BASE_URL}docs/${active.file}`;

  return (
    <section>
      <h3>Work Documents</h3>
      <p style={{ color: "#6b6b6b", marginTop: 6 }}>
        회사에서 어떤 제품과 개발을 해왔는지에 대한 포트폴리오.
      </p>

      {/* 회사 선택 버튼 */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
        {Object.entries(DOCS).map(([key, d]) => (
          <button
            key={key}
            onClick={() => setActiveKey(key)}
            style={{
              padding: "10px 14px",
              borderRadius: 999,
              border: "1px solid #e6e6e6",
              background: key === activeKey ? "#111" : "#fff",
              color: key === activeKey ? "#fff" : "#111",
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            {d.label}
          </button>
        ))}

        {/* 새 탭 열기 */}
        <a
          href={src}
          target="_blank"
          rel="noreferrer"
          style={{
            marginLeft: "auto",
            alignSelf: "center",
            color: "#111",
            textDecoration: "none",
            fontSize: 14,
          }}
        >
          새 탭에서 열기 →
        </a>
      </div>

      {/* PDF 임베드 */}
      <div style={{ marginTop: 16 }}>
        <iframe
          key={src} // 회사 바꿀 때 강제로 다시 로드
          src={src}
          width="100%"
          height="900"
          style={{
            border: "1px solid #e6e6e6",
            borderRadius: 16,
            background: "#fff",
          }}
          title={`${active.label} 문서`}
        />
      </div>
    </section>
  );
}
