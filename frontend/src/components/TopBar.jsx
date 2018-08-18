import React, { Component } from "react";
import { Button, Layout, Icon } from "antd";
import MenuBar from "./MenuBar";
import DropDown from "./DropDown";
import Messages from "./Messages";

const { Header } = Layout;

class TopBar extends Component {
  state = {
    loading: false,
    messages: false
  };
  handleMessages = bool => {
    this.setState({ messages: bool });
  };
  render() {
    return (
      <Header
        style={{
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          zIndex: "1",
          width: "100%",
          height: "48px",
          backgroundColor: "white"
        }}
      >
        <div
          style={{
            width: "1200px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <MenuBar handleMessages={this.handleMessages} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "33.3%"
            }}
          >
            {this.state.loading ? (
              <Icon type="loading" />
            ) : (
              <a href="/">
                <Icon type="yuque" style={{ fontSize: "1.3rem" }} />
              </a>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "33.3%",
              marginDown: "1rem"
            }}
          >
            <DropDown logOut={this.props.logOut} />
            <Button type="primary" size="default" style={{ margin: "0 1rem" }}>
              Quack
            </Button>
          </div>
          <Messages
            visible={this.state.messages}
            handleMessages={this.handleMessages}
          />
        </div>
      </Header>
    );
  }
}

export default TopBar;
