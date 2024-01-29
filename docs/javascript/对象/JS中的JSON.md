---
tags:
  - JavaScript
date: 2024-01-22-周一
cdate: 2024-01-22 13:03:45
mdate: 2024-01-22 16:03:45
status: done
title: JS中的JSON
---
# JS中的JSON
## 前言

## 术语概念
- JSON  ：JavaScript Object Notation）是表示值和对象的通用格式
- 不能循环引用
## 几个问答
###  核心特点？
- key 必须使用双引号包起来。
### 数据格式特点？
- JSON 支持以下数据类型：
	- Objects `{ ... }`
	- Arrays `[ ... ]`
	- Primitives：
	    - strings
	    - numbers
	    - boolean values `true/false`
	    - `null`

- JSON 是语言无关的纯数据规范，因此一些特定于 JavaScript 的对象属性会被 `JSON.stringify` 跳过。即：
	- Symbol 类型的键和值
	- 存储 `undefined` 的属性
	- 函数属性（方法）
### 有哪些属性和方法？
- JSON.stringify(value, replacer, spaces)     replacer 是一个**过滤器**可以是函数或者数组用来对结果过滤， spaces用来美化设置缩进的空格或者字符串。
```javascript
let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {number: 23}],
  place: "room" ,
  other: undefined,
  str:"hello"
};
console.log( JSON.stringify(meetup)); 
// {"title":"Conference","participants":[{"name":"John"},{"number":23}],"place":"room"}
console.log( JSON.stringify(meetup, ['title', 'participants','number']) );
//{"title":"Conference","participants":[{},{"number":23}]}
let json = JSON.stringify(meetup,(key,value)=>{
				if(key=="str"){
				 return value="word"
				}
				return value;
			},2) 
console.log(json);
/*
{
  "title": "Conference",
  "participants": [
    {
      "name": "John"
    },
    {
      "number": 23
    }
  ],
  "place": "room",
  "str": "word"
}
*/
```

- toJSON()  如果对象提供了可用的 JSON 转换方法，那么JSON.stringfy()会自动调用,**改写原来的默认的序列化方法**。
	箭头函数不能用来定义 toJSON()方法。主要原因是箭头函数的词法作用域是全局作用域，在这种情况下不合适。
```javascript
let room = {
	number: 23,
	toJSON() {
		return this.number;
		}
};
console.log(JSON.stringify(room) ); 
// 23
```
- JSON.parse(str,reviver)  reviver
	为区别于传给 JSON.stringify()的起过滤作用的替代函数（replacer），这个函数被称为还原函数（reviver）。
	实际上它们的格式完全一样，即还原函数也接收两个参数，属性名（key）和属性值（value），另外也需要返回值。
```javascript
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str);
console.log(meetup.date.getDate() ); // Error!
```

```javascript
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str, function(key, value) {
if (key == 'date') return new Date(value);
return value;
});
console.log( meetup.date.getDate() ); // 现在正常运行了！
```
### 参考文档
- [https://javascript.info/json](https://javascript.info/json)

