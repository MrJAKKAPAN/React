import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import { Layout } from 'antd';
import "antd/dist/antd.css";

class Footer extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      
      <div>
        <Layout>
        <Footer>Footer</Footer>
      </Layout>
      </div>
    );
    }
    }

export default Footer;
