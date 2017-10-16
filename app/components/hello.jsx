import React from 'react';
import { connect } from 'react-redux';

//定义样式
let style = {
	div: {
		border: '1px solid red',
		padding: '20px'
	},
	p: {
		color: "green"
	}
}

//定义组件
class Hello extends React.Component {
	constructor(props) {
		super(props);
		// 设置 initial state
		this.state = {
			text: "这是一个hello组件"
		};
		// ES6 类中函数必须手动绑定
	}
	componentDidMount() {
		console.log(this)
	}
	render() {
		return(
			<div style={style.div}>
		        <p>{this.state.text}</p>
		        <p>{this.props.name}</p>
		        <input onChange={this.props.handleSubmit} />
      		</div>
		)
	}
}
export default connect((state) => {
	console.log(state)
	return state
}, (dispatch) => {
	return {
		handleSubmit: (event) => {
			console.log(event.target.value)
			//可以触发多个
			dispatch({
				type: 'SETNAME',
				//传递值到action中，并修改store
				name: event.target.value
			})
		}
	}
})(Hello);