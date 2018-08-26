import React from "react";
import MessagesHeader from "./MessagesHeader";
import { Modal } from "antd";

const Messages = props => (
  <Modal
    closable
    zIndex={1}
    footer={null}
    maskClosable={true}
    width="46rem"
    style={{ top: "10vh" }}
    visible={props.visible}
    title={<MessagesHeader />}
    onCancel={() => props.handleMessages(false)}
    bodyStyle={{
      height: "70vh",
      overflowY: "scroll"
    }}
  >
    <h1>I am a modal!</h1>
  </Modal>
);

export default Messages;
