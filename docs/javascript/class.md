# 类

## 基本概念

- **虽然 ECMAScript 6 类表面上看起来可以支持正式的面向对象编程，但实际上它背后使用的仍然是原型和构造函数的概念。**

### 定义类

与函数类型相似，定义类也有两种主要方式：类声明和类表达式。

```javascript
//这两种方式都使用 class 关键字加大括号：
// 类声明
class Person {}
// 类表达式
const Animal = class {};
```

异同点：

- 与函数表达式类似，类表达式在它们被求值前也不能引用。
- 与函数定义不同的是，虽然函数声明可以提升，但类定义不能。
- 函数受函数作用域限制，而类受块作用域限制。

### 访问类名

```javascript
let Person = class PersonName {
  init() {
    console.log(Person.name);
    console.log(PersonName.name);
  }
};
let p = new Person();
p.init(); // PersonName PersonName
console.log(Person.name); // PersonName
```

## 类的构成

- 类的语法可以非常方便地定义应该存在于实例上的成员、应该存在于原型上的成员，以及应该存在于类本身的成员。
- ~~类可以包含**构造函数、实例方法、获取函数、设置函数和静态类方法**，但这些都不是必需的。~~
- 类可以包含构造函数，类原型方法，访问器方法，静态方法，但这些都不是必需的。
- 空的类定义照样有效。默认情况下，类定义中的代码都在严格模式下执行。

```javascript
// 空类定义，有效
class Foo {}
// 有构造函数的类，有效
class Bar {
  constructor() {}
}
// 有获取函数的类，有效
class Baz {
  get myBaz() {}
}
// 有静态方法的类，有效
class Qux {
  static myQux() {}
}
```

### 类构造函数

- constructor 关键字用于在类定义块内部创建类的构造函数。
- 构造函数的定义不是必需的，不定义构造函数相当于将构造函数定义为空函数。
- 类构造函数与构造函数的主要区别是，调用类构造函数必须使用 new 操作符：

```javascript
class Person {}
// 使用类创建一个新实例
let p1 = new Person();
p1.constructor();
// TypeError: Class constructor Person cannot be invoked without 'new'
// 使用对类构造函数的引用创建一个新实例
let p2 = new p1.constructor();
```

- ECMAScript 中没有正式的类这个类型。从各方面来看，ECMAScript 类就是一种特殊函数。
- 声明一个类之后，通过 typeof 操作符检测类标识符，表明它是一个函数：

```javascript
class Person {}
console.log(Person); // class Person {}
console.log(typeof Person); // function
```

- 类标识符有 prototype 属性，而这个原型也有一个 constructor 属性指向类自身
- 与普通构造函数一样，可以使用 instanceof 操作符检查构造函数原型是否存在于实例的原型链中
- 类是 JavaScript 的一等公民，因此可以像其他对象或函数引用一样把类作为参数传递:

```javascript
// 类可以像函数一样在任何地方定义，比如在数组中
let classList = [
  class {
    constructor(id) {
      this.id_ = id;
      console.log(`instance ${this.id_}`);
    }
  },
];
function createInstance(classDefinition, id) {
  return new classDefinition(id);
}
let foo = createInstance(classList[0], 3141); // instance 3141
```

- 与立即调用函数表达式相似，类也可以立即实例化：

```javascript
// 因为是一个类表达式，所以类名是可选的
let p = new (class Foo {
  constructor(x) {
    console.log(x);
  }
})('bar'); // bar
console.log(p); // Foo {}
```

### 类原型方法

- 可以把原型方法定义在类构造函数中或者类块中，但不能在类块中给原型添加原始值或对象作为成员数据:

```javascript
class Person {
  name: 'Jake';
  colors: ['red', 'blue'];
}
// Uncaught SyntaxError: Unexpected token
```

- 类原型方法等同于对象属性，因此可以使用字符串、符号或计算的值作为键：

