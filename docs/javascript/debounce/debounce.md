# 防抖

## 基本定义

一种 web 优化性能技术。用于控制函数的执行频率。

默认的给事件绑定函数，事件触发，函数会立即跟着执行（事件触发多少次，函数跟着执行多少次）。

使用防抖技术后，多次触发事件，时间间隔少于 N 秒函数不执行，时间间隔大于 N 秒，只在最后一次事件触发 N 秒后执行函数。

- 原理版

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

- 优化版

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
