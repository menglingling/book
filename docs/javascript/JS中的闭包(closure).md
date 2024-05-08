---
tags:
  - JavaScript
date: 2024-03-25-周一
cdate: 2024-03-25 17:53:00
mdate: 2024-03-25 17:53:00
status: done
title: JS中的闭包(closure)
hours: "1"
---

# JS 中的闭包(closure)

## 使用场景

- 模拟私有变量

    ```javascript
    function outerFunc() {
    	let a = 1;
    	return function innerFunc() {
    		console.log(a);
    	};
    }
    let b = outerFunc();
    b(); //a=1;
    ```

- 延长变量的寿命

    一道经典的题
    有三个节点，点击打印节点的 index,打印 0，1，2

    ```javascript
    var nodes = document.getElementByTagName("div");
    for (var i = 0, length = nodes.length; i < length; i++) {
    	nodes[i].onclick = function () {
    		console.log(i);
    	};
    }
    //3
    ```

    ```javascript
    //let 创建了块作用域
    var nodes = document.getElementByTagName("div");
    for (let i = 0, length = nodes.length; i < length; i++) {
    	nodes[i].onclick = function () {
    		console.log(i);
    	};
    }
    //0,1,2
    ```

    ```javascript
    //const 创建了块作用域
    var nodes = document.getElementByTagName("div");
    for (var i = 0, length = nodes.length; i < length; i++) {
    	const j = i;
    	nodes[j].onclick = function () {
    		console.log(j);
    	};
    }
    //0,1,2
    ```

    ```javascript
    //function 创建了局部作用域
    var nodes = document.getElementByTagName("div");
    for (var i = 0, length = nodes.length; i < length; i++) {
    	fn(i);
    	function fn(j) {
    		nodes[j].onclick = function () {
    			console.log(j);
    		};
    	}
    }
    //0,1,2
    ```

    ```javascript
    //function 创建了局部作用域
    var nodes = document.getElementByTagName("div");
    for (var i = 0, length = nodes.length; i < length; i++)
      （(j) {
        nodes[j].onclick = function () {
          console.log(j);
        };
      }(i);
    }
    //0,1,2
    ```

## 怎样简单的判断闭包

在 JavaScript 中判断一个函数是否创建了闭包的最简单方法是看该函数是否引用了外部函数作用域中的变量。这意味着，如果一个函数访问了定义它的函数作用域（或全局作用域）中的变量，那么它很可能创建了闭包。

下面是几个判断闭包的简要步骤和栗子：

1. **变量作用域分析**

    查看函数内部是否引用了外部作用域（外层函数或全局作用域）中定义的变量或函数。

javascript

```javascript
function outer() {
	var outerVar = "I am from outer";

	function inner() {
		console.log(outerVar);
	}

	return inner;
}

var myInner = outer();
myInner(); // 这里调用的myInner函数是一个闭包。
```

在这个示例中，`inner`函数引用了`outer`函数作用域中的变量`outerVar`，因此`inner`是一个闭包。

2. **返回函数**

    如果一个函数返回了另一个函数，那返回的函数很可能是闭包，因为它需要访问原函数作用域中的变量才能执行。

3. **函数赋值**

    如果将一个函数赋值给另一个变量，然后在其定义作用域之外执行，它依然可以访问原有的局部变量，说明它形成了闭包。

javascript

```javascript
var myClosure = (function () {
	var a = 2;
	return function () {
		console.log(a);
	};
})();

myClosure(); // 输出 2，myClosure是一个闭包。
```

在实践中，闭包几乎无处不在。无论是使用回调函数、返回函数，还是在诸如`setTimeout`、`setInterval`、事件监听器或其他异步引用中，任何时候只要一个函数访问了定义它函数作用域之外的变量，闭包就可能在起作用。

## JS 中有哪几种方式的闭包？

在 JavaScript 中，闭包的形成不是基于具体的语法结构，而是基于函数和其词法作用域的交互。当一个函数被定义时，它会隐式地捕获其定义时的作用域，并能记住并访问这个作用域中的变量，即使这个函数在外部作用域被调用。

这里有一些通常使用闭包的情况：

1. 返回函数的函数：

javascript

```javascript
function createGreeter(greeting) {
	return function (name) {
		console.log(greeting + ", " + name);
	};
}

const greeter = createGreeter("Hello");
greeter("World"); // 输出: Hello, World
```

这里的匿名函数就是一个闭包，它记住了变量`greeting`。

2. 立即执行的函数表达式（IIFE）：

javascript

```javascript
(function () {
	var localVar = "I am private";
	console.log(localVar);
})();
```

在上面的例子中，`localVar`在全局作用域是不可访问的，因此通过闭包封装可以创建私有变量。

3. 事件处理器：

javascript

```javascript
function setupButton(buttonId) {
	var button = document.getElementById(buttonId);
	button.onclick = function () {
		console.log(buttonId + " clicked");
	};
}

setupButton("myButton");
```

每个按钮处理器都是一个闭包，记住了`buttonId`。

4. 模块模式：

javascript

```javascript
var counterModule = (function () {
	var counter = 0; // 私有变量
	return {
		increment: function () {
			counter++;
		},
		print: function () {
			console.log(counter);
		},
	};
})();

counterModule.increment();
counterModule.print(); // 输出: 1
```

这里的对象中的方法都是闭包，它们共享相同的私有`counter`变量。

5. 函数作为参数：

javascript

```javascript
function runWithDelay(func, delay) {
	setTimeout(function () {
		func();
	}, delay);
}

runWithDelay(function () {
	console.log("Hello!");
}, 1000);
```

上面的匿名函数是一个闭包，它可以使用函数`runWithDelay`的任何参数。

通常情况下，每当你在一个函数内部定义另一个函数，都会创建一个闭包。闭包让你可以访问本应随着执行完毕而失去的外部函数的作用域。闭包是 JavaScript 编程中非常核心的概念之一，它们出现的场景非常多，常常用于回调函数、数据封装和管理状态等。