```javascript
const symbolKey = Symbol('symbolKey');
class Person {
  stringKey() {
    console.log('invoked stringKey');
  }
  [symbolKey]() {
    console.log('invoked symbolKey');
  }
  ['computed' + 'Key']() {
    console.log('invoked computedKey');
  }
}
let p = new Person();
p.stringKey(); // invoked stringKey
p[symbolKey](); // invoked symbolKey
p.computedKey(); // invoked computedKey
```

### 类访问器

- 类定义也支持获取和设置访问器。语法与行为跟普通对象一样：

```javascript
class Person {
  set name(newName) {
    this.name_ = newName;
  }
  get name() {
    return this.name_;
  }
}
let p = new Person();
p.name = 'Jake';
console.log(p.name); // Jake
```

### 类静态方法

- 可以在类上定义静态方法。这些方法通常用于执行不特定于实例的操作，也不要求存在类的实例。
- 静态成员每个类上只能有一个。
- 静态类成员在类定义中使用 static 关键字作为前缀。
- 在静态成员中，this 引用类自身。

```javascript
class Person {
  constructor() {
    // 添加到 this 的所有内容都会存在于不同的实例上
    this.locate = () => console.log('instance', this);
  }
  // 定义在类的原型对象上
  locate() {
    console.log('prototype', this);
  }
  // 定义在类本身上
  static locate() {
    console.log('class', this);
  }
}
let p = new Person();
p.locate(); // instance, Person {}
Person.prototype.locate(); // prototype, {constructor: ... }
Person.locate(); // class, class Person {}
```

- 静态类方法非常适合作为实例工厂：

```javascript
class Person {
  constructor(age) {
    this.age_ = age;
  }
  sayAge() {
    console.log(this.age_);
  }
  static create() {
    // 使用随机年龄创建并返回一个 Person 实例
    return new Person(Math.floor(Math.random() * 100));
  }
}
console.log(Person.create()); // Person { age_: ... }
```

### 类的原型成员数据和静态成员数据

虽然类定义并不显式支持在原型或类上添加成员数据，但在类定义外部，可以手动添加：

```javascript
class Person {
  sayName() {
    console.log(`${Person.greeting} ${this.name}`);
  }
}
// 在类上定义数据成员
Person.greeting = 'My name is';
// 在原型上定义数据成员
Person.prototype.name = 'Jake';
let p = new Person();
p.sayName(); // My name is Jake
```

### 类的 迭代器与生成器

类定义语法支持在原型和类本身上定义生成器方法：

```javascript
class Person {
  // 在原型上定义生成器方法
  *createNicknameIterator() {
    yield 'Jack';
    yield 'Jake';
    yield 'J-Dog';
  }
  // 在类上定义生成器方法
  static *createJobIterator() {
    yield 'Butcher';
    yield 'Baker';
    yield 'Candlestick maker';
  }
}
let jobIter = Person.createJobIterator();
console.log(jobIter.next().value); // Butcher
console.log(jobIter.next().value); // Baker
console.log(jobIter.next().value); // Candlestick maker
let p = new Person();
let nicknameIter = p.createNicknameIterator();
console.log(nicknameIter.next().value); // Jack
console.log(nicknameIter.next().value); // Jake
console.log(nicknameIter.next().value); // J-Dog
```

因为支持生成器方法，所以可以通过添加一个默认的迭代器，把类实例变成可迭代对象：

```javascript
class Person {
  constructor() {
    this.nicknames = ['Jack', 'Jake', 'J-Dog'];
  }
  *[Symbol.iterator]() {
    yield* this.nicknames.entries();
  }
}
let p = new Person();
for (let [idx, nickname] of p) {
  console.log(nickname);
}
// Jack
// Jake
// J-Dog
```

也可以只返回迭代器实例：

```javascript
class Person {
  constructor() {
    this.nicknames = ['Jack', 'Jake', 'J-Dog'];
  }
  [Symbol.iterator]() {
    return this.nicknames.entries();
  }
}
let p = new Person();
for (let [idx, nickname] of p) {
  console.log(nickname);
}
// Jack
// Jake
// J-Dog
```

## 类继承

ECMAScript 6 新增特性中最出色的一个就是原生支持了类继承机制。**虽然类继承使用的是新语法，但背后依旧使用的是原型链。**
