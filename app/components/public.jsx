import React from 'react';

/** First shared component - editable text with input. */
class PublicA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'First shared component',
    };
    this.handleInputChange = (event) => {
      this.setState({ content: event.target.value });
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.content}</p>
        <input onChange={this.handleInputChange} />
      </div>
    );
  }
}

/** Second shared component - static display. */
class PublicB extends React.Component {
  render() {
    return (
      <div>
        Second shared component
      </div>
    );
  }
}

export { PublicA, PublicB };
