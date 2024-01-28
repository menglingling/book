---
tags:
  - JavaScript专题
date: 2024-01-22-周一
cdate: 2024-01-22 17:33:16
mdate: 2024-01-23 12:33:16
status: done
title: JS中的rest parameters 和 spread syntax
---
# JS中的rest parameters 和 spread syntax
## 前言
- ECMAScript 6 新增了剩余操作符和扩展操作符，这些新特性让集合类型之间相互操作、复制和修改变得异常方便。
- ECMAScript 2018 将数组中的剩余操作符和扩展操作符也移植到了对象字面量。这极大地方便了对象合并和通过其他对象创建新对象。
## 术语概念
- 判断`...` 是剩余操作符还是扩展操作符，主要看当前`...`的功能作用或者使用场景是什么。剩余操作符和扩展操作符外观一样`...`，但是执行的基本是相反的操作。
## 几个问答

### 如何区别？
-  当收集的功能时，**收集**一个个单独数据元素变成一个新的集合对象。注意`...`放最后一个参数，有且只有一个。主要场景是：
	 - 定义函数时，利用`···`收集多余的参数。
	 - 解构赋值时，利用`···`收集多余的参数。
-  当扩展的功能时，**展开**一个集合对象变成一个个单独数据元素。没有位置和个数限制。主要场景是：
	- 调用函数时，参数直接传入数组，利用扩展操作符将传入的数组展开成单个参数，满足函数传参需要。
	- 创建新数组，复制旧数组的所有元素到新创建的数组。
	- 创建新对象，复制旧对象的所有自有可枚举属性到新的对象。
### 扩展对象的顺序很重要，主要有两个原因。
- 对象跟踪插入顺序。从扩展对象复制的属性按照它们在对象字面量中列出的顺序插入。
- 对象会覆盖重名属性。在出现重名属性时，会使用后出现属性的值。
下面的例子演示了上述约定：
```javascript
const foo = { a: 1 };
const bar = { b: 2 };
const foobar = {c: 3, ...bar, ...foo};
console.log(foobar);
// { c: 3, b: 2, a: 1 }
const baz = { c: 4 };
const foobarbaz = {...foo, ...bar, c: 3, ...baz};
console.log(foobarbaz);
// { a: 1, b: 2, c: 4 }
```
### 函数中原有的`arguments`的问题？
- `arguments` 是一个类数组对象（likeArray）,可以迭代，但是不支持数组的方法，例如`arguments.map(...)`
- 箭头函数没有`arguments`，没有`this`
### 参考文档
- [https://javascript.info/rest-parameters-spread](https://javascript.info/rest-parameters-spread)
- Javascript高级程序设计
- MDN
