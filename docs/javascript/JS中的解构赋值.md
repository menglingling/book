---
tags:
  - JavaScript
date: 2024-01-19-周五
cdate: 2024-01-19 13:55:00
mdate: 2024-01-19 17:55:00
status: done
title: JS中的 destructure assignment
---
# JS中的解构赋值
## 前言

- 解构赋值是将等号右边的对象执行 ` for of `的语法糖。

## 术语概念
- 解构赋值：大白话理解解构等号右边的给左边的赋值。

## 几个问答
###  解构赋值的核心特点？
- 只要 = 右边的对象是可迭代对象，可以用`for of`调用，就能用解构赋值。
###  有顺序集合 （Array  Set）的解构赋值
- 示例
```javascript
let arr=["apple","banana","orange","cherry"];
let[first,second,third]=arr;   // 右边的会按顺序解构赋值给左边
console.log(first) 
//apple;
let[fruit1,fruit2,fruit3, fruit4 ,fruit5="grape"]=arr;   // 设置默认值
console.log(fruit5) 
//grape

let[a,b,...c]=arr;            // 可以在最后接收所有的剩余参数
console.log(a,b,c,) 
//apple  banana  ["orange","cherry"];

let[,,val]=arr;              // 有空位就按顺序跳过
console.log(val);
//orange

let [one, two, three] = new Set([1, 2, 3]);  // 右边是 Set 有序集合
console.log(one);//1

let user = {};
[user.name, user.surname] = "John Smith".split(' ');  // 左边可以是任意类型的变量
console.log(user.name); // John
console.log(user.surname); // Smith
```

### Object的解构赋值
- 示例
```javascript
let options = {
  title: "Menu",
  height: 200,
  width: 100
  
};

let {title, width:w, height,color="#fff"} = options;  // object本身也没有顺序  还可以改名  给默认值
console.log(title);  // Menu
console.log(w);  // 100
console.log(height); // 200


let {width: w = 100, height: h = 200, title} = options; // 改名和默认值结合写法

let title, width, height;
({title, width, height} = {title: "Menu", width: 200, height: 100}); // 定义和赋值分开写的正确写法 加个括号避免形成单独的单码块
console.log(title)
```

### 一个实用场景
```javascript  
// 我们传递一个对象给函数
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

// ……然后函数马上把对象解构成变量
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  // title, items – 提取于 options，
  // width, height – 使用默认值
  alert( `${title} ${width} ${height}` ); // My Menu 200 100
  alert( items ); // Item1, Item2
}

showMenu(options);
```
- 或者
```javascript
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function showMenu({
  title = "Untitled",
  width: w = 100,  // width goes to w
  height: h = 200, // height goes to h
  items: [item1, item2] // items first element goes to item1, second to item2
}) {
  alert( `${title} ${w} ${h}` ); // My Menu 100 200
  alert( item1 ); // Item1
  alert( item2 ); // Item2
}

showMenu(options);
```
### 参考文档
- [https://javascript.info/destructuring-assignment#nested-destructuring](https://javascript.info/destructuring-assignment#nested-destructuring)
