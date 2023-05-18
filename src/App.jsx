import DatePicker from "./components/DatePicker.jsx";
import MessageBox from "./components/MessageBox.jsx";
import { AiFillPlusSquare } from "react-icons/ai";
import TodoSection from "./components/TodoSection.jsx";
import { useState } from "react";
function App() {
  const [taskMessage, setTaskMessage] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [tasks, setTasks] = useState([]);
  const deleteTask=(index)=>{
    setTasks(prev=>{
      return prev.filter((task,i)=>{
          return i!==index
      })
    })
  }
  return (
    <div className="container mt-5">
      <div className="d-flex flex-row justify-content-center gap-3">
        <MessageBox
          taskMessage={taskMessage}
          setTaskMessage={setTaskMessage}
        ></MessageBox>
        <DatePicker taskDate={taskDate} setTaskDate={setTaskDate}></DatePicker>
        <AiFillPlusSquare
          className="text-primary"
          size={40}
          onClick={(e) => {
            if (!taskDate || !taskMessage){
              return;
            }
              setTasks((prev) => {
                return [...prev, { id:new Date(), deadline:new Date(taskDate) , message: taskMessage }];
              });
              setTaskDate('')
              setTaskMessage('')
          }}
        />
      </div>
      <div>
        <TodoSection
          title="Overdue"
          tasks={tasks.filter((task) => {
            return task.deadline < new Date(new Date().toDateString());
          })}
        />
        <TodoSection
          title="Today"
          tasks={tasks.filter((task) => {
            return task.deadline.toDateString() == new Date().toDateString();
          })}
        />
        <TodoSection
          title="Upcoming"
          tasks={tasks.filter((task) => {
            return task.deadline > new Date();
          })}
        />
      </div>
    </div>
  );
}
export default App;