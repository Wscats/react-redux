import React from 'react';
import './pageC.css';

/** Page C - demonstrates expressions, refs, conditionals, lists, and HTML rendering. */
class PageC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Oaoafly',
      bool: true,
      htmlArr: [<p key="1">a</p>, <h1 key="2">b</h1>],
      arr: [
        { name: 'Oaoafly', skill: 'PS' },
        { name: 'Wscats', skill: 'CSS' },
        { name: 'Eno', skill: 'JS' },
      ],
      html: "<p>This is <span style='color:red'>HTML</span> content</p>",
    };
    this.toggleBool = this.toggleBool.bind(this);
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    if (this.containerRef.current) {
      this.containerRef.current.style.color = 'red';
    }
  }

  toggleBool() {
    this.setState((prevState) => ({ bool: !prevState.bool }));
  }

  /** Simple text filter that appends "ed" suffix. */
  applyFilter(data) {
    return data + 'ed';
  }

  render() {
    const { name, bool, htmlArr, arr, html } = this.state;

    return (
      <div>
        <p>PageC</p>

        <p style={{ color: 'red' }}>1. Function expressions</p>
        <p>{(() => 'Wscats')()}</p>
        <p>{name}</p>
        <p className={bool ? 'pagec-blue' : 'pagec-green'}>
          {bool ? 'False' : 'True'}
        </p>
        <p>{this.applyFilter(name)}</p>
        <button onClick={this.toggleBool}>Toggle</button>

        <p ref={this.containerRef}>2. Ref access to DOM node</p>

        <p style={{ color: 'red' }}>3. Boolean conditional (v-if)</p>
        <p>{!bool ? 'True' : 'False'}</p>

        <p style={{ color: 'red' }}>4. Array rendering</p>
        {htmlArr}

        <p style={{ color: 'red' }}>5. List rendering</p>
        <ul>
          {arr
            .filter((item) => item.skill !== 'PS')
            .map((item, i) => (
              <li key={i}>{item.name}</li>
            ))}
        </ul>

        <p style={{ color: 'red' }}>6. Tag rendering</p>
        <div><p>{name}</p></div>

        <p style={{ color: 'red' }}>dangerouslySetInnerHTML</p>
        <div>{bool ? <h1>True</h1> : <h1>False</h1>}</div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  }
}

export default PageC;
