import React, { Component } from "react";
import { Carousel } from "antd";
import { Card } from "antd";
import { Row, Col } from "antd";
import { Timeline, Icon } from "antd";
import "antd/dist/antd.css";

import { Rate } from 'antd';


const { Meta } = Card;

class Layout extends Component {
  render() {
    return (
      <div>
        <Carousel autoplay>
          <div>

            <img
              alt="example"
              src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
          </div>

          <div>
            <img
              alt="example"
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            />
          </div>

          <div> 
            <img
              alt="example"
              src="https://images.unsplash.com/photo-1514995669114-6081e934b693?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            />
          </div>

          <div>
            <img
              alt="example"
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
          </div>
        </Carousel>
        <br />
        <br />
        <br />


        {/* card */}
        
        <br />

        {/* node*/}
    <p>
        <Timeline mode="alternate" style={{}}>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item color="green">
            Solve initial network problems 2015-09-01
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="clock-circle-o" style={{ fontSize: "16px" }} />}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Timeline.Item>
          <Timeline.Item color="red">
            Network problems being solved 2015-09-01
          </Timeline.Item>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item
            dot={<Icon type="clock-circle-o" style={{ fontSize: "16px" }} />}
          >
            Technical testing 2015-09-01
          </Timeline.Item>
          <Rate allowHalf defaultValue={4} />
          
        </Timeline>
        </p>

        
        
       
      </div>
    );
  }
}

export default Layout;
