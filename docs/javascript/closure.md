---
title: 闭包的理解
date: 2019-08-13 09:39:50
type: javascript
---

# 闭包的理解

## 定义

- 闭包的历史：闭包是一种计算机概念，包含环境和控制两部分 （闭包=环境+控制），在 Javascript 中通过函数能够访问定义时环境中的变量来实现。
- 红皮书:闭包是可以访问另一个函数作用域中变量的函数，通常通过函数嵌套来实现（ Closures
  are functions that have access to variables from another function’s scope. This is often accomplished
  by creating a function inside a function. from JSPDF）
- 具体的实现方式例如下方：

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

  ```javascript
  var nodes = document.getElementByTagName("div");
  for (var i = 0, length = nodes.length; i < length; i++) {
    (function (j) {
      nodes[j].onclick = function () {
        console.log(j);
      };
    })(i);
  }
  ```

  ## 使用场景

  - 模拟私有变量
  - 延长局部变量的寿命

## 参考文档

[javascript 高级程序设计]

## 写在后面

- mdn 的闭包介绍跟理解的有出入，参考的高级程序设计。
- 需要深入了解闭包的使用场景
