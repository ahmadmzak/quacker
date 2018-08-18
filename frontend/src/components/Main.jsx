import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "antd";

const buttonStyle = { width: "22rem" };
const iconStyle = { fontSize: "3rem", color: "#1890ff" };
const textStyle = { color: "white", fontWeight: "bold" };
const divStyle = { display: "flex", flexDirection: "column" };

class Main extends Component {
  render() {
    return (
      <div
        style={{
          ...divStyle,
          alignItems: "center",
          marginTop: "40vh"
        }}
      >
        <div style={{ ...divStyle, alignItems: "flex-start", width: "22rem" }}>
          <Icon type="yuque" style={iconStyle} />
          <h1 style={{ ...textStyle, marginBottom: "3rem" }}>
            See what's happening in the world right now
          </h1>
        </div>
        <div style={divStyle}>
          <h2 style={textStyle}>Join Quacker today.</h2>
          <Link to="/signup">
            <Button
              type="primary"
              style={{ ...buttonStyle, ...textStyle, marginBottom: "1rem" }}
            >
              Sign Up
            </Button>
          </Link>
          <Link to="/login">
            <Button style={{ ...buttonStyle, fontWeight: "bold" }}>
              Log in
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Main;
