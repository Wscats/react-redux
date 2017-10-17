import React from "react";
// 第一个公有组件
class PublicA extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: "我是第一个公有组件"
    }
    this.OK = () => {
      console.log(this.state.content)
    }
    this.getInputValue = (event) => {
      this.setState({content: event.target.value})
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.content}</p>
        <input onChange={this.getInputValue}/>
        <button onClick={this.OK}>ok</button>
      </div>
    )
  }
}

// 第二个公有组件
class PublicB extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.OK = () => {
      console.log("我是第二个公有组件")
    }
  }
  render() {
    return (
      <div>
        第二个公有组件
        <button onClick={this.OK}>ok</button>
      </div>
    )
  }
}
// 默认导出一个，仅且一个
// export default PublicA
// 导出多个
export {PublicA, PublicB}
