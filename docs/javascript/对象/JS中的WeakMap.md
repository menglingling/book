---
tags:
  - JavaScript
date: 2024-01-16-周二
cdate: 2024-01-16 15:37:56
mdate: 2024-01-16 15:37:56
status: done
title: JS中的 WeakMap
---
# JS中的WeakMap
## 前言
ECMAScript 6 新增的“弱映射”（WeakMap）是一种新的集合类型，为这门语言带来了增强的键/值对存储机制。
WeakMap 是 Map 的“兄弟”类型，其 API 也是 Map 的子集。

## 术语概念
- 垃圾回收：是一种 JavaScript 引擎处理引用类型变量的机制。
- WeakMap ：是一种可以存储键值的集合对象，只能存储 Object类型的 key。
- WeakMap 中的“weak”（弱）：描述的是 WeakMap 对象中存储的键是弱引用，不会阻止垃圾回收。
## 几个问答
### WeakMap的核心特点？
- key**必须是 Object 类型**
- 只有 Map 的创建存取等方法，**没有迭代器**，没有有clear()。
### WeakMap有哪些属性和方法？
```javascript

// 初始化是全有或全无的操作
// 只要有一个键无效就会抛出错误，导致整个初始化失败

const key1 = {id: 1},// key必须是对象
const key2 = {id: 2},// key必须是对象
const stringKey = new String("key1");// 原始值可以先包装成对象再用作键
const wm = new WeakMap([
	[key1, "val1"],
	["badkey", "val2"], //Invalid value used as WeakMap key  
	[stringKey, "val3"]
]);
wm.set(key2,"value2")
vm.get(key2) // value2
vm.has(key2) // true
vm.delete(key2) //true
const wm2 = new WeakMap().set(key1, "val1").set(key2, "val2"); //链式调用
```
### 理解下WeakMap 中的 Weak ？
放个红皮书原文
>The “weak” designation stems from the fact that keys in a WeakMap are “weakly held,” meaning they  are not counted as formal references that would otherwise prevent garbage collection. An important  distinction for the WeakMap is that the value reference is not weakly held. As long as the key exists, the key/value pair will remain in the map and count as a reference to the value—thereby preventing it  from being garbage collected.

理解下：
如果 Map 存储了 Object类型的key，那么就存在 key 引用了 obj变量，就算obj=null，但因为key还在引用obj呢，obj永远不会被垃圾回收程序处理。

WeakMap只能存储Object 类型的 key，当 WeakMap中的key 引用了obj变量，如果操作obj=null，这个 obj  又仅仅是刚刚我们存 的key用了一下，其他地方都没用， 那么obj会被垃圾回收程序处理。这个就是弱引用。

WeakMap中 key / value成对存储在weakMap中的，只要key引用的obj 不被垃圾回收程序销毁，那么我们就永远可以通过key get 到value的值。当key引用的obj 被垃圾回收程序销毁时，key关联的value也会一并被销毁。

obj何时被垃圾回收程序处理，真正销毁，由 JavaScript 引擎决定的。JavaScript 引擎可能会选择立即执行内存清理，如果现在正在发生很多删除操作，那么 JavaScript 引擎可能就会选择等一等，稍后再进行内存清理。因此，从技术上讲，`WeakMap` 的当前元素的数量是未知的。JavaScript 引擎可能清理了其中的垃圾，可能没清理，也可能清理了一部分。因此，暂 `WeakMap` 不支持  `clear`、`size`、`entries`、`keys`、`values`等方法。




