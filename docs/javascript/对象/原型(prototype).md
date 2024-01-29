# 原型

## 一些基本概念

- javascript 的每一个对象都有 prototype 属性指向原型
- 原型之上还有原型
- 正常的原型链都会终止于 Object 的原型对象（即 Object.prototype ）
- Object 原型的原型是 null
- 原型是 javascript 继承的主要方式

## 构造函数 实例 原型 之间的关系

- 构造函数的 `prototype` 属性指向原型
- 反之原型的 `constructor` 属性指回构造函数
- 构造函数可以 new 出实例
- 实例在浏览器中可通过`_proto_`属性访问原型,本身没有访问原型的标准方式
