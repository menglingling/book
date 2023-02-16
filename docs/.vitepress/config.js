import mlSidebar from "./sidebar";
import mlNav from "./nav";
export default {
  base: "/book/",
  title: "我的小书",
  description: "Just playing around.",
  lastUpdated: true, //以git提交的时间为更新时间
  themeConfig: {
    logo: "/logo.png",
    author: "ML",
    outline: [2, 6],
    markdown: {
      lineNumbers: true, //显示代码行数
    },
    lastUpdatedText: "最近更新时间", //最后更新时间文本

    nav: mlNav,

    sidebar: mlSidebar,
  },
};
