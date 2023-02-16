import{_ as t,c as e,o as d,a}from"./app.1706e325.js";const p=JSON.parse('{"title":"JavaScript 转换机制","description":"","frontmatter":{},"headers":[{"level":2,"title":"数据转换分显示转换和隐式转换","slug":"数据转换分显示转换和隐式转换","link":"#数据转换分显示转换和隐式转换","children":[]},{"level":2,"title":"各种值转 Boolean 类型的规则","slug":"各种值转-boolean-类型的规则","link":"#各种值转-boolean-类型的规则","children":[]},{"level":2,"title":"各种值转 Number 类型的规则","slug":"各种值转-number-类型的规则","link":"#各种值转-number-类型的规则","children":[]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]},{"level":2,"title":"写在后面","slug":"写在后面","link":"#写在后面","children":[]}],"relativePath":"javascript/type_convert.md","lastUpdated":1665486082000}'),r={name:"javascript/type_convert.md"},l=a('<h1 id="javascript-转换机制" tabindex="-1">JavaScript 转换机制 <a class="header-anchor" href="#javascript-转换机制" aria-hidden="true">#</a></h1><h2 id="数据转换分显示转换和隐式转换" tabindex="-1">数据转换分显示转换和隐式转换 <a class="header-anchor" href="#数据转换分显示转换和隐式转换" aria-hidden="true">#</a></h2><ul><li>显示转换 <ul><li>Number</li><li>parseInt</li><li>String</li><li>Boolean</li></ul></li><li>隐式转换 <ul><li>发生在比较运算：如 <code> == != &gt; &lt; &amp;&amp; || !</code> 等需要 Boolean 值运算的地方</li><li>发生在算数运算：如<code> + - * / %</code> 需要用到 Number 值运算的地方</li></ul></li></ul><h2 id="各种值转-boolean-类型的规则" tabindex="-1">各种值转 Boolean 类型的规则 <a class="header-anchor" href="#各种值转-boolean-类型的规则" aria-hidden="true">#</a></h2><table><thead><tr><th>数据类型</th><th>转换为 true 的值</th><th>转换为 false 的值</th></tr></thead><tbody><tr><td>Boolean</td><td>true</td><td>false</td></tr><tr><td>String</td><td>非空字符串</td><td>&quot;&quot;（空字符串）</td></tr><tr><td>Number</td><td>非零数值（包括无穷值）</td><td>0、NaN</td></tr><tr><td>Object</td><td>任意对象</td><td>null</td></tr><tr><td>Undefined</td><td>N/A（不存在）</td><td>undefined</td></tr></tbody></table><h2 id="各种值转-number-类型的规则" tabindex="-1">各种值转 Number 类型的规则 <a class="header-anchor" href="#各种值转-number-类型的规则" aria-hidden="true">#</a></h2><table><thead><tr><th>原始值</th><th>转换结果</th></tr></thead><tbody><tr><td>undefined</td><td>NaN</td></tr><tr><td>null</td><td>0</td></tr><tr><td>true</td><td>1</td></tr><tr><td>false</td><td>0</td></tr><tr><td>空字符串</td><td>0</td></tr><tr><td>非空类数字的字符串</td><td>相关进制数值</td></tr><tr><td>非空非类数字的字符串</td><td>NaN</td></tr><tr><td>具体数值</td><td>原样返回</td></tr><tr><td>NaN</td><td>NaN</td></tr><tr><td>Object</td><td>先 valueOf() 方法是数值则数值，不是数值再 toString() 方法</td></tr></tbody></table><h2 id="参考文档" tabindex="-1">参考文档 <a class="header-anchor" href="#参考文档" aria-hidden="true">#</a></h2><p>[javascript 高级程序设计]</p><h2 id="写在后面" tabindex="-1">写在后面 <a class="header-anchor" href="#写在后面" aria-hidden="true">#</a></h2><p>常用的转换规则大概如上，详细的还需要总结。</p>',11),i=[l];function n(h,o,c,s,u,_){return d(),e("div",null,i)}const f=t(r,[["render",n]]);export{p as __pageData,f as default};