---
tags:
  - JavaScript
date: 2024-04-30-周二
cdate: 2024-04-30 16:32
mdate: 2024-04-30 16:32
status: doing
title: 原型继承
hours: "1"
---

# JS 中的 原型

## 原型继承的概念

原型继承主要用于扩展 JS 对象。

在 JavaScript 中，每一个对象都有一个内部的属性，称为原型（prototype）。这个原型是一个指向另外一个对象的引用，包含了可以被继承的属性和方法。

访问一个对象的属性或方法时，如果该对象本身没有这些属性或方法，那么 JavaScript 引擎会尝试在对象的原型上查找这些属性或方法。如果原型对象也没有这些属性或方法，则继续在原型的原型上查找，这样一层层向上直到找到为止或者到达原型链的顶端（null，表示没有更上层的原型了）。 原型继承一次只能继承一个对象，并且不能形成闭环。

`Object.prototype.__proto__===null`

继承的注意点：**属性用自身的，方法用最近的原型的，自身有方法就用自身的方法**。

## 访问设置原型的几种方式

**构造函数的`prototype`属性** ，例如 `Person.prototype` ，通过这个属性，你可以为所有实例定义共享的属性和方法。

**通过`obj.__proto__`读写**，`__proto__`  与内部的  `[[Prototype]]`  不一样，`__proto__` 是一种访问` [[Prototype]]` 的方式，而不是 `[[prototype]]` 本身，`__proto__`  是  `[[Prototype]]`  的 getter/setter。`__proto__`可以直接访问或修改对象的原型，但由于其非标准的性质，一般不推荐在生产环境中使用。允许在对象字面量中使用。

**使用函数  `Object.getPrototypeOf(obj)/Object.setPrototypeOf(obj)`**  来取代  `__proto__` ，这是一种标准的方式来获取对象的原型。相对于`__proto__`，这是更推荐的做法。

**`Object.create(obj,[descriptors])` 的第一个参数可以用来设置原型**。

理论上可以有`类的prototype属性`，但是直接操作`prototype`属性的情况不多见，因为你可以直接在类的声明中定义方法，这些方法会自动成为类的原型上的方法，这种方式更加清晰简洁，也是目前推荐的使用类的方法。

## 常见的创建对象的方式及其原型

### 对象字面量

```js
var person = {
	name: "张三",
	age: 30,
	sayHello: function () {
		console.log("你好，我是" + this.name);
	},
};
console.log(person.__proto__ === Object.prototype); // true
```

**对象字面量创建的对象的原型是 `Object.prototype `**

### `new`构造函数创建

```js
function Person(name, age) {
	this.name = name;
	this.age = age;
	this.sayHello = function () {
		console.log("你好，我是" + this.name);
	};
}
var person1 = new Person("张三", 30);
var person2 = new Person("李四", 25);
console.log(person1.__proto__ === Person.prototype); // true
console.log(person1.__proto__.constructor === Person); // true
/* 默认的 prototype  */
Rabbit.prototype = { constructor: Rabbit };
```

**new 创建的对象的原型是构造函数的原型**，例如`person1.__proto__ === Person.prototype`。

构造函数的原型 是只有一个属性  `constructor`  的对象，属性  `constructor`  指向函数自身 。例如 `Person.prototype = { constructor: Person }` 构造函数的原型的构造器等于构造函数。

### `Object.create(obj,[descriptors])` 语法从一个现有对象直接创建新对象

```js
var personProto = {
	sayHello: function () {
		console.log("你好，我是" + this.name);
	},
};
var person = Object.create(personProto);
person.name = "张三";
person.age = 30;

console.log(person.__proto__ === personProto); // true
```

**Object.create(obj,[descriptors]) 创建的对象的原型是第一个参数**，传进来的第一个参数必须是一个对象或者 null，Object.create 要求至少一个参数，否则会报错。如果传入的是`null`，那么创建的是一个空对象，空对象不会继承任何东西，没有原型，即该对象的`__proto__`属性会被设置为`null`。

### `class` 语法创建新对象

```js
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	sayHello() {
		console.log("你好，我是" + this.name);
	}
}
var person = new Person("张三", 30);

console.log(person.__proto__ === Person.prototype); // true
console.log(person.__proto__.constructor === Person); // true
```

**class 创建的对象的原型是类的原型**，例如`person.__proto__ === Person.prototype`，类的原型的构造器等于类。

## 内置原型 Object.prototype 与其他内置原型的关系

通常，对象会从 Object.prototype 继承内建的方法和 `__proto__` 。原型为 null 时，对象才真正是空的。

![](https://zh.javascript.info/article/native-prototypes/native-prototypes-classes.svg)

## 避免直接修改内置原型

在开发的过程中，我们可能会想要一些新的内建方法，并且想把它们添加到原生原型中。但这通常是一个很不好的想法。原型是全局的，所以很**容易造成冲突**，而且降低代码的可读性，增加维护成本，影响引擎对代码的优化，降低执行速度。

通常推荐的做法是避免直接修改内置原型，而是选择其他方法如：函数借用 ，包装器等。

## 了解 polyfilling

在现代编程中，**只有一种情况下允许修改内置原生原型。那就是 polyfilling**。Polyfilling 是一个术语，表示某个方法在 JavaScript 规范中已存在，但是特定的 JavaScript 引擎尚不支持该方法，那么我们可以通过手动实现它，并用以填充内建原型。

```js
if (!String.prototype.repeat) {
	// 如果这儿没有这个方法
	// 那就在 prototype 中添加它

	String.prototype.repeat = function (n) {
		// 重复传入的字符串 n 次

		// 实际上，实现代码比这个要复杂一些（完整的方法可以在规范中找到）
		// 但即使是不够完美的 polyfill 也常常被认为是足够好的
		return new Array(n + 1).join(this);
	};
}

console.log("La".repeat(3)); // LaLaLa
```

## 原型简史

有这么多可以处理`[[Prototype]]` 的方式。发生了什么？为什么会这样？这是历史原因。

原型继承从一开始就存在于语言中，但管理它的方式随着时间的推移而演变。

构造函数的 "prototype" 属性自古以来就起作用。这是使用给定原型创建对象的最古老的方式。

之后，在 2012 年，Object.create 出现在标准中。它提供了使用给定原型创建对象的能力。但没有提供 get/set 它的能力。一些浏览器实现了非标准的 **proto** 访问器，以为开发者提供更多的灵活性。

之后，在 2015 年，Object.setPrototypeOf 和 Object.getPrototypeOf 被加入到标准中，执行与 **proto** 相同的功能。由于 **proto** 实际上已经在所有地方都得到了实现，但它已过时，所以被加入到该标准的附件 B 中，即：在非浏览器环境下，它的支持是可选的。

之后，在 2022 年，官方允许在对象字面量 {...} 中使用 **proto**（从附录 B 中移出来了），但不能用作 getter/setter obj.**proto**（仍在附录 B 中）。

## 参考文档

- Javascript 现代教程[https://zh.javascript.info/prototypes](https://zh.javascript.info/prototypes)
