import * as marketer from "./items";
import * as cs from "./items.cs";

// 주소 뒤에 ?v=cs 를 붙이면 고객관리·CX 버전, 아니면 마케터 버전
// 우선순위: ?v=cs 쿼리 → window.PORTFOLIO_V → .env 의 VITE_VARIANT (레포별 기본값)
const v =
  new URLSearchParams(window.location.search).get("v") ||
  window.PORTFOLIO_V ||
  import.meta.env.VITE_VARIANT;
const data = v === "cs" ? cs : marketer;

export const ITEMS = data.ITEMS;
export const HERO = data.HERO;
