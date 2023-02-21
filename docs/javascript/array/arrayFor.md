# JavaScript 中的数组遍历

## for 循环

```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[index] == 3) {
    continue;
  }
  console.log(numbers[i]);
}
```

- 需要利用 index 访问数据成员
- 需要提供循环截止条件

## for in

```javascript
Array.prototype.say = "我是个自定义属性";
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in numbers) {
  if (numbers[index] == 3) {
    continue;
  }
  console.log(numbers[index]);
}
```

- 需要利用 index 访问数据成员
- 会把对象的属性也一起遍历打印，所以不建议使用

### for of

```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
  console.log(number);
}

for (const number of numbers) {
  if (number == 8) {
    break;
  }
  console.log(number);
}
```

- 只能遍历可枚举对象如 Array,Map,Set
- 原生的 obj 不是可枚举对象，所以不能遍历 obj

### for.Each

```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(function (number, index, arr) {
  console.log(number);
});
```

- 只能遍历数组
- 在结束遍历前不能打断 做 continue,break 操作

## 参考文档

[An overview of JavaScript iterators](https://www.freecodecamp.org/news/javascript-iterators-17ab32c3cae7/)
