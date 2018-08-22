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
  showQuackModal = () => this.setState({ quack: true });
  hideQuackModal = () => this.setState({ quack: false });
  render() {
    return (
      <Header
        style={{
          position: "fixed",
          zIndex: "1",
          width: "100vw",
          height: "3.1rem",
          backgroundColor: "white",
          padding: "0"
        }}
      >
        <Row
          type="flex"
          justify="space-around"
          align="center"
          style={{
            maxWidth: "1200px",
            minWidth: "320px",
            //border: "1px solid red",
            height: "3.1rem",
            margin: "auto",
            width: "100%"
          }}
        >
          <Col
            span={10}
            style={{
              border: "1px solid blue"
            }}
          >
            <ResponsiveMenuBar handleMessages={this.handleMessages} />
          </Col>
          <Col
            span={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid green"
            }}
          >
            {this.state.loading ? (
              <Icon type="loading" style={{ fontSize: "1.3rem" }} />
            ) : (
              <a href="/">
                <Icon type="yuque" style={{ fontSize: "1.3rem" }} />
              </a>
            )}
          </Col>
          <Col
            span={10}
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
              style={{ margin: "0 0.5rem" }}
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
