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
    <h3 style={{ fontWeight: "bold" }}>Direct Messages</h3>
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
      <Button
        type="primary"
        style={{ marginLeft: "0.8rem", fontWeight: "bold" }}
      >
        New Message
      </Button>
    </div>
  </div>
);

export default MessagesHeader;
