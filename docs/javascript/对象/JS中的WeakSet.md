---
tags:
  - JavaScript
date: 2024-01-18-周四
cdate: 2024-01-18 15:07:12
mdate: 2024-01-19 15:07:12
status: done
title: JS中的WeakSet
---
# JS中的WeakSet
## 前言

## 术语概念

## 几个问答
###  WeakSet 的核心特点？

- key 只能是 Object 类型
- 弱引用 就要像[[JS中的WeakMap]] 和 Map 一样。没有迭代器。
###  WeakSet 有哪些属性和方法？
- 基本和 [[JS中的Set]] 一样，但是没迭代器方法。
### 主要用途？
给对象添加额外数据。
具体就是把对象当做 key 存入 WeakSet当中，将对象相关的额外数据存放到 key 对应的value中，这样对象本身更容易被垃圾回收，而且对象被真正销毁的时候，也就是 key 消失了，那么与key 对应的value 也会随着 key销毁被回收。

