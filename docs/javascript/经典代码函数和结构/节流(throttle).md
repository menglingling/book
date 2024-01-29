# 节流

## What

一种性能优化方法，控制方法的执行频率。

默认的给事件绑定函数，事件触发，函数会立即跟着执行（事件触发多少次，函数跟着执行多少次）。

使用节流技术后，多次触发事件，具体时间间隔内只执行一次方法。

## How

### 原理版

每次创建任务前都要检查之前有没有一个任务在等待执行，如果有就不创建新的任务。
在等待执行的任务执行完毕后告诉函数没有任务了。

```javascript
let hasOneTask = false;
const throttle = (func, wait) => {
  if (hasOneTask) return;

  setTimeout(() => {
    func();
    hasOneTask = false;
  }, wait);
  hasOneTask = true;
};
const filterFunc = () => {
  console.log("list");
};
const searchFunc = () => {
  throttle(filterFunc, 3000);
};

//停止输入后调用查询方法
document.querySelector("input").addEventListener("keyup", searchFunc);
```

### 优化版

```javascript
const throttle = (func, wait) => {
  let hasOneTask = false;
  return () => {
    if (hasOneTask) return;
    setTimeout(() => {
      func();
      hasOneTask = false;
    }, wait);
    hasOneTask = true;
  };
};
const filterFunc = () => {
  console.log("list");
};
const searchFunc = throttle(filterFunc, 2000);

//停止输入后调用查询方法
document.querySelector("input").addEventListener("keyup", searchFunc);
```

```javascript
//传参
const throttle = (func, wait) => {
  let hasOneTask = false;
  return (data) => {
    if (hasOneTask) return;
    setTimeout(() => {
      func(data);
      hasOneTask = false;
    }, wait);
    hasOneTask = true;
  };
};
const filterFunc = (data) => {
  console.log(data);
};
const searchFunc = throttle(() => {
  filterFunc(document.querySelector("input").value);
}, 2000);

//停止输入后调用查询方法
document.querySelector("input").addEventListener("keyup", searchFunc);
```
