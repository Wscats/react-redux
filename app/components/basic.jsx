import React from 'react';
import store from "../store.js"
// React component
class Basic extends React.Component {
  constructor(props) {
    super(props);
    // 设置 initial state
    this.state = {
      text: props.initialValue || 'Hello Wscats',
      name: "这是第一个组件"
    };
    // ES6 类中函数必须手动绑定
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    var self = this;
    store.subscribe(function() {
      console.log(store.getState())
      self.setState({name: store.getState().name})
    })
  }
  handleSubmit(event) {}
  render() {
    const {value, onIncreaseClick} = this.props
    return (
      <div>{this.state.name}</div>
    )
  }
}

export default Basic;
