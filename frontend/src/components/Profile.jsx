import React, { Component } from "react";
import Dashboard from "./Dashboard";
import ProfileMenu from "./ProfileMenu";
import ContentContainer from "./ContentContainer";

const style = {
  height: "220px",
  backgroundColor: "white",
  marginTop: "-3rem"
};

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileMenu sticky={150} />
        <ContentContainer
          style={style}
          left={() => <Dashboard />}
          center={() => (
            <div
              className="content"
              style={{ ...style, backgroundColor: "red", height: "4000px" }}
            />
          )}
          right={() => null}
        />
      </div>
    );
  }
}

export default Profile;
