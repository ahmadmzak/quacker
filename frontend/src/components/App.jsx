import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserContext } from "./contexts";
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
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      user: {}
    };
  }
  componentDidMount() {
    this.getUserData();
  }
  getUserData = async () => {
    const res = await fetch("http://localhost:3001/users/1");
    const user = await res.json();
    this.setState({ user });
  };
  handleLogin = login => this.setState({ login });
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          {this.state.login ? (
            <UserContext.Provider value={this.state.user}>
              <TopBar
                onShowMessages={this.toggleMessages}
                handleLogin={this.handleLogin}
                notifications={4}
                messages={1}
                newFeed={true}
              />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/notifications" component={Notifications} />
                <Route
                  path="/profile"
                  render={() => <ProfileMenu sticky={150} />}
                />
              </Switch>
            </UserContext.Provider>
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
