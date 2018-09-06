import React from "react";
import MessagesHeader from "./MessagesHeader";
import { Modal } from "antd";

const style = {
  modal: { top: "10vh" },
  messagesBody: {
    height: "70vh",
    overflowY: "scroll"
  }
};

const Messages = props => (
  <Modal
    closable
    zIndex={3}
    footer={null}
    maskClosable={true}
    width="46rem"
    style={style.modal}
    visible={props.visible}
    title={<MessagesHeader />}
    onCancel={() => props.handleMessages(false)}
    bodyStyle={style.messagesBody}
  >
    <h1>I am a modal!</h1>
  </Modal>
);

export default Messages;
