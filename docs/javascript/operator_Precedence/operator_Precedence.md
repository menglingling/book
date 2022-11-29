# 运算符优先级

空值合并运算符（??）是一个逻辑运算符，当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。

```JavaScript
a || (b \* c); // 首先对 `a` 求值，如果 `a` 为真值则直接返回 `a`
a && (b < c); // 首先对 `a` 求值，如果 `a` 为虚值则直接返回 `a`
a ?? (b || c); // 首先对 `a` 求值，如果 `a` 不是 `null` 或 `undefined` 则直接返回 `a`
a?.b.c; // 首先对 `a` 求值，如果 `a` 是 `null` 或 `undefined` 则直接返回 `undefined`
```

[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
