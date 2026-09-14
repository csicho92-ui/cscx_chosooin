import { ITEMS, HERO } from "./data";

function Work() {
  const works = ITEMS.filter((item) => item.type === "work");

  return (
    <div>
      {works.map((item, i) => (
        <section key={item.id} id={item.slug} className="work-section">
          <div className="work-inner">
            <div className="work-text">
              <p className="work-index">
                {String(i + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}
              </p>
              <h2>{item.label}</h2>
              <p className="work-number">{item.number}</p>
              <p className="work-period">{item.period}</p>
              <ul className="work-bullets">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <a className="work-link" href={item.url} target="_blank" rel="noreferrer">
                자세히 보기 →
              </a>
            </div>

            {/* 이미지가 있으면 이미지, 없으면 이모지+숫자 카드로 자리를 채웁니다 */}
            <div className="work-visual">
              {item.image ? (
                <img src={item.image} alt={item.label} />
              ) : (
                <div className="work-card">
                  <span className="work-emoji">{item.emoji}</span>
                  <strong>{item.number}</strong>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <footer className="contact" id="contact">
        <h2>조수인</h2>
        <p>{HERO.title.join(" ")}</p>
        <a href="mailto:whtndls5@naver.com">whtndls5@naver.com</a>
        <a href="https://blog.naver.com/whtndls5" target="_blank" rel="noreferrer">
          blog.naver.com/whtndls5
        </a>
      </footer>
    </div>
  );
}

export default Work;
