import React, { Component } from "react";
import MenuBar from "./MenuBar";
import { Icon, Popover } from "antd";
//import throttle from "lodash.throttle";

class ResponsiveMenuBar extends Component {
  state = {
    viewportWidth: 0,
    menuVisibility: false
  };

  componentDidMount() {
    this.saveViewportDimensions();
    window.addEventListener("resize", this.saveViewportDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.saveViewportDimensions);
  }

  handleMenuVisibility = () =>
    this.setState({ menuVisibility: !this.state.menuVisibility });

  saveViewportDimensions = () =>
    //throttle(() => {
    this.setState({
      viewportWidth: window.innerWidth
    });
  //}, 500);

  render() {
    const { handleMessages } = this.props;

    if (this.state.viewportWidth >= 576) {
      return (
        <MenuBar
          viewportWidth={this.state.viewportWidth}
          handleMessages={handleMessages}
          onLinkClick={this.handleMenuVisibility}
        />
      );
    }
    return (
      <Popover
        content={
          <MenuBar
            mobileVersion
            viewportWidth={this.state.viewportWidth}
            handleMessages={handleMessages}
            onLinkClick={this.handleMenuVisibility}
          />
        }
        trigger="click"
        placement="bottom"
        visible={this.state.menuVisibility}
        onVisibleChange={this.handleMenuVisibility}
      >
        <Icon type="bars" style={{ fontSize: "1.3rem" }} />
      </Popover>
    );
  }
}

export default ResponsiveMenuBar;
