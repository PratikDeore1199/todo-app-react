import { useState } from "react";

const MessageBox = (props) => {

  return (
    <input
      className="form-control w-75"
      type="text"
      value={props.taskMessage}
      onChange={(e)=>{
        props.setTaskMessage(e.target.value)
      }}
      placeholder="Enter your task"
    ></input>
  );
};

export default MessageBox;
