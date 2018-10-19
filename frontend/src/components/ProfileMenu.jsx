import React, { Component } from "react";
import { Avatar, Button, Col, Menu, Row } from "antd";
import { Link } from "react-router-dom";
import ContentContainer from "./ContentContainer";
import Dashboard from "./Dashboard";

const column = {
  position: "relative",
  height: "2.9rem",
  zIndex: "1",
  backgroundColor: "white",
  marginTop: "2em",
  display: "flex",
  margin: "0",
  alignItems: "center",
  lineHeight: "2.9rem"
};
const sticky = {
  position: "fixed",
  zIndex: "100"
};
const menuNonSticky = {
  position: "relative",
  height: "2.95rem",
  zIndex: "2",
  marginTop: "2em",
  display: "flex",
  justifyContent: "flex-start",
  margin: "0",
  padding: "0",
  alignItems: "center",
  lineHeight: "2.9rem",
  backgroundColor: "transparent"
};
const style = {
  colLeft: {
    ...column,
    justifyContent: "flex-start"
  },
  colRight: {
    ...column,
    justifyContent: "flex-end"
  },
  colCenter: {
    margin: "0 -1.6rem 0 1.6rem",
    height: "2.9rem"
  },
  menuSticky: {
    ...sticky,
    ...menuNonSticky,
    height: "2.8rem",
    lineHeight: "2.8rem"
  },
  menuItem: {
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
  },
  editBtn: {
    borderRadius: "15px",
    fontWeight: "600"
  },
  avatarBigSticky: {
    border: "5px solid white",
    borderRadius: "50%",
    transition: "ease-in 0.1s"
  },
  avatarBigNonSticky: {
    border: "5px solid white",
    marginBottom: "50px",
    borderRadius: "50%",
    transition: "ease-out 0.2s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  avatarSmallSticky: {
    margin: "200px 0 400px 0",
    height: "3rem",
    visibility: "visible",
    transition: "all ease-out 0.3s",
    display: "flex",
    alignItems: "center"
  },
  avatarSmallNonSticky: {
    height: "3rem",
    visibility: "hidden",
    transition: "all ease-in 0.2s",
    display: "flex",
    alignItems: "center"
  },
  avatarSmall: { margin: "0 0.7rem" },
  nameDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  name: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    marginBottom: "-1.7rem"
  },
  profileContainer: {
    width: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center"
  },
  headerSticky: {
    backgroundColor: "white",
    height: "2.9rem",
    lineHeight: "2.9rem",
    margin: "0 auto",
    marginTop: "5em",
    width: "100vw",
    ...sticky
  },
  headerNonSticky: {
    backgroundColor: "white",
    height: "2.9rem",
    lineHeight: "2.9rem",
    margin: "0 auto",
    width: "100%",
    maxWidth: "1200px"
  },
  backgroundSticky: {
    backgroundColor: "#1890ff",
    height: "30px",
    width: "100vw",
    marginTop: "3em",
    ...sticky
  },
  backgroundNonSticky: {
    backgroundColor: "#1890ff",
    height: "220px"
  }
};

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
    const sideContent = {
      height: "220px",
      backgroundColor: "white",
      marginTop: this.state.sticky ? "220px" : "-3rem"
    };
    const centerContent = {
      backgroundColor: "red",
      height: "2000px",
      marginTop: this.state.sticky ? "220px" : "-3rem"
    };
    return (
      <Col>
        <Row
          type="flex"
          align="bottom"
          style={
            this.state.sticky
              ? style.backgroundSticky
              : style.backgroundNonSticky
          }
        >
          <Col span={24} />
        </Row>
        <Row
          type="flex"
          align="bottom"
          style={this.state.sticky ? style.headerSticky : style.headerNonSticky}
        >
          <div style={style.profileContainer}>
            <Col span={6} order={1} style={style.colLeft}>
              <div>
                <Avatar
                  icon="user"
                  size={200}
                  style={
                    this.state.sticky
                      ? style.avatarBigSticky
                      : style.avatarBigNonSticky
                  }
                />
                <div
                  style={
                    this.state.sticky
                      ? style.avatarSmallSticky
                      : style.avatarSmallNonSticky
                  }
                >
                  <Avatar icon="user" style={style.avatarSmall} />
                  <div style={style.nameDiv}>
                    <div style={style.name}>Ahmed Zakir</div>
                    <div>@ahmadmzak</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={12} order={2} style={style.colCenter}>
              <Menu
                mode="horizontal"
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                style={
                  this.state.sticky
                    ? {
                        ...style.menuSticky,
                        top: `${this.props.sticky}`
                      }
                    : { ...menuNonSticky, top: `${this.props.sticky}` }
                }
              >
                <Menu.Item key="quacks">
                  <Link to="/profile" style={style.menuItem}>
                    <div style={style.itemString}>Quacks</div>
                    <div style={style.itemNumber}>53</div>
                  </Link>
                </Menu.Item>
                <Menu.Item key="following">
                  <Link to="/following" style={style.menuItem}>
                    <div style={style.itemString}>Following</div>
                    <div style={style.itemNumber}>32</div>
                  </Link>
                </Menu.Item>
                <Menu.Item key="followers">
                  <Link to="/followers" style={style.menuItem}>
                    <div style={style.itemString}>Followers</div>
                    <div style={style.itemNumber}>86</div>
                  </Link>
                </Menu.Item>
                <Menu.Item key="likes">
                  <Link to="/likes" style={style.menuItem}>
                    <div style={style.itemString}>Likes</div>
                    <div style={style.itemNumber}>95</div>
                  </Link>
                </Menu.Item>
              </Menu>
            </Col>
            <Col span={6} style={style.colRight} order={3}>
              <Button style={style.editBtn}>Edit profile</Button>
            </Col>
          </div>
        </Row>
        <ContentContainer
          left={() => (
            <div style={sideContent}>
              <Dashboard />
            </div>
          )}
          center={() => (
            <div style={centerContent} className="content">
              Aho Desu
            </div>
          )}
          right={() => <div style={sideContent} />}
        />
      </Col>
    );
  }
}

export default ProfileMenu;
