import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Col, Row } from "antd";

const style = {
  dashboard: {
    width: "100%",
    //height: "100%",
    height: "220px",
    backgroundColor: "white"
  },
  background: {
    width: "100%",
    height: "45%",
    backgroundColor: "#1890ff"
  },
  topRow: {
    position: "relative",
    width: "100%",
    height: "30%"
  },
  leftCol: {
    position: "absolute",
    top: "-50%",
    left: "7%"
  },
  avatar: {
    border: "2px solid white",
    borderRadius: "50%"
  },
  midCol: {
    position: "absolute",
    top: "0%",
    right: "0%"
  },
  name: { fontWeight: "bold" },
  username: { marginTop: "-1em", color: "gray" },
  linkName: {
    color: "gray",
    fontWeight: "bold",
    marginBottom: "0.1rem"
  },
  linkCount: { fontWeight: "bold", color: "#1890ff" },
  links: { padding: "3.5rem 0 0 7%" }
};

const Dashboard = props => (
  <div style={style.dashboard}>
    <div style={style.background} />
    <Row type="flex" justify="center" style={style.topRow}>
      <Col span={6} style={style.leftCol}>
        <Link to="/profile">
          <div>
            <Avatar size={64} icon="user" style={style.avatar} />
          </div>
        </Link>
      </Col>
      <Col span={16} style={style.midCol}>
        <Link to="/profile">
          <h3 style={style.name}>Ahmed Zakir</h3>
          <h4 style={style.username}>@ahmadmzak</h4>
        </Link>
      </Col>
      <Col span={24}>
        <Row type="flex" justify="space-around" style={style.links}>
          <Col span={7}>
            <Link to="/profile">
              <h4 style={style.linkName}>Quacks</h4>
              <h3 style={style.linkCount}>50</h3>
            </Link>
          </Col>
          <Col span={7}>
            <Link to="/following">
              <h4 style={style.linkName}>Following</h4>
              <h3 style={style.linkCount}>50</h3>
            </Link>
          </Col>
          <Col span={7}>
            <Link to="/followers">
              <h4 style={style.linkName}>Follwers</h4>
              <h3 style={style.linkCount}>50</h3>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

export default Dashboard;
