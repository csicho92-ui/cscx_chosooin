import { ITEMS } from "./data/items";

function Work() {
  const works = ITEMS.filter((item) => item.type === "work");

  return (
    <div>
      {works.map((item, i) => (
        <section key={item.id} id={item.slug} className="work-section">
          <div className="work-inner">
            <p className="work-index">
              {String(i + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}
            </p>
            <span className="work-emoji">{item.emoji}</span>
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
        </section>
      ))}

      <footer className="contact" id="contact">
        <h2>조수인</h2>
        <p>고객의 말을 콘텐츠로 번역하는 마케터</p>
        <a href="mailto:whtndls5@naver.com">whtndls5@naver.com</a>
        <a href="https://blog.naver.com/whtndls5" target="_blank" rel="noreferrer">
          blog.naver.com/whtndls5
        </a>
      </footer>
    </div>
  );
}

export default Work;
