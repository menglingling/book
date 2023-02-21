# 迭代器的理解

## 迭代器模式

目的：提供**一种方法**能够让使用者不关心对象的内部构造，但可以按顺序访问其中的每个元素。

## ES6 迭代器

### 为什么 ES6 引入了迭代器

不是所有的对象都是可以枚举的。

Array,Map,Set 是可以枚举的，Javascript 提供了内置的 for... of 来访问数据成员。
但是原生对象 obj 是不可枚举的(原因看参考文档，一句话因为没有简单的方法来区分程序级和数据级迭代。)。
但是可能会需要迭代 obj,所以 ES6 提供可以遵循迭代器协议创建自己的迭代器的方法。

### 迭代协议

将一个普通对象变成可迭代对象需要遵循的协议：

- iterable :可迭代对象。普通对象实现了一个 key 叫做 Symbol.iterator 的方法，这个方法返回迭代器 iterator。
- iterator :本身也是一个对象，包含一个叫 next 的函数的。next 函数 返回 value 和 done。value 是下一个可迭代对象。done 是一个表示整个迭代是否完成的标志。

## 参考文档

[Demystifying ES6 Iterables & Iterators](https://www.freecodecamp.org/news/demystifying-es6-iterables-iterators-4bdd0b084082/)

[迭代器红皮书摘抄](https://menglingling.github.io/book/javascript/iteration/iteration)
