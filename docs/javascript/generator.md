# 生成器

- 生成器是 ECMAScript 6 新增的一个极为灵活的结构，拥有在一个函数块内暂停和恢复代码执行的能力。
- 这种新能力具有深远的影响，比如，使用生成器可以自定义迭代器和实现协程。

## 基本构成

- 生成器的形式是一个函数，函数名称前面加一个星号（\*）表示它是一个生成器。
- 只要是可以定义函数的地方，就可以定义生成器。
- 箭头函数不能用来定义生成器函数。

```javascript
// 生成器函数声明
function* generatorFn() {}
// 生成器函数表达式
let generatorFn = function* () {};
// 作为对象字面量方法的生成器函数
let foo = {
  *generatorFn() {},
};
// 作为类实例方法的生成器函数
class Foo {
  *generatorFn() {}
}
// 作为类静态方法的生成器函数
class Bar {
  static *generatorFn() {}
}
```

- 调用生成器函数会产生一个生成器对象。
- 生成器对象一开始处于暂停执行（suspended）的状态。
- 与迭代器相似，生成器对象也实现了 Iterator 接口，因此具有 next()方法。调用这个方法会让生成器开始或恢复执行。
- next()方法的返回值类似于迭代器，有一个 done 属性和一个 value 属性。
- 函数体为空的生成器函数中间不会停留，调用一次 next()就会让生成器到达 done: true 状态。
- value 属性是生成器函数的返回值，默认值为 undefined，可以通过生成器函数的返回值指定。

```javascript
function* generatorFn() {}
let generatorObject = generatorFn();
console.log(generatorObject); // generatorFn {<suspended>}
console.log(generatorObject.next()); // { done: true, value: undefined }
```

```javascript
function* generatorFn() {
  return 'foo';
}
let generatorObject = generatorFn();
console.log(generatorObject); // generatorFn {<suspended>}
console.log(generatorObject.next()); // { done: true, value: 'foo' }
```

生成器函数只会在初次调用 next()方法后开始执行，如下所示：

```javascript
function* generatorFn() {
  console.log('foobar');
}
// 初次调用生成器函数并不会打印日志
let generatorObject = generatorFn();
generatorObject.next(); // foobar
```

- 生成器对象实现了 Iterable 接口

```javascript
function* generatorFn() {} //创建生成器函数
generatorFn()[Symbol.iterator]; //调用生成器函数产生生成器对象，这个对象是可迭代的
generatorFn()[Symbol.iterator](); //调用生成器对象的迭代器函数
```

## 通过 yield 中断执行

- yield 关键字可以让生成器停止和开始执行，也是生成器最有用的地方。
- 生成器函数在遇到 yield 关键字之前会正常执行。遇到这个关键字后，执行会停止，函数作用域的状态会被保留。
- 停止执行的生成器函数只能通过在生成器对象上调用 next()方法来恢复执行。

```javascript
function* generatorFn() {
  yield;
}
let generatorObject = generatorFn();
console.log(generatorObject.next()); // { done: false, value: undefined }
console.log(generatorObject.next()); // { done: true, value: undefined }
```

- 此时的 yield 关键字有点像函数的中间返回语句，它生成的值会出现在 next()方法返回的对象里。
- 通过 yield 关键字退出的生成器函数会处在 done: false 状态；
- 通过 return 关键字退出的生成器函数会处于 done: true 状态。

```javascript
function* generatorFn() {
  yield 'foo';
  yield 'bar';
  return 'baz';
}
let generatorObject = generatorFn();
console.log(generatorObject.next()); // { done: false, value: 'foo' }
console.log(generatorObject.next()); // { done: false, value: 'bar' }
console.log(generatorObject.next()); // { done: true, value: 'baz' }
```

- yield 关键字只能在生成器函数内部使用，用在其他地方会抛出错误。
- 类似函数的 return 关键字，yield 关键字必须直接位于生成器函数定义中，出现在嵌套的非生成器函数中会抛出语法错误：

```javascript
// 有效
function* validGeneratorFn() {
  yield;
}
// 无效
function* invalidGeneratorFnA() {
  function a() {
    yield;
  }
}
// 无效
function* invalidGeneratorFnB() {
  const b = () => {
    yield;
  };
}
// 无效
function* invalidGeneratorFnC() {
  (() => {
    yield;
  })();
}
```

## 生成器作为默认迭代器

- 因为生成器对象实现了 Iterable 接口，而且生成器函数和默认迭代器被调用之后都产生迭代器，所以生成器格外适合作为默认迭代器。下面是一个简单的例子，这个类的默认迭代器可以用一行代码产出类的内容：
  这里，for-of 循环调用了默认迭代器（它恰好又是一个生成器函数）并产生了一个生成器对象。
  这个生成器对象是可迭代的，所以完全可以在迭代中使用。

```javascript
class Foo {
  constructor() {
    this.values = [1, 2, 3];
  }
  *[Symbol.iterator]() {
    yield* this.values;
  }
}
const f = new Foo();
for (const x of f) {
  console.log(x);
}
// 1
// 2
// 3
```

## 提前终止生成器

用到的时候再来写
