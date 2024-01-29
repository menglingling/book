---
tags:
  - JavaScript
date: 2024-01-23-周二
cdate: 2024-01-23 15:39
mdate: 2024-01-23 15:39
status: doing
title: 词法环境(Lexical Environment)
hours: "5"
---
# 词法环境(Lexical Environment)
## 前言
- 调用堆栈是 V8引擎的一部分，用来管理代码的执行顺序。 
- 引擎用调用堆栈来存储执行上下文，引擎一开始执行 JS 就会自动创建全局上下文存入堆栈，执行流遇到函数调用会创建函数上下文存入堆栈，当函数执行完后再从堆栈中弹出，遇到新的函数调用重复这个操作，直到所有函数执行完，堆栈中只剩下全局上下文，当网页关闭，全局上下文也会被销毁。
- 每个执行上下文都有一个关联的对象，这个对象上存储了上下文中定义的所有变量和函数。这个对象JS高级程序设计中叫`variable object`，JS现代教程中叫`Lexical Environment`。
- 词法环境对象由两部分组成：

1. **环境记录（Environment Record）** —— 一个存储所有局部变量作为其属性（包括一些其他信息，例如 `this` 的值）的对象。
2. 对 **外部词法环境** 的引用，与外部代码相关联。

## 术语概念
- 
- 作用域：变量和表达式可见或可被引用的的执行上下文范围（The scope is the current context of execution in which values and expressions are "visible" or can be referenced.from mdn）
-  lexical scope:词法作用域。定义在函数内部的函数可以访问外部函数的代码，外部函数无法访问内部函数的代码。

- 作用域链 scope chain = environment record(环境记录)
- 作用域链决定了各级上下文中的代码在访问变量和函数时的顺序。
- 闭包：在计算机科学方面的术语意思是，在实现上是一个结构体，它存储了一个函数和一个关联的环境。
- 作用域链的顶端总是上下文中代码正在执行的变量对象

## 几个问答
### 核心特点？
- 
### 有哪些属性和方法？






### 参考文档
- Javascript现代教程
- Javascript高级程序设计
- MDN
