import React from 'react';

/** Regular expression to test for Chinese characters. */
const CHINESE_CHAR_REGEX = /[^\u4e00-\u9fa5]/;

/**
 * Page E - demonstrates React component lifecycle methods.
 * Uses shouldComponentUpdate to conditionally prevent re-renders.
 */
class PageE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Lifecycle Demo',
    };
    this.handleInputChange = (event) => {
      this.setState({ name: event.target.value });
    };
    this.paragraphRef = React.createRef();
  }

  shouldComponentUpdate() {
    // Only re-render if the name contains Chinese characters
    return !CHINESE_CHAR_REGEX.test(this.state.name);
  }

  render() {
    return (
      <div>
        <input onChange={this.handleInputChange} />
        <p ref={this.paragraphRef}>{this.state.name}</p>
      </div>
    );
  }
}

PageE.defaultProps = {
  name: 'ABCDEFG',
};

export default PageE;
