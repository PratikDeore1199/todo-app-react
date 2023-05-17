import { useState } from "react";

const MessageBox = () => {
const [taskMessage, setTaskMessage]=useState("");
  return (
    <input
      className="form-control w-75"
      type="text"
      value={taskMessage}
      onChange={(e)=>{
        setTaskMessage(e.target.value)
      }}
      placeholder="Enter your task"
    ></input>
  );
};

export default MessageBox;
