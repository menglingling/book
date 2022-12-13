import{_ as e,c as a,o as i,a as r}from"./app.6b17e532.js";const f=JSON.parse('{"title":"深拷贝浅拷贝的区别，实现一个深拷贝","description":"","frontmatter":{},"headers":[{"level":2,"title":"拷贝","slug":"拷贝","link":"#拷贝","children":[]},{"level":2,"title":"deep clone","slug":"deep-clone","link":"#deep-clone","children":[]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]},{"level":2,"title":"写在后面","slug":"写在后面","link":"#写在后面","children":[]}],"relativePath":"javascript/copy.md"}'),t={name:"javascript/copy.md"},l=r('<h1 id="深拷贝浅拷贝的区别-实现一个深拷贝" tabindex="-1">深拷贝浅拷贝的区别，实现一个深拷贝 <a class="header-anchor" href="#深拷贝浅拷贝的区别-实现一个深拷贝" aria-hidden="true">#</a></h1><h2 id="拷贝" tabindex="-1">拷贝 <a class="header-anchor" href="#拷贝" aria-hidden="true">#</a></h2><p>解析：</p><ul><li>原始类型的变量大小固定，保存在栈内存中</li><li>从一个变量到另一个变量复制原始值会创建该值的第二个副本。</li><li>Object 类型的变量，存储在堆内存上，包含引用值的变量实际上只包含指向相应对象的一个指针，而不是对象本身。</li><li>从一个变量到另一个变量复制引用值只会复制指针，因此结果是两个变量都指向同一个对象。</li><li>通过潜拷贝复制的对象引用的是同一个，修改值会相互影响。</li><li>通过深拷贝复制的对象是不同的副本，修改值不会相互影响。 javascript 中标准的内置对象复制操作都是潜拷贝： Object.create() Object.assign() Array.form() Array.prototype.concat() Array.prototype.slice() 实现深拷贝的方法:</li><li>JSON.stringify() JSON.parse()</li><li>递归循环对象属性一层一层的复制</li></ul><h2 id="deep-clone" tabindex="-1">deep clone <a class="header-anchor" href="#deep-clone" aria-hidden="true">#</a></h2><p>简单讲，就是用 for in 去循环对象的属性，把属性一个个复写到一个新的对象上，如果遇到属性值还是对象，那么就做递归操作。</p><h2 id="参考文档" tabindex="-1">参考文档 <a class="header-anchor" href="#参考文档" aria-hidden="true">#</a></h2><p>[javascript 高级程序设计]101</p><h2 id="写在后面" tabindex="-1">写在后面 <a class="header-anchor" href="#写在后面" aria-hidden="true">#</a></h2>',9),c=[l];function n(d,s,o,h,p,_){return i(),a("div",null,c)}const v=e(t,[["render",n]]);export{f as __pageData,v as default};
