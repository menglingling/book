# 期约与异步函数

- 异步行为是 JavaScript 的基础，但以前的实现不理想。在早期的 JavaScript 中，只支持定义回调函数来表明异步操作完成。
- ECMAScript 6 新增了正式的 Promise（期约）引用类型，支持优雅地定义和组织异步逻辑。
- 接下来几个版本增加了使用 async 和 await 关键字定义异步函数的机制。
- 异步操作经常是必要的，因为强制进程等待一个长时间的操作通常是不可行的（同步操作则必须要等）。如果代码要访问一些高延迟的资源，比如向远程服务器发送请求并等待响应，那么就会出现长时间的等待。
- 异步操作并不一定计算量大或要等很长时间。只要你不想为等待某个异步操作而阻塞线程执行，那么任何时候都可以使用。

## 异步编程

```javascript
//对这个例子而言，
//1000 毫秒之后，JavaScript 运行时会把回调函数推到自己的消息队列上去等待执行。
//推到队列之后，回调什么时候出列被执行对 JavaScript 代码就完全不可见了。
function double(value) {
  setTimeout(() => setTimeout(console.log, 0, value * 2), 1000);
}
double(3);
// 6（大约 1000 毫秒之后）
```

- 同步与异步：
  - 同步行为对应内存中顺序执行的处理器指令。每条指令都会严格按照它们出现的顺序来执行，能立即获得存储在系统本地（如寄存器或系统内存）的信息。
  - 异步行为类似于系统中断，即当前进程外部的实体可以触发代码执行。
- 以往的异步编程模式（回调模式）：
  1.  异步的返回值通过传入回调函数供后续代码使用。
  2.  异步操作后回调模型要考虑成功的处理和失败的处理，因此出现成功的回调和失败的回调
  3.  如果异步返值又依赖另一个异步返回值，那么回调的情况还会进一步变复杂。在实际的代码中，这就要求嵌套回调。

## 期约

**期约描述的是一种异步程序执行的机制**  
ECMAScript 6 增加了对 Promises/A+规范的完善支持，即 Promise 类型。

- ECMAScript 6 新增的引用类型 Promise，可以通过 new 操作符来实例化。
- 创建新期约时需要传入执行器（executor）函数作为参数。

```javascript{2}
//下面的例子使用了一个空函数对象来应付一下解释器：
let p = new Promise(() => {});
setTimeout(console.log, 0, p);
// Promise <pending>之所以说是应付解释器，是因为如果不提供执行器函数，就会抛出 SyntaxError。
```

### 期约状态

期约抽象地表示一个异步操作。期约是一个有状态的对象，期约的状态代表期约是否完成。  
可能处于如下 3 种状态之一：

- **待定 pending**表示尚未开始或者正在执行中。
- **兑现 fulfilled，有时候也称为“解决”，resolved**表示尚未开始或者正在执行中。
- **拒绝 rejected**表示没有成功完成。

期约状态的一些性质：

- 待定（pending）是期约的最初始状态。
- 待定状态可以落定为代表成功的兑现状态和代表失败的拒绝状态。
- 无论落定为哪种状态都是不可逆的。而且，也不能保证期约必然会脱离待定状态。
- 重要的是，期约的状态是私有的，不能直接通过 JavaScript 检测到。
- 另外，期约的状态也不能被外部 JavaScript 代码修改。（期约故意将异步行为封装起来，从而隔离外部的同步代码。）

### 期约值

期约封装的异步操作会实际生成某个值，而程序期待期约状态改变时可以访问这个值。

- 每个期约只要状态切换为兑现，就会有一个私有的内部值（value）。
- 每个期约只要状态切换为拒绝，就会有一个私有的内部理由（reason）。
- 无论是值还是理由，都是包含原始值或对象的不可修改的引用。二者都是可选的，而且默认值为 undefined。

### 期约的执行器函数

由于期约的状态是私有的，所以只能在内部进行操作。内部操作在期约的执行器函数中完成。  
执行器函数主要有两项职责：初始化期约的异步行为和控制状态的最终转换。其中，**控制期约状态的转换是通过调用它的两个函数参数实现的**。这两个函数参数通常都命名为 resolve()和 reject()。调用 resolve()会把状态切换为兑现，调用 reject()会把状态切换为拒绝。另外，调用 reject()也会抛出错误（后面会讨论这个错误）。

```javascript
let p1 = new Promise((resolve, reject) => resolve());
setTimeout(console.log, 0, p1); // Promise <resolved>
let p2 = new Promise((resolve, reject) => reject());
setTimeout(console.log, 0, p2); // Promise <rejected>
// Uncaught error (in promise)
```

### 静态方法 Promise.resolve()

期约并非一开始就必须处于待定状态，然后通过执行器函数才能转换为落定状态。通过调用 Promise.resolve()静态方法，可以实例化一个解决的期约。下面两个期约实例实际上是一样的：

