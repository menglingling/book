# JS 创建对象的几种模式

## 工厂模式

```javascript
function createPerson(name, age, job) {
  let o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function () {
    console.log(this.name);
  };
  return o;
}
let person1 = createPerson("Nicholas", 29, "Software Engineer");
let person2 = createPerson("Greg", 27, "Doctor");
```

- 优点：
  可以通过调用工厂函数批量创建新对象
- 缺点：
  无法知道新对象的数据类型

## 构造函数模式

```javascript
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    console.log(this.name);
  };
}
let person1 = new Person("Nicholas", 29, "Software Engineer");
let person2 = new Person("Greg", 27, "Doctor");
person1.sayName(); // Nicholas
person2.sayName(); // Greg
/////////
console.log(person1 instanceof Object); // true
console.log(person1 instanceof Person); // true
console.log(person2 instanceof Object); // true
console.log(person2 instanceof Person); // true
```

- 优点：
  可以通过 instanceof 来确定实例对象的类型，原型链上的也算
- 缺点：
  - 公共方法写在构造函数内部，每次创建新对象时，公共方法都被重复重新创建（因为 JS 中函数也是对象，每次定义函数时，都会初始化一个对象）
  - 把函数定义到构造函数内部，函数实现放在构造函数外部，又会使自定义类型的代码不能很好的聚集在一起

## 原型模式

```javascript
let Person = function () {};
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
  console.log(this.name);
};
let person1 = new Person();
person1.sayName(); // "Nicholas"
let person2 = new Person();
person2.sayName(); // "Nicholas"
console.log(person1.sayName == person2.sayName); // true

///////// 判断原型
console.log(Person.prototype.isPrototypeOf(person1)); // true
console.log(Person.prototype.isPrototypeOf(person2)); // true
/////////获取原型
console.log(Object.getPrototypeOf(person1) == Person.prototype); // true
console.log(Object.getPrototypeOf(person1).name); // "Nicholas"
////////设置原型 ，会造成性能下降，尽量不用，用Object.create 代替
Object.setPrototypeOf(person, { height: 1.5 });
let obj = Object.create({});
/////hasOwnProperty()方法用于确定某个属性是在实例上还是在原型对象上
console.log(person1.hasOwnProperty("name")); // false
```

- 优点：
  原型模式定义的属性和方法是由所有实例共享的
- 缺点：
  - 子类型在实例化时不能给父类型的构造函数传参
  - 因为属性方法所有实例共享，对于方法是好的，但是每个实例应该有自己的属性。可以通过在实例上添加同名属性来简单地遮蔽原型上的属性

```javascript
function Person() {}
let friend = new Person();
Person.prototype = {
  constructor: Person,
  name: "Nicholas",
  age: 29,
  job: "Software Engineer",
  sayName() {
    console.log(this.name);
  },
};
friend.sayName(); // 错误
```

注意点：

- 以对象字面量方式创建原型方法会破坏之前的原型链，因为这相当于重写了原型链。会重写构造函数的原型，需要显示的利用`constructor: Person, `将原型的 constructor 属性指回 Person
- 重写整个原型会切断最初原型与构造函数的联系，但实例引用的仍然是最初的原型，所以 friend.sayName(); // 错误。.
