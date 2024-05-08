---
tags:
  - JavaScript
date: 2024-04-25-周四
cdate: 2024-04-25 08:54:31
mdate: 2024-04-25 10:00:31
status: done
title: 对象的属性配置
hours: "1"
---

# 对象的属性配置

## 对象的属性标志是什么

对象属性（properties），除  **`value`**  外，还有三个特殊的特性（attributes），也就是所谓的“标志（flag）”：

- **`writable`** — 如果为  `true`，表示属性值可以被修改，否则它是只可读的。如 `Math.PI`就是不能修改的。
- **`enumerable`** — 如果为  `true`，表示属性会在循环`for in`中或者会包含在`Object.keys`中 ，否则不会。
- **`configurable`** — 如果为  `true`，表示 `writable enumerable` 是可以在后面的代码中通过  `defineProperty`设置的，否则无法再通过  `defineProperty`  再把 `writable enumerable `改回来。

## **Object.defineProperty** 和 **Object.getOwnPropertyDescriptor**

**默认属性标志值都为 false**

```js
// Object.defineProperty(obj, propertyName, descriptor)
let user = {};

Object.defineProperty(user, "name", {
	value: "John",
});

let descriptor = Object.getOwnPropertyDescriptor(user, "name");

alert(JSON.stringify(descriptor, null, 2));
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */
```

## 比较普通方式 . 创建属性 与 **Object.defineProperty** 创建属性的区别

**默认属性标志值都为 true**

```js
// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

let user = {
	name: "John",
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name");

alert(JSON.stringify(descriptor, null, 2));
/* 属性描述符：
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/
```

## 批量定义属性 **`Object.defineProperties`** 批量获取属性 **`Object.getOwnPropertyDescriptors`**

```js
Object.defineProperties(user, {
	name: { value: "John", writable: false },
	surname: { value: "Smith", writable: false },
	// ...
});
```

## 克隆对象

```js
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
```

通常，当我们克隆一个对象时，我们使用赋值的方式来复制属性，像这样：

```js
for (let key in user) {
	clone[key] = user[key];
}
```

……但是，这并不能复制标志。所以如果我们想要一个“更好”的克隆，那么 Object.defineProperties 是首选。

另一个区别是 for..in 会忽略 symbol 类型的和不可枚举的属性，但是 Object.getOwnPropertyDescriptors 返回包含 symbol 类型的和不可枚举的属性在内的 所有 属性描述符。

## 参考文档

- Javascript 现代教程 https://zh.javascript.info/property-descriptors
