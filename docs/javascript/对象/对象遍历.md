# 对象遍历

## for in

使用 hasOwnProperty 去掉了原形上的属性

```javascript
let obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (const key in obj) {
  if (obj.hasOwnProperty) {
    console.log(`${key}: ${obj[key]}`);
  }
}
```

## Object 的静态方法

### Object.keys（）

```javascript
let obj = {
  a: 1,
  b: 2,
  c: 3,
};
const allKeysToArray = Object.keys(obj);
allKeysToArray.forEach((item) => {
  console.log(item, obj[item]);
});
```

### Object.values（）

```javascript
let obj = {
  a: 1,
  b: 2,
  c: 3,
};
Object.values(obj).forEach((item) => {
  console.log(item);
});
```

### Object.entries（）

会打印 key value 二维数组

```javascript
let obj = {
  a: 1,
  b: 2,
  c: 3,
};

const allEntriiesToArray = Object.entries(obj);
console.log(allEntriiessToArray);

// 打印二维数组
// [
//   ['a', 1],
//   ['b', 2],
//   ['c', 3],
//   ['str', 'abc'],
// ];

allEntriiesToArray.forEach(([key, value]) => {
  console.log(key, value);
});
```
