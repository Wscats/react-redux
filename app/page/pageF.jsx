import React from 'react';
import { Route, Link } from 'react-router-dom';

/** Sub-route component displaying the topic ID from URL params. */
const TopicDetail = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

/** Page F - demonstrates nested routing with React Router. */
class PageF extends React.Component {
  render() {
    return (
      <div>
        <p>Nested Routes</p>
        <ul>
          <li><Link to="/pagef/a/a">Sub-route A</Link></li>
          <li><Link to="/pagef/b/b">Sub-route B</Link></li>
        </ul>
        {/* Route params are accessible via match.params */}
        <Route path="/pagef/a/:topicId" component={TopicDetail} />
        <Route path="/pagef/b/:topicId" component={TopicDetail} />
      </div>
    );
  }
}

PageF.defaultProps = {
  name: 'ABCDEFG',
};

export default PageF;
