---
tags:
  - JavaScript
date: 2024-01-22-周一
cdate: 2024-01-22 11:37:01
mdate: 2024-01-22 11:37:01
status: done
title: JS中的Date
---
# JS中的Date
## 前言

## 术语概念
- 内置的对象
## 几个问答

###  有哪些属性和方法？
```javascript
let date=new Date();
console.log(date);
// 111 Mon Jan 22 2024 11:42:12 GMT+0800 (中国标准时间)
let d1970=new Date(0); //传时间戳
console.log(d1970)
// 111 Thu Jan 01 1970 08:00:00 GMT+0800 (中国标准时间)
let date1=new Date("2024-01-01");
console.log(date1);
// 111 Mon Jan 01 2024 08:00:00 GMT+0800 (中国标准时间)

new Date(year, month, date, hours, minutes, seconds, ms)

let getTime =new Date().getTime();
console.log(getTime);
// 1705895785170
let now =Date.now();
console.log(now)
//1705895801130

```
`Date.parse(str)` 
str标准格式是  YYYY-MM-DDTHH:mm:ss.sssZ ，其中 T 是分隔符。如果给定字符串的格式不正确，则返回 `NaN`。
调用会解析给定格式的字符串，并返回时间戳（自 1970-01-01 00:00:00 起所经过的毫秒数）。
```javascript [1]
Date.parse(str); 

let ms = Date.parse('2012-01-26 13:51:50'); 
console.log(ms); 
// 1327557110000

let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
```

`new Date().getTimezoneOffset()` 返回 UTC 与本地时区之间的时差，以分钟为单位：
```javascript
// 如果你在时区 UTC-1，输出 60
// 如果你在时区 UTC+3，输出 -180
console.log( new Date().getTimezoneOffset() );
```
### 参考文档

