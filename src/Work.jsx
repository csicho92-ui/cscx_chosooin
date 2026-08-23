import { ITEMS } from "./data/items";

function Work() {
  const works = ITEMS.filter((item) => item.type === "work");

  return (
    <div>
      {works.map((item) => (
        <section key={item.id} id={item.slug} className="work-section">
          <span className="work-emoji">{item.emoji}</span>
          <h2>{item.label}</h2>
          <a href={item.url} target="_blank" rel="noreferrer">
            자세히 보기
          </a>
        </section>
      ))}
    </div>
  );
}

export default Work;