---
tags:
  - JavaScript
date: 2024-01-23-周二
cdate: 2024-01-23 15:39
mdate: 2024-01-23 15:39
status: done
title: 词法环境(Lexical Environment)
hours: "5"
---

# 词法环境 (Lexical Environment)

## 前言

- 调用堆栈是 V8 引擎的一部分，用来管理代码的执行顺序。 
- 引擎用调用堆栈来存储执行上下文，引擎一开始执行 JS 就会自动创建全局上下文存入堆栈，执行流遇到函数调用会创建函数上下文存入堆栈，当函数执行完后再从堆栈中弹出，遇到新的函数调用重复这个操作，直到所有函数执行完，堆栈中只剩下全局上下文，当网页关闭，全局上下文也会被销毁。
- 每个执行上下文都有一个关联的对象，这个对象上存储了上下文中定义的所有变量和函数。这个对象 JS 高级程序设计中叫 `variable object`，JS 现代教程中叫 `Lexical Environment`。
- 词法环境对象由两部分组成：
1. **环境记录（Environment Record）** —— 一个存储所有局部变量作为其属性（包括一些其他信息，例如 `this` 的值）的对象。
2. 对 **外部词法环境** 的引用，与外部代码相关联。  
一个“变量”只是 **环境记录** 这个特殊的内部对象的一个属性。“获取或修改变量”意味着“获取或修改词法环境的一个属性”。

**当代码要访问一个变量时 —— 首先会搜索内部词法环境，然后搜索外部环境，然后搜索更外部的环境，以此类推，直到全局词法环境。**

## 术语概念

- 作用域：变量和表达式可见或可被引用的的执行上下文范围（The scope is the current context of execution in which values and expressions are "visible" or can be referenced.from mdn）
- lexical scope: 词法作用域。
- 作用域链 scope chain = environment record(环境记录)
- 作用域链决定了各级上下文中的代码在访问变量和函数时的顺序。
- 闭包：在计算机科学方面的术语意思是，在实现上是一个结构体，它存储了一个函数和一个关联的环境。
- 作用域链的顶端总是上下文中代码正在执行的变量对象

## 参考文档

- https://zh.javascript.info/closure
- Javascript 高级程序设计
- MDN
