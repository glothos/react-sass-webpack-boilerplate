import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Col } from 'reactstrap';

class Sidebar extends Component {
  static propTypes = {
    colSize: PropTypes.number.isRequired,
  }

  render() {
    const { colSize } = this.props;
    return (
      <Col xs={`${colSize}`} style={{ transition: 'all 0.5s' }}>
        <ul className="sidebar" />
      </Col>
    );
  }
}
export default Sidebar;
