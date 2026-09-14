import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { ITEMS, HERO } from "./data";

function Orbit() {
  const stageRef = useRef(null);
  const elsRef = useRef([]);
  const modeRef = useRef(false);
  const [listMode, setListMode] = useState(false);
  const [size, setSize] = useState(0); // 창 크기가 바뀔 때마다 올라가는 숫자

  useEffect(() => {
    const stage = stageRef.current;
    const W = stage.clientWidth;
    const H = stage.clientHeight;
    const works = ITEMS.filter((x) => x.type === "work");
    const workCount = works.length;

    // 창 크기가 바뀌면 size 를 올려서 이 useEffect 를 통째로 다시 실행시킵니다
    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => setSize((n) => n + 1), 300);
    };
    window.addEventListener("resize", onResize);

    // 마우스 위치를 담아두는 상자. 화면 밖일 때는 아주 먼 값으로 둡니다.
    const mouse = { x: -9999, y: -9999 };
    const onMove = (e) => {
      const r = stage.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    stage.addEventListener("mousemove", onMove);
    stage.addEventListener("mouseleave", onLeave);

    const engine = Matter.Engine.create();
    engine.gravity.y = 0;

    // 가로로 넓게, 세로로 납작하게 퍼지는 타원 궤도
    const spreadX = 1;
    const spreadY = 0.8;

    const bodies = ITEMS.map((item, i) => {
      const isWork = item.type === "work";
      const order = isWork ? i : i - workCount;
      const total = isWork ? workCount : ITEMS.length - workCount;
      const angle = (order / total) * Math.PI * 2;
      const ring = Math.min(W, H) * (isWork ? 0.22 : 0.34);

      const body = Matter.Bodies.circle(
        W / 2 + Math.cos(angle) * ring * spreadX,
        H / 2 + Math.sin(angle) * ring * spreadY,
        isWork ? 40 : 24,
        {
          restitution: 0,
          frictionAir: 0.02,
          collisionFilter: isWork ? { group: -1 } : {},
        }
      );
      body.ring = ring;
      body.isWork = isWork;
      return body;
    });

    const walls = [
      Matter.Bodies.rectangle(W / 2, H + 50, W + 200, 100, { isStatic: true }),
      Matter.Bodies.rectangle(W / 2, -50, W + 200, 100, { isStatic: true }),
      Matter.Bodies.rectangle(-50, H / 2, 100, H + 200, { isStatic: true }),
      Matter.Bodies.rectangle(W + 50, H / 2, 100, H + 200, { isStatic: true }),
    ];

    Matter.Composite.add(engine.world, [...bodies, ...walls]);

    Matter.Events.on(engine, "beforeUpdate", () => {
      const cx = W / 2;
      const cy = H / 2;

      bodies.forEach((b) => {
        // 타원을 원처럼 다루기 위해 좌표를 눌러서 계산합니다
        const dx = (b.position.x - cx) / spreadX;
        const dy = (b.position.y - cy) / spreadY;
        const d = Math.hypot(dx, dy) || 1;
        const ux = dx / d;
        const uy = dy / d;

        // 마우스에서 이 물체를 향하는 방향
        const mdx = b.position.x - mouse.x;
        const mdy = b.position.y - mouse.y;
        const md = Math.hypot(mdx, mdy);

        // 1) 마우스가 가까우면 밀어냅니다
        let pushed = false;
        if (md < 140 && md > 0.001) {
          const f = (1 - md / 140) * 0.0015 * b.mass;
          Matter.Body.applyForce(b, b.position, {
            x: (mdx / md) * f,
            y: (mdy / md) * f,
          });
          pushed = true;
        }

        // 2) 작업물: 정해진 궤도를 기차처럼 돕니다
        if (b.isWork) {
          if (pushed) return; // 밀리는 동안은 궤도 계산을 쉽니다
          const targetX = (-uy * 2 + ux * (b.ring - d) * 0.08) * spreadX;
          const targetY = (ux * 2 + uy * (b.ring - d) * 0.08) * spreadY;
          Matter.Body.setVelocity(b, {
            x: b.velocity.x + (targetX - b.velocity.x) * 0.06,
            y: b.velocity.y + (targetY - b.velocity.y) * 0.06,
          });
          return;
        }

        // 3) 취미: 가끔 툭 밀고, 중심으로 아주 약하게 당깁니다
        if (Math.random() < 0.03) {
          Matter.Body.applyForce(b, b.position, {
            x: (Math.random() - 0.5) * 0.001 * b.mass,
            y: (Math.random() - 0.5) * 0.001 * b.mass,
          });
        }
        const pull = 0.000015 * b.mass;
        Matter.Body.applyForce(b, b.position, { x: -ux * pull, y: -uy * pull });
      });
    });

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    let frame;
    const draw = () => {
      bodies.forEach((body, i) => {
        const el = elsRef.current[i];
        if (!el) return;

        if (modeRef.current) {
          const idx = works.findIndex((w) => w.id === ITEMS[i].id);
          if (idx === -1) {
            el.style.opacity = "0";
            el.style.pointerEvents = "none";
            return;
          }
          el.style.opacity = "1";
          el.style.pointerEvents = "auto";
          el.style.transition = "transform 0.6s ease, opacity 0.3s";
          // 작업물이 8개라 간격을 좁게 잡아야 한 화면에 들어옵니다
          el.style.transform = `translate(40px, ${70 + idx * 62}px)`;
        } else {
          el.style.opacity = "1";
          el.style.pointerEvents = "auto";
          el.style.transition = "none";
          el.style.transform =
            `translate(${body.position.x}px, ${body.position.y}px) translate(-50%, -50%)`;
        }
      });
      frame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
      stage.removeEventListener("mousemove", onMove);
      stage.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
    };
  }, [size]);

  const toggle = () => {
    modeRef.current = !modeRef.current;
    setListMode(modeRef.current);
  };

  const goTo = (slug) => {
    if (!slug) return;
    const target = document.getElementById(slug);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button className={listMode ? "toggle list" : "toggle"} onClick={toggle}>
        {listMode ? "놀기" : "작업물 보기"}
      </button>

      <div className={listMode ? "stage list" : "stage"} ref={stageRef}>
        {/* 헤드라인. pointer-events: none 이라 이모지 밀어내기에 방해되지 않습니다 */}
        <div className="hero">
          <h1>{HERO.title[0]}<br />{HERO.title[1]}</h1>
          <p>
            {HERO.lines.map((line) => (
              <span key={line}>{line}<br /></span>
            ))}
          </p>
        </div>
        <p className="hint">이모지를 밀어보세요 · 클릭하면 이동</p>

        {ITEMS.map((item, i) => (
          <button
            key={item.id}
            className={item.type === "work" ? "orb-work" : "orb-fun"}
            ref={(el) => (elsRef.current[i] = el)}
            onClick={() => goTo(item.slug)}
          >
            <span>{item.emoji}</span>
            {listMode && item.label && <span className="label">{item.label}</span>}
          </button>
        ))}
      </div>
    </>
  );
}

export default Orbit;