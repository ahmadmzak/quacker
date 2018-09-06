import React, { Component } from "react";
import { Col, Row } from "antd";

const contentStyle = {
  paddingTop: "5em",
  margin: "0 auto",
  maxWidth: "1200px",
  minWidth: "270px",
  overflowX: "hidden",
  height: "100%",
  width: "auto",
  backgroundColor: "rgb(230, 230, 230)"
};

class ContentContainer extends Component {
  render() {
    const { left, center, right } = this.props;
    return (
      <Row type="flex" align="top" justify="space-between" style={contentStyle}>
        {left && (
          <Col xs={{ span: 9 }} lg={{ span: 6 }}>
            <Row>
              <Col span={24} order={1}>
                {left()}
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 24 }} lg={{ span: 0 }} order={2} />
            </Row>
          </Col>
        )}
        {center && (
          <Col xs={{ span: 15 }} lg={{ span: 11 }} order={2}>
            {center()}
          </Col>
        )}
        {right && (
          <Col xs={{ span: 0 }} lg={{ span: 6 }} order={3}>
            {right()}
          </Col>
        )}
      </Row>
    );
  }
}

export default ContentContainer;
