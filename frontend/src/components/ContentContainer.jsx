import React, { Component } from "react";
import { Col, Row } from "antd";

class ContentContainer extends Component {
  render() {
    const { left, center, right, style } = this.props;
    return (
      <Row type="flex" align="top" justify="space-between" className="content">
        {left && (
          <Col xs={{ span: 9 }} lg={{ span: 6 }}>
            <Row>
              <Col span={24} order={1} style={style}>
                {left()}
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 24 }} lg={{ span: 0 }} order={2} style={style} />
            </Row>
          </Col>
        )}
        {center && (
          <Col xs={{ span: 15 }} lg={{ span: 11 }} order={2}>
            {center()}
          </Col>
        )}
        {right && (
          <Col xs={{ span: 0 }} lg={{ span: 6 }} style={style} order={3}>
            {right()}
          </Col>
        )}
      </Row>
    );
  }
}

export default ContentContainer;
