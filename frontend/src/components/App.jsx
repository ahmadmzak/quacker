import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./Main";
import TopBar from "./TopBar";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

import "./App.css";

const Home = () => (
  <div>
    <h3 style={{ color: "white", paddingTop: "48px" }}>
      Home Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
      consequuntur nostrum? Voluptas, doloremque fuga eos, culpa consectetur
      omnis ipsum alias ducimus dolorum maiores hic vero non quae nostrum
      voluptatibus dolores? Hmm
    </h3>
  </div>
);

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
          <div>
            <TopBar
              onShowMessages={this.toggleMessages}
              handleLogin={this.handleLogin}
            />
            <Route exact path="/" component={Home} />
            <Route path="/notifications" component={Notifications} />
          </div>
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
