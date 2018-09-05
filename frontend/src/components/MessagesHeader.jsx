import React from "react";
import { Button, Tooltip } from "antd";

const MessagesHeader = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }}
  >
    <h3 style={{ fontWeight: "bold", marginTop: "1rem" }}>Direct Messages</h3>
    <div
      style={{ display: "flex", alignItems: "center", marginRight: "1.4rem" }}
    >
      <Tooltip placement="top" title="Mark all as read">
        <Button
          type="primary"
          shape="circle-outline"
          icon="check-circle"
          style={{ fontSize: "1.5rem", lineHeight: "2rem" }}
        />
      </Tooltip>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid rgba(24,144,255,0.5)",
          borderRadius: "19px",
          marginLeft: "0.8rem",
          backgroundColor: "white",
          height: "2.1rem",
          width: "7.5rem"
        }}
      >
        <Button
          size="small"
          type="primary"
          style={{
            margin: "auto",
            //marginLeft: "0.8rem",
            fontSize: "0.9rem",
            fontWeight: "bold",
            borderRadius: "15px"
          }}
        >
          New Message
        </Button>
      </div>
    </div>
  </div>
);

export default MessagesHeader;
