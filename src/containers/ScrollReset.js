import React from 'react';
import { withRouter } from 'react-router';

//Every Router page request should hit this 'route' which will reset the window scroll
// (React router doesn't do this by default)

class ScrollReset extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollReset);