import React, { Component } from "react";
import { Button, Input, Row, Col } from "antd";

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
        justify="center"
        style={{
          backgroundColor: "white",
          padding: `${this.props.expandable ? "1rem" : "0"}`,
          width: "100%"
        }}
      >
        <Col span={24}>
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
              <Button type="primary">Quack</Button>
            </div>
          )}
        </Col>
      </Row>
    );
  }
}

export default Quack;
