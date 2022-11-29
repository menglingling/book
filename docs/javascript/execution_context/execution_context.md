# 执行上下文

所有 JavaScript 代码都需要在某种环境中托管运行。在大多数情况下，网络浏览器就是这个环境。

## 一些概念

- context :译为 上下文||环境|| 背景来龙去脉
- 编译器: 逐行读取代码的程序。它了解代码如何匹配编程语言所定义的语法，以及代码应该做什么。（检测是否符合语法，理解代码主要意思）
- JavaScript 引擎：JavaScript 引擎是一个计算机程序，它接收 JavaScript 源代码并将其编译成 CPU 可以理解的二进制指令（机器码）。 （将程序翻译成机器能识别的指令）
  JavaScript 引擎通常是由浏览器供应商开发的，每一个主流浏览器都有一个自己开发的引擎。如：谷歌 Chrome 浏览器的 V8 引擎，Firefox 的 SpiderMonkey 和 IE 的 Chakra。

## 执行上下文定义

浏览器的 JavaScript 引擎会创造一个特殊的环境来处理这些 JavaScript 代码的转换和执行。这个特殊的环境被称为执行上下文。

执行上下文包含当前正在运行的代码和有助于其执行的所有内容。

在执行上下文运行期间，编译器解析代码，内存存储变量和函数，可执行的字节码生成后，代码执行。

## 执行上下文分类

JavaScript 中有两种执行上下文：

- 全局执行上下文（GEC）
- 函数执行上下文（FEC）

每当 JavaScript 引擎接收到脚本文件时，它首先会创建一个默认的执行上下文，称为 全局执行上下文 (GEC)。

每**当函数被调用时**，JavaScript 引擎就会在 GEC 内部创建另一种执行上下文，称为函数执行上下文（FEC），并在 FEC 中评估和执行函数中的代码。

## 执行上下文创建过程

执行上下文（GEC 或 FEC）的创建分为两个阶段：

- 创建阶段
- 执行阶段

在创建阶段，执行上下文首先与执行上下文对象（ECO）相关联。
执行上下文对象存储了许多重要的数据，执行上下文中的代码在运行时会使用这些数据。

## 参考文档

[https://www.freecodecamp.org/chinese/news/execution-context-how-javascript-works-behind-the-scenes/](https://www.freecodecamp.org/chinese/news/execution-context-how-javascript-works-behind-the-scenes/)
