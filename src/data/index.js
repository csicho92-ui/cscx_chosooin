import * as marketer from "./items";
import * as cs from "./items.cs";

// 주소 뒤에 ?v=cs 를 붙이면 고객관리·CX 버전, 아니면 마케터 버전
const v = new URLSearchParams(window.location.search).get("v") || window.PORTFOLIO_V;
const data = v === "cs" ? cs : marketer;

export const ITEMS = data.ITEMS;
export const HERO = data.HERO;
