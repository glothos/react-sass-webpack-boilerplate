import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Main extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default Main;
