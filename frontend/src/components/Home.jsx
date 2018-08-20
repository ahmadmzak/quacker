import React, { Component } from "react";
import Quack from "./Quack";
import Feed from "./Feed";

class Home extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "1200px",
          paddingTop: "3.7rem",
          margin: "auto"
        }}
      >
        <div
          style={{ width: "26.5%", backgroundColor: "white", height: "100px" }}
        />
        <div style={{ width: "45%" }}>
          <Quack expandable={true} />
          <Feed />
        </div>
        <div
          style={{ width: "26.5%", backgroundColor: "white", height: "100px" }}
        />
      </div>
    );
  }
}

export default Home;
