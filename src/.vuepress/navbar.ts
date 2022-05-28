import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  "/",
  {
    text: "一起旅游",
    icon: "a-reqiqiulvyoujingdian",
    prefix: "/travel/",
    children: [
      {
        text: "一起旅游",
        link: "",
        icon: "a-reqiqiulvyoujingdian",
        activeMatch: "^/travel/$"
      },
      {
        text: "诗集: 四季",
        children: ["spring/", "summer/", "fall/", "winter/"],
      },
    ],
  },
  {
    text: "爱的点滴",
    icon: "a-zhaoxiangjipaizhao",
    prefix: "/vlogs/",
    children: [
      {
        text: "爱的点滴",
        icon: "a-zhaoxiangjipaizhao",
        link: "",
        activeMatch: "^/vlogs/$",
      },
      {
        text: "足迹：年轮",
        children: ["2021/"],
      },
    ],
  },
  {
    text: "纪念日",
    icon: "a-aixinxihuanxiai",
    prefix: "/anniversary/",
    children: [
      {
        text: "纪念日",
        link: "",
        icon: "a-aixinxihuanxiai",
        activeMatch: "^/anniversary/$",
      },
      {
        text: "时刻：相爱",
        children: ["2021/"],
      },
    ],
  },
]);

export const enNavbarConfig = navbar([
  "/en/",
  "/en/travel/",
  "/en/vlogs/",
  "/en/anniversary/",
]);
