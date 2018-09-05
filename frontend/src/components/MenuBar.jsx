import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge, Icon, Menu } from "antd";

class MenuBar extends Component {
  /*state = {
    current: window.location.pathname.split("/")[1]
  };*/

  handleMessages = () => {
    this.props.handleMessages(true);
    this.props.onLinkClick();
  };

  /*handleClick = e => {
    if (e.key !== "messages") {
      this.setState({ current: e.key });
    }
  };*/

  render() {
    const pathname = window.location.pathname.split("/")[1] || "/";
    const { onLinkClick, mobileVersion, viewportWidth } = this.props;
    const style = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    };
    return (
      <Menu
        //onClick={this.handleClick}
        selectedKeys={[pathname]}
        mode={mobileVersion ? "vertical" : "horizontal"}
        style={{
          display: "flex",
          alignItems: "center",
          lineHeight: "2.9rem",
          height: "3rem",
          justifyContent: "center",
          borderBottom: "1px solid rgba(30, 30, 30, 0.5)",
          borderRight: "none"
        }}
      >
        <Menu.Item key="/" style={style}>
          <Link onClick={onLinkClick} to="/">
            <Badge offset={[-9, -18]} dot={pathname === "/"} />
            <Icon type="home" style={{ fontSize: "1.2rem" }} />
            {viewportWidth > 1000 && "Home"}
          </Link>
        </Menu.Item>
        <Menu.Item key="notifications" style={style}>
          <Link onClick={onLinkClick} to="/notifications">
            <Badge offset={[-9, -18]} dot={pathname === "notifications"} />
            <Icon type="bell" style={{ fontSize: "1.2rem" }} />
            {viewportWidth > 1000 && "Notifications"}
          </Link>
        </Menu.Item>
        <Menu.Item key="messages" style={style}>
          <Link onClick={this.handleMessages} to={window.location.pathname}>
            <Badge offset={[-9, -18]} dot={pathname === "messages"} />
            <Icon type="mail" style={{ fontSize: "1.2rem" }} />
            {viewportWidth > 1000 && "Messages"}
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuBar;
