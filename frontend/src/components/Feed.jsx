import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Icon, Row } from "antd";

class Feed extends PureComponent {
  state = {
    liked: false
  };
  like = () => this.setState({ liked: true });

  render() {
    return (
      <Row
        type="flex"
        justify="space-around"
        style={{
          backgroundColor: "white",
          marginTop: "1rem",
          padding: "1rem 0",
          minWidth: "600px"
        }}
      >
        <Col span={4}>
          <Link to="/profile">
            <img
              src="https://placeimg.com/50/50/any"
              alt=""
              style={{ borderRadius: "50%" }}
            />
          </Link>
        </Col>
        <Col span={17} pull={3}>
          <Row tyle="flex" align="center" justify="start">
            <Link to="/profile">
              <Col span={24}>
                Ahmed Zakir
                <span style={{ color: "grey" }}> @ahmadmzak</span>
              </Col>
            </Link>
          </Row>
          <Row>{this.props.text}</Row>
          <Row type="flex" justify="start" align="center">
            <Col span={2} pull={10}>
              <Button
                style={{ border: "none", padding: "0", marginRight: "1rem" }}
              >
                <Icon type="retweet" style={{ color: "grey" }} />
              </Button>
            </Col>
            <Col span={2} pull={10}>
              <Button
                style={{ border: "none", padding: "0" }}
                onClick={this.like}
              >
                <Icon
                  type={this.state.liked ? "heart" : "heart-o"}
                  style={
                    this.state.liked ? { color: "red" } : { color: "grey" }
                  }
                />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Feed;
