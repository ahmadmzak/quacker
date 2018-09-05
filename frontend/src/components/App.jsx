import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Main";
import Home from "./Home";
import TopBar from "./TopBar";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import ProfileMenu from "./ProfileMenu";
import ScrollToTop from "./ScrollToTop";

import "./App.css";

const Notifications = () => (
  <div className="content">
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
        <ScrollToTop>
          {this.state.login ? (
            <div>
              <TopBar
                onShowMessages={this.toggleMessages}
                handleLogin={this.handleLogin}
                notifications={4}
                messages={1}
              />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/notifications" component={Notifications} />
                <Route
                  path="/profile"
                  render={() => <ProfileMenu sticky={150} />}
                />
              </Switch>
            </div>
          ) : (
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/signup" component={SignupForm} />
              <Route
                path="/login"
                render={() => <LoginForm handleLogin={this.handleLogin} />}
              />
            </Switch>
          )}
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
