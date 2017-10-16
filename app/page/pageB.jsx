import React from 'react';
import './pageB.css';
class PageB extends React.Component {
  constructor(props) {
    super(props);
    // 设置 initial state
    this.state = {
    	name:""
    };
  }
  componentDidMount() {
  	var self = this;
  	setTimeout(function(){
  		self.setState({
  			name:"我是谁，我在哪里？"
  		})
  	},1000)
  }
  render() {
    return (
      <div>
      	<p>PageB</p>
      	{/*三元操作表达式*/}
      	<p className="pageb-p">1.三元操作</p>
      	<p>{this.state.name?this.state.name:"加载中"}</p>
      	{/*运算符||*/}
      	<p className="pageb-p">2.运算符||</p>
      	<p>{this.state.name||"加载中"}</p>
      </div>
    )
  }
}
export default PageB;
