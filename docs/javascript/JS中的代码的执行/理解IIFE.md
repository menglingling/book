---
tags:
  - JavaScript
date: 2024-01-29-周一
cdate: 2024-01-29 18:35:44
mdate: 2024-01-29 19:05:44
status: done
title: 理解 IIFE
hours: "1"
---

# 理解 IIFE

## 前言

es6 以前 JS 只有全局作用域和函数作用域，没有块作用域的，但是很多其他的编程语言是有块作用域的比如 C，JAVA 等等。  
程序员们就自己发明了一种结使 JS 好像拥有的块作用域一样。  
这就是 IIFE(immediately-invoked function expressions)

```javascript
(function() {

  var message = "Hello";

  alert(message); // Hello

})();
```

## 问答

### 为什么这样写就能模拟块作用域呢？

因为 JS 引擎执行代码的时候，函数被调用就会创建执行上下文，有了函数相关的执行上下文，有了执行上下文就会有相关联词法环境对象，有了词法环境对象就有了自己的私有变量。  

这里关键点就是创建一个函数立即调用才立即有对应的执行上下文。  

 但也不是所有的函数都能立即调用的，函数声明方式创建的函数就不被引擎允许立即调用。

但是在其他表达式中创建的函数可以立即调用。

所以能模拟块作用域主要就是需要**一个在表达式中的函数立马调用**。  

通过上面的分析我们得出了 IIFE 的很多变体

```javascript
(function() {
  alert("Parentheses around the function");
})();

(function() {
  alert("Parentheses around the whole thing");
}());

!function() {
  alert("Bitwise NOT operator starts the expression");
}();

+function() {
  alert("Unary plus starts the expression");
}();
```

## 总结

- 现在有 let const 了，就没必要立即调用函数模拟块作用域了，但是弄清楚原理可以帮助我们更好的识别旧代码中的 IIFE。

## 参考文档

- https://javascript.info/var