```javascript
let p1 = new Promise((resolve, reject) => resolve());
let p2 = Promise.resolve();
```

这个解决的期约的值对应着传给 Promise.resolve()的第一个参数。使用这个静态方法，实际上
可以把任何值都转换为一个期约：

```javascript
setTimeout(console.log, 0, Promise.resolve());
// Promise <resolved>: undefined
setTimeout(console.log, 0, Promise.resolve(3));
// Promise <resolved>: 3
// 多余的参数会忽略
setTimeout(console.log, 0, Promise.resolve(4, 5, 6));
// Promise <resolved>: 4
```

### 静态方法 Promise.reject()

与 Promise.resolve()类似，Promise.reject()会实例化一个拒绝的期约并抛出一个异步错误这个错误不能通过 try/catch 捕获，而只能通过拒绝处理程序捕获）。下面的两个期约实例实际上是
一样的：

```javascript
let p1 = new Promise((resolve, reject) => reject());
let p2 = Promise.reject();
```

这个拒绝的期约的理由就是传给 Promise.reject()的第一个参数。这个参数也会传给后续的拒
绝处理程序：

```javascript
let p = Promise.reject(3);
setTimeout(console.log, 0, p); // Promise <rejected>: 3
p.then(null, (e) => setTimeout(console.log, 0, e)); // 3
```

关键在于，**Promise.reject()并没有照搬 Promise.resolve()的幂等逻辑。如果给它传一个期
约对象，则这个期约会成为它返回的拒绝期约的理由**：

```javascript
setTimeout(console.log, 0, Promise.reject(Promise.resolve()));
// Promise <rejected>: Promise <resolved>
```

### 实例方法

#### 实现 Thenable 接口

在 ECMAScript 暴露的异步结构中，任何对象都有一个 then()方法。这个方法被认为实现了 Thenable 接口。ECMAScript 的 Promise 类型实现了 Thenable 接口。
下面的例子展示了实现这一接口的最简单的类：

```javascript
class MyThenable {
  then() {}
}
```

#### Promise.prototype.then()

**Promise.prototype.then()是为期约实例添加处理程序的主要方法。**  
这个 then()方法接收最多两个参数：onResolved 处理程序和 onRejected 处理程序。这两个参数都是可选的，如果提供的话，则会在期约分别进入“兑现”和“拒绝”状态时执行。而且，传给 then()的任何非函数类型的参数都会被静默忽略。  
如果想只提供 onRejected 参数，那就要在 onResolved 参数的位置上传入 undefined。这样有助于避免在内存中创建多余的对象，对期待函数参数的类型系统也是一个交代。

```javascript
function onResolved(id) {
  setTimeout(console.log, 0, id, 'resolved');
}
function onRejected(id) {
  setTimeout(console.log, 0, id, 'rejected');
}
let p1 = new Promise((resolve, reject) => setTimeout(resolve, 3000));
let p2 = new Promise((resolve, reject) => setTimeout(reject, 3000));
p1.then(
  () => onResolved('p1'),
  () => onRejected('p1')
);
p2.then(
  () => onResolved('p2'),
  () => onRejected('p2')
);
//（3 秒后）
// p1 resolved
// p2 rejected
```

#### Promise.prototype.catch()

**Promise.prototype.catch()用于给期约添加拒绝处理程序。**  
事实上，这个方法就是一个语法糖，调用它就相当于调用 Promise.prototype.then(null, onRejected)。

#### Promise.prototype.finally()

**Promise.prototype.finally()方法用于给期约添加 onFinally 处理程序，这个处理程序在期约转换为解决或拒绝状态时都会执行**。这个方法可以避免 onResolved 和 onRejected 处理程序中出现冗余代码。但 onFinally 处理程序没有办法知道期约的状态是解决还是拒绝，所以这个方法主要用于添加清理代码。

#### 同步代码先执行，处理程序后执行

当期约进入落定状态时，与该状态相关的处理程序仅仅会被排期，而非立即执行。

跟在添加这个处理程序的代码之后的同步代码一定会在处理程序之前先执行。

即使期约一开始就是与附加处理程序关联的状态，执行顺序也是这样的。这个特性由 JavaScript 运行时保证，被称为“非重入”（non-reentrancy）特性。  
下面的例子演示了这个特性：
在这个例子中，在一个解决期约上调用 then()会把 onResolved 处理程序推进消息队列。但这个处理程序在当前线程上的同步代码执行完成前不会执行。因此，跟在 then()后面的同步代码一定先于处理程序执行。

```javascript
// 创建解决的期约
let p = Promise.resolve();
// 添加解决处理程序
// 直觉上，这个处理程序会等期约一解决就执行
p.then(() => console.log('onResolved handler'));
// 同步输出，证明 then()已经返回
console.log('then() returns');
// 实际的输出：
// then() returns
// onResolved handler
```

