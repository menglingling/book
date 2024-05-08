---
tags:
  - JavaScript
date: 2024-03-08-周五
cdate: 2024-03-08 14:33:54
mdate: 2024-03-08 14:33:54
status: done
title: JS 中的装饰器模式和转发
hours: "1"
---

# JS 中的装饰器相关问题

## 基本概念

**装饰器（decorator）**：是一个函数，它接受另一个函数并改变它的行为。

将一个函数传给包装器函数，能加强原来函数的功能。使用包装器的好处是：

- 不改变原来的函数，仅通过包装器就能加强原函数的功能
- 两个函数的逻辑是独立的，包装器可以重用
- 可以组合多个包装器实现复杂的代码功能

## 需要注意的问题

当被包装的函数是对象的方法时，容易出现传入的函数 this 丢失的问题，需要在包装器函数中调用传入的函数时显示绑定 `this` 。

## 参考文档

- Javascript 现代教程[https://zh.javascript.info/call-apply-decorators](https://zh.javascript.info/call-apply-decorators)
