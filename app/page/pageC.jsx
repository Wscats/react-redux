import React from 'react';
import './pageC.css'
class PageB extends React.Component {
  constructor(props) {
    super(props);
    // 设置 initial state
    this.state = {
      name: "Oaoafly",
      bool: true,
      htmlArr: [< p > a < /p>, <p>b</p >],
      arr: [
        {
          name: "Oaoafly",
          skill: "PS"
        }, {
          name: "Wscats",
          skill: "CSS"
        }, {
          name: "Eno",
          skill: "JS"
        }
      ]
    };
    this.Ok = this.Ok.bind(this);
    this.ed = this.ed.bind(this);
  }
  componentDidMount() {
    //等到虚拟DOM插入文档以后，即componentDidMount生命周期后才能使用这个属性
    this.refs.nihao.style.color = "red";
  }
  Ok() {
    this.setState({
      bool: !this.state.bool
    })
  }
  ed(data) {
    //模拟过滤器
    return data + "ed"
  }
  render() {
    return (
      <div>
        {/*通过ref来获取真是DOM节点*/}
        <p >PageC</p>
        <p style={{
          color: 'red'
        }}>1.函数表达式</p>
        <p>{(function() {
            return "Wscats"
          })()}</p>
        <p>{(function(self) {
            return self.state.name;
          })(this)}</p>
        <p className={(function(self) {
          {/*v-if*/
          }
          if (self.state.bool) {
            return "pagec-blue";
          } else {
            return "pagec-green";
          }
        })(this)}>{(function(self) {
            {/*v-if*/
            }
            if (self.state.bool) {
              return "假";
            } else {
              return "真";
            }
          })(this)}</p>
        <p>
          {/*过滤器*/}
          {this.ed(this.state.name)}
        </p>
        <button onClick={this.Ok}>Ok</button>

        <p ref="nihao">2.ref获取真实节点</p>

        <p style={{
          color: 'red'
        }}>3.布尔值</p>

        <p>{!this.state.bool
            ? "真"
            : "假"}</p>
        <p style={{
          color: 'red'
        }}>4.数组</p>
        {this.state.htmlArr}

        <p style={{
          color: 'red'
        }}>5.渲染列表</p>
        <ul>
          {/*注意只能有一个根节点*/}
          {(function(self) {
            return (
              <div>
                <li>1</li>
                <li>1</li>
              </div>
            );
          })(this)}
        </ul>
        <ul>
          {this.state.arr.map(function(item) {
            {/*可以在里面出现if的条件*/
            }
            if (item.skill == 'PS') {
              return
            } else {
              return <li>{item.name}</li>
            }
          })}
        </ul>
      </div>
    )
  }
}
export default PageB;
