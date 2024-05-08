import{_ as s,o as n,c as a,a as l}from"./app.20213b8a.js";const h=JSON.parse('{"title":"JS中的 function","description":"","frontmatter":{"tags":["JavaScript","#review"],"date":"2024-03-04-周一","cdate":"2024-03-04T12:01:34.000Z","mdate":"2024-03-04T12:01:34.000Z","status":"done","title":"JS中的 function","hours":"1","sr-due":"2024-03-20T00:00:00.000Z","sr-interval":15,"sr-ease":290},"headers":[{"level":2,"title":"几个问答","slug":"几个问答","link":"#几个问答","children":[{"level":3,"title":"常见内置属性","slug":"常见内置属性","link":"#常见内置属性","children":[]},{"level":3,"title":"自定义属性","slug":"自定义属性","link":"#自定义属性","children":[]},{"level":3,"title":"被命名的函数表达式","slug":"被命名的函数表达式","link":"#被命名的函数表达式","children":[]}]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"relativePath":"javascript/对象/JS中的 function.md","lastUpdated":1715164291000}'),p={name:"javascript/对象/JS中的 function.md"},e=l(`<h1 id="js-中的-function" tabindex="-1">JS 中的 function <a class="header-anchor" href="#js-中的-function" aria-hidden="true">#</a></h1><h2 id="几个问答" tabindex="-1">几个问答 <a class="header-anchor" href="#几个问答" aria-hidden="true">#</a></h2><h3 id="常见内置属性" tabindex="-1">常见内置属性 <a class="header-anchor" href="#常见内置属性" aria-hidden="true">#</a></h3><ul><li>name 可以根据上下文推断函数名，如果推断不出来就是空字符串</li><li>length 返回参数入参的个数，不包括剩余参数</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">use strict</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">	&quot;use strict&quot;; function f1(a) </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#BABED8;">	function f2(a, b) </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#BABED8;">	function many(a, b, ...more) </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#BABED8;">	alert(f1.length); // 1 alert(f2.length); // 2 alert(many.length); // 2</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">&quot;use strict&quot;;</span></span>
<span class="line"><span style="color:#BABED8;">function ask(question, ...handlers) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">let isYes </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">confirm</span><span style="color:#BABED8;">(question);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">for</span><span style="color:#BABED8;">(let handler </span><span style="color:#89DDFF;">of</span><span style="color:#BABED8;"> handlers) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">if</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">handler.length == 0</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">isYes</span><span style="color:#F07178;">) </span><span style="color:#82AAFF;">handler</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> else </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">handler</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">isYes</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">// 对于肯定的回答，两个 handler 都会被调用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">// 对于否定的回答，只有第二个 handler 被调用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">ask(&quot;Question?&quot;, () =&gt; alert(&#39;You said yes&#39;), result =&gt; alert(result));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="自定义属性" tabindex="-1">自定义属性 <a class="header-anchor" href="#自定义属性" aria-hidden="true">#</a></h3><p>很多知名的 JavaScript 库都充分利用了这个功能。</p><p>它们创建一个“主”函数，然后给它附加很多其它“辅助”函数。例如，<a href="https://jquery.com/" target="_blank" rel="noreferrer">jQuery</a>  库创建了一个名为  <code>$</code>  的函数。<a href="https://lodash.com/" target="_blank" rel="noreferrer">lodash</a>  库创建一个  <code>_</code>  函数，然后为其添加了  <code>_.add</code>、<code>_.keyBy</code>  以及其它属性（想要了解更多内容，参查阅  <a href="https://lodash.com/docs" target="_blank" rel="noreferrer">docs</a>）。实际上，它们这么做是为了减少对全局空间的污染，这样一个库就只会有一个全局变量。这样就降低了命名冲突的可能性。</p><p>所以，一个函数本身可以完成一项有用的工作，还可以在自身的属性中附带许多其他功能。</p><h3 id="被命名的函数表达式" tabindex="-1">被命名的函数表达式 <a class="header-anchor" href="#被命名的函数表达式" aria-hidden="true">#</a></h3><p>关于名字  <code>func</code>  有两个特殊的地方，这就是添加它的原因：</p><ol><li>它允许函数在内部引用自己。</li><li>它在函数外是不可见的。<br> 这个名字可以用于在该函数内部进行自调用，例如递归调用等。</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">&quot;use strict&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">let sayHi = function func(who) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">if</span><span style="color:#BABED8;"> (who) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">alert</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Hello, </span><span style="color:#89DDFF;">\${</span><span style="color:#BABED8;">who</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> else </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">func</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Guest</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;">; </span><span style="color:#676E95;font-style:italic;">// 现在一切正常</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">let welcome = sayHi;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">sayHi = null;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">welcome(); // Hello, Guest（嵌套调用有效）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="参考文档" tabindex="-1">参考文档 <a class="header-anchor" href="#参考文档" aria-hidden="true">#</a></h2><ul><li>Javascript 现代教程</li></ul>`,16),o=[e];function t(c,r,i,D,y,F){return n(),a("div",null,o)}const u=s(p,[["render",t]]);export{h as __pageData,u as default};
