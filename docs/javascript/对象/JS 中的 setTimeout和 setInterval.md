---
tags:
  - JavaScript
  - review
date: 2024-03-07-周四
cdate: 2024-03-07 17:35:06
mdate: 2024-03-07 17:35:06
status: done
title: JS 中的 setTimeout和 setInterval
hours: "1"
---

# JS 中的 setTimeout 和 setInterval

要取消函数的执行，我们应该调用  `clearInterval/clearTimeout`，并将  `setInterval/setTimeout`  返回的值作为入参传入。一定记住清楚定时器，否则垃圾回收程序不会回收外层函数。

嵌套的  `setTimeout`  比  `setInterval`  用起来更加灵活，允许我们更精确地设置两次执行之间的时间。

零延时调度  `setTimeout(func, 0)`（与  `setTimeout(func)`  相同）用来调度需要尽快执行的调用，但是会在当前脚本执行完成后进行调用。

浏览器会将  `setTimeout`  或  `setInterval`  的五层或更多层嵌套调用（调用五次之后）的最小延时限制在 4ms。这是历史遗留问题。

浏览器内的计时器可能由于许多原因而变慢：

- CPU 过载。
- 浏览器页签处于后台模式。
- 笔记本电脑用的是省电模式。

所有这些因素，可能会将定时器的最小计时器分辨率（最小延迟）增加到 300ms 甚至 1000ms，具体以浏览器及其系统级别的设置为准。

## 参考文档

- Javascript 现代教程
