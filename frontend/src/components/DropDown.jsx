import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Icon, Menu, Tooltip } from "antd";

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
          <Menu theme="dark" style={{ width: "12rem", marginTop: "0.7rem" }}>
            <Menu.Item>
              <Link to="/profile">
                <h2 style={{ color: "white" }}>Ahmed Zakir</h2>
                <h5 style={{ color: "grey", marginTop: "-0.5rem" }}>
                  @ahmadmzak
                </h5>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/profile">
                <Icon type="user" style={{ marginRight: "0.5rem" }} />
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
            <img
              src="https://placeimg.com/30/30/any"
              alt="profile-pic"
              style={{ borderRadius: "50%" }}
            />
          </a>
        </Tooltip>
      </Dropdown>
    );
  }
}

export default DropDown;
