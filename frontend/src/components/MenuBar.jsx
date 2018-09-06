import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge, Icon, Menu } from "antd";

const style = {
  menu: {
    display: "flex",
    alignItems: "center",
    lineHeight: "2.9rem",
    height: "3rem",
    justifyContent: "center",
    borderBottom: "1px solid rgba(30, 30, 30, 0.5)",
    borderRight: "none"
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  iconFont: { fontSize: "1.2rem" },
  badgeMargin: { marginLeft: "-1rem" }
};

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //current: window.location.pathname.split("/")[1]
      messages: props.messages || 0,
      notifications: props.notifications || 0
    };
  }

  handleMessages = () => {
    this.props.handleMessages(true);
    this.props.onLinkClick();
  };

  handleClick = e => {
    /*if (e.key !== "messages") {
      this.setState({ current: e.key });
    }*/
    if (e.key === "notifications") {
      this.setState({ notifications: 0 });
    }
  };

  render() {
    const pathname = window.location.pathname.split("/")[1] || "/";
    const { onLinkClick, mobileVersion, viewportWidth } = this.props;

    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[pathname]}
        mode={mobileVersion ? "vertical" : "horizontal"}
        style={style.menu}
      >
        <Menu.Item key="/" style={style.item}>
          <Link onClick={onLinkClick} to="/">
            <Badge offset={[-9, -18]} dot={pathname === "/"} />
            <Icon type="home" style={style.iconFont} />
            {viewportWidth > 1000 && "Home"}
          </Link>
        </Menu.Item>
        <Menu.Item key="notifications" style={style.item}>
          <Link onClick={onLinkClick} to="/notifications">
            <Badge offset={[-9, -18]} dot={pathname === "notifications"} />
            <Icon type="bell" style={style.iconFont} />
            <Badge
              count={this.state.notifications}
              offset={[-10, -18]}
              style={style.badgeMargin}
            />
            {viewportWidth > 1000 && "Notifications"}
          </Link>
        </Menu.Item>
        <Menu.Item key="messages" style={style.item}>
          <Link onClick={this.handleMessages} to={window.location.pathname}>
            <Badge offset={[-9, -18]} dot={pathname === "messages"} />
            <Icon type="mail" style={style.iconFont} />
            <Badge
              count={this.state.messages}
              offset={[-10, -18]}
              style={style.badgeMargin}
            />
            {viewportWidth > 1000 && "Messages"}
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuBar;
