import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TopBar from "./TopBar";

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
  render() {
    return (
      <BrowserRouter>
        <div>
          <TopBar onShowMessages={this.toggleMessages} />
          <Route exact path="/" component={Home} />
          <Route path="/notifications" component={Notifications} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
