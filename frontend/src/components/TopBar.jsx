import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Layout, Menu, Icon } from "antd";
import DropDown from "./DropDown";
import Messages from "./Messages";

const { Header } = Layout;

class TopBar extends Component {
  state = {
    current: window.location.pathname.split("/")[1] || "home",
    loading: false,
    messages: false
  };
  handleClick = e => {
    if (e.key !== "ignore" && e.key !== "messages") {
      this.setState({ current: e.key });
    }
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
          <Menu
            theme="light"
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            style={{
              display: "flex",
              alignItems: "center",
              lineHeight: "48px",
              width: "33.3%"
              /*border: "1px solid red"*/
            }}
          >
            <Menu.Item
              key="home"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Badge offset={[-9, -18]} dot={this.state.current === "home"} />
              <Icon type="home" style={{ fontSize: "1.2rem" }} />
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item
              key="notifications"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Badge
                offset={[-9, -18]}
                dot={this.state.current === "notifications"}
              />
              <Icon type="bell" style={{ fontSize: "1.2rem" }} />
              <Link to="/notifications">Notifications</Link>
            </Menu.Item>
            <Menu.Item
              key="messages"
              onClick={() => this.handleMessages(true)}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Badge
                offset={[-9, -18]}
                dot={this.state.current === "messages"}
              />
              <Icon type="mail" style={{ fontSize: "1.2rem" }} />
              Messages
            </Menu.Item>
          </Menu>
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
            <DropDown />
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
