import React from 'react';
import { connect } from 'react-redux';

//定义组件
class Basic extends React.Component {
	constructor(props) {
		//继承与来自外部传进来的props
		super(props);
		// 设置 initial state
		this.state = {
			// 设置一个默认的props，可以通过<Basic props="xxx" />传进来获取
			text: props.text || '哈哈哈',
		};
		// ES6 类中函数必须手动绑定
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		console.log(this)
	}
	handleSubmit(event) {
		//借助于组件来触发，但是要注意要把event继续带过去
		this.props.handleSubmit(event)
	}
	render() {
		return(
			<div style={{border: '1px solid blue', padding: '20px', marginBottom: '20px'}}>
				{/* 样式通过style={{}}的方法定义，里面的对象的属性值要用驼峰的写法 */}
		        <p>{this.state.text}</p>
		        <p>{this.props.name}</p>
        		<input onChange={this.handleSubmit} />
     		 </div>
		)
	}
}

export default connect((state) => {
	//把store里面的state共享到组件
	//组件里面通过this.props就可以直接获取该state的值
	return state
}, (dispatch) => {
	//触发更改store里面的state
	//组件里面通过this.props就可以直接获取该方法
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
})(Basic);