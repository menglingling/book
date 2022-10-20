# 代理

![img](./images/221020.11.42.53.png)

- ECMAScript 6 新增的代理和反射为开发者提供了拦截并向基本操作嵌入额外行为的能力。  
  具体地说，可以给目标对象定义一个关联的代理对象，而这个代理对象可以作为抽象的目标对象来使用。  
  在对目标对象的各种操作影响目标对象之前，可以在代理对象中对这些操作加以控制。  
  ::: warning 注意
  在 ES6 之前，ECMAScript 中并没有类似代理的特性。由于代理是一种新的基础性语言能力，很多转译程序都不能把代理行为转换为之前的 ECMAScript 代码，因为代理的行为实际上是无可替代的。为此，代理和反射只在百分之百支持它们的平台上有用。可以测代理是否存在，不存在则提供后备代码。不过这会导致代码冗余，因此并不推荐。
  :::

## 创建空代理

代理是使用 Proxy 构造函数创建的。  
这个构造函数接收两个参数：目标对象和处理程序对象。缺少其中任何一个参数都会抛出 TypeError。  
最简单的代理是空代理，即除了作为一个抽象的目标对象，什么也不做。  
要创建空代理，可以传一个简单的对象字面量作为处理程序对象，从而让所有操作畅通无阻地抵达目标对象。

```javascript{5}
const target = {
 id: 'target'
};
const handler = {};
const proxy = new Proxy(target, handler); //参数是 目标对象，处理程序对象
// id 属性会访问同一个值
console.log(target.id); // target
console.log(proxy.id); // target
// 给目标属性赋值会反映在两个对象上
// 因为两个对象访问的是同一个值
target.id = 'foo';
console.log(target.id); // foo
console.log(proxy.id); // foo
// 给代理属性赋值会反映在两个对象上
// 因为这个赋值会转移到目标对象
proxy.id = 'bar';
console.log(target.id); // bar
console.log(proxy.id); // bar
// hasOwnProperty()方法在两个地方
// 都会应用到目标对象
console.log(target.hasOwnProperty('id')); // true
console.log(proxy.hasOwnProperty('id')); // true
// Proxy.prototype 是 undefined
// 因此不能使用 instanceof 操作符
console.log(target instanceof Proxy); // TypeError: Function has non-object prototype
'undefined' in instanceof check
console.log(proxy instanceof Proxy); // TypeError: Function has non-object prototype
'undefined' in instanceof check
// 严格相等可以用来区分代理和目标
console.log(target === proxy); // false
```

## 定义捕获器

- 使用代理的主要目的是可以定义捕获器（trap）。
- 捕获器就是在处理程序对象中定义的“基本操作的拦截器”。
- 每个处理程序对象可以包含零个或多个捕获器，每个捕获器都对应一种基本操作，可以直接或间接在代理对象上调用。
- 每次在代理对象上调用这些基本操作时，代理可以在这些操作传播到目标对象之前先调用捕获器函数，从而拦截并修改相应的行为。

```javascript{4-9}
const target = {
  foo: 'bar',
};
const handler = {
  // 捕获器在处理程序对象中以方法名为键
  get() {
    return 'handler override';
  },
};
const proxy = new Proxy(target, handler);
console.log(target.foo); // bar
console.log(proxy.foo); // handler override
console.log(target['foo']); // bar
console.log(proxy['foo']); // handler override
console.log(Object.create(target)['foo']); // bar
console.log(Object.create(proxy)['foo']); // handler override
```

## 捕获器参数和反射 API

所有捕获器都可以访问相应的参数，基于这些参数可以重建被捕获方法的原始行为。

开发者并不需要手动重建原始行为，而是可以通过调用全局 Reflect 对象上（封装了原始行为）的同名方法来轻松重建。

处理程序对象中所有可以捕获的方法都有对应的反射（Reflect）API 方法。

这些方法与捕获器拦截的方法具有相同的名称和函数签名，而且也具有与被拦截方法相同的行为。

