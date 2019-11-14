import React, { Component } from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import { Row, Col } from "antd";

class Navbar extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div style={{ background: '#F47373', padding: '30px' }}>
        <Row>
          <Col span={24}>col-12</Col>
        
        </Row>
      </div>
    );
  }
}
export default Navbar;
