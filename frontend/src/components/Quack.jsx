import React, { Component } from "react";
import { Button, Input } from "antd";

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
      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          padding: `${this.props.expandable ? "1rem" : "0"}`
        }}
      >
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
      </div>
    );
  }
}

export default Quack;
