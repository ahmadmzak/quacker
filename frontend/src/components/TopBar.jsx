import React, { Component } from "react";
import { Button, Col, Layout, Icon, Modal, Row } from "antd";
import ResponsiveMenuBar from "./ResponsiveMenuBar";
import DropDown from "./DropDown";
import Messages from "./Messages";
import Quack from "./Quack";

const { Header } = Layout;

class TopBar extends Component {
  state = {
    quack: false,
    loading: false,
    messages: false
  };
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
        style={{ fontSize: "1.3rem", cursor: "pointer", color: "#1890ff" }}
      />
    );
    return (
      <Header
        style={{
          position: "fixed",
          zIndex: "1",
          width: "100vw",
          height: "3.1rem",
          backgroundColor: "white",
          lineHeight: "3.1rem"
        }}
      >
        <Row
          type="flex"
          justify="space-between"
          align="center"
          style={{
            width: "100%",
            maxWidth: "1200px",
            minWidth: "270px",
            border: "1px solid red",
            height: "3.1rem",
            margin: "0 auto"
          }}
        >
          <Col
            span={8}
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid blue"
            }}
          >
            <ResponsiveMenuBar handleMessages={this.handleMessages} />
          </Col>
          <Col
            span={8}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid green"
            }}
          >
            {topIcon}
          </Col>
          <Col
            span={8}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              border: "1px solid green"
            }}
          >
            <DropDown logOut={() => this.props.handleLogin(false)} />
            <Button
              type="primary"
              style={{ margin: "0 0 0 0.5rem" }}
              onClick={this.showQuackModal}
            >
              Quack
            </Button>
            <Modal
              title={
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h3 style={{ fontWeight: "bold" }}>Compose new Quack</h3>
                </div>
              }
              footer={null}
              visible={this.state.quack}
              onCancel={this.hideQuackModal}
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
