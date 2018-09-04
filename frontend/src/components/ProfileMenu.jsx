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
    console.log(window.pageYOffset);
    if (!this.state.sticky && window.pageYOffset >= this.props.sticky) {
      this.setState({ sticky: true });
      console.log("Ewww sticky...");
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
      top: `${this.props.sticky}`,
      display: "flex",
      justifyContent: "flex-start",
      margin: "0",
      alignItems: "center",
      lineHeight: "2.9rem"
    };
    const menuStyle = {
      position: "relative",
      height: "2.9rem",
      zIndex: "1",
      backgroundColor: "white",
      marginTop: "2em",
      top: `${this.props.sticky}`,
      display: "flex",
      justifyContent: "flex-start",
      margin: "0",
      alignItems: "center",
      lineHeight: "3rem"
      //border: "1px solid green"
      //boxShadow: "0 1px 0 rgba(0,0,0,0.23)"
    };
    const stickyStyle = {
      position: "fixed",
      marginTop: "-130px"
      //width: "100vw"
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
      <Col>
        <Row
          type="flex"
          align="bottom"
          //justify="space-between"
          style={{
            //display: "flex",
            //alignItems: "flex-end",
            //justifyContent: "center",
            backgroundColor: "#1890ff",
            height: "220px"
          }}
        >
          <Col span={24} />
        </Row>
        <Row
          type="flex"
          align="bottom"
          //justify="space-between"
          style={{
            //display: "flex",
            //alignItems: "flex-end",
            //justifyContent: "center",
            backgroundColor: "white",
            height: "3.1rem",
            lineHeight: "3.1rem",
            margin: "0 auto"
            //boxShadow: "0 1px 1px rgba(0,0,0,0.16)"
            //border: "1px solid yellow"
          }}
        >
          <div
            style={{
              width: "1200px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center"
            }}
          >
            <Col span={6} order={1} style={{ ...style }}>
              <div
                style={{
                  width: "210px",
                  height: "210px",
                  border: "5px solid white",
                  marginBottom: "100px",
                  borderRadius: "50%"
                }}
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
              /*style={{
display: "flex",
alignItems: "center",
justifyContent: "flex-start",
height: "2.9rem",
paddingTop: "0.2rem"
}}*/
            >
              <Menu
                mode="horizontal"
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                style={
                  this.state.sticky ? { ...stickyStyle, menuStyle } : menuStyle
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
