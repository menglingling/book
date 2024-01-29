# 闭包

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
