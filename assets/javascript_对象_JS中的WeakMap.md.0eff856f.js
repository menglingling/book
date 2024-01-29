import{_ as a,o as s,c as e,a as n}from"./app.a874a089.js";const B=JSON.parse('{"title":"JS中的 WeakMap","description":"","frontmatter":{"tags":["JavaScript"],"date":"2024-01-16-周二","cdate":"2024-01-16T15:37:56.000Z","mdate":"2024-01-16T15:37:56.000Z","status":"done","title":"JS中的 WeakMap"},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"术语概念","slug":"术语概念","link":"#术语概念","children":[]},{"level":2,"title":"几个问答","slug":"几个问答","link":"#几个问答","children":[{"level":3,"title":"WeakMap的核心特点？","slug":"weakmap的核心特点","link":"#weakmap的核心特点","children":[]},{"level":3,"title":"WeakMap有哪些属性和方法？","slug":"weakmap有哪些属性和方法","link":"#weakmap有哪些属性和方法","children":[]},{"level":3,"title":"理解下WeakMap 中的 Weak ？","slug":"理解下weakmap-中的-weak","link":"#理解下weakmap-中的-weak","children":[]}]}],"relativePath":"javascript/对象/JS中的WeakMap.md","lastUpdated":1706520204000}'),l={name:"javascript/对象/JS中的WeakMap.md"},p=n(`<h1 id="js中的weakmap" tabindex="-1">JS中的WeakMap <a class="header-anchor" href="#js中的weakmap" aria-hidden="true">#</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-hidden="true">#</a></h2><p>ECMAScript 6 新增的“弱映射”（WeakMap）是一种新的集合类型，为这门语言带来了增强的键/值对存储机制。 WeakMap 是 Map 的“兄弟”类型，其 API 也是 Map 的子集。</p><h2 id="术语概念" tabindex="-1">术语概念 <a class="header-anchor" href="#术语概念" aria-hidden="true">#</a></h2><ul><li>垃圾回收：是一种 JavaScript 引擎处理引用类型变量的机制。</li><li>WeakMap ：是一种可以存储键值的集合对象，只能存储 Object类型的 key。</li><li>WeakMap 中的“weak”（弱）：描述的是 WeakMap 对象中存储的键是弱引用，不会阻止垃圾回收。</li></ul><h2 id="几个问答" tabindex="-1">几个问答 <a class="header-anchor" href="#几个问答" aria-hidden="true">#</a></h2><h3 id="weakmap的核心特点" tabindex="-1">WeakMap的核心特点？ <a class="header-anchor" href="#weakmap的核心特点" aria-hidden="true">#</a></h3><ul><li>key<strong>必须是 Object 类型</strong></li><li>只有 Map 的创建存取等方法，<strong>没有迭代器</strong>，没有有clear()。</li></ul><h3 id="weakmap有哪些属性和方法" tabindex="-1">WeakMap有哪些属性和方法？ <a class="header-anchor" href="#weakmap有哪些属性和方法" aria-hidden="true">#</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 初始化是全有或全无的操作</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 只要有一个键无效就会抛出错误，导致整个初始化失败</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> key1 </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">},</span><span style="color:#676E95;font-style:italic;">// key必须是对象</span></span>
<span class="line"><span style="color:#BABED8;">const key2 </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">},</span><span style="color:#676E95;font-style:italic;">// key必须是对象</span></span>
<span class="line"><span style="color:#BABED8;">const stringKey </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">String</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">key1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 原始值可以先包装成对象再用作键</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> wm </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">WeakMap</span><span style="color:#BABED8;">([</span></span>
<span class="line"><span style="color:#BABED8;">	[key1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">val1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">	[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">badkey</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">val2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">//Invalid value used as WeakMap key  </span></span>
<span class="line"><span style="color:#BABED8;">	[stringKey</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">val3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">]</span></span>
<span class="line"><span style="color:#BABED8;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">wm</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#BABED8;">(key2</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#BABED8;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#BABED8;">(key2) </span><span style="color:#676E95;font-style:italic;">// value2</span></span>
<span class="line"><span style="color:#BABED8;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">has</span><span style="color:#BABED8;">(key2) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#BABED8;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">delete</span><span style="color:#BABED8;">(key2) </span><span style="color:#676E95;font-style:italic;">//true</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> wm2 </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">WeakMap</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#BABED8;">(key1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">val1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#BABED8;">(key2</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">val2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">//链式调用</span></span>
<span class="line"></span></code></pre></div><h3 id="理解下weakmap-中的-weak" tabindex="-1">理解下WeakMap 中的 Weak ？ <a class="header-anchor" href="#理解下weakmap-中的-weak" aria-hidden="true">#</a></h3><p>放个红皮书原文</p><blockquote><p>The “weak” designation stems from the fact that keys in a WeakMap are “weakly held,” meaning they are not counted as formal references that would otherwise prevent garbage collection. An important distinction for the WeakMap is that the value reference is not weakly held. As long as the key exists, the key/value pair will remain in the map and count as a reference to the value—thereby preventing it from being garbage collected.</p></blockquote><p>理解下： 如果 Map 存储了 Object类型的key，那么就存在 key 引用了 obj变量，就算obj=null，但因为key还在引用obj呢，obj永远不会被垃圾回收程序处理。</p><p>WeakMap只能存储Object 类型的 key，当 WeakMap中的key 引用了obj变量，如果操作obj=null，这个 obj 又仅仅是刚刚我们存 的key用了一下，其他地方都没用， 那么obj会被垃圾回收程序处理。这个就是弱引用。</p><p>WeakMap中 key / value成对存储在weakMap中的，只要key引用的obj 不被垃圾回收程序销毁，那么我们就永远可以通过key get 到value的值。当key引用的obj 被垃圾回收程序销毁时，key关联的value也会一并被销毁。</p><p>obj何时被垃圾回收程序处理，真正销毁，由 JavaScript 引擎决定的。JavaScript 引擎可能会选择立即执行内存清理，如果现在正在发生很多删除操作，那么 JavaScript 引擎可能就会选择等一等，稍后再进行内存清理。因此，从技术上讲，<code>WeakMap</code> 的当前元素的数量是未知的。JavaScript 引擎可能清理了其中的垃圾，可能没清理，也可能清理了一部分。因此，暂 <code>WeakMap</code> 不支持 <code>clear</code>、<code>size</code>、<code>entries</code>、<code>keys</code>、<code>values</code>等方法。</p>`,17),o=[p];function t(c,r,y,i,D,F){return s(),e("div",null,o)}const d=a(l,[["render",t]]);export{B as __pageData,d as default};
