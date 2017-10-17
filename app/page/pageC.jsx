import React from 'react';
import './pageC.css'
class PageB extends React.Component {
  constructor(props) {
    super(props);
    // 设置 initial state
    this.state = {
      name: "Oaoafly",
      bool: true,
      //注意数组里面的html元素是没有双引号的
      //还有注意渲染数组里面的html结构，必须要有主键key，不然会有警告
      htmlArr: [< p key = "1" > a < /p>, <h1 key = "2">b</h1 >],
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
      ],
      html: "<p>这是一段<span style='color:red'>HTML</span></p>"
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
        }}>3.布尔值 v-if</p>

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
          {this.state.arr.map(function(item, i) {
            {/*可以在里面出现if的条件*/
            }
            if (item.skill == 'PS') {
              return
            } else {
              return <li key={i}>{item.name}</li>
            }
          })}
        </ul>
        <p style={{
          color: 'red'
        }}>6.标签渲染
        </p>
        {/*注意输出的<p>标签是没有双引号*/}
        <div>{< p > {
            this.state.name
          } < /p>}</div>
        <p style={{
          color: 'red'
        }}>利用dangerouslySetInnerHTML方法
        </p>
        <div>{this.state.bool
            ? <h1>真</h1>
            : <h1>假</h1>}</div>
        {/*React默认会进行HTML的转义，避免XSS攻击，如果要不转义，可以这么写，可以把富文本this.state.html渲染到页面上*/}
        <div dangerouslySetInnerHTML={{
          __html: this.state.html
        }}></div>
      </div>
    )
  }
}
export default PageB;
