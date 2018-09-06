import React from "react";

const style = {
  username: { color: "grey" }
};

const Message = props => (
  <div>
    <img src={props.receiver.image} alt="" />
    <div>
      <h4>{props.receiver.name}</h4>
      <div>
        <h5 style={style.username}>{props.receiver.username}</h5>
        <div>{`${props.month} ${props.day}`}</div>
      </div>
      <p>{`${props.sender}: ${props.message}`}</p>
    </div>
  </div>
);

export default Message;
