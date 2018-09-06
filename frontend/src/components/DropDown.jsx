import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Avatar, Dropdown, Icon, Menu, Tooltip } from "antd";

const style = {
  menu: { width: "12rem", marginTop: "0.7rem" },
  username: { color: "grey", marginTop: "-0.5rem" },
  icon: { marginRight: "0.5rem" }
};

class DropDown extends Component {
  state = {
    tooltip: false
  };
  disableTooltip = () => {
    if (this.state.tooltip) this.setState({ tooltip: false });
  };
  toggleTooltip = () => {
    this.setState({ tooltip: !this.state.tooltip });
  };
  render() {
    return (
      <Dropdown
        placement="bottomRight"
        trigger={["click"]}
        onVisibleChange={this.disableTooltip}
        overlay={
          <Menu style={style.menu}>
            <Menu.Item>
              <Link to="/profile">
                <h2>Ahmed Zakir</h2>
                <h5 style={style.username}>@ahmadmzak</h5>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/profile">
                <Icon type="user" style={style.icon} />
                Profile
              </Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item>
              <Link to="/" onClick={() => this.props.logOut()}>
                Log out
              </Link>
            </Menu.Item>
          </Menu>
        }
      >
        <Tooltip
          placement="bottom"
          visible={this.state.tooltip}
          trigger="hover"
          title="Profile and settings"
          onVisibleChange={this.toggleTooltip}
        >
          <a>
            <Avatar icon="user" />
          </a>
        </Tooltip>
      </Dropdown>
    );
  }
}

export default DropDown;
