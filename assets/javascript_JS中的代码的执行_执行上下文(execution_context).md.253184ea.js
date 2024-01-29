import{_ as e,o as i,c as a,a as t}from"./app.a874a089.js";const x=JSON.parse('{"title":"执行上下文","description":"","frontmatter":{},"headers":[{"level":2,"title":"分类","slug":"分类","link":"#分类","children":[]},{"level":2,"title":"创建阶段","slug":"创建阶段","link":"#创建阶段","children":[]},{"level":2,"title":"执行阶段","slug":"执行阶段","link":"#执行阶段","children":[]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"relativePath":"javascript/JS中的代码的执行/执行上下文(execution_context).md","lastUpdated":1706520204000}'),l={name:"javascript/JS中的代码的执行/执行上下文(execution_context).md"},r=t('<h1 id="执行上下文" tabindex="-1">执行上下文 <a class="header-anchor" href="#执行上下文" aria-hidden="true">#</a></h1><p>相关概念：</p><ul><li>paster:语法解析器。检测代码是否符合语法和初步了解代码想做什么。</li><li>JS engine:JS 引擎。浏览器中内置，例如 google 是 v8。将 Javascript 转换成二进制指令。</li><li>variable hoisting:变量提升。函数声明和 var 定义的变量上升到环境顶端，并初始化成 undefined。let const 声明的变量会提升到顶端，但是不会初始化 undefined 值，所以不可用。</li><li>lexical scope:词法作用域。定义在函数内部的函数可以访问外部函数的代码，外部函数无法访问内部函数的代码。</li><li>this: JavaScript this 关键字指的是 Execution Context 所属的范围。</li><li>call stack : 调用堆栈。一种记录当前代码执行位置的数据结构。</li></ul><h2 id="分类" tabindex="-1">分类 <a class="header-anchor" href="#分类" aria-hidden="true">#</a></h2><p>JS 引擎 receive Javascript 代码，就会创建环境，最开始默认创建一个全局执行上下文，之后每一个函数调用都会创建函数执行上下文。</p><ul><li>GEC 全局执行上下文。包含不在函数内的所有变量和函数声明。</li><li>FEC 函数执行上下文。包含定义在函数内部的代码。</li></ul><h2 id="创建阶段" tabindex="-1">创建阶段 <a class="header-anchor" href="#创建阶段" aria-hidden="true">#</a></h2><ul><li>创建 Variable Object (VO)。这一阶段发生了变量提升。</li><li>创建作用域链。这一阶段遵循词法作用域规则。</li><li>给 this 设置值。作用域链创建完就会初始化 this 值。在全局执行上下文中，this 为 window。</li></ul><h2 id="执行阶段" tabindex="-1">执行阶段 <a class="header-anchor" href="#执行阶段" aria-hidden="true">#</a></h2><p>Execution Stack：JS 是单线程语言，一个时间内只能执行一个任务。调用堆栈是保证任务有序运行的一种方式。</p><p>全局执行上下文第一个进入 stack,当遇到函数时，函数执行上下文被加到堆栈顶部，全局执行上下文会被压到底部。</p><p>堆栈的顶部的执行上下文称为活动上下文，当活动上下文的代码执行完后，这个执行上下文会被弹出，下面一个执行上下文位置就到了顶部，变成当前的活动下下文。</p><h2 id="参考文档" tabindex="-1">参考文档 <a class="header-anchor" href="#参考文档" aria-hidden="true">#</a></h2><p><a href="https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/" target="_blank" rel="noreferrer">JavaScript Execution Context – How JS Works Behind The Scenes</a></p>',14),n=[r];function c(s,o,h,d,_,p){return i(),a("div",null,n)}const f=e(l,[["render",c]]);export{x as __pageData,f as default};
