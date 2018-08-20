import React, { Component } from "react";
import { Button, Layout, Icon, Modal } from "antd";
import MenuBar from "./MenuBar";
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
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          zIndex: "1",
          width: "100%",
          height: "48px",
          backgroundColor: "white"
        }}
      >
        <div
          style={{
            width: "1200px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <MenuBar handleMessages={this.handleMessages} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "33.3%"
            }}
          >
            {this.state.loading ? (
              <Icon type="loading" />
            ) : (
              <a href="/">
                <Icon type="yuque" style={{ fontSize: "1.3rem" }} />
              </a>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "33.3%",
              marginDown: "1rem"
            }}
          >
            <DropDown logOut={() => this.props.handleLogin(false)} />
            <Button
              type="primary"
              style={{ margin: "0 1rem" }}
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
          </div>
        </div>
      </Header>
    );
  }
}

export default TopBar;
