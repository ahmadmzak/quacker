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
        justify="center"
        align="space-around"
        style={{
          backgroundColor: "white",
          margin: "0.5rem 0 0 0",
          padding: "0.75rem 0",
          width: "100%"
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
        <Col span={16} sm={{ pull: 3 }} style={{ marginLeft: "1rem" }}>
          <Row tyle="flex" align="center" justify="start">
            <Link to="/profile">
              <Col span={24}>
                Ahmed Zakir
                <span style={{ color: "grey" }}> @ahmadmzak</span>
              </Col>
            </Link>
          </Row>
          <Row type="flex" justify="start" align="center">
            <Col span={24} style={{ wordBreak: "break-word" }}>
              {this.props.text}
            </Col>
          </Row>
          <Row type="flex" justify="start" align="center">
            <Col span={2} pull={10}>
              <Button
                style={{ border: "none", padding: "0", marginRight: "1rem" }}
              >
                <Icon type="retweet" style={{ color: "grey" }} />
              </Button>
            </Col>
            <Col span={2} xs={{ pull: 9 }} md={{ pull: 10 }}>
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
