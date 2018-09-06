import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "antd";

const buttonStyle = { width: "22rem" };
const textStyle = { color: "white", fontWeight: "bold" };
const divStyle = { display: "flex", flexDirection: "column" };
const style = {
  main: {
    ...divStyle,
    alignItems: "center",
    marginTop: "40vh"
  },
  icon: { fontSize: "3rem", color: "#1890ff" },
  signupBtn: { ...buttonStyle, ...textStyle, marginBottom: "1rem" },
  loginBtn: { ...buttonStyle, fontWeight: "bold" },
  heading: { ...textStyle, marginBottom: "3rem" },
  header: { ...divStyle, alignItems: "flex-start", width: "22rem" }
};

class Main extends Component {
  render() {
    return (
      <div style={style.main}>
        <div style={style.header}>
          <Icon type="yuque" style={style.icon} />
          <h1 style={style.heading}>
            See what's happening in the world right now
          </h1>
        </div>
        <div style={divStyle}>
          <h2 style={textStyle}>Join Quacker today.</h2>
          <Link to="/signup">
            <Button type="primary" style={style.signupBtn}>
              Sign Up
            </Button>
          </Link>
          <Link to="/login">
            <Button style={style.loginBtn}>Log in</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Main;
