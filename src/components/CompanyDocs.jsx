import { useEffect, useState } from "react";

const DOCS = {
  gitsn: { label: "지슨", file: "gitsn.pdf" },
  nucare: { label: "뉴케어", file: "nucare.pdf" },
  intellian: { label: "인텔리안테크놀로지스", file: "intellian.pdf" },
};

function getCompanyFromHash() {
  // 예: #docs-gitsn, #docs-nucare, #docs-intellian
  const hash = window.location.hash || "";
  if (!hash.startsWith("#docs-")) return null;
  const key = hash.replace("#docs-", "");
  return DOCS[key] ? key : null;
}

export default function CompanyDocs() {
  const [activeKey, setActiveKey] = useState("gitsn");

  // 해시 변경 시 회사 자동 선택
  useEffect(() => {
    const applyHash = () => {
      const key = getCompanyFromHash();
      if (key) setActiveKey(key);
    };

    applyHash(); // 최초 1회
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const active = DOCS[activeKey];
  const src = `${import.meta.env.BASE_URL}docs/${active.file}`;

  return (
    <section>
      <h3>Work Documents</h3>
      <p style={{ color: "#6b6b6b", marginTop: 6 }}>
        회사별 개발 정리 문서를 PDF로 제공합니다.
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

      {/* PDF */}
      <div style={{ marginTop: 16 }}>
        <iframe
          key={src}
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
