# 深拷贝浅拷贝的区别，实现一个深拷贝

## 拷贝

解析：

- 原始类型的变量大小固定，保存在栈内存中
- 从一个变量到另一个变量复制原始值会创建该值的第二个副本。
- Object 类型的变量，存储在堆内存上，包含引用值的变量实际上只包含指向相应对象的一个指针，而不是对象本身。
- 从一个变量到另一个变量复制引用值只会复制指针，因此结果是两个变量都指向同一个对象。
- 通过潜拷贝复制的对象引用的是同一个，修改值会相互影响。
- 通过深拷贝复制的对象是不同的副本，修改值不会相互影响。
  javascript 中标准的内置对象复制操作都是潜拷贝：
  Object.create() Object.assign()
  Array.form() Array.prototype.concat() Array.prototype.slice()
  实现深拷贝的方法:
- JSON.stringify() JSON.parse()
- 递归循环对象属性一层一层的复制

## deep clone

简单讲，就是用 for in 去循环对象的属性，把属性一个个复写到一个新的对象上，如果遇到属性值还是对象，那么就做递归操作。

## 参考文档

[javascript 高级程序设计]101

## 写在后面
