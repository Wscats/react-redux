import React from "react";
import {Route, Link} from 'react-router-dom'
const Abc = ({match}) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
const Cdf = ({match}) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
class PageE extends React.Component {
  // 构造函数，在创建组件的时候调用一次
  constructor(props) {
    super(props);
    this.state = {
      name: "路由嵌套"
    }
  }
  componentDidMount() {
    console.log(this)
  }
  render() {
    return (
      <div>
        <p ref="p">{this.state.name}</p>
        <ul>
          <li>
            <Link to="/pagef/a/a">子路由A</Link>
          </li>
          <li>
            <Link to="/pagef/b/b">子路由B</Link>
          </li>
        </ul>
        {/*可以通过:xx来接受路由参数，并在组件中用params获取*/}
        <Route path="/pagef/a/:topicId" component={Abc}/>
        <Route path="/pagef/b/:topicId" component={Cdf}/>
      </div>
    )
  }
}
// 默认设置默认的props
PageE.defaultProps = {
  name: 'ABCDEFG'
}
export default PageE
