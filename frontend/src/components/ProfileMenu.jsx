import React, { Component } from "react";
import { Avatar, Button, Col, Menu, Row } from "antd";
import { Link } from "react-router-dom";
//import ContentContainer from "./ContentContainer";

class ProfileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "quacks",
      sticky: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handlePageOffset);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handlePageOffset);
  }
  handleClick = event => {
    this.setState({
      current: event.key
    });
  };
  handlePageOffset = () => {
    if (!this.state.sticky && window.pageYOffset >= this.props.sticky) {
      this.setState({ sticky: true });
    } else if (this.state.sticky && window.pageYOffset < this.props.sticky) {
      this.setState({ sticky: false });
    }
  };
  render() {
    const style = {
      position: "relative",
      height: "2.9rem",
      zIndex: "1",
      backgroundColor: "white",
      marginTop: "2em",
      //top: `${this.props.sticky}`,
      display: "flex",
      justifyContent: "flex-start",
      margin: "0",
      alignItems: "center",
      lineHeight: "2.9rem"
    };
    const menuStyle = {
      position: "relative",
      height: "2.9rem",
      zIndex: "100",
      backgroundColor: "white",
      marginTop: "2em",
      top: `${this.props.sticky}`,
      display: "flex",
      justifyContent: "flex-start",
      margin: "0",
      alignItems: "center",
      lineHeight: "3rem"
    };
    const stickyStyle = {
      position: "fixed",
      //marginTop: "5em",
      zIndex: "100"
    };
    const stickyAvatar = {
      marginTop: "-100%",
      transition: "ease-in 0.2s"
    };
    const menu = {
      item: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        lineHeight: "2.9rem",
        height: "2.9rem"
      },
      itemString: {
        fontSize: "0.7rem",
        marginTop: "-0.4rem",
        fontWeight: "600"
      },
      itemNumber: {
        marginTop: "-1.6rem",
        fontSize: "1.2rem",
        fontWeight: "bold"
      }
    };
    return (
      <Col style={{ position: "relative" }}>
        <Row
          type="flex"
          align="bottom"
          style={
            this.state.sticky
              ? {
                  backgroundColor: "#1890ff",
                  height: "30px",
                  width: "100vw",
                  marginTop: "3em",
                  ...stickyStyle
                }
              : {
                  backgroundColor: "#1890ff",
                  height: "220px"
                }
          }
        >
          <Col span={24} />
        </Row>
        <Row
          type="flex"
          align="bottom"
          //justify="space-between"
          style={
            this.state.sticky
              ? {
                  backgroundColor: "white",
                  height: "3.1rem",
                  lineHeight: "3.1rem",
                  margin: "0 auto",
                  marginTop: "5em",
                  width: "100vw",
                  ...stickyStyle
                }
              : {
                  backgroundColor: "white",
                  height: "3.1rem",
                  lineHeight: "3.1rem",
                  margin: "0 auto"
                }
          }
        >
          <div
            style={{
              width: "1200px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center"
            }}
          >
            <Col span={6} order={1} style={style}>
              <div
                style={
                  this.state.sticky
                    ? {
                        width: "210px",
                        height: "210px",
                        border: "5px solid white",
                        marginBottom: "100px",
                        borderRadius: "50%",
                        ...stickyAvatar
                      }
                    : {
                        width: "210px",
                        height: "210px",
                        border: "5px solid white",
                        marginBottom: "100px",
                        borderRadius: "50%",
                        transition: "ease-in 0.2s"
                      }
                }
              >
                <Avatar icon="user" size={200} />
              </div>
            </Col>
            <Col
              span={12}
              order={2}
              style={{
                margin: "0 0.9rem 0 -0.9rem",
                paddingTop: "0.1rem",
                height: "2.9rem"
              }}
            >
              <Menu
                mode="horizontal"
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                style={
                  this.state.sticky
                    ? {
                        ...stickyStyle,
                        menuStyle,
                        height: "2.8rem",
                        lineHeight: "2.8rem"
                      }
                    : menuStyle
                }
              >
                <Menu.Item>
                  <div />
                </Menu.Item>
                <Menu.Item key="quacks">
                  <Link to="/quacks" style={menu.item}>
                    <div style={menu.itemString}>Quacks</div>
                    <div style={menu.itemNumber}>53</div>
                  </Link>
                </Menu.Item>
                <Menu.Item key="following">
                  <Link to="/following" style={menu.item}>
                    <div style={menu.itemString}>Following</div>
                    <div style={menu.itemNumber}>32</div>{" "}
                  </Link>
                </Menu.Item>
                <Menu.Item key="followers">
                  <Link to="/followers" style={menu.item}>
                    <div style={menu.itemString}>Followers</div>
                    <div style={menu.itemNumber}>86</div>{" "}
                  </Link>
                </Menu.Item>
                <Menu.Item key="likes">
                  <Link to="/likes" style={menu.item}>
                    <div style={menu.itemString}>Likes</div>
                    <div style={menu.itemNumber}>95</div>{" "}
                  </Link>
                </Menu.Item>
              </Menu>
            </Col>
            <Col
              span={6}
              style={{ ...style, justifyContent: "flex-end" }}
              order={3}
            >
              <Button type="primary" style={{ borderRadius: "15px" }}>
                Edit profile
              </Button>
            </Col>
          </div>
        </Row>
      </Col>
    );
    /*return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            backgroundColor: "#1890ff",
            height: "calc(220px + 2.9rem)"
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              height: "2.9rem",
              width: "100%",
              zIndex: "100"
            }}
          >
            <Menu
              mode="horizontal"
              style={this.state.sticky ? { ...stickyStyle, style } : style}
            >
              <Menu.Item>
                <div />
              </Menu.Item>
              <Menu.Item>Quacks</Menu.Item>
              <Menu.Item>Following</Menu.Item>
              <Menu.Item>Followers</Menu.Item>
              <Menu.Item>Likes</Menu.Item>
            </Menu>
            </div>
          </div>
        </div>
      </div>
    );*/
  }
}

export default ProfileMenu;
