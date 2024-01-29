import{_ as e,o as a,c as i,a as s}from"./app.a874a089.js";const u=JSON.parse('{"title":"web 性能","description":"","frontmatter":{},"headers":[{"level":2,"title":"css 动画","slug":"css-动画","link":"#css-动画","children":[]},{"level":2,"title":"延迟加载","slug":"延迟加载","link":"#延迟加载","children":[]}],"relativePath":"Web/web 性能/web 性能.md","lastUpdated":1706513556000}'),t={name:"Web/web 性能/web 性能.md"},l=s('<h1 id="web-性能" tabindex="-1">web 性能 <a class="header-anchor" href="#web-性能" aria-hidden="true">#</a></h1><h2 id="css-动画" tabindex="-1">css 动画 <a class="header-anchor" href="#css-动画" aria-hidden="true">#</a></h2><p>CSS 过渡/动画在每次重绘事件发生之前在主 UI 线程中对元素样式进行重采样，这与通过回调对元素样式进行重采样几乎相同 requestAnimationFrame()，也是在下一次重绘之前触发的。如果两个动画都是在主 UI 线程中制作的，那么在性能方面没有区别。</p><p>只要我们想要设置动画的属性不触发回流/重绘（阅读 CSS 触发器了解更多信息），我们就可以将那些采样操作移出主线程。最常见的属性是 CSS 转换。如果一个元素被提升为一个层，动画变换属性可以在 GPU 中完成，这意味着更好的性能/效率，尤其是在移动设备上。</p><h2 id="延迟加载" tabindex="-1">延迟加载 <a class="header-anchor" href="#延迟加载" aria-hidden="true">#</a></h2><p>延迟加载是一种将资源标识为非阻塞（非关键）资源并仅在需要时加载这些资源的策略。这是一种缩短关键渲染路径长度的方法，可以转化为减少的页面加载时间。</p><p>延迟加载可能发生在应用程序的不同时刻，但通常发生在某些用户交互（例如滚动和导航）时。</p><p>延迟加载可以通过多种策略应用于多种资源。 代码拆分 JavaScript、CSS 和 HTML 可以拆分成更小的块。这样可以发送预先提供价值所需的最少代码，从而缩短页面加载时间。其余的可以按需加载。</p><ul><li>js</li><li>css <ul><li>在 GPU 上制作动画</li><li>CSS will-change 属性向浏览器提示元素将如何更改。用作尝试处理现有性能问题的最后手段。它不应用于预测性能问题。</li></ul></li><li>字体</li><li>图片资源</li></ul>',9),r=[l];function c(n,d,_,h,o,p){return a(),i("div",null,r)}const b=e(t,[["render",c]]);export{u as __pageData,b as default};
