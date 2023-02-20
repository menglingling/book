# 单例模式

## What

定义：一个类只需要一个实例，能够全局访问。

javascript 中指的是：只需要一个的对象。

javascript 中 比如浏览器的 window 对象。我们也会拿全局变量当作单例来使用。

## How

### Code 实现 保证对象只有一个

```javascript
function fn() {
  const instance = null;
  if (!instance) {
    instance = new CreateInstance();
  }
  return instance;
}
```

### 惰性单例

只在需要的时候才创建对象实例。

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
