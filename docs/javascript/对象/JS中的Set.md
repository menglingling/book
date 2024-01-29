---
tags:
  - JavaScript
date: 2024-01-15-周一
cdate: 2024-01-15 20:22:59
mdate: 2024-01-16 20:22:59
status: done
title: JS中的Set
---
# JS中的Set
## 前言
ECMAScript 6 新增的 Set 是一种新集合类型，为这门语言带来集合数据结构。Set 在很多方面都像是加强的 Map，这是因为它们的大多数 API 和行为都是共有的。
## 术语概念
- Set ：存储 没有重复值的  值集合对象。

## 几个问答
### Set的核心特点？
- 没有重复的值
- 按插入时的顺序迭代
### Set 有哪些属性和方法？
```javascript [3]
const s = new Set();
// 使用数组初始化集合

const s1 = new Set(["val1", "val2", "val3"]);

// 使用自定义迭代器初始化集合

const s2 = new Set({

[Symbol.iterator]: function*() {

		yield "val1";
		
		yield "val2";
		
		yield "val3";
		
		}
});

s.add("Matt").add("Frisbie"); //可以进行“链式”调用
set.get()
alert(s.has("Matt")); // true
alert(s.size); // 2
s.delete("Matt");// true
s.clear();
```

### Set 的迭代
- 按插入时的顺序迭代

- Set提供内置的迭代器，**默认的迭代器是values** ，别名是keys, 据说这是为了兼容 map。
	`console.log(s.values=== s[Symbol.iterator]); // true`   
	`console.log(s.keys=== s[Symbol.iterator]); // true`   
	`s[Symbol.iterator]().next() //取当前迭代的值`
	
- entries迭代器，按插入顺序产生包含两个元素的数组，这两个元素是集合中每个值的重复出现：
```javascript
const s = new Set(["val1", "val2", "val3"]);

for (let pair of s.entries()) {

		console.log(pair);
	
	}
// ["val1", "val1"]
// ["val2", "val2"]
// ["val3", "val3"]
```
  - 如果不使用迭代器，而是使用回调方式，用 forEach()方法并传入回调。**注意**：第二个参数和第一个参数一样，这里要与 Array Map 稍加区别。
```javascript
const s = new Set(["value1", "value2", "value3"]);
s.forEach((value, valueAgain,s) => alert(`${value} -> ${valueAgain}`));
// val1 -> val1
// val2 -> val2
// val3 -> val3
```

