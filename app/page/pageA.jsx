import React from 'react';
import Basic from '../components/basic.jsx';
import Hello from '../components/hello.jsx';

/** Page A - demonstrates Basic and Hello component usage. */
class PageA extends React.Component {
  render() {
    return (
      <div>
        <p>PageA</p>
        <Basic text="This is a Basic component" />
        <Hello />
      </div>
    );
  }
}

export default PageA;
