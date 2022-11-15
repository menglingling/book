# relayout repaint (重排重绘)

- 盒模型相关的 ,如 width height
- 跟字体相关的 , 如 font-size font-weight
- 跟排版相关的, 如 position float display
- 可以改变大小的元素，如 image canvas 等有源资源的标签
- 用户操作可以改变的，如 text-area 标签
  实际开发中：
  - 做动画的时候尽量用 css3 transform 动画
  - 尽量避免一边修改元素，一边获取元素位置，多次或循环交替操作。
  - 用 will-change
