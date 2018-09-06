import React, { Component } from "react";
import { Button, Col, Layout, Icon, Modal, Row } from "antd";
import ResponsiveMenuBar from "./ResponsiveMenuBar";
import DropDown from "./DropDown";
import Messages from "./Messages";
import Quack from "./Quack";

const { Header } = Layout;
const style = {
  header: {
    position: "fixed",
    zIndex: "200",
    width: "100vw",
    height: "3.0rem",
    backgroundColor: "white",
    lineHeight: "3.0rem",
    borderBottom: "1px solid rgba(30, 30, 30, 0.5)"
  },
  icon: { fontSize: "1.3rem", cursor: "pointer", color: "#1890ff" },
  headerRow: {
    width: "100%",
    maxWidth: "1200px",
    minWidth: "270px",
    height: "3.0rem",
    margin: "0 auto"
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  modalBody: {
    backgroundColor: "rgb(208, 232, 255)",
    padding: "0"
  },
  modalHeading: { fontWeight: "bold" },
  headerBtn: { margin: "0 0 0 0.5rem", borderRadius: "15px" }
};

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quack: false,
      loading: false,
      messages: false
    };
  }
  handleMessages = bool => {
    this.setState({ messages: bool });
  };
  scrollTop = () => {
    //document.body.scrollTop = 0; // For Safari
    //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  showQuackModal = () => this.setState({ quack: true });
  hideQuackModal = () => this.setState({ quack: false });
  render() {
    const topIcon = (
      <Icon
        onClick={this.scrollTop}
        type={this.state.loading ? "loading" : "yuque"}
        style={style.icon}
      />
    );
    return (
      <Header style={style.header}>
        <Row
          type="flex"
          justify="space-between"
          align="center"
          style={style.headerRow}
        >
          <Col span={8} style={style.flex}>
            <ResponsiveMenuBar
              {...this.props}
              handleMessages={this.handleMessages}
            />
          </Col>
          <Col span={8} style={style.flex}>
            {topIcon}
          </Col>
          <Col
            span={8}
            style={{
              ...style.flex,
              justifyContent: "flex-end"
            }}
          >
            <DropDown logOut={() => this.props.handleLogin(false)} />
            <Button
              type="primary"
              style={style.headerBtn}
              onClick={this.showQuackModal}
            >
              Quack
            </Button>
            <Modal
              title={
                <div style={style.flex}>
                  <h3 style={style.modalHeading}>Compose new Quack</h3>
                </div>
              }
              footer={null}
              visible={this.state.quack}
              onCancel={this.hideQuackModal}
              bodyStyle={style.modalBody}
            >
              <Quack expandable={false} />
            </Modal>
            <Messages
              visible={this.state.messages}
              handleMessages={this.handleMessages}
            />
          </Col>
        </Row>
      </Header>
    );
  }
}

export default TopBar;
