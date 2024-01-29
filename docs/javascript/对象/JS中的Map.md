---
tags:
  - JavaScript
date: 2024-01-13-周六
cdate: 2024-01-13 17:53:28
mdate: 2024-01-15 17:53:28
status: done
title: Map and Set
---
# JS中的Map
## 前言
ECMAScript 6 以前，在 JavaScript 中实现“键/值”式存储可以使用 Object 来方便高效地完成，也就是使用对象属性作为键，再使用属性来引用值。但这种实现并非没有问题，为此 TC39 委员会专门为“键/值”存储定义了一个规范。

作为 ECMAScript 6 的新增特性，Map 是一种新的集合类型，为这门语言带来了真正的键/值存储机制。Map 的大多数特性都可以通过 Object 类型实现，但二者之间还是存在一些细微的差异。具体实践中使用哪一个，还是值得细细甄别。

## 术语概念
- Map：是一种可以存储键值的集合对象，可以存储任意类型的key。

## 几个问答

### Map的核心特点？
   -  key **不局限于**string 和 symbol。 以下例子说明 Object 只能 string和symbol 作为 key,其他数据类型均会被自动转换，这体现了 Map 与 Object 最大的区别就是可以存储任意类型的key。
   ```javascript
        let john = { name: "John" };
		let ben = { name: "Ben" };
		let obj = {}; 
		obj[ben] = 234; 
		obj[john] = 123; 
		console.log(obj[ben]) //123
		console.log(obj[john]) //123
		// obj[ben] obj[john] 都会被自动转换成"[object Object]" 
  ```
  
- **按插入时的顺序迭代**

### Map 的创建方式？
  ```javascript
				// 使用嵌套数组初始化映射
				const m1 = new Map([
						["key1", "val1"],
						["key2", "val2"],
						["key3", "val3"]
				]);
				alert(m1.size); // 3
				
				// 使用自定义迭代器初始化映射
				const m2 = new Map({
				[Symbol.iterator]: function*() {
						yield ["key1", "val1"];
						yield ["key2", "val2"];
						yield ["key3", "val3"];
				  }
				});
  ```
  
### Map 相关属性方法？
  ```javascript
        const sym=new Symbol("mark");
        const arr=[1,2,3,4,5];
        const obj={"str","this is a string"};
        
        let map = new Map();
        
        map.set("string","this is an eg");
        map.set(true,"bool");
        map.set(1,123);
        map.set(sym,"Symbol as a key");
        map.set(arr,"Array as  a key");
        map.set(obj,"Object as  a key");
        map.get(true); //"bool"
        map.has(1);
        
        console.log(map.size);
        
        map.delete(1);
        map.clear();
        //每一次 `map.set` 调用都会返回 map 本身，所以我们可以进行“链式”调用：
        map.set().set().set()...
  ```
  
### Map的迭代？
- 迭代的顺序与插入值的顺序相同。

- Map提供内置的迭代器，**默认的迭代器是entries**。
	调用迭代器可以按插入顺序生成[[key, value],[key,value]...]形式的**数组**。  
	`console.log(m.entries === m[Symbol.iterator]); // true`   
	`m[Symbol.iterator]().next() //取当前迭代的值`

  - m.keys()  返回所有 key 的集合数组
  - m.values() 返回所有 value 的集合数组
  - 如果不使用迭代器，而是使用回调方式，则可以m.forEach((value,key,map)=>{})
### 二维Array   Object   Map 间相互转换？

-  二维Array 转 Map ：传入`new Map()`直接转
```javascript
let map=new Map([[1:"a",2:"b",3:"c"]])`
```

-  二维Array转Object：传入内置方法`Object.fromEntries()`直接转
```javascript
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);
// now prices = { banana: 1, orange: 2, meat: 4 }
```

- Object 转 二维数组：传入内置方法`Object.entries()`直接转
```javascript
let obj = {
  name: "John",
  age: 30
};

let arr = Object.entries(obj);
//arr=[["name","John"],["age",30]]
```

- Object 转 Map：传入内置方法`Object.entries()` **先转成二维数组**,再进行二维数组到 Map的转换
```javascript
let obj = {
  name: "John",
  age: 30
};

let map = new Map(Object.entries(obj)); 
```

- Map转Array：调用迭代器`m.entries()` 直接转
```javascript
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('apple', 3);
let arr=map.entries();
//arr=[["banana",1],["orange",2],["apple",3]]
```
-  Map转 Object：调用迭代器`m.entries()` **先转成二维数组**，再进行二维数组到 Object 的转换
```javascript
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);
let obj = Object.fromEntries(map.entries()); 
// obj = { banana: 1, orange: 2, meat: 4 }
```

上述不同类型对象之间的转换，核心是理解entries是形如[[key, value],[key,value]...] 的二维数组，其实Object.fromEntries()期待的入参只要是可迭代对象就行了，这里是采用了二维数组的形式。

### 思考
为什么 object的 entries 方法使用是 Object.entries(obj) ,而不是 obj.entries(): 

	因为obj要保证灵活性啊，obj.entries()可以是用户自己定义的，如果官方这么干了，用户就可能要用其他的方法名或直接冲掉原生的entries了。






