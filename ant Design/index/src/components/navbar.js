import React, { Component } from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import { PageHeader, Tag, Button, Statistic, Descriptions, Row } from 'antd';
import {  Col } from 'antd';
import Grid from "antd/lib/card/Grid";
import {  Icon } from 'antd';

const ButtonGroup = Button.Group;

class Navbar extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      //   <div style={{ background: '#d9e3f0', padding: '30px' }}>
      //     <Row>
      //       <Col span={8} style={{ float:'left', position : 'relative' }} ><h1> MXN </h1></Col>
      //       <Col span={8} style={{ float:'left' }} >  </Col>
      //       <Col span={8} style={{ float:'left' }} >  </Col>

      //     </Row>
      //   </div>

      // <div style={{ background: '#f5f5f5', padding: '20px' }}>
      // <Row>
      // <Col span={18} push={6}>

      // </Col>
      // <Col span={6} pull={18}>
      //         <span>
      //            <h1>MNZ</h1>
      //         </span>
      // </Col>
      // </Row>
      // </div>
      <div>
      <PageHeader style={{ border: '0.5px solid rgb(235, 237, 240)' }}
            title="CNX"
            subTitle="CNX Hello Changmai"
        extra={[
          <Button href="">About</Button>,
          <Button href="" type="danger"> Login </Button> ]}>
        
        <Descriptions size="small" column={1}>

            <Descriptions.Item ></Descriptions.Item>
            <Descriptions.Item ><h1>WEL COME TO THE HELL!</h1></Descriptions.Item>
        <Descriptions.Item >
            
        </Descriptions.Item>

        </Descriptions>
      
      

    <Row type="flex" justify="space-around" style={{display:Grid}}>   
        <Col span={4}><Button type="link"  href=""><h3>Home</h3></Button></Col>  
        <Col span={4}><Button type="link"  href=""><h3>Don't Click</h3></Button></Col>
        <Col span={4}><Button type="link"  href=""><h3>Blog</h3></Button></Col>
        <Col span={4}><Button type="link"  href="" ><h3>Contant th</h3></Button></Col>
    </Row>
    
    </PageHeader> 
    </div>
    );
  }
}
export default Navbar;
