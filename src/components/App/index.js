import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import Header from './Header';
// import Footer from './Footer';


class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props;
    return (
      <div className="app vh_100">
        {/* <Header /> */}
        <div className="app-body">
          <main className="main" id="main">
            {children}
          </main>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
