# JavaScript 转换机制

## 数据转换分显示转换和隐式转换

- 显示转换
  - Number
  - parseInt
  - String
  - Boolean
- 隐式转换
  - 发生在比较运算：如 ` == != > < && || !` 等需要 Boolean 值运算的地方
  - 发生在算数运算：如` + - * / %` 需要用到 Number 值运算的地方

## 各种值转 Boolean 类型的规则

| 数据类型  | 转换为 true 的值       | 转换为 false 的值 |
| --------- | ---------------------- | ----------------- |
| Boolean   | true                   | false             |
| String    | 非空字符串             | ""（空字符串）    |
| Number    | 非零数值（包括无穷值） | 0、NaN            |
| Object    | 任意对象               | null              |
| Undefined | N/A（不存在）          | undefined         |

## 各种值转 Number 类型的规则

| 原始值               | 转换结果                                                  |
| -------------------- | --------------------------------------------------------- |
| undefined            | NaN                                                       |
| null                 | 0                                                         |
| true                 | 1                                                         |
| false                | 0                                                         |
| 空字符串             | 0                                                         |
| 非空类数字的字符串   | 相关进制数值                                              |
| 非空非类数字的字符串 | NaN                                                       |
| 具体数值             | 原样返回                                                  |
| NaN                  | NaN                                                       |
| Object               | 先 valueOf() 方法是数值则数值，不是数值再 toString() 方法 |

## 参考文档

[javascript 高级程序设计]

## 写在后面

常用的转换规则大概如上，详细的还需要总结。
