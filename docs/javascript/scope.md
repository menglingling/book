# 作用域

## 定义

简而言之：变量和表达式可见或可被引用的的执行上下文范围（The scope is the current context of execution in which values and expressions are "visible" or can be referenced.from mdn）

## 词法作用域

js 是词法作用域，又叫静态作用域，编写代码时就确定了作用域，而不是执行阶段确立的

仔细阅读下面的代码，深刻理解什么叫**编写代码时就确定了访问范围**

```javascript
var a = 2;
function foo() {
  console.log(a);
}
function bar() {
  var a = 3;
  foo();
}
bar();
```

## JS 的作用域分类

- 全局作用域（Global scope: The default scope for all code running in script mode.）
- 模块作用域（Module scope: The scope for code running in module mode.）
- 函数作用域（局部作用域）：（Function scope: The scope created with a function.）
- 块作用域：（Block scope: The scope created with a pair of curly braces (a block).）

## 作用域链 scope chain = environment record(环境记录)

- 每个函数调用都有自己的上下文。当代码执行流进入函数时，函数的上下文被推到一个上下文栈上。
  在函数执行完之后，上下文栈会弹出该函数上下文，将控制权返还给之前的执行上下文。ECMAScript
  程序的执行流就是通过这个上下文栈进行控制的。
- 上下文中的代码在执行的时候，会创建变量对象的一个作用域链（scope chain）。这个作用域链决定
  了各级上下文中的代码在访问变量和函数时的顺序。代码正在执行的上下文的变量对象始终位于作用域
  链的最前端。
- 全局上下文的变量对象始终
  是作用域链的最后一个变量对象。

## 参考文档

- [javascript 高级程序设计]（）
- [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

## 写在后面
