---
tags:
  - JavaScript
  - "#review"
date: 2024-03-04-周一
cdate: 2024-03-04 12:01:34
mdate: 2024-03-04 12:01:34
status: done
title: JS中的 function
hours: "1"
sr-due: 2024-03-20
sr-interval: 15
sr-ease: 290
---

# JS 中的 function

## 几个问答

### 常见内置属性

- name 可以根据上下文推断函数名，如果推断不出来就是空字符串
- length 返回参数入参的个数，不包括剩余参数

```javascript
"use strict";

<script>
	"use strict"; function f1(a) {}
	function f2(a, b) {}
	function many(a, b, ...more) {}
	alert(f1.length); // 1 alert(f2.length); // 2 alert(many.length); // 2
</script>
```

```javascript
<script>

"use strict";
function ask(question, ...handlers) {

let isYes = confirm(question);

for(let handler of handlers) {

if (handler.length == 0) {

if (isYes) handler();

} else {

handler(isYes);

}

}

}

// 对于肯定的回答，两个 handler 都会被调用

// 对于否定的回答，只有第二个 handler 被调用

ask("Question?", () => alert('You said yes'), result => alert(result));

</script>

```

### 自定义属性

很多知名的 JavaScript 库都充分利用了这个功能。

它们创建一个“主”函数，然后给它附加很多其它“辅助”函数。例如，[jQuery](https://jquery.com/)  库创建了一个名为  `$`  的函数。[lodash](https://lodash.com/)  库创建一个  `_`  函数，然后为其添加了  `_.add`、`_.keyBy`  以及其它属性（想要了解更多内容，参查阅  [docs](https://lodash.com/docs)）。实际上，它们这么做是为了减少对全局空间的污染，这样一个库就只会有一个全局变量。这样就降低了命名冲突的可能性。

所以，一个函数本身可以完成一项有用的工作，还可以在自身的属性中附带许多其他功能。

### 被命名的函数表达式

关于名字  `func`  有两个特殊的地方，这就是添加它的原因：

1. 它允许函数在内部引用自己。
2. 它在函数外是不可见的。  
   这个名字可以用于在该函数内部进行自调用，例如递归调用等。

```javascript
<script>

"use strict";

let sayHi = function func(who) {

if (who) {

alert(`Hello, ${who}`);

} else {

func("Guest"); // 现在一切正常

}

};

let welcome = sayHi;

sayHi = null;

welcome(); // Hello, Guest（嵌套调用有效）

</script>
```

## 参考文档

- Javascript 现代教程
