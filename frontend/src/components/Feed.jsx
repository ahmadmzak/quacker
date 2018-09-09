import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Button, Col, Icon, Row } from "antd";

const marginRight = { marginRight: "0.2rem" };
const greyBtn = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: "none",
  fontWeight: "bold",
  color: "grey"
};
const style = {
  avatar: { zIndex: "2" },
  icon: { margin: "0 0.5rem 0 -0.5rem", fontSize: "1.1rem" },
  feed: {
    backgroundColor: "white",
    //margin: "0.1em 0 0 0",
    padding: "0.75rem 0",
    width: "100%",
    borderTop: "1px solid rgba(60, 60, 60, 0.2)"
  },
  footer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: "-0.5rem"
  },
  user: { ...marginRight, color: "#1890ff" },
  username: { color: "grey" },
  text: { wordBreak: "break-word" },
  likeBtn: {
    ...greyBtn,
    color: "#ff1d8e"
  },
  requackBtn: {
    ...greyBtn,
    color: "#458b00"
  }
};

/*class Feed extends PureComponent {
  state = {
    liked: false,
    requacked: false
  };
  like = () => this.setState(state => ({ liked: !state.liked }));
  requack = () => this.setState(state => ({ requacked: !state.requacked }));
  render() {
    return (
*/
const Feed = ({
  text,
  byUser,
  byUsername,
  likes,
  requacks,
  liked,
  requacked,
  likeHandler,
  requackHandler
}) => (
  <Row type="flex" justify="center" align="space-around" style={style.feed}>
    <Col span={4}>
      <Link to="/profile">
        <Avatar size={56} icon="user" style={style.avatar} />
      </Link>
    </Col>
    <Col span={16} sm={{ pull: 3 }} style={{ marginLeft: "1rem" }}>
      <Row tyle="flex" align="center" justify="start">
        <Link to="/profile">
          <Col span={24}>
            <span style={style.user}>{byUser}</span>
            <span style={style.username}>{byUsername}</span>
          </Col>
        </Link>
      </Row>
      <Row type="flex" justify="start" align="center">
        <Col span={24} style={style.text}>
          {text}
        </Col>
      </Row>
      <Row type="flex" justify="start" align="center" style={style.footer}>
        <Col span={6}>
          <Button
            style={requacked ? style.requackBtn : greyBtn}
            onClick={requackHandler}
          >
            <Icon type="retweet" style={style.icon} />
            {requacks}
          </Button>
        </Col>
        <Col span={6} /*xs={{ pull: 9 }} md={{ pull: 10 }}*/>
          <Button style={liked ? style.likeBtn : greyBtn} onClick={likeHandler}>
            <Icon type={liked ? "heart" : "heart-o"} style={style.icon} />
            {likes}
          </Button>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Feed;
