---
tags:
  - JavaScript
date: 2024-03-25-周一
cdate: 2024-03-25 17:55:31
mdate: 2024-03-25 17:55:31
status: done
title: JS中的 this
hours: "1"
---

# JS 中的 this

## this 是什么

JS 引擎 receive Javascript 代码，就会创建环境，最开始默认创建一个全局执行上下文，之后每一个函数调用都会创建函数执行上下文。执行上下文在创建的时候就会给 this 赋值，this 代表了当前函数执行时是在哪个上下文环境中。

个人认为要说明白具体指向，需要研究下 JS 引擎在具体的代码中是怎么创建执行上下文的，不然我们只能用前人总结的经验规则来套用到实际的开发中判断。

## 判断规则

绑定优先级：new >显示 >隐式>默认

- 普通方法 （默认绑定）
- 对象的方法 （隐式绑定）
- call，aplly （显示绑定）
- new 绑定

代码

```javascript
//普通函数中， 指向Window，严格模式下指向undefined
var func = function () {
	console.log(this);
};
func();
//对象的方法中， 指向这个对象
var obj = {
	str: "hello",
	func: function () {
		console.log(this, this.str);
	},
};
obj.func();
//call , apply中， 指向第一个参数
var obj2 = {
	str: "world",
};
obj.func.call(obj2);
//构造函数中，指向要创建的新对象
var Func = function () {
	console.log(this);
};
var f = new Func();
```

## 根据判断规则容易出错的实际开发情景

上面我们讨论了关于 this 指向规则，实际开发中，普通方法调用，对象直接调用方法，call 调用， new 调用，调用都比较明显，不容易判断出错，
会混淆的地方是将一个对象的方法当参数传递给一个函数，
例如

```js
let user = {
	name: "Ling",
	sayHi: function () {
		console.log("hello" + this.name);
	},
};
let otherFunc = function (func) {
	func();
};
otherFunc(user.sayHi);
// hello,undefined
```

上面的代码我们将 user.sayHi 传入 otherFunc，此时需要小心表面上看是 user.sayHi,实际上和 user 已经没有关系了。
上面的代码等价于：

```js
let f = user.sayhi;

otherFunc(f);
/* 
这里f 就带代表函数
 function () {
		console.log("hello" + this.name);
	}
单纯的看这个 function 就是个普通方法了，适用的是普通方法的绑定判断规则
*/
```

**将一个对象的方法当参数传递给一个函数，那就方法是独立的普通函数了，方法内部的 this 已经是 undefined 了，并是原来的对象。**
调用方法的上下文已经悄悄发生了改变，这也是我们实际开发中会遇到的 this 丢失问题。遇到这种将对象的方法当参数传递的情况，需要显示的用 bind 绑定 this。

## 如何确保函数在正确的执行上下文中被调用

this 是在代码执行时才能确定的，在编码的阶段发生 this 指向错误就不容易察觉，如果不追踪代码执行，很容易判断出错。

没有考察 this 是怎么在早期的 JS 代码中被发明的，具体用在何种用途方便使用，造成了今天编码者的不方便。

但是编码者都是聪明的，this 既然代表的是函数执行的上下文环境，那么在编码阶段就明确执行上下文就行了。于是有了解决方案：

### bind 硬绑

```js
function executeFunction(fn, context, arg) {
	return fn.bind(context, arg);
}
var obj = {
	value: 10,
	add: function (x) {
		return this.value + x;
	},
};
var result = executeFunction(obj.add, obj, 5);
console.log(result()); // 输出15
```

### 闭包带上上下文

```js
function executeFunction(fn, arg) {
	return fn(arg);
}
function createClosure(obj) {
	return function (x) {
		return obj.add(x);
	};
}
var obj = {
	value: 10,
	add: function (x) {
		return this.value + x;
	},
};
var boundAdd = createClosure(obj);
var result = executeFunction(boundAdd, 5);
console.log(result); // 输出15
```

### 箭头函数固定上下文

箭头函数里面的 this 的值是外层作用域中的 this 值
箭头函数固化了 this，在定义时就确定了指向，运行时也不会变化。 会从自己的作用域链的上一层继承 this。

日常编码中，当函数作为参数使用时，会大量的使用箭头函数。

代码

```js
function executeFunction(fn, arg) {
	return fn(arg);
}
var obj = {
	value: 10,
	add: function (x) {
		return this.value + x;
	},
};
var result = executeFunction((x) => obj.add(x), 5);
console.log(result); // 输出15
```

## 例举其他 this 会丢失的情况

在 JavaScript 中，`this`  上下文丢失通常发生在以下几种情况下：

### 对象的方法赋值给变量

当一个对象的方法被赋值给变量时，该方法就会丢失原始对象的`this`上下文，因为它被作为一个独立的函数来引用。

```javascript
var obj = {
	value: "hello",
	getValue: function () {
		return this.value;
	},
};

var getValue = obj.getValue;
console.log(getValue()); // 不会输出'hello'，因为`this`现在指向全局对象或者是undefined
```

### 传递对象的方法作为回调函数

当把一个对象的方法直接传递给另一个函数作为回调，而没有绑定特定的`this`，在回调中`this`通常会丢失。

```javascript
function callFunction(fn) {
	return fn();
}

var obj = {
	value: "hello",
	getValue: function () {
		return this.value;
	},
};

console.log(callFunction(obj.getValue)); // `this`丢失
```

### setTimeout 或 setInterval 中传递对象的方法

当使用  `setTimeout`  或  `setInterval`  时，如果传递的是对象的方法，当回调执行时，`this`将指向全局对象或`undefined`。

```javascript
var obj = {
	value: "hello",
	getValue: function () {
		console.log(this.value);
	},
};

setTimeout(obj.getValue, 1000); // 一秒后执行，该方法中的`this`不再指向obj对象。
```

### 事件处理器中的方法是对象的方法

当将一个对象的方法设置为 DOM 事件处理器时，该方法内部的`this`将指向触发事件的元素，而不是定义该方法的对象。

```html
<button id="myButton">Click me</button>
<script>
	var obj = {
		value: "hello",
		getValue: function () {
			console.log(this.value);
		},
	};

	document.getElementById("myButton").onclick = obj.getValue; // `this`指向按钮元素
</script>
```

### 在构造函数内部，没有使用`new`关键字

如果你在调用构造函数时忘记了`new`关键字，`this`将不会指向新创建的对象实例，而是指向全局上下文。

```javascript
function MyConstructor() {
	this.value = "hello";
	this.getValue = function () {
		return this.value;
	};
}

var obj = MyConstructor();
// obj为undefined, this.value很可能已经被添加到全局对象上
```

要解决或避免这些问题，通常需要使用， 箭头函数  `.bind()`, `.call()`  或者  `.apply()`  来确保`this`绑定到正确的对象上。
