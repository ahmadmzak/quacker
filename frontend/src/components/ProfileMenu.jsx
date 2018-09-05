import React, { Component } from "react";
import { Avatar, Button, Col, Menu, Row } from "antd";
import { Link } from "react-router-dom";
import ContentContainer from "./ContentContainer";
import Dashboard from "./Dashboard";

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
      display: "flex",
      justifyContent: "flex-start",
      margin: "0",
      alignItems: "center",
      lineHeight: "2.9rem"
    };
    const menuStyle = {
      position: "relative",
      height: "2.95rem",
      zIndex: "2",
      backgroundColor: "white",
      marginTop: "2em",
      top: `${this.props.sticky}`,
      display: "flex",
      justifyContent: "flex-start",
      margin: "0",
      padding: "0",
      alignItems: "center",
      lineHeight: "2.9rem"
    };
    const stickyStyle = {
      position: "fixed",
      zIndex: "100"
    };
    const stickyAvatar = {
      transition: "ease-in 0.1s"
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
    const contentStyle = {
      height: "220px",
      backgroundColor: "white",
      //marginTop: this.state.sticky ? "calc(150px + 4rem)" : "-3rem"
      marginTop: this.state.sticky ? "220px" : "-3rem"
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
          style={
            this.state.sticky
              ? {
                  backgroundColor: "white",
                  height: "2.9rem",
                  lineHeight: "2.9rem",
                  margin: "0 auto",
                  marginTop: "5em",
                  width: "100vw",
                  ...stickyStyle
                }
              : {
                  backgroundColor: "white",
                  height: "2.9rem",
                  lineHeight: "2.9rem",
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
              <div>
                <Avatar
                  icon="user"
                  size={200}
                  style={
                    this.state.sticky
                      ? {
                          border: "5px solid white",
                          borderRadius: "50%",
                          ...stickyAvatar
                        }
                      : {
                          border: "5px solid white",
                          marginBottom: "50px",
                          borderRadius: "50%",
                          transition: "ease-out 0.2s",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }
                  }
                />
                <div
                  style={
                    this.state.sticky
                      ? {
                          margin: "200px 0 400px 0",
                          height: "3rem",
                          visibility: "visible",
                          transition: "all ease-out 0.3s",
                          display: "flex",
                          alignItems: "center"
                        }
                      : {
                          height: "3rem",
                          visibility: "hidden",
                          transition: "all ease-in 0.2s",
                          display: "flex",
                          alignItems: "center"
                        }
                  }
                >
                  <Avatar icon="user" style={{ margin: "0 0.7rem" }} />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                        marginBottom: "-1.7rem"
                      }}
                    >
                      Ahmed Zakir
                    </div>
                    <div>@ahmadmzak</div>
                  </div>
                </div>
              </div>
              {/*})}*/}
            </Col>
            <Col
              span={12}
              order={2}
              style={{
                margin: "0 -1.6rem 0 1.6rem",
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
                <Menu.Item key="quacks">
                  <Link to="/profile" style={menu.item}>
                    <div style={menu.itemString}>Quacks</div>
                    <div style={menu.itemNumber}>53</div>
                  </Link>
                </Menu.Item>
                <Menu.Item key="following">
                  <Link to="/following" style={menu.item}>
                    <div style={menu.itemString}>Following</div>
                    <div style={menu.itemNumber}>32</div>
                  </Link>
                </Menu.Item>
                <Menu.Item key="followers">
                  <Link to="/followers" style={menu.item}>
                    <div style={menu.itemString}>Followers</div>
                    <div style={menu.itemNumber}>86</div>
                  </Link>
                </Menu.Item>
                <Menu.Item key="likes">
                  <Link to="/likes" style={menu.item}>
                    <div style={menu.itemString}>Likes</div>
                    <div style={menu.itemNumber}>95</div>
                  </Link>
                </Menu.Item>
              </Menu>
            </Col>
            <Col
              span={6}
              style={{ ...style, justifyContent: "flex-end" }}
              order={3}
            >
              <Button
                style={{
                  borderRadius: "15px",
                  fontWeight: "600"
                }}
              >
                Edit profile
              </Button>
            </Col>
          </div>
        </Row>
        <ContentContainer
          style={contentStyle}
          left={() => <Dashboard />}
          center={() => (
            <div
              className="content"
              style={{
                ...contentStyle,
                backgroundColor: "red",
                height: "2000px"
              }}
            >
              Aho Desu
            </div>
          )}
          right={() => null}
        />
      </Col>
    );
  }
}

export default ProfileMenu;
