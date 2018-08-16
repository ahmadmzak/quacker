import React from "react";
import { Modal } from "antd";

const Messages = props => (
  <Modal
    closable
    centered
    zIndex={1}
    footer={null}
    maskClosable={true}
    style={{ top: "10vh" }}
    visible={props.visible}
    title="Direct Messages"
    onCancel={() => props.handleMessages(false)}
  >
    <h1>I am a modal!</h1>
  </Modal>
);

export default Messages;
