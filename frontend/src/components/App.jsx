import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Layout } from "antd";
import Main from "./Main";
import Home from "./Home";
import TopBar from "./TopBar";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

import "./App.css";

const { Content } = Layout;
const Notifications = () => (
  <div>
    <h3 style={{ color: "white", paddingTop: "48px" }}>Notifications</h3>
  </div>
);

class App extends Component {
  state = {
    login: true
  };
  handleLogin = login => this.setState({ login });
  render() {
    return (
      <BrowserRouter>
        {this.state.login ? (
          <Layout
            style={{
              backgroundColor: "rgb(30, 30, 30)",
              alignItems: "center",
              width: "100vw",
              height: "100%"
            }}
          >
            <TopBar
              onShowMessages={this.toggleMessages}
              handleLogin={this.handleLogin}
            />
            <Content
              style={{
                padding: "0",
                margin: "3.7rem auto 0 auto",
                maxWidth: "1200px",
                minWidth: "270px",
                border: "1px solid white",
                overflowX: "hidden",
                height: "100%",
                width: "auto"
              }}
            >
              <Route exact path="/" component={Home} />
              <Route path="/notifications" component={Notifications} />
            </Content>
          </Layout>
        ) : (
          <div>
            <Route exact path="/" component={Main} />
            <Route path="/signup" component={SignupForm} />
            <Route
              path="/login"
              render={() => <LoginForm handleLogin={this.handleLogin} />}
            />
          </div>
        )}
      </BrowserRouter>
    );
  }
}

export default App;
