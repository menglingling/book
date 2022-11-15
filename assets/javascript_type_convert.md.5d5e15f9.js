import{_ as t,c as e,o as d,a}from"./app.ecee4aaa.js";const p=JSON.parse('{"title":"JavaScript \u8F6C\u6362\u673A\u5236","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6570\u636E\u8F6C\u6362\u5206\u663E\u793A\u8F6C\u6362\u548C\u9690\u5F0F\u8F6C\u6362","slug":"\u6570\u636E\u8F6C\u6362\u5206\u663E\u793A\u8F6C\u6362\u548C\u9690\u5F0F\u8F6C\u6362","link":"#\u6570\u636E\u8F6C\u6362\u5206\u663E\u793A\u8F6C\u6362\u548C\u9690\u5F0F\u8F6C\u6362","children":[]},{"level":2,"title":"\u5404\u79CD\u503C\u8F6C Boolean \u7C7B\u578B\u7684\u89C4\u5219","slug":"\u5404\u79CD\u503C\u8F6C-boolean-\u7C7B\u578B\u7684\u89C4\u5219","link":"#\u5404\u79CD\u503C\u8F6C-boolean-\u7C7B\u578B\u7684\u89C4\u5219","children":[]},{"level":2,"title":"\u5404\u79CD\u503C\u8F6C Number \u7C7B\u578B\u7684\u89C4\u5219","slug":"\u5404\u79CD\u503C\u8F6C-number-\u7C7B\u578B\u7684\u89C4\u5219","link":"#\u5404\u79CD\u503C\u8F6C-number-\u7C7B\u578B\u7684\u89C4\u5219","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u6863","slug":"\u53C2\u8003\u6587\u6863","link":"#\u53C2\u8003\u6587\u6863","children":[]},{"level":2,"title":"\u5199\u5728\u540E\u9762","slug":"\u5199\u5728\u540E\u9762","link":"#\u5199\u5728\u540E\u9762","children":[]}],"relativePath":"javascript/type_convert.md"}'),r={name:"javascript/type_convert.md"},l=a('<h1 id="javascript-\u8F6C\u6362\u673A\u5236" tabindex="-1">JavaScript \u8F6C\u6362\u673A\u5236 <a class="header-anchor" href="#javascript-\u8F6C\u6362\u673A\u5236" aria-hidden="true">#</a></h1><h2 id="\u6570\u636E\u8F6C\u6362\u5206\u663E\u793A\u8F6C\u6362\u548C\u9690\u5F0F\u8F6C\u6362" tabindex="-1">\u6570\u636E\u8F6C\u6362\u5206\u663E\u793A\u8F6C\u6362\u548C\u9690\u5F0F\u8F6C\u6362 <a class="header-anchor" href="#\u6570\u636E\u8F6C\u6362\u5206\u663E\u793A\u8F6C\u6362\u548C\u9690\u5F0F\u8F6C\u6362" aria-hidden="true">#</a></h2><ul><li>\u663E\u793A\u8F6C\u6362 <ul><li>Number</li><li>parseInt</li><li>String</li><li>Boolean</li></ul></li><li>\u9690\u5F0F\u8F6C\u6362 <ul><li>\u53D1\u751F\u5728\u6BD4\u8F83\u8FD0\u7B97\uFF1A\u5982 <code> == != &gt; &lt; &amp;&amp; || !</code> \u7B49\u9700\u8981 Boolean \u503C\u8FD0\u7B97\u7684\u5730\u65B9</li><li>\u53D1\u751F\u5728\u7B97\u6570\u8FD0\u7B97\uFF1A\u5982<code> + - * / %</code> \u9700\u8981\u7528\u5230 Number \u503C\u8FD0\u7B97\u7684\u5730\u65B9</li></ul></li></ul><h2 id="\u5404\u79CD\u503C\u8F6C-boolean-\u7C7B\u578B\u7684\u89C4\u5219" tabindex="-1">\u5404\u79CD\u503C\u8F6C Boolean \u7C7B\u578B\u7684\u89C4\u5219 <a class="header-anchor" href="#\u5404\u79CD\u503C\u8F6C-boolean-\u7C7B\u578B\u7684\u89C4\u5219" aria-hidden="true">#</a></h2><table><thead><tr><th>\u6570\u636E\u7C7B\u578B</th><th>\u8F6C\u6362\u4E3A true \u7684\u503C</th><th>\u8F6C\u6362\u4E3A false \u7684\u503C</th></tr></thead><tbody><tr><td>Boolean</td><td>true</td><td>false</td></tr><tr><td>String</td><td>\u975E\u7A7A\u5B57\u7B26\u4E32</td><td>&quot;&quot;\uFF08\u7A7A\u5B57\u7B26\u4E32\uFF09</td></tr><tr><td>Number</td><td>\u975E\u96F6\u6570\u503C\uFF08\u5305\u62EC\u65E0\u7A77\u503C\uFF09</td><td>0\u3001NaN</td></tr><tr><td>Object</td><td>\u4EFB\u610F\u5BF9\u8C61</td><td>null</td></tr><tr><td>Undefined</td><td>N/A\uFF08\u4E0D\u5B58\u5728\uFF09</td><td>undefined</td></tr></tbody></table><h2 id="\u5404\u79CD\u503C\u8F6C-number-\u7C7B\u578B\u7684\u89C4\u5219" tabindex="-1">\u5404\u79CD\u503C\u8F6C Number \u7C7B\u578B\u7684\u89C4\u5219 <a class="header-anchor" href="#\u5404\u79CD\u503C\u8F6C-number-\u7C7B\u578B\u7684\u89C4\u5219" aria-hidden="true">#</a></h2><table><thead><tr><th>\u539F\u59CB\u503C</th><th>\u8F6C\u6362\u7ED3\u679C</th></tr></thead><tbody><tr><td>undefined</td><td>NaN</td></tr><tr><td>null</td><td>0</td></tr><tr><td>true</td><td>1</td></tr><tr><td>false</td><td>0</td></tr><tr><td>\u7A7A\u5B57\u7B26\u4E32</td><td>0</td></tr><tr><td>\u975E\u7A7A\u7C7B\u6570\u5B57\u7684\u5B57\u7B26\u4E32</td><td>\u76F8\u5173\u8FDB\u5236\u6570\u503C</td></tr><tr><td>\u975E\u7A7A\u975E\u7C7B\u6570\u5B57\u7684\u5B57\u7B26\u4E32</td><td>NaN</td></tr><tr><td>\u5177\u4F53\u6570\u503C</td><td>\u539F\u6837\u8FD4\u56DE</td></tr><tr><td>NaN</td><td>NaN</td></tr><tr><td>Object</td><td>\u5148 valueOf() \u65B9\u6CD5\u662F\u6570\u503C\u5219\u6570\u503C\uFF0C\u4E0D\u662F\u6570\u503C\u518D toString() \u65B9\u6CD5</td></tr></tbody></table><h2 id="\u53C2\u8003\u6587\u6863" tabindex="-1">\u53C2\u8003\u6587\u6863 <a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a></h2><p>[javascript \u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1]</p><h2 id="\u5199\u5728\u540E\u9762" tabindex="-1">\u5199\u5728\u540E\u9762 <a class="header-anchor" href="#\u5199\u5728\u540E\u9762" aria-hidden="true">#</a></h2><p>\u5E38\u7528\u7684\u8F6C\u6362\u89C4\u5219\u5927\u6982\u5982\u4E0A\uFF0C\u8BE6\u7EC6\u7684\u8FD8\u9700\u8981\u603B\u7ED3\u3002</p>',11),i=[l];function n(h,o,c,s,u,_){return d(),e("div",null,i)}const f=t(r,[["render",n]]);export{p as __pageData,f as default};