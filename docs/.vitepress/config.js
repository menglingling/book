export default {
  title: '我的小书',
  description: 'Just playing around.',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      {
        text: 'javascript',
        items: [{ text: 'javascript', link: '/javascript/data_type' }],
      },
      {
        text: 'other',
        items: [{ text: 'other', link: '/other/git' }],
      },
    ],

    sidebar: [
      {
        text: 'javascript',
        items: [
          { text: '数据类型', link: '/javascript/data_type' },
          { text: '数组常用方法', link: '/javascript/array' },
          { text: '字符串常用方法', link: '/javascript/string' },
          { text: 'JavaScript 转换机制', link: '/javascript/type_convert' },
          { text: '== 和 === 的区别', link: '/javascript/==&&===' },
          {
            text: '深拷贝浅拷贝的区别',
            link: '/javascript/copy',
          },
          { text: '闭包', link: '/javascript/closure' },
          { text: '作用域', link: '/javascript/scope' },
          { text: '原型', link: '/javascript/prototype' },
          { text: 'JS创建对象的几种模式', link: '/javascript/createObj' },
          { text: '继承的几种方式', link: '/javascript/inherit' },
        ],
      },
      {
        text: 'other',
        items: [
          { text: 'git', link: '/other/git' },
          { text: 'ssh', link: '/other/ssh' },
        ],
      },
    ],
    markdown: {
      lineNumbers: true,
    },
  },
};
