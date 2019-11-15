import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import { Layout } from "antd";
import "antd/dist/antd.css";
import { Statistic, Card, Icon } from "antd";
import { Pagination } from "antd";
import { Progress } from "antd";

const { Meta } = Card;

class Footer extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<Icon type="arrow-up" />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={<Icon type="arrow-down" />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
        {/* <Layout>
        <Footer>Footer</Footer>
      </Layout> */}
        <Progress percent={30} status="success" />
        <Progress percent={50} status="active" />
        <Progress percent={70} status="exception" />
        <Progress percent={100} status="active" />
        <Progress percent={50} showInfo={true} />

        <br />
        <p />
        {/* <Row gutter={24}>
          <Col span={4}>
            <Card title="Card title" bordered={false}

                hoverable
                style={{ width: 250 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
            </Card>
          </Col>

          <Col span={4}>
            <Card title="Card title" bordered={false}

              hoverable
                style={{ width: 250 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
            </Card>
          </Col>

          <Col span={4}>
            <Card title="Card title" bordered={false}
            
            
            
            hoverable
            style={{ width: 250 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            />
              
            </Card>
          </Col>
        </Row> */}
      </div>
    );
  }
}

export default Footer;
