import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge, Icon, Menu } from "antd";

class MenuBar extends Component {
  state = {
    current: window.location.pathname.split("/")[1] || "home"
  };
  handleClick = e => {
    if (e.key !== "messages") {
      this.setState({ current: e.key });
    }
  };
  render() {
    return (
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
        <Menu.Item key="home" style={{ display: "flex", alignItems: "center" }}>
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
          onClick={() => this.props.handleMessages(true)}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Badge offset={[-9, -18]} dot={this.state.current === "messages"} />
          <Icon type="mail" style={{ fontSize: "1.2rem" }} />
          Messages
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuBar;
