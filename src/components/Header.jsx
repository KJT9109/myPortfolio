export default function Header() {
  return (
    <header className="hero">
      <div className="heroCard">
        <div className="heroTop">
          <div>
            <h1 className="name">김지태</h1>
            <p className="role">Embedded Application Engineer</p>
          </div>
        </div>

        <p className="tagline">
          임베디드 리눅스 환경에서 제품 단위 애플리케이션을 설계·개발해온 엔지니어입니다.
        </p>

        <div className="contactList">
          <div className="contactRow">
            <span className="label">Email</span>
            <a className="value" href="mailto:kjt9109@naver.com">kjt9109@naver.com</a>
          </div>
          <div className="contactRow">
            <span className="label">Blog</span>
            <a className="value" href="https://kjt9109.tistory.com" target="_blank" rel="noreferrer">
              kjt9109.tistory.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

