import{_ as s,o as n,c as a,a as l}from"./app.20213b8a.js";const A=JSON.parse('{"title":"JS中的闭包(closure)","description":"","frontmatter":{"tags":["JavaScript"],"date":"2024-03-25-周一","cdate":"2024-03-25T17:53:00.000Z","mdate":"2024-03-25T17:53:00.000Z","status":"done","title":"JS中的闭包(closure)","hours":"1"},"headers":[{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]},{"level":2,"title":"怎样简单的判断闭包","slug":"怎样简单的判断闭包","link":"#怎样简单的判断闭包","children":[]},{"level":2,"title":"JS 中有哪几种方式的闭包？","slug":"js-中有哪几种方式的闭包","link":"#js-中有哪几种方式的闭包","children":[]}],"relativePath":"javascript/JS中的闭包(closure).md","lastUpdated":1715164291000}'),p={name:"javascript/JS中的闭包(closure).md"},o=l(`<h1 id="js-中的闭包-closure" tabindex="-1">JS 中的闭包(closure) <a class="header-anchor" href="#js-中的闭包-closure" aria-hidden="true">#</a></h1><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-hidden="true">#</a></h2><ul><li><p>模拟私有变量</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">outerFunc</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">innerFunc</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">a</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">outerFunc</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">b</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">//a=1;</span></span>
<span class="line"></span></code></pre></div></li><li><p>延长变量的寿命</p><p>一道经典的题 有三个节点，点击打印节点的 index,打印 0，1，2</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> nodes </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementByTagName</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#BABED8;"> (</span><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> length </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> nodes</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;"> length</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#BABED8;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#BABED8;">nodes</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclick</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//3</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">//let 创建了块作用域</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> nodes </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementByTagName</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#BABED8;"> (</span><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> length </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> nodes</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;"> length</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#BABED8;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#BABED8;">nodes</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclick</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//0,1,2</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">//const 创建了块作用域</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> nodes </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementByTagName</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#BABED8;"> (</span><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> length </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> nodes</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;"> length</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#BABED8;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#BABED8;">nodes</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">j</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclick</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">j</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//0,1,2</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">//function 创建了局部作用域</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> nodes </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementByTagName</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#BABED8;"> (</span><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> length </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> nodes</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;"> length</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#BABED8;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">j</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#BABED8;">nodes</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">j</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclick</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">j</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//0,1,2</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">//function 创建了局部作用域</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> nodes </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementByTagName</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#BABED8;"> (</span><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> length </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> nodes</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;"> length</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#BABED8;">  （(j) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">nodes</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">j</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclick</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">j</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">(i)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//0,1,2</span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="怎样简单的判断闭包" tabindex="-1">怎样简单的判断闭包 <a class="header-anchor" href="#怎样简单的判断闭包" aria-hidden="true">#</a></h2><p>在 JavaScript 中判断一个函数是否创建了闭包的最简单方法是看该函数是否引用了外部函数作用域中的变量。这意味着，如果一个函数访问了定义它的函数作用域（或全局作用域）中的变量，那么它很可能创建了闭包。</p><p>下面是几个判断闭包的简要步骤和栗子：</p><ol><li><p><strong>变量作用域分析</strong></p><p>查看函数内部是否引用了外部作用域（外层函数或全局作用域）中定义的变量或函数。</p></li></ol><p>javascript</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">outer</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">outerVar</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">I am from outer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">inner</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">outerVar</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">inner</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> myInner </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">outer</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">myInner</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 这里调用的myInner函数是一个闭包。</span></span>
<span class="line"></span></code></pre></div><p>在这个示例中，<code>inner</code>函数引用了<code>outer</code>函数作用域中的变量<code>outerVar</code>，因此<code>inner</code>是一个闭包。</p><ol start="2"><li><p><strong>返回函数</strong></p><p>如果一个函数返回了另一个函数，那返回的函数很可能是闭包，因为它需要访问原函数作用域中的变量才能执行。</p></li><li><p><strong>函数赋值</strong></p><p>如果将一个函数赋值给另一个变量，然后在其定义作用域之外执行，它依然可以访问原有的局部变量，说明它形成了闭包。</p></li></ol><p>javascript</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> myClosure </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> (</span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">a</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">myClosure</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 输出 2，myClosure是一个闭包。</span></span>
<span class="line"></span></code></pre></div><p>在实践中，闭包几乎无处不在。无论是使用回调函数、返回函数，还是在诸如<code>setTimeout</code>、<code>setInterval</code>、事件监听器或其他异步引用中，任何时候只要一个函数访问了定义它函数作用域之外的变量，闭包就可能在起作用。</p><h2 id="js-中有哪几种方式的闭包" tabindex="-1">JS 中有哪几种方式的闭包？ <a class="header-anchor" href="#js-中有哪几种方式的闭包" aria-hidden="true">#</a></h2><p>在 JavaScript 中，闭包的形成不是基于具体的语法结构，而是基于函数和其词法作用域的交互。当一个函数被定义时，它会隐式地捕获其定义时的作用域，并能记住并访问这个作用域中的变量，即使这个函数在外部作用域被调用。</p><p>这里有一些通常使用闭包的情况：</p><ol><li>返回函数的函数：</li></ol><p>javascript</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">createGreeter</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">greeting</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">name</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">greeting</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">name</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> greeter </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">createGreeter</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">greeter</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">World</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 输出: Hello, World</span></span>
<span class="line"></span></code></pre></div><p>这里的匿名函数就是一个闭包，它记住了变量<code>greeting</code>。</p><ol start="2"><li>立即执行的函数表达式（IIFE）：</li></ol><p>javascript</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">(</span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">localVar</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">I am private</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">localVar</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>在上面的例子中，<code>localVar</code>在全局作用域是不可访问的，因此通过闭包封装可以创建私有变量。</p><ol start="3"><li>事件处理器：</li></ol><p>javascript</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">setupButton</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">buttonId</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">button</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">buttonId</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#BABED8;">button</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclick</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">buttonId</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> clicked</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setupButton</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">myButton</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>每个按钮处理器都是一个闭包，记住了<code>buttonId</code>。</p><ol start="4"><li>模块模式：</li></ol><p>javascript</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> counterModule </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> (</span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">counter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 私有变量</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#82AAFF;">increment</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#BABED8;">counter</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">counter</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">counterModule</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">increment</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">counterModule</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">print</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 输出: 1</span></span>
<span class="line"></span></code></pre></div><p>这里的对象中的方法都是闭包，它们共享相同的私有<code>counter</code>变量。</p><ol start="5"><li>函数作为参数：</li></ol><p>javascript</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">runWithDelay</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">func</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">delay</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#82AAFF;">func</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">delay</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">runWithDelay</span><span style="color:#BABED8;">(</span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>上面的匿名函数是一个闭包，它可以使用函数<code>runWithDelay</code>的任何参数。</p><p>通常情况下，每当你在一个函数内部定义另一个函数，都会创建一个闭包。闭包让你可以访问本应随着执行完毕而失去的外部函数的作用域。闭包是 JavaScript 编程中非常核心的概念之一，它们出现的场景非常多，常常用于回调函数、数据封装和管理状态等。</p>`,38),e=[o];function t(c,r,y,F,D,i){return n(),a("div",null,e)}const E=s(p,[["render",t]]);export{A as __pageData,E as default};
