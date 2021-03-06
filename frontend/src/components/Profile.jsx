import React, { Component } from "react";
import Dashboard from "./Dashboard";
import ProfileMenu from "./ProfileMenu";
import ContentContainer from "./ContentContainer";

const style = {
  left: {
    height: "220px",
    backgroundColor: "white",
    marginTop: "-3rem"
  },
  center: {
    marginTop: "-3rem",
    backgroundColor: "red",
    height: "2000px"
  },
  right: this.left
};

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileMenu sticky={150} />
        <ContentContainer
          //style={style.container}
          left={() => <Dashboard style={style.left} />}
          center={() => (
            <div className="content" style={style.center}>
              Aho Desu
            </div>
          )}
          right={() => <div style={style.right} />}
        />
      </div>
    );
  }
}

export default Profile;
