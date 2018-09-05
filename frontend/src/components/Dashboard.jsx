import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Col, Row } from "antd";

const Dashboard = props => (
  <div
    style={{
      width: "100%",
      //height: "100%",
      height: "220px",
      backgroundColor: "white"
    }}
  >
    <div style={{ width: "100%", height: "45%", backgroundColor: "#1890ff" }} />
    <Row
      type="flex"
      justify="center"
      style={{
        position: "relative",
        width: "100%",
        height: "30%"
      }}
    >
      <Col
        span={6}
        style={{
          position: "absolute",
          top: "-50%",
          left: "7%"
        }}
      >
        <Link to="/profile">
          <div>
            <Avatar
              size={64}
              icon="user"
              style={{
                border: "2px solid white",
                borderRadius: "50%"
              }}
            />
          </div>
        </Link>
      </Col>
      <Col
        span={16}
        style={{
          position: "absolute",
          top: "0%",
          right: "0%"
        }}
      >
        <Link to="/profile">
          <h3 style={{ fontWeight: "bold" }}>Ahmed Zakir</h3>
          <h4 style={{ marginTop: "-1em", color: "gray" }}>@ahmadmzak</h4>
        </Link>
      </Col>
      <Col span={24}>
        <Row
          type="flex"
          justify="space-around"
          style={{ padding: "3.5rem 0 0 7%" }}
        >
          <Col span={7}>
            <Link to="/quacks">
              <h4
                style={{
                  color: "gray",
                  fontWeight: "bold",
                  marginBottom: "0.1rem"
                }}
              >
                Quacks
              </h4>
              <h3 style={{ fontWeight: "bold", color: "#1890ff" }}>50</h3>
            </Link>
          </Col>
          <Col span={7}>
            <Link to="/following">
              <h4
                style={{
                  color: "gray",
                  fontWeight: "bold",
                  marginBottom: "0.1rem"
                }}
              >
                Following
              </h4>
              <h3 style={{ fontWeight: "bold", color: "#1890ff" }}>50</h3>
            </Link>
          </Col>
          <Col span={7}>
            <Link to="/followers">
              <h4
                style={{
                  color: "gray",
                  fontWeight: "bold",
                  marginBottom: "0.1rem"
                }}
              >
                Follwers
              </h4>
              <h3 style={{ fontWeight: "bold", color: "#1890ff" }}>50</h3>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

export default Dashboard;
