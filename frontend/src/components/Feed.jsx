import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "antd";

class Feed extends PureComponent {
  state = {
    liked: false
  };
  like = () => this.setState({ liked: true });
  render() {
    return (
      <div
        style={{
          display: "flex",
          backgroundColor: "white",
          height: "100%",
          width: "100%",
          marginTop: "0.5rem"
        }}
      >
        <Link to="/profile">
          <img
            src="https://placeimg.com/50/50/any"
            alt=""
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              margin: "0.5rem"
            }}
          />
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "85%",
            height: "100%",
            padding: "0.5rem"
          }}
        >
          <div style={{ height: "90%" }}>
            <Link
              to="/profile"
              style={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <h3
                style={{
                  fontWeight: "bold",
                  marginTop: "0.5rem"
                }}
              >
                Ahmed Zakir
              </h3>
              <h5
                style={{
                  fontWeight: "bold",
                  color: "grey",
                  marginLeft: "0.1rem",
                  marginTop: "0.3rem"
                }}
              >
                @ahmadmzak
              </h5>
            </Link>
            {this.props.text}
          </div>
          <div>
            <Button
              style={{ border: "none", padding: "0", marginRight: "1rem" }}
            >
              <Icon type="retweet" style={{ color: "grey" }} />
            </Button>
            <Button
              style={{ border: "none", padding: "0" }}
              onClick={this.like}
            >
              <Icon
                type={this.state.liked ? "heart" : "heart-o"}
                style={this.state.liked ? { color: "red" } : { color: "grey" }}
              />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
