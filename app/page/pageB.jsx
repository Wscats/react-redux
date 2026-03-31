import React from 'react';
import './pageB.css';

/** Page B - demonstrates conditional rendering and timer lifecycle. */
class PageB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ name: 'Content loaded!' });
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div>
        <p>PageB</p>
        {/* Ternary expression */}
        <p className="pageb-p">1. Ternary operator</p>
        <p>{this.state.name ? this.state.name : 'Loading...'}</p>
        {/* Logical OR operator */}
        <p className="pageb-p">2. OR operator</p>
        <p>{this.state.name || 'Loading...'}</p>
      </div>
    );
  }
}

export default PageB;
