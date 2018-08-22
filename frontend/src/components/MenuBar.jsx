import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge, Icon, Menu } from "antd";

class MenuBar extends Component {
  state = {
    current: window.location.pathname.split("/")[1] || "home"
  };

  handleMessages = () => {
    this.props.handleMessages(true);
    this.props.onLinkClick();
  };

  handleClick = e => {
    if (e.key !== "messages") {
      this.setState({ current: e.key });
    }
  };

  render() {
    const { onLinkClick, mobileVersion, viewportWidth } = this.props;
    return (
      <Menu
        theme="light"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode={mobileVersion ? "vertical" : "horizontal"}
        style={{
          //display: "flex",
          //alignItems: "center",
          lineHeight: "3rem"
        }}
      >
        <Menu.Item key="home">
          <Link
            onClick={onLinkClick}
            to="/"
            style={
              {
                /*display: "flex", alignItems: "center"*/
              }
            }
          >
            <Badge offset={[-9, -18]} dot={this.state.current === "home"} />
            <Icon type="home" style={{ fontSize: "1.2rem" }} />
            {viewportWidth > 1000 && "Home"}
          </Link>
        </Menu.Item>
        <Menu.Item key="notifications">
          <Link
            onClick={onLinkClick}
            to="/notifications"
            style={
              {
                /*display: "flex", alignItems: "center"*/
              }
            }
          >
            <Badge
              offset={[-9, -18]}
              dot={this.state.current === "notifications"}
            />
            <Icon type="bell" style={{ fontSize: "1.2rem" }} />
            {viewportWidth > 1000 && "Notifications"}
          </Link>
        </Menu.Item>
        <Menu.Item
          key="messages"
          onClick={this.handleMessages}
          style={
            {
              //display: "flex",
              //alignItems: "center"
            }
          }
        >
          <Badge offset={[-9, -18]} dot={this.state.current === "messages"} />
          <Icon type="mail" style={{ fontSize: "1.2rem" }} />
          {viewportWidth > 1000 && "Messages"}
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuBar;
