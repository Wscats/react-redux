import React from 'react';
//import store from "../store.js"
import Basic from "../components/basic.jsx";
import Hello from "../components/hello.jsx";
// React component
class PageA extends React.Component {
  constructor(props) {
    super(props);
    // 设置 initial state
    this.state = {
    };
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
      	<p>PageA</p>
      	{/*传入了一个props，在basic组件里面接受*/}
      	<Basic text="这是一个Basic组件" />
      	<Hello />
      </div>
    )
  }
}

export default PageA;
