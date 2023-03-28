import{_ as e,c as t,o as i,a as s}from"./app.28dd42b7.js";const a="/book/assets/2022-11-14-10.54.06.c4c426a8.png",l="/book/assets/2022-11-14-10.55.17.99d0804e.png",r="/book/assets/2022-11-14-10.40.51.f60709b2.png",o="/book/assets/2022-11-14-10.40.59.ab08ef89.png",n="/book/assets/2022-11-14-11.14.26.13e658cc.png",c="/book/assets/2022-11-14-11.14.35.e2627df4.png",d="/book/assets/2022-11-14-11.51.11.2f245b00.png",B=JSON.parse('{"title":"BFC 的作用与创建","description":"","frontmatter":{},"headers":[{"level":2,"title":"BFC 的应用","slug":"bfc-的应用","link":"#bfc-的应用","children":[]},{"level":2,"title":"BFC 的特性","slug":"bfc-的特性","link":"#bfc-的特性","children":[]},{"level":2,"title":"establish 条件","slug":"establish-条件","link":"#establish-条件","children":[]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"relativePath":"css/bfc/bfc.md","lastUpdated":1676992542000}'),h={name:"css/bfc/bfc.md"},b=s('<h1 id="bfc-的作用与创建" tabindex="-1">BFC 的作用与创建 <a class="header-anchor" href="#bfc-的作用与创建" aria-hidden="true">#</a></h1><p>BFC 即块级格式化上下文，页面渲染的独立容器，有自己的渲染特性。</p><p>CSS 中有的一些 formart context: block context inline context flex context grid context</p><h2 id="bfc-的应用" tabindex="-1">BFC 的应用 <a class="header-anchor" href="#bfc-的应用" aria-hidden="true">#</a></h2><ul><li><strong>相邻两个 BFC 内的元素 margin 不会重叠</strong><br> 日常解决 margin 塌陷问题的方法，就是 margin 外面再套一层 <img src="'+a+'" alt="img"><img src="'+l+'" alt="img"></li><li><strong>清除内部浮动</strong><img src="'+r+'" alt="img"><img src="'+o+'" alt="img"> 相比常用的 clear:both,不需要添加额外的标签或者找最后一个标签</li><li><strong>清除外部浮动（这个最有用）</strong><img src="'+n+'" alt="img"><img src="'+c+'" alt="img"> 之前创建自适应多烂布局是直接 div2 加 margin-left 实现，不够灵活</li></ul><h2 id="bfc-的特性" tabindex="-1">BFC 的特性 <a class="header-anchor" href="#bfc-的特性" aria-hidden="true">#</a></h2><p>这个直接记应用更实际，能联想出特性。</p><h2 id="establish-条件" tabindex="-1">establish 条件 <a class="header-anchor" href="#establish-条件" aria-hidden="true">#</a></h2><p>只例举最常见的：</p><ul><li>html</li><li>float 不是 none</li><li>position 是 absolute 或 fixed</li><li>overflow 不是 visible</li><li>display 是行内元素 inline-* 或 flow-root</li><li>table flex grid <img src="'+d+'" alt="img"></li></ul><h2 id="参考文档" tabindex="-1">参考文档 <a class="header-anchor" href="#参考文档" aria-hidden="true">#</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context" target="_blank" rel="noreferrer">MDN</a></p>',12),_=[b];function f(g,p,m,u,x,k){return i(),t("div",null,_)}const v=e(h,[["render",f]]);export{B as __pageData,v as default};