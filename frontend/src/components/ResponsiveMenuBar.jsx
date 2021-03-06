import React, { Component } from "react";
import MenuBar from "./MenuBar";
import { Icon, Popover } from "antd";
//import throttle from "lodash.throttle";

const style = {
  hamburgerSize: { fontSize: "1.3rem" }
};

class ResponsiveMenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewportWidth: 0,
      menuVisibility: false
    };
  }

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
    const mobileVersion = this.state.viewportWidth < 576;
    const Menu = (
      <MenuBar
        {...this.props}
        mobileVersion={mobileVersion}
        viewportWidth={this.state.viewportWidth}
        handleMessages={handleMessages}
        onLinkClick={this.handleMenuVisibility}
      />
    );
    return !mobileVersion ? (
      Menu
    ) : (
      <Popover
        content={Menu}
        trigger="click"
        placement="bottom"
        visible={this.state.menuVisibility}
        onVisibleChange={this.handleMenuVisibility}
      >
        <Icon type="bars" style={style.hamburgerSize} />
      </Popover>
    );
  }
}

export default ResponsiveMenuBar;
