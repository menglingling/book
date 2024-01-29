# 执行上下文

相关概念：

- paster:语法解析器。检测代码是否符合语法和初步了解代码想做什么。
- JS engine:JS 引擎。浏览器中内置，例如 google 是 v8。将 Javascript 转换成二进制指令。
- variable hoisting:变量提升。函数声明和 var 定义的变量上升到环境顶端，并初始化成 undefined。let const 声明的变量会提升到顶端，但是不会初始化 undefined 值，所以不可用。
- lexical scope:词法作用域。定义在函数内部的函数可以访问外部函数的代码，外部函数无法访问内部函数的代码。
- this: JavaScript this 关键字指的是 Execution Context 所属的范围。
- call stack : 调用堆栈。一种记录当前代码执行位置的数据结构。

## 分类

JS 引擎 receive Javascript 代码，就会创建环境，最开始默认创建一个全局执行上下文，之后每一个函数调用都会创建函数执行上下文。

- GEC 全局执行上下文。包含不在函数内的所有变量和函数声明。
- FEC 函数执行上下文。包含定义在函数内部的代码。

## 创建阶段

- 创建 Variable Object (VO)。这一阶段发生了变量提升。
- 创建作用域链。这一阶段遵循词法作用域规则。
- 给 this 设置值。作用域链创建完就会初始化 this 值。在全局执行上下文中，this 为 window。

## 执行阶段

Execution Stack：JS 是单线程语言，一个时间内只能执行一个任务。调用堆栈是保证任务有序运行的一种方式。

全局执行上下文第一个进入 stack,当遇到函数时，函数执行上下文被加到堆栈顶部，全局执行上下文会被压到底部。

堆栈的顶部的执行上下文称为活动上下文，当活动上下文的代码执行完后，这个执行上下文会被弹出，下面一个执行上下文位置就到了顶部，变成当前的活动下下文。

## 参考文档

[JavaScript Execution Context – How JS Works Behind The Scenes](https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/)
