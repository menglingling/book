import{_ as e,o as n,c as a,a as s}from"./app.20213b8a.js";const F=JSON.parse('{"title":"JS 中的 new Function","description":"","frontmatter":{"tags":["JavaScript","review"],"date":"2024-03-07-周四","cdate":"2024-03-07T12:11:11.000Z","mdate":"2024-03-07T12:11:11.000Z","status":"done","title":"JS 中的 new Function","hours":"1"},"headers":[{"level":2,"title":"几个问答","slug":"几个问答","link":"#几个问答","children":[{"level":3,"title":"区别","slug":"区别","link":"#区别","children":[]}]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"relativePath":"javascript/对象/JS 中的 new Function.md","lastUpdated":1715164291000}'),t={name:"javascript/对象/JS 中的 new Function.md"},o=s(`<h1 id="js-中的-new-function" tabindex="-1">JS 中的 new Function <a class="header-anchor" href="#js-中的-new-function" aria-hidden="true">#</a></h1><h2 id="几个问答" tabindex="-1">几个问答 <a class="header-anchor" href="#几个问答" aria-hidden="true">#</a></h2><h3 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-hidden="true">#</a></h3><p>它很少被使用，但有些时候只能选择它。</p><p>是通过运行时通过参数传递过来的字符串创建的。</p><p>使用  <code>new Function</code>  创建函数的应用场景非常特殊，比如在复杂的 Web 应用程序中，我们需要从服务器获取代码或者动态地从模板编译函数时才会使用。</p><p>如果我们使用  <code>new Function</code>  创建一个函数，那么该函数的  <code>[[Environment]]</code>  并不指向当前的词法环境，而是指向全局环境。因此，此类函数无法访问外部（outer）变量，只能访问全局变量。这种代码架构很好而且使用压缩程序也不会出错。</p><p>当我们需要向  <code>new Function</code>  创建出的新函数传递数据时，我们必须显式地通过参数进行传递。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> func </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Function</span><span style="color:#BABED8;">([arg1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> arg2</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">...</span><span style="color:#BABED8;">argN]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> functionBody)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="参考文档" tabindex="-1">参考文档 <a class="header-anchor" href="#参考文档" aria-hidden="true">#</a></h2><ul><li>Javascript 现代教程</li></ul>`,11),l=[o];function c(r,p,i,d,h,u){return n(),a("div",null,l)}const D=e(t,[["render",c]]);export{F as __pageData,D as default};