```javascript{6}
const target = {
  foo: 'bar',
};
const handler = {
  get() {
    return Reflect.get(...arguments);
  },
};
const proxy = new Proxy(target, handler);
console.log(proxy.foo); // bar
console.log(target.foo); // bar
```

甚至还可以写得更简洁一些：

```javascript{5}
const target = {
 foo: 'bar'
};
const handler = {
get: Reflect.get
};
const proxy = new Proxy(target, handler);
console.log(proxy.foo); // bar
console.log(target.foo); // bar
```

事实上，如果真想创建一个可以捕获所有方法，然后将每个方法转发给对应反射 API 的空代理，那
么甚至不需要定义处理程序对象：

```javascript{4}
const target = {
 foo: 'bar'
};
const proxy = new Proxy(target, Reflect);
console.log(proxy.foo); // bar
console.log(target.foo); // bar
```

反射 API 为开发者准备好了样板代码，在此基础上开发者可以用最少的代码修改捕获的方法。

```javascript{11}
const target = {
 foo: 'bar',
 baz: 'qux'
};
const handler = {
 get(trapTarget, property, receiver) {
 let decoration = '';
 if (property === 'foo') {
 decoration = '!!!';
 }
 return Reflect.get(...arguments) + decoration;
 }
};
const proxy = new Proxy(target, handler);
console.log(proxy.foo); // bar!!!
console.log(target.foo); // bar
console.log(proxy.baz); // qux
console.log(target.baz); // qux
```

## 捕获器不变式

使用捕获器几乎可以改变所有基本方法的行为，但也不是没有限制。

根据 ECMAScript 规范，每个捕获的方法都知道目标对象上下文、捕获函数签名，而捕获处理程序的行为必须遵循“捕获器不变式”（trap invariant）。

捕获器不变式因方法不同而异，但通常都会防止捕获器定义出现过于反常的行为。

比如，如果目标对象有一个不可配置且不可写的数据属性，那么在捕获器返回一个与该属性不同的值时，会抛出 TypeError：

```javascript
const target = {};
Object.defineProperty(target, 'foo', {
  configurable: false,
  writable: false,
  value: 'bar',
});
const handler = {
  get() {
    return 'qux';
  },
};
const proxy = new Proxy(target, handler);
console.log(proxy.foo);
// TypeError
```

## 可撤销代理

有时候可能需要中断代理对象与目标对象之间的联系。

对于使用 new Proxy()创建的普通代理来说，这种联系会在代理对象的生命周期内一直持续存在。

Proxy 也暴露了 revocable()方法，这个方法支持撤销代理对象与目标对象的关联。

撤销代理的操作是不可逆的。而且，撤销函数（revoke()）是幂等的，调用多少次的结果都一样。

撤销代理之后再调用代理会抛出 TypeError。

撤销函数和代理对象是在实例化时同时生成的：

```javascript{9,12}
  const target = {
    foo: 'bar',
  };
  const handler = {
    get() {
      return 'intercepted';
    },
  };
  const { proxy, revoke } = Proxy.revocable(target, handler);
  console.log(proxy.foo); // intercepted
  console.log(target.foo); // bar
  revoke();
  console.log(proxy.foo); // TypeError
```

## 实用反射 API

某些情况下应该优先使用反射 API，这是有一些理由的。

### 反射 API 与对象 API

在使用反射 API 时，要记住：

1. 反射 API 并不限于捕获处理程序；
2. 大多数反射 API 方法在 Object 类型上有对应的方法。通常，Object 上的方法适用于通用程序，而反射方法适用于细粒度的对象控制与操作。

### 状态标记

很多反射方法返回称作“状态标记”的布尔值，表示意图执行的操作是否成功。  
有时候，状态标记比那些返回修改后的对象或者抛出错误（取决于方法）的反射 API 方法更有用。  
例如，可以使用反射 API 对下面的代码进行重构：

