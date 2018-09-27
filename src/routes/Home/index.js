import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import Sidebar from './components/Sidebar';


class Home extends Component {

  state = {
    sidebarSize: 3,
  }

  onClickElement = () => { 
    this.setState({ sidebarSize: 1 });
  }

  render() {
    const { sidebarSize } = this.state;
    return (
      <div className="home">
        <Container fluid>
          <Row style={{ height: '100%' }}>
            <Sidebar colSize={sidebarSize} />
            <Col className="content-wrapper" xs={{ size: 12 - sidebarSize }}>
              {/* Temporarily inline styling */}
              <Row noGutters style={{ backgroundColor: 'grey', height: '40%', borderRadius: '5px' }}>
                <Col xs="12">
                  <div onClick={this.onClickElement} className="top-animation text-center">
                    {'top animation'}
                  </div>
                </Col>
              </Row>
              <Row noGutters style={{ backgroundColor: 'grey', height: '60%', borderRadius: '5px' }}>
                <Col xs="12">
                  <div className="item-description">
                    {"Adipisicing laboris in ullamco fugiat enim cupidatat qui nulla. Eu est et ad dolor exercitation ea ea incididunt cupidatat mollit aute. Incididunt aute sunt in magna velit ipsum aliqua tempor cupidatat pariatur et ex fugiat. Labore nulla anim aliqua veniam sint occaecat id incididunt quis sunt officia."}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home;
