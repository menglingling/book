# 迭代器

## 理解迭代

- 在软件开发领域，“迭代”的意思是按照顺序反复多次执行一段程序，通常会有明确的终止条件。
- ECMAScript 较早的版本中，执行迭代必须使用循环或其他辅助结构。随着代码量增加，代码会变得越发混乱。很多语言都通过原生语言结构解决了这个问题，开发者**无须事先知道如何迭代就能实现迭代操作。这个解决方案就是迭代器模式**。Python、Java、C++，还有其他很多语言都对这个模式提供了完备的支持。JavaScript 在 ECMAScript 6 以后也支持迭代器模式。
- ECMAScript 6 规范新增了两个高级特性：迭代器和生成器。使用这两个特性，能够更清晰、高效、方便地实现迭代。
- 循环来执行迭代例程并不理想：
  - 迭代之前需要事先知道如何使用数据结构。数组中的每一项都只能先通过引用取得数组对象，然后再通过[]操作符取得特定索引位置上的项。这种情况并不适用于所有数据结构。
  - 遍历顺序并不是数据结构固有的。通过递增索引来访问数据是特定于数组类型的方式，并不适用于其他具有隐式顺序的数据结构。

## 迭代器模式

- 迭代器模式（特别是在 ECMAScript 这个语境下）描述了一个方案，即可以把有些结构称为“可迭代对象”（iterable），因为它们实现了正式的 Iterable 接口，而且可以通过迭代器 Iterator 消费。
- 任何实现 Iterable 接口的数据结构都可以被实现 Iterator 接口的结构“消费”（consume）。
- 迭代器（iterator）是按需创建的一次性对象。
- 每个迭代器都会关联一个可迭代对象，而迭代器会暴露迭代其关联可迭代对象的 API。
- 迭代器无须了解与其关联的可迭代对象的结构，只需要知道如何取得连续的值。这种概念上的分离正是 Iterable 和 Iterator 的强大之处。

### 可迭代协议

- 现 Iterable 接口（可迭代协议）要求同时具备两种能力：
  - 支持迭代的自我识别能力
  - 创建实现 Iterator 接口的对象的能力。
- 在 ECMAScript 中，这意味着必须暴露一个属性作为“默认迭代器”，而且这个属性必须使用特殊的 Symbol.iterator 作为键。这个默认迭代器属性必须引用一个迭代器工厂函数，调用这个工厂函数必须返回一个新迭代器。
  - **通过检测`Symbol.iterator`属性来判断自身是否是可迭代的**
  - **通过调用`Symbol.iterator()`函数来生成迭代器**

```javascript
// 这两种类型没有实现迭代器工厂函数
let num = 1;
let obj = {};

console.log(num[Symbol.iterator]); // undefined
console.log(obj[Symbol.iterator]); // undefined

// 这些类型都实现了迭代器工厂函数
let str = 'abc';
let arr = ['a', 'b', 'c'];
let map = new Map().set('a', 1).set('b', 2).set('c', 3);
let set = new Set().add('a').add('b').add('c');
let els = document.querySelectorAll('div');

console.log(str[Symbol.iterator]); // f values() { [native code] }
console.log(arr[Symbol.iterator]); // f values() { [native code] }
console.log(map[Symbol.iterator]); // f values() { [native code] }
console.log(set[Symbol.iterator]); // f values() { [native code] }
console.log(els[Symbol.iterator]); // f values() { [native code] }
// 调用这个工厂函数会生成一个迭代器
console.log(str[Symbol.iterator]()); // StringIterator {}
console.log(arr[Symbol.iterator]()); // ArrayIterator {}
console.log(map[Symbol.iterator]()); // MapIterator {}
console.log(set[Symbol.iterator]()); // SetIterator {}
console.log(els[Symbol.iterator]()); // ArrayIterator {}
```

### 迭代器协议

- 迭代器是一种一次性使用的对象，用于迭代与其关联的可迭代对象。
- 迭代器 API 使用 next()方法在可迭代对象中遍历数据。
  - 每次成功调用 next()，都会返回一个 IteratorResult 对象，其中包含迭代器返回的下一个值。
  - 若不调用 next()，则无法知道迭代器的当前位置。
- next()方法返回的迭代器对象 IteratorResult 包含两个属性：done 和 value。
  - done 是一个布尔值，表示是否还可以再次调用 next()取得下一个值。
  - done: true 状态称为“耗尽”。
  - value 包含可迭代对象的下一个值（done 为 false），或者 undefined（done 为 true）。

### 通过数组来演示下

```javascript
// 创建一个数组
let arr = ['foo', 'bar'];
// 访问迭代器工厂函数，判断arr是可以迭代
console.log(arr[Symbol.iterator]); // f values() { [native code] }
// 调用迭代器工厂函数，生成迭代器
let iter = arr[Symbol.iterator]();
console.log(iter); // ArrayIterator {}
// 执行迭代，可以看到迭代状态和迭代值
console.log(iter.next()); // { done: false, value: 'foo' }
console.log(iter.next()); // { done: false, value: 'bar' }
console.log(iter.next()); // { done: true, value: undefined }
```

### 自定义迭代器

重写了 Symbol.iterator 函数

### 提前终止迭代器

重写了 Symbol.iterator 函数
