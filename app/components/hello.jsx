import React from 'react';
import store from "../store.js"
// React component
class Basic extends React.Component {
  constructor(props) {
    super(props);
    // 设置 initial state
    this.state = {
      text: "这是一个hello组件"
    };
    // ES6 类中函数必须手动绑定
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    console.log(this.state.text)
    store.dispatch({
      type: 'SETNAME',
      //传递值到action中，并修改store
      name: "Wscats"
    })
  }
  render() {
    return (
      <div>
        <p>{this.state.text}</p>
        <button onClick={this.handleSubmit}>Ok</button>
      </div>
    )
  }
}
export default Basic;
