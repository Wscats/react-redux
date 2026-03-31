import React from 'react';
import { connect } from 'react-redux';

/** Basic component - demonstrates props passing and Redux connection. */
class Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text || 'Default text',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.handleSubmit(event);
  }

  render() {
    return (
      <div style={{ border: '1px solid blue', padding: '20px', marginBottom: '20px' }}>
        <p>{this.state.text}</p>
        <p>{this.props.name}</p>
        <input onChange={this.handleSubmit} />
      </div>
    );
  }
}

/** Map Redux state to component props. */
const mapStateToProps = (state) => state;

/** Map dispatch to component props. */
const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (event) => {
    dispatch({
      type: 'SETNAME',
      name: event.target.value,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Basic);