# 防抖

## What

一种 web 优化性能技术。用于控制函数的执行频率。

默认的给事件绑定函数，事件触发，函数会立即跟着执行（事件触发多少次，函数跟着执行多少次）。

使用防抖技术后，多次触发事件，时间间隔少于 N 秒函数不执行，时间间隔大于 N 秒，只在最后一次事件触发 N 秒后执行函数。

## How

### 原理版

每次创建任务前都要把前面创建的任务全部清空
保证只有最后的一个任务在等待执行

```javascript
let timer = null;
const debounce = (executeFunc, wait) => {
  //第一次进，设置了timer ,executeFunc 会被加入到任务多列中 wait秒后会执行函数
  //后续进，如果任务队列（task queue 或者叫宏任务）中已经存在未执行的time在等待执行，则清空他们
  clearTimeout(timer);
  timer = setTimeout(executeFunc, wait);
};
//业务方法
const filterFunc = () => {
  console.log("list");
};
const searchFunc = () => {
  debounce(filterFunc, 3000);
};
//停止输入后调用查询方法
document.querySelector("input").addEventListener("keyup", searchFunc);
```

### 优化版

```javascript
//加入闭包，延长timer的生命周期，也使timer 的作用域从全局环境中变成_debounce的私有变量
const _debounce = (executeFunc, wait) => {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(executeFunc, wait);
  };
};

const filterFunc = () => {
  console.log("list");
};
const searchFunc = _debounce(filterFunc, 3000);

//停止输入后调用查询方法
document.querySelector("input").addEventListener("keyup", searchFunc);
```

```javascript
//加入传参
const _debounce = (executeFunc, wait) => {
  let timer = null;
  return (data) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      executeFunc(data);
    }, wait);
  };
};

const filterFunc = (data) => {
  console.log(`根据${data}查询list`);
};

const fn = _debounce(filterFunc, 3000);
const searchFunc = () => {
  const queryData = document.querySelector("input").value;
  fn(queryData);
};

//停止输入后调用查询方法
document.querySelector("input").addEventListener("keyup", searchFunc);
```

```javascript
//优化
const _debounce = (executeFunc, wait) => {
  let timer = null;
  return (data) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      executeFunc(data);
    }, wait);
  };
};

const filterFunc = (data) => {
  console.log(`根据${data}查询list`);
};

const searchFunc = _debounce(() => {
  filterFunc(document.querySelector("input").value);
}, 3000);

//停止输入后调用查询方法
document.querySelector("input").addEventListener("keyup", searchFunc);
```

## 参考文档

[https://www.freecodecamp.org/news/javascript-debounce-example/](https://www.freecodecamp.org/news/javascript-debounce-example/)