非重入适用于 onResolved/onRejected 处理程序、catch()处理程序和 finally()处理程序。

下面的例子演示了这些处理程序都只能异步执行：

```javascript
let p1 = Promise.resolve();
p1.then(() => console.log('p1.then() onResolved'));
console.log('p1.then() returns');
let p2 = Promise.reject();
p2.then(null, () => console.log('p2.then() onRejected'));
console.log('p2.then() returns');
let p3 = Promise.reject();
p3.catch(() => console.log('p3.catch() onRejected'));
console.log('p3.catch() returns');
let p4 = Promise.resolve();
p4.finally(() => console.log('p4.finally() onFinally'));
console.log('p4.finally() returns');
// p1.then() returns
// p2.then() returns
// p3.catch() returns
// p4.finally() returns
// p1.then() onResolved
// p2.then() onRejected
// p3.catch() onRejected
// p4.finally() onFinally
```

#### 邻近处理程序的执行顺序

如果给期约添加了多个处理程序，当期约状态变化时，相关处理程序会按照添加它们的顺序依次执行。

无论是 then()、catch()还是 finally()添加的处理程序都是如此。

```javascript
let p1 = Promise.resolve();
let p2 = Promise.reject();
p1.then(() => setTimeout(console.log, 0, 1));
p1.then(() => setTimeout(console.log, 0, 2));
// 1
// 2
p2.then(null, () => setTimeout(console.log, 0, 3));
p2.then(null, () => setTimeout(console.log, 0, 4));
// 3
// 4
p2.catch(() => setTimeout(console.log, 0, 5));
p2.catch(() => setTimeout(console.log, 0, 6));
// 5
// 6
p1.finally(() => setTimeout(console.log, 0, 7));
p1.finally(() => setTimeout(console.log, 0, 8));
// 7
// 8
```

#### 传递解决值和拒绝理由

到了落定状态后，期约会提供其解决值（如果兑现）或其拒绝理由（如果拒绝）给相关状态的处理程序。
拿到返回值后，就可以进一步对这个值进行操作。

```javascript
let p1 = new Promise((resolve, reject) => resolve('foo'));
p1.then((value) => console.log(value)); // foo
let p2 = new Promise((resolve, reject) => reject('bar'));
p2.catch((reason) => console.log(reason)); // bar
```

Promise.resolve()和 Promise.reject()在被调用时就会接收解决值和拒绝理由。同样地，它
们返回的期约也会像执行器一样把这些值传给 onResolved 或 onRejected 处理程序

```javascript
let p1 = Promise.resolve('foo');
p1.then((value) => console.log(value)); // foo
let p2 = Promise.reject('bar');
p2.catch((reason) => console.log(reason)); // bar
```

#### 拒绝期约与拒绝错误处理

用到的时候再来写

then()和 catch()的 onRejected 处理程序在语义上相当于 try/catch。

出发点都是捕获错误之后将其隔离，同时不影响正常逻辑执行。为此，onRejected 处理程序的任务应该是在捕获异步错误之后返回一个解决的期约。  
下面的例子中对比了同步错误处理与异步错误处理：

```javascript
console.log('begin synchronous execution');
try {
  throw Error('foo');
} catch (e) {
  console.log('caught error', e);
}
console.log('continue synchronous execution');
// begin synchronous execution
// caught error Error: foo
// continue synchronous execution
new Promise((resolve, reject) => {
  console.log('begin asynchronous execution');
  reject(Error('bar'));
})
  .catch((e) => {
    console.log('caught error', e);
  })
  .then(() => {
    console.log('continue asynchronous execution');
  });
// begin asynchronous execution
// caught error Error: bar
// continue asynchronous execution
```

### 期约连锁

多个期约组合在一起可以构成强大的代码逻辑。

这种组合可以通过两种方式实现：

- 期约连锁是一个期约接一个期约地拼接。
- 期约合成是将多个期约组合为一个期约。

这种结构可以简洁地将异步任务串行化，解决之前依赖回调的难题。

```javascript
let p1 = new Promise((resolve, reject) => {
  console.log('p1 executor');
  setTimeout(resolve, 1000);
});
p1.then(
  () =>
    new Promise((resolve, reject) => {
      console.log('p2 executor');
      setTimeout(resolve, 1000);
    })
)
  .then(
    () =>
      new Promise((resolve, reject) => {
        console.log('p3 executor');
        setTimeout(resolve, 1000);
      })
  )
  .then(
    () =>
      new Promise((resolve, reject) => {
        console.log('p4 executor');
        setTimeout(resolve, 1000);
      })
  );
// p1 executor（1 秒后）
// p2 executor（2 秒后）
// p3 executor（3 秒后）
// p4 executor（4 秒后）
```

