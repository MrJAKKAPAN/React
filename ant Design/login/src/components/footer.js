import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

class Footer extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      
      <div style={{ background: '#F47373', padding: '30px' }}> 



<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>     
        {/* <Row>
          <Col  xs={2} sm={4} md={6} lg={8} xl={10}>
            Col
          </Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={4}>
            Col
          </Col>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>
            Col
          </Col>
        </Row> */}

        
      </div>
    );
    }
    }

export default Footer;
