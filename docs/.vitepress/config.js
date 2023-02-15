export default {
  base: "/book/",
  title: "我的小书",
  description: "Just playing around.",
  themeConfig: {
    logo: "/logo.png",
    outline: [2, 6],
    nav: [
      {
        text: "javascript",
        items: [{ text: "javascript", link: "/javascript/data_type" }],
      },
      {
        text: "other",
        items: [{ text: "other", link: "/other/git" }],
      },
    ],

    sidebar: [
      {
        text: "web",
        items: [
          { text: "浏览器如何工作的", link: "/web/browser/browser" },
          { text: "web 性能", link: "/web/performance/performance" },
        ],
      },
      {
        text: "css",
        items: [
          { text: "CSS选择器", link: "/css/selector/selector" },
          { text: "BFC", link: "/css/bfc/bfc" },
          { text: "居中", link: "/css/center/center" },
          { text: "文本溢出", link: "/css/textOverflow/textOverflow" },
          { text: "多栏布局", link: "/css/layout/layout" },
          { text: "flex", link: "/css/flex/flex" },
          { text: "重排", link: "/css/relayout/relayout" },
        ],
      },
      {
        text: "javascript",
        items: [
          {
            text: "防抖函数",
            link: "/javascript/debounce/debounce",
          },
          {
            text: "高阶函数",
            link: "/javascript/higherOrderFunction/higherOrderFunction",
          },
          {
            text: "事件循环相关",
            link: "/javascript/event_loop/event_loop",
          },
          {
            text: "浏览器的 event",
            link: "/javascript/event/event",
          },
          {
            text: "执行上下文",
            link: "/javascript/execution_context/execution_context",
          },
          { text: "JS中的this", link: "/javascript/this/this" },
          { text: "数据类型", link: "/javascript/data_type" },
          { text: "数组常用方法", link: "/javascript/array" },
          { text: "字符串常用方法", link: "/javascript/string" },
          { text: "JavaScript 转换机制", link: "/javascript/type_convert" },
          { text: "== 和 === 的区别", link: "/javascript/equal" },
          {
            text: "深拷贝浅拷贝的区别",
            link: "/javascript/copy",
          },
          { text: "闭包", link: "/javascript/closure" },
          { text: "作用域", link: "/javascript/scope" },

          { text: "原型", link: "/javascript/prototype" },
          { text: "JS创建对象的几种模式", link: "/javascript/createObj" },
          { text: "继承的几种方式", link: "/javascript/inherit" },
          { text: "类", link: "/javascript/class" },
          { text: "迭代器", link: "/javascript/iteration" },
          { text: "生成器", link: "/javascript/generator" },
          { text: "代理", link: "/javascript/proxy/proxy" },
          { text: "反射", link: "/javascript/reflect/reflect" },
          { text: "期约与异步函数", link: "/javascript/promise/promise" },
        ],
      },
      {
        text: "designPatterns",
        items: [
          { text: "迭代器模式", link: "/designPatterns/Iterator" },
          { text: "代理模式", link: "/designPatterns/proxy" },
        ],
      },
      {
        text: "other",
        items: [
          { text: "git", link: "/other/git" },
          { text: "ssh", link: "/other/ssh" },
        ],
      },
    ],
    markdown: {
      lineNumbers: true,
    },
  },
};
