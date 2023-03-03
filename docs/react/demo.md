# react 相关总结

## JSX

::: danger

- JSX 可放表达式 list.map() /函数调用 fn()
- JSX 不可以放 if /for 语句,不可以放对象

:::

---

::: tip

- componetDidMount 可以做 VUE watcher 的事情

```javascript
componetDidMount(preProps){
  if(this.props.count!==preProps.count)
  {
    this.setState({})
  }
}
```

:::

---

::: tip

组件复用就是复用相同的功能  
本质上是复用 state 和 操作 state 的方式  
实现方式有两种

- 1. render props 模式 ：props 传递 render 来告诉组件如何渲染内容，组件内部调用了 props 的 render 来实现自己的 render
- 2. HOC ：一个函数接受原本的组件返回一个增强的组件，用的是包装模式

```javascript
//render props 模式
import React from "react";
class Comp extends React.Component {
  constructor(props) {
    super(props);
    this.state = "我说你好啊！";
  }
  render() {
    return this.props.render(this.state);
  }
}
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Comp
          render={(data) => {
            return <div>{`你说了什么？${data}`}</div>;
          }}
        />
      </div>
    );
  }
}
export default App;
```

```javascript
//render props 模式
import React from "react";
class Comp extends React.Component {
  constructor(props) {
    super(props);
    this.state = "我说你好啊！";
  }
  render() {
    return this.props.children(this.state);
  }
}
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Comp>
          {(data) => {
            return <div>{`你说了什么？${data}`}</div>;
          }}
        </Comp>
      </div>
    );
  }
}

export default App;
```

```javascript
// HOC
import React from "react";

class BaseComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { str: "你说了什么？" };
  }
  render() {
    return (
      <div>{`${this.state.str} ${this.props.str} ${this.props.other}`}</div>
    );
  }
}

const withComp = (WrappedComponent) => {
  class Comp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { str: "我说你好啊" };
    }
    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  }
  Comp.displayName = `withComp(${getDisplayName(WrappedComponent)})`;
  return Comp;
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

const EnhanceComp = withComp(BaseComp);

class App extends React.Component {
  render() {
    return <div className="container">{<EnhanceComp other="Nice" />}</div>;
  }
}

export default App;
```

:::
