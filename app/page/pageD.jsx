import React from 'react';
import {PublicA, PublicB} from "../components/public.jsx";
class PageB extends React.Component {
  constructor(props) {
    super(props);
    // 设置 initial state
    this.state = {};

  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <p>单JSX文件导出多个组件</p>
        <PublicA/>
        <PublicB/>
      </div>
    )
  }
}
export default PageB;