### 期约合成

Promise.all()和 Promise.race()

Promise 类提供两个将多个期约实例组合成一个期约的静态方法：Promise.all()和 Promise.race()。而合成后期约的行为取决于内部期约的行为。

- Promise.all()静态方法创建的期约会在一组期约全部解决之后再解决。这个静态方法接收一个可迭代对象，返回一个新期约。

如果有期约拒绝，则第一个拒绝的期约会将自己的理由作为合成期约的拒绝理由。

之后再拒绝的期约不会影响最终期约的拒绝理由。不过，这并不影响所有包含期约正常的拒绝操作。合成的期约会静默处理所有包含期约的拒绝操作。

```javascript
let p1 = Promise.all([Promise.resolve(), Promise.resolve()]);
```

- Promise.race()
  Promise.race()静态方法返回一个包装期约，是一组集合中最先解决或拒绝的期约的镜像。

  这方法接收一个可迭代对象，返回一个新期约。

  Promise.race()不会对解决或拒绝的期约区别对待。无论是解决还是拒绝，只要是第一个落定的期约，Promise.race()就会包装其解决值或拒绝理由并返回新期约。

  如果有一个期约拒绝，只要它是第一个落定的，就会成为拒绝合成期约的理由。之后再拒绝的期约不会影响最终期约的拒绝理由。

```javascript
// 解决先发生，超时后的拒绝被忽略
let p1 = Promise.race([
  Promise.resolve(3),
  new Promise((resolve, reject) => setTimeout(reject, 1000)),
]);
setTimeout(console.log, 0, p1); // Promise <resolved>: 3
// 拒绝先发生，超时后的解决被忽略
let p2 = Promise.race([
  Promise.reject(4),
  new Promise((resolve, reject) => setTimeout(resolve, 1000)),
]);
setTimeout(console.log, 0, p2); // Promise <rejected>: 4
// 迭代顺序决定了落定顺序
let p3 = Promise.race([
  Promise.resolve(5),
  Promise.resolve(6),
  Promise.resolve(7),
]);
setTimeout(console.log, 0, p3); // Promise <resolved>: 5
```

### 串行期约合成

### 期约扩展

## 异步函数

异步函数，也称为“async/await”（语法关键字），是 ES6 期约模式在 ECMAScript 函数中的应用。

async/await 是 ES8 规范新增的。这个特性从行为和语法上都增强了 JavaScript，让以同步方式写的代码能够异步执行。

### async 关键字

用于声明异步函数。这个关键字可以用在函数声明、函数表达式、箭头函数和方法上：

```javascript
async function foo() {}
let bar = async function () {};
let baz = async () => {};
class Qux {
  async qux() {}
}
```

仅在函数名前添加 async 关键字，虽然看着是异步函数，但和普通函数没有区别。  
不过，异步函数如果使用 return 关键字返回了值（如果没有 return 则会返回 undefined），这个值会被 Promise.resolve()包装成一个期约对象。

异步函数始终返回期约对象。

在函数外部调用这个函数可以得到它返回的期约：

```javascript
async function foo() {
  console.log(1);
  return 3;
}
// 给返回的期约添加一个解决处理程序
foo().then(console.log);
console.log(2);
// 1
// 2
// 3
```

### await

因为异步函数主要针对不会马上完成的任务，所以自然需要一种暂停和恢复执行的能力。  
使用 await 关键字可以暂停异步函数代码的执行，等待期约解决。

### await 的限制

await 关键字必须在异步函数中使用，不能在顶级上下文或模块中使用。  
不过，定义并立即调用异步函数是没问题的。下面两段代码实际是相同的：

```javascript
async function foo() {
  console.log(await Promise.resolve(3));
}
foo();
// 3
// 立即调用的异步函数表达式
(async function () {
  console.log(await Promise.resolve(3));
})();
// 3
```

此外，异步函数的特质不会扩展到嵌套函数。因此，await 关键字也只能直接出现在异步函数的定义中。在同步函数内部使用 await 会抛出 SyntaxError。

### 停止和恢复执行

async/await 中真正起作用的是 await。async 关键字，无论从哪方面来看，都不过是一个标识符。  
毕竟，异步函数如果不包含 await 关键字，其执行基本上跟普通函数没有什么区别：

```javascript
async function foo() {
  console.log(await Promise.resolve('foo'));
}
async function bar() {
  console.log(await 'bar');
}
async function baz() {
  console.log('baz');
}
foo();
bar();
baz();
// baz
// bar
// foo
```

JavaScript 运行时在碰到 await 关键字时，会记录在哪里暂停执行。等到 await 右边的值可用了，JavaScript 运行时会向消息队列中推送一个任务，这个任务会恢复异步函数的执行。

异步函数策略等 用到的时候再来写。
