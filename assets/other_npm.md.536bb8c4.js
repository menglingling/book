import{_ as e,c as n,o as a,a as l}from"./app.28dd42b7.js";const u=JSON.parse('{"title":"npm 相关","description":"","frontmatter":{},"headers":[{"level":2,"title":"项目安装不上的问题，解决步骤","slug":"项目安装不上的问题-解决步骤","link":"#项目安装不上的问题-解决步骤","children":[]},{"level":2,"title":"nrm","slug":"nrm","link":"#nrm","children":[]}],"relativePath":"other/npm.md","lastUpdated":1678856426000}'),r={name:"other/npm.md"},o=l('<h1 id="npm-相关" tabindex="-1">npm 相关 <a class="header-anchor" href="#npm-相关" aria-hidden="true">#</a></h1><h2 id="项目安装不上的问题-解决步骤" tabindex="-1">项目安装不上的问题，解决步骤 <a class="header-anchor" href="#项目安装不上的问题-解决步骤" aria-hidden="true">#</a></h2><ul><li>切换国内镜像</li><li>再不行，就删除 node_modules, package-lock.json,再重新执行 npm install</li><li>再不行，就删除 node_modules, package-lock.json 的同时，清除 npm 缓存 <code>npm cache clean –-force</code>,再重新执行 npm install</li></ul><h2 id="nrm" tabindex="-1">nrm <a class="header-anchor" href="#nrm" aria-hidden="true">#</a></h2><ul><li><code>npm i -g nrm</code> 安装管理 npm 源的工具</li><li><code>nrm ls</code> 查看有哪些源, * 为目前用的</li><li><code>nrm user taobao</code> 使用一个源，</li><li><code>nrm ls</code> 再使用命令，查看切换 * 好了没</li></ul>',5),t=[o];function i(c,d,s,m,_,h){return a(),n("div",null,t)}const f=e(r,[["render",i]]);export{u as __pageData,f as default};