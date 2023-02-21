# 单例模式

## What

目的：一个类只需要一个实例，能够全局访问。

javascript 中 比如浏览器的 window 对象。我们也会拿全局变量当作单例来使用。

## How

### Code 实现，保证对象只有一个

```javascript{1-9}
const singleton = () => {
  let instance = null;
  return (data) => {
    if (!instance) {
      instance = { ...data };
    }
    return instance;
  };
};

//代理
const ProxyFn = singleton();

const first = ProxyFn({ a: 1 });
const second = ProxyFn({ b: 1 });
console.log(first == second);
```

### 惰性单例

只在需要的时候才创建对象，并且只创建一个。

下面以打开登录对话框为例。

```javascript
const getSingleton = (fn) => {
  let result = null;
  return function () {
    return result || (result = fn());
  };
};

const createLogin = function () {
  const div = document.createElement("div");
  div.innerHTML = "登录";
  div.style.display = "none";
  document.body.appendChild(div);
  return div;
};

const crateSingletonLogin = getSingleton(createLogin);

const openLogin = function () {
  const logindiv = crateSingletonLogin();
  logindiv.style.display = "block";
};
document.querySelector("#btn").addEventListener("click", openLogin);
```
