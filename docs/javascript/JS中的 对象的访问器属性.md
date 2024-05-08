---
tags:
  - JavaScript
date: 2024-04-29-周一
cdate: 2024-04-29 11:34
mdate: 2024-04-29 11:34
status: done
title: 对象的访问器属性
hours: "1"
---

# 对象的访问器属性

## 基本概念和语法

有两种类型的对象属性。

第一种是  **数据属性 （data property）**。

第二种是  **访问器属性（accessor property）**。

```js
let obj = {
	get propName() {
		// 当读取 obj.propName 时，get 调用
	},

	set propName(value) {
		// 当执行 obj.propName = value 操作时，set 调用
	},
};
```

它们**本质上是用于获取和设置值的函数**，但从外部代码来看就像普通属性。这就是访问器属性的设计思想。**我们不用函数的方式调用，我们使用 obj.propName** ，像一般数据属性一样读取，getter 在幕后运行。

## 用法一：设置隐藏的属性

```js
let user = {
	name: "John",
	surname: "Smith",

	get fullName() {
		return `${this.name} ${this.surname}`;
	},

	set fullName(value) {
		[this.name, this.surname] = value.split(" ");
	},
};

// set fullName 将以给定值执行
user.fullName = "Alice Cooper";
```

## 用法二：内部属性包装器

```js
let user = {
	get name() {
		return this._name;
	},

	set name(value) {
		if (value.length < 4) {
			alert("Name is too short, need at least 4 characters");
			return;
		}
		this._name = value; // 设置内部属性
	},
};

user.name = "Pete";
console.log(user);
```

上面的代码运行，这里会打印 name \_name 两个属性。

从技术上讲，外部代码可以使用  `user._name`  直接访问 name。但是，这儿有一个众所周知的约定，即以**下划线  `"_"`  开头的属性是内部属性**，不应该从对象外部进行访问。

## 访问器属性描述符

访问器属性的描述符与数据属性的不同。

**对于访问器属性，没有  `value`  和  `writable`，但是有  `get`  和  `set`  函数。**

所以访问器描述符可能有：

- **`get`** —— 一个没有参数的函数，在读取属性时调用，
- **`set`** —— 带有一个参数的函数，当属性被设置时调用，
- **`enumerable`** —— 与数据属性的相同，
- **`configurable`** —— 与数据属性的相同。

具体配置参见 [JS中的 对象的数据属性描述符配置](JS中的%20对象的数据属性描述符配置.md)。

例如，要使用  `defineProperty`  创建一个  `fullName`  访问器，我们可以使用  `get`  和  `set`  来传递描述符：

```js
let user = {
	name: "John",
	surname: "Smith",
};

Object.defineProperty(user, "fullName", {
	get() {
		return `${this.name} ${this.surname}`;
	},

	set(value) {
		[this.name, this.surname] = value.split(" ");
	},
});

console.log(user.fullName); // John Smith

user.fullName = "Ling Meng";

console.log(user.fullName); // Ling Meng

console.log(Object.getOwnPropertyDescriptors(user));

/* 属性描述符：
{
    "name": {
        "value": "Ling",
        "writable": true,
        "enumerable": true,
        "configurable": true
    },
    "surname": {
        "value": "Meng",
        "writable": true,
        "enumerable": true,
        "configurable": true
    },
    "fullName": {
        "enumerable": false,
        "configurable": false
    }
}
*/
```

## 参考文档

- Javascript 现代教程 https://zh.javascript.info/property-accessors
