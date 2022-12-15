# js 中的 事件

## 基本概念

- event : 事件。就是浏览器中内置的一些交互行为。例如：路口的路灯，红灯亮就是一个事件。
- eventHandler: 事件处理程序。就是事件发生时，应对事件的办法。例如，红灯亮了，人们停止过马路就是对红灯亮了这个事件的应
  对办法。
- propagation 事件传播。
- capture 事件捕获。
- bubbling 事件冒泡。
- event flow : 事件流。（后面展开会展开说）

## 添加事件的几种方式

### 直接 html 中直接添加

不推荐。虽然写代码比较直观又快，但是代码不能重复利用。

```html
<button onclick="console.log('Hello world!')">1 Click</button>
<button onclick="(() => console.log('Hello World!'))()">2 Click</button>
<button onclick="(function(){console.log('Hello World!')})()">3 Click</button>
<button onclick="onClickHandler()">4 Click</button>
```

```javascript
////4 Click
function onClickHandler() {
  console.log("Hello world!");
}
////5 Click
const button = document.getElementById("btn");
button.onclick = function () {
  console.log("Button has been clicked");
};
```

### 利用 addEventListener()

`dom.addEventListener("event type",eventHandler, useCatch)`

- 第一个参数：string 事件类型
- 第二个参数：function 事件处理程序
- 第三个参数：boolean 是否捕获，默认 false
  例如：

```javascript
document.getElementById("input").addEventListener(
  "click",
  (event) => {
    console.log("Button has been clicked");
  },
  true
);
```

## 事件传播

由于 Html 是超文本标记组成的，标记会层层嵌套（我们写代码的时候总是这样的）。随便在 html 触发一个事件，例如 click 一下页面。当 click 的时候，默认情况下，事件除了会在当前点击的这层标记上触发，还会向上或向下传播并触发相应的事件处理程序（如果添加了的话）。**标准事件模型规定了事件的传播方向是先捕获，到达目标事件后，再向上冒泡。即事件流的三个阶段。**

写代码的时候大多数情况用的是冒泡。

这里结合 addEventListener 来讲下实际应用中**事件处理程序的执行顺序**：

```css
#grandpa {
  width: 100px;
  height: 100px;
  border: 2px solid #f00;
}
#father {
  width: 50px;
  height: 50px;
  border: 2px solid #0f0;
}
#son {
  width: 25px;
  height: 25px;
  border: 2px solid #00f;
}
```

```html
<div id="grandpa">
  <div id="father">
    <div id="son"></div>
  </div>
</div>
```

**只捕获**

```javascript
////设置第三个参数为 true ,启用捕获。
////此时点击son，事件按顺序向下捕获
////结果打印顺序 grandpa  father  son

document.getElementById("grandpa").addEventListener(
  "click",
  (event) => {
    console.log("grandpa");
  },
  true
);

document.getElementById("father").addEventListener(
  "click",
  (event) => {
    console.log("father");
  },
  true
);

document.getElementById("son").addEventListener(
  "click",
  (event) => {
    console.log("son");
  },
  true
);
```

**只冒泡**

```javascript
////设置第三个参数默认，即 false,不启用捕获。
////此时点击son，事件直接向上冒泡
////结果打印顺序 son father  grandpa

document.getElementById("grandpa").addEventListener("click", (event) => {
  console.log("grandpa");
});

document.getElementById("father").addEventListener("click", (event) => {
  console.log("father");
});

document.getElementById("son").addEventListener("click", (event) => {
  console.log("son");
});
```

**阻止冒泡**

```javascript
////设置第三个参数默认，即 false,不启用捕获。
////此时点击son，事件直接向上冒泡
////结果打印顺序 son

document.getElementById("grandpa").addEventListener("click", (event) => {
  console.log("grandpa");
});

document.getElementById("father").addEventListener("click", (event) => {
  console.log("father");
});

document.getElementById("son").addEventListener("click", (event) => {
  console.log("son");
  event.stopPropagation();
});
```

**阻止同级冒泡**

```javascript
////因为 addEventListener 可以对一个对象添加多个侦听程序，像下面这样，
////默认会按代码的顺序依次打印 son1 son2 son3
////可以利用 stopImmediatePropagation ，这样只会打印 son1

document.getElementById("son").addEventListener("click", (event) => {
  console.log("son1");
  event.stopImmediatePropagation();
});

document.getElementById("son").addEventListener("click", (event) => {
  console.log("son2");
});

document.getElementById("son").addEventListener("click", (event) => {
  console.log("son3");
});
```