```javascript
// 初始代码
const o = {};
try {
  Object.defineProperty(o, 'foo', 'bar');
  console.log('success');
} catch (e) {
  console.log('failure');
}
```

在定义新属性时如果发生问题，Reflect.defineProperty()会返回 false，而不是抛出错误。
因此使用这个反射方法可以这样重构上面的代码：

```javascript
// 重构后的代码
const o = {};
if (Reflect.defineProperty(o, 'foo', { value: 'bar' })) {
  console.log('success');
} else {
  console.log('failure');
}
```

以下反射方法都会提供状态标记：

- Reflect.defineProperty()
- Reflect.preventExtensions()
- Reflect.setPrototypeOf()
- Reflect.set()
- Reflect.deleteProperty()

### 用一等函数替代操作符

以下反射方法提供只有通过操作符才能完成的操作。

- Reflect.get()：可以替代对象属性访问操作符。
- Reflect.set()：可以替代=赋值操作符。
- Reflect.has()：可以替代 in 操作符或 with()。
- Reflect.deleteProperty()：可以替代 delete 操作符。
- Reflect.construct()：可以替代 new 操作符。

### 安全地应用函数

- 在通过 apply 方法调用函数时，被调用的函数可能也定义了自己的 apply 属性（虽然可能性极小）。
- 为绕过这个问题，可以使用定义在 Function 原型上的 apply 方法，比如：
  Function.prototype.apply.call(myFunc, thisVal, argumentList);  
  这种可怕的代码完全可以使用 Reflect.apply 来避免：  
  Reflect.apply(myFunc, thisVal, argumentsList);

## 代理另一个代理

代理可以拦截反射 API 的操作，而这意味着完全可以创建一个代理，通过它去代理另一个代理。

这样就可以在一个目标对象之上构建多层拦截网：

```javascript
const target = {
  foo: 'bar',
};
const firstProxy = new Proxy(target, {
  get() {
    console.log('first proxy');
    return Reflect.get(...arguments);
  },
});
const secondProxy = new Proxy(firstProxy, {
  get() {
    console.log('second proxy');
    return Reflect.get(...arguments);
  },
});
console.log(secondProxy.foo);
// second proxy
// first proxy
// bar
```

## 代理的问题与不足

代理是在 ECMAScript 现有基础之上构建起来的一套新 API，因此其实现已经尽力做到最好了。

很大程度上，代理作为对象的虚拟层可以正常使用。但在某些情况下，代理也不能与现在的 ECMAScript
机制很好地协同。

- 1. 代理中的 this  
     代理潜在的一个问题来源是 this 值。用到的时候再来写
- 2. 代理与内部槽位  
     代理与内置引用类型（比如 Array）的实例通常可以很好地协同，但有些 ECMAScript 内置类型可
     能会依赖代理无法控制的机制，结果导致在代理上调用某些方法会出错。用到的时候再来写

## 代理捕获器与反射方法

代理可以捕获 13 种不同的基本操作。这些操作有各自不同的反射 API 方法、参数、关联 ECMAScript 操作和不变式。

正如前面示例所展示的，有几种不同的 JavaScript 操作会调用同一个捕获器处理程序。不过，对于在代理对象上执行的任何一种操作，只会有一个捕获处理程序被调用。不会存在重复捕获的情况。

只要在代理上调用，所有捕获器都会拦截它们对应的反射 API 操作。
详细的可查阅[JS 高编代理捕获器与反射方法] 或者 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

## 代理模式

使用代理可以在代码中实现一些有用的编程模式。

### 跟踪属性访问

通过捕获 get、set 和 has 等操作，可以知道对象属性什么时候被访问、被查询。把实现相应捕获
器的某个对象代理放到应用中，可以监控这个对象何时在何处被访问过：

```javascript
const user = {
  name: 'Jake',
};
const proxy = new Proxy(user, {
  get(target, property, receiver) {
    console.log(`Getting ${property}`);
    return Reflect.get(...arguments);
  },
  set(target, property, value, receiver) {
    console.log(`Setting ${property}=${value}`);
    return Reflect.set(...arguments);
  },
});
proxy.name; // Getting name
proxy.age = 27; // Setting age=27
```

