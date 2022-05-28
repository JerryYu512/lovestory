import { sidebar } from "vuepress-theme-hope";
import { vlogs } from "./vlogs";
import { travel } from "./travel";
import { anniversary } from "./anniversary";

export const zhSidebarConig = sidebar({
  // 旅游
  "/travel/": travel,

  // 生活点滴
  "/vlogs/": vlogs,

  // 纪念日
  "/anniversary/": anniversary,

  // fallback
  "/": ["", "travel/", "vlogs/", "anniversary/"],
});

export const enSidebarConfig = sidebar({
  "/en/travel/": [""],

  "/en/vlogs/": [""],

  "/en/anniversary/": [""],

  // fallback
  "en/": ["", "travel/", "vlogs/", "anniversary/"],
});
