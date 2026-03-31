import React from 'react';
import { PublicA, PublicB } from '../components/public.jsx';

/** Page D - demonstrates exporting multiple components from a single JSX file. */
class PageD extends React.Component {
  render() {
    return (
      <div>
        <p>Multiple components from a single JSX file</p>
        <PublicA />
        <PublicB />
      </div>
    );
  }
}

export default PageD;
