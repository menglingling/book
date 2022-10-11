# 闭包的理解

## 定义

- 闭包是可以访问另一个函数作用域中变量的函数，通常通过函数嵌套来实现（ Closures
  are functions that have access to variables from another function’s scope. This is often accomplished
  by creating a function inside a function. from JSPDF）

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

  ## 使用场景

  - 模拟私有变量，私有方法

## 参考文档

[javascript 高级程序设计]

## 写在后面

- mdn 的闭包介绍跟理解的有出入，参考的高级程序设计。
- 需要深入了解闭包的使用场景
