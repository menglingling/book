# 继承的几种方式

## 原型链

**ECMAScript 的主要继承方式**

- 优点：属性和方法是由所有实例共享的
- 缺点：
  - 原型中包含的引用值会在所有实例间共享
  - 子类型在实例化时不能给父类型的构造函数传参

## 借用构造函数

- 优点：可以在子类构造函数中向父类构造函数传参
- 缺点：构造函数中定义方法，每个实例不能复用

## 组合继承

- 组合继承弥补了原型链和盗用构造函数的不足，是 JavaScript 中使用最多的继承模式。
- 而且组合继承也保留了 instanceof 操作符和 isPrototypeOf()方法识别合成对象的能力。

```javascript
function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}
SuperType.prototype.sayName = function () {
  console.log(this.name);
};
function SubType(name, age) {
  // 继承属性
  SuperType.call(this, name);
  this.age = age;
}
// 继承方法
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function () {
  console.log(this.age);
};
let instance1 = new SubType('Nicholas', 29);
instance1.colors.push('black');
console.log(instance1.colors); // "red,blue,green,black"
instance1.sayName(); // "Nicholas";
instance1.sayAge(); // 29
let instance2 = new SubType('Greg', 27);
console.log(instance2.colors); // "red,blue,green"
instance2.sayName(); // "Greg";
instance2.sayAge(); // 27
```

综合了原型链和盗用构造函数，既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性。

- 使用原型链继承原型上的属性和方法
- 通过盗用构造函数继承实例属性。

## 原型式继承

```javascript
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
////////
let person = {
  name: 'Nicholas',
  friends: ['Shelby', 'Court', 'Van'],
};
let anotherPerson = object(person);
anotherPerson.name = 'Greg';
anotherPerson.friends.push('Rob');
let yetAnotherPerson = object(person);
yetAnotherPerson.name = 'Linda';
yetAnotherPerson.friends.push('Barbie');
console.log(person.friends); // "Shelby,Court,Van,Rob,Barbie"
```

- 原型式继承适用于这种情况：你有一个对象，想在它的基础上再创建一个新对象。
- 你需要把这个对象先传给 object()，然后再对返回的对象进行适当修改。
- ECMAScript 5 通过增加 Object.create()方法将原型式继承的概念规范化了。这个方法接收两个
  参数：作为新对象原型的对象，以及给新对象定义额外属性的对象（第二个可选）。
- 原型式继承非常适合不需要单独创建构造函数，但仍然需要在对象间共享信息的场合。
- 但要记住，属性中包含的引用值始终会在相关对象间共享，跟使用原型模式是一样的。

## 寄生式组合继承

寄生式组合继承可以算是引用类型继承的最佳模式。

- 组合继承其实也存在效率问题。最主要的效率问题就是父类构造函数始终会被调用两次：一次在是
  创建子类原型时调用，另一次是在子类构造函数中调用。本质上，子类原型最终是要包含超类对象的所
  有实例属性，子类构造函数只要在执行时重写自己的原型就行了。

```javascript
function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}
SuperType.prototype.sayName = function () {
  console.log(this.name);
};
function SubType(name, age) {
  SuperType.call(this, name); // 第二次调用 SuperType()
  this.age = age;
}
SubType.prototype = new SuperType(); // 第一次调用 SuperType()
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
  console.log(this.age);
};
```

- 寄生式组合继承的基本模式如下所示：

```javascript
function inheritPrototype(subType, superType) {
  let prototype = object(superType.prototype); // 创建对象
  prototype.constructor = subType; // 增强对象
  subType.prototype = prototype; // 赋值对象
}

function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}
SuperType.prototype.sayName = function () {
  console.log(this.name);
};
function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function () {
  console.log(this.age);
};
```
