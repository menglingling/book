import{_ as a,c as s,o as e,a as n}from"./app.2cdbdfd8.js";const _=JSON.parse('{"title":"\u8FD0\u7B97\u7B26\u4F18\u5148\u7EA7","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/operator_Precedence/operator_Precedence.md"}'),o={name:"javascript/operator_Precedence/operator_Precedence.md"},p=n('<h1 id="\u8FD0\u7B97\u7B26\u4F18\u5148\u7EA7" tabindex="-1">\u8FD0\u7B97\u7B26\u4F18\u5148\u7EA7 <a class="header-anchor" href="#\u8FD0\u7B97\u7B26\u4F18\u5148\u7EA7" aria-hidden="true">#</a></h1><p>\u7A7A\u503C\u5408\u5E76\u8FD0\u7B97\u7B26\uFF08??\uFF09\u662F\u4E00\u4E2A\u903B\u8F91\u8FD0\u7B97\u7B26\uFF0C\u5F53\u5DE6\u4FA7\u7684\u64CD\u4F5C\u6570\u4E3A null \u6216\u8005 undefined \u65F6\uFF0C\u8FD4\u56DE\u5176\u53F3\u4FA7\u64CD\u4F5C\u6570\uFF0C\u5426\u5219\u8FD4\u56DE\u5DE6\u4FA7\u64CD\u4F5C\u6570\u3002</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> (b \\</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> c)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u9996\u5148\u5BF9 `a` \u6C42\u503C\uFF0C\u5982\u679C `a` \u4E3A\u771F\u503C\u5219\u76F4\u63A5\u8FD4\u56DE `a`</span></span>\n<span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> (b </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> c)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u9996\u5148\u5BF9 `a` \u6C42\u503C\uFF0C\u5982\u679C `a` \u4E3A\u865A\u503C\u5219\u76F4\u63A5\u8FD4\u56DE `a`</span></span>\n<span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">??</span><span style="color:#A6ACCD;"> (b </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> c)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u9996\u5148\u5BF9 `a` \u6C42\u503C\uFF0C\u5982\u679C `a` \u4E0D\u662F `null` \u6216 `undefined` \u5219\u76F4\u63A5\u8FD4\u56DE `a`</span></span>\n<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u9996\u5148\u5BF9 `a` \u6C42\u503C\uFF0C\u5982\u679C `a` \u662F `null` \u6216 `undefined` \u5219\u76F4\u63A5\u8FD4\u56DE `undefined`</span></span>\n<span class="line"></span></code></pre></div><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence</a></p>',4),l=[p];function r(c,t,D,d,i,C){return e(),s("div",null,l)}const y=a(o,[["render",r]]);export{_ as __pageData,y as default};