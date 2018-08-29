import React, { Component } from "react";
import { Avatar, Button, Input, Row, Col } from "antd";

const { TextArea } = Input;

class Quack extends Component {
  state = { rows: this.props.expandable ? 1 : 3 };

  expand = () => {
    if (this.props.expandable) this.setState({ rows: 3 });
  };
  shrink = () => {
    if (this.props.expandable) this.setState({ rows: 1 });
  };
  render() {
    return (
      <Row
        type="flex"
        align="top"
        justify="space-between"
        style={{
          backgroundColor: "rgb(208, 232, 255)",
          padding: "1.5em",
          width: "100%"
        }}
      >
        <Col span={2}>
          <Avatar icon="user" />
        </Col>
        <Col md={{ span: 22 }} xs={{ span: 19 }}>
          <TextArea
            rows={this.state.rows}
            maxLength={160}
            placeholder="What's happening?"
            onFocus={this.expand}
            onBlur={this.shrink}
          />
          {this.state.rows === 3 && (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "1rem"
              }}
            >
              <Button type="primary" style={{ borderRadius: "15px" }}>
                Quack
              </Button>
            </div>
          )}
        </Col>
      </Row>
    );
  }
}

export default Quack;