### 隐藏属性

代理的内部实现对外部代码是不可见的，因此要隐藏目标对象上的属性也轻而易举。  
比如：

```javascript
const hiddenProperties = ['foo', 'bar'];
const targetObject = {
  foo: 1,
  bar: 2,
  baz: 3,
};
const proxy = new Proxy(targetObject, {
  get(target, property) {
    if (hiddenProperties.includes(property)) {
      return undefined;
    } else {
      return Reflect.get(...arguments);
    }
  },
  has(target, property) {
    if (hiddenProperties.includes(property)) {
      return false;
    } else {
      return Reflect.has(...arguments);
    }
  },
});
// get()
console.log(proxy.foo); // undefined
console.log(proxy.bar); // undefined
console.log(proxy.baz); // 3
// has()
console.log('foo' in proxy); // false
console.log('bar' in proxy); // false
console.log('baz' in proxy); // true
```

### 属性验证

因为所有赋值操作都会触发 set()捕获器，所以可以根据所赋的值决定是允许还是拒绝赋值：

```javascript
const target = {
  onlyNumbersGoHere: 0,
};
const proxy = new Proxy(target, {
  set(target, property, value) {
    if (typeof value !== 'number') {
      return false;
    } else {
      return Reflect.set(...arguments);
    }
  },
});
proxy.onlyNumbersGoHere = 1;
console.log(proxy.onlyNumbersGoHere); // 1
proxy.onlyNumbersGoHere = '2';
console.log(proxy.onlyNumbersGoHere); // 1
```

### 函数与构造函数参数验证

跟保护和验证对象属性类似，也可对函数和构造函数参数进行审查。  
比如，可以让函数只接收某种类型的值：

```javascript
function median(...nums) {
  return nums.sort()[Math.floor(nums.length / 2)];
}
const proxy = new Proxy(median, {
  apply(target, thisArg, argumentsList) {
    for (const arg of argumentsList) {
      if (typeof arg !== 'number') {
        throw 'Non-number argument provided';
      }
    }
    return Reflect.apply(...arguments);
  },
});
console.log(proxy(4, 7, 1)); // 4
console.log(proxy(4, '7', 1));
// Error: Non-number argument provided
```

类似地，可以要求实例化时必须给构造函数传参：

```javascript
class User {
  constructor(id) {
    this.id_ = id;
  }
}
const proxy = new Proxy(User, {
  construct(target, argumentsList, newTarget) {
    if (argumentsList[0] === undefined) {
      throw 'User cannot be instantiated without id';
    } else {
      return Reflect.construct(...arguments);
    }
  },
});
new proxy(1);
new proxy();
// Error: User cannot be instantiated without id
```

### 数据绑定与可观察对象

通过代理可以把运行时中原本不相关的部分联系到一起。这样就可以实现各种模式，从而让不同的代码互操作。  
比如，可以将被代理的类绑定到一个全局实例集合，让所有创建的实例都被添加到这个集合中：

```javascript
const userList = [];
class User {
  constructor(name) {
    this.name_ = name;
  }
}
const proxy = new Proxy(User, {
  construct() {
    const newUser = Reflect.construct(...arguments);
    userList.push(newUser);
    return newUser;
  },
});
new proxy('John');
new proxy('Jacob');
new proxy('Jingleheimerschmidt');
console.log(userList); // [User {}, User {}, User{}]
```

另外，还可以把集合绑定到一个事件分派程序，每次插入新实例时都会发送消息：

```javascript
const userList = [];
function emit(newValue) {
  console.log(newValue);
}
const proxy = new Proxy(userList, {
  set(target, property, value, receiver) {
    const result = Reflect.set(...arguments);
    if (result) {
      emit(Reflect.get(target, property, receiver));
    }
    return result;
  },
});
proxy.push('John');
// John
proxy.push('Jacob');
// Jacob
```
