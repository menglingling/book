---
tags:
  - JavaScript
  - review
date: 2024-03-07-周四
cdate: 2024-03-07 12:11:11
mdate: 2024-03-07 12:11:11
status: done
title: JS 中的 new Function
hours: "1"
---

# JS 中的 new Function

## 几个问答

### 区别

它很少被使用，但有些时候只能选择它。

是通过运行时通过参数传递过来的字符串创建的。

使用  `new Function`  创建函数的应用场景非常特殊，比如在复杂的 Web 应用程序中，我们需要从服务器获取代码或者动态地从模板编译函数时才会使用。

如果我们使用  `new Function`  创建一个函数，那么该函数的  `[[Environment]]`  并不指向当前的词法环境，而是指向全局环境。因此，此类函数无法访问外部（outer）变量，只能访问全局变量。这种代码架构很好而且使用压缩程序也不会出错。

当我们需要向  `new Function`  创建出的新函数传递数据时，我们必须显式地通过参数进行传递。

```js
let func = new Function([arg1, arg2, ...argN], functionBody);
```

## 参考文档

- Javascript 现代教程
