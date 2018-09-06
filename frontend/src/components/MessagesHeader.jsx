import React from "react";
import { Button, Tooltip } from "antd";

const style = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  heading: { fontWeight: "bold", marginTop: "1rem" },
  container: { display: "flex", alignItems: "center", marginRight: "1.4rem" },
  readBtn: { fontSize: "1.5rem", lineHeight: "2rem" },
  btnBorder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid rgba(24,144,255,0.5)",
    borderRadius: "19px",
    marginLeft: "0.8rem",
    backgroundColor: "white",
    height: "2.1rem",
    width: "7.5rem"
  },
  msgBtn: {
    margin: "auto",
    //marginLeft: "0.8rem",
    fontSize: "0.9rem",
    fontWeight: "bold",
    borderRadius: "15px"
  }
};

const MessagesHeader = () => (
  <div style={style.header}>
    <h3 style={style.heading}>Direct Messages</h3>
    <div style={style.container}>
      <Tooltip placement="top" title="Mark all as read">
        <Button
          type="primary"
          shape="circle-outline"
          icon="check-circle"
          style={style.readBtn}
        />
      </Tooltip>
      <div style={style.btnBorder}>
        <Button size="small" type="primary" style={style.msgBtn}>
          New Message
        </Button>
      </div>
    </div>
  </div>
);

export default MessagesHeader;
