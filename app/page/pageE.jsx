import React from "react";
class PageE extends React.Component {
  // 构造函数，在创建组件的时候调用一次
  constructor(props) {
    super(props);
    this.state = {
      name: "生命周期"
    }
    this.getInputValue = (event) => {
      this.setState({name: event.target.value})
    }
  }
  // 创建组件的时候调用一次，这里不能用ref，因为还没挂载
  // 如果在这个函数里面调用setState，本次的render函数可以看到更新后的state，并且只渲染一次
  componentWillMount() {
    console.log("--------------componentWillMount----------------")
    console.log(this.refs)
    console.log(this.state)
  }
  //在组件挂载之后调用一次。这个时候，子主键也都挂载好了，可以在这里使用refs
  componentDidMount() {
    console.log("--------------componentDidMount----------------")
    console.log(this.refs)
    console.log(this.state)
  }
  // props是父组件传递给子组件的。父组件发生render的时候子组件就会调用componentWillReceiveProps（不管props有没有更新，也不管父子组件之间有没有数据交换）
  componentWillReceiveProps() {
    console.log("--------------componentWillReceiveProps----------------")
    console.log(this.refs)
    console.log(this.state)
  }
  // 组件挂载之后，每次调用setState后都会调用shouldComponentUpdate判断是否需要重新渲染组件。默认返回true，需要重新render。在比较复杂的应用里，有一些数据的改变并不影响界面展示，可以在这里做判断，优化渲染效率
  shouldComponentUpdate() {
    console.log("--------------shouldComponentUpdate----------------")
    // 这个布尔值将决定是否触发componentWillUpdate的生命周期
    return true
  }
  componentWillUpdate() {
    console.log("--------------componentWillUpdate----------------")
    console.log(this.refs)
    console.log(this.state)
  }
  componentDidUpdate() {
    console.log("--------------componentDidUpdate----------------")
    console.log(this.refs)
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <input onChange={this.getInputValue}/>
        <p ref="p">{this.state.name}</p>
      </div>
    )
  }
}
export default PageE
