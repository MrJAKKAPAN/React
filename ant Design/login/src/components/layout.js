import React, { Component } from "react";
import { Carousel } from 'antd';
import "antd/dist/antd.css";

class Layout extends Component {
  render() {
    return (   
      <div>
        <Carousel autoplay>
          <div>
            <h4>Hello word</h4>
            <p> Hello Hello Hello</p>
            <img alt="example" src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"  /> 
          </div>

          <div>
            <h4>Hello word</h4>
            <p> Hello Hello Hello</p>
            <img alt="example" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"  />
          </div>

          <div>
            <h4>Hello word</h4>
            <p> Hello Hello Hello</p>
            <img alt="example" src="https://images.unsplash.com/photo-1514995669114-6081e934b693?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"  />
          </div>

          <div>
            q<h4>Hello word</h4>
            <p> Hello Hello Hello</p>
            <img alt="example" src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1295&q=80"  />
          </div>

        </Carousel>
      </div>
    );
  }
}

export default Layout;
