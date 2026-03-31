import React from 'react';
import { connect } from 'react-redux';

/** Inline styles for the Hello component. */
const styles = {
  container: {
    border: '1px solid red',
    padding: '20px',
  },
  text: {
    color: 'green',
  },
};

/** Hello component - displays text and a Redux-connected input. */
class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'This is a Hello component',
    };
  }

  render() {
    return (
      <div style={styles.container}>
        <p>{this.state.text}</p>
        <p>{this.props.name}</p>
        <input onChange={this.props.handleSubmit} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Hello);