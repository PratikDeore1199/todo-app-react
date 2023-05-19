import DatePicker from "./components/DatePicker.jsx";
import MessageBox from "./components/MessageBox.jsx";
import { AiFillPlusSquare } from "react-icons/ai";
import TodoSection from "./components/TodoSection.jsx";
import { useState } from "react";

function App() {
  const [taskMessage, setTaskMessage] = useState("");
  const [taskDate, setTaskDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [tasks, setTasks] = useState([]);
  const deleteTask = (id) => {
    setTasks((prev) => {
      return prev.filter((task) => {
        return task.id !== id;
      });
    });
  };
  return (
    <div className="container mt-5">
      <div className="d-flex flex-row justify-content-center gap-3">
        <MessageBox
          taskMessage={taskMessage}
          setTaskMessage={setTaskMessage}
        ></MessageBox>
        <DatePicker taskDate={taskDate} setTaskDate={setTaskDate}></DatePicker>
        <button
          className="border-0 bg-white"
          onClick={() => {
            if (!taskDate || !taskMessage) {
              return;
            }
            setTasks((prev) => {
              return [
                ...prev,
                {
                  id: new Date(),
                  deadline: new Date(taskDate),
                  message: taskMessage,
                },
              ];
            });
            setTaskDate(new Date().toISOString().slice(0, 10));
            setTaskMessage("");
          }}
        >
          <AiFillPlusSquare className="text-primary" size={40} />
        </button>
      </div>
      <div>
        <TodoSection
          title="Overdue"
          tasks={tasks.filter((task) => {
            return task.deadline < new Date(new Date().toDateString());
          })}
          deleteTask={deleteTask}
        />
        <TodoSection
          title={"Today"}
          tasks={tasks.filter((task) => {
            return task.deadline.toDateString() == new Date().toDateString();
          })}
          deleteTask={deleteTask}
        />
        <TodoSection
          title="Upcoming"
          tasks={tasks.filter((task) => {
            return task.deadline > new Date();
          })}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
export default App;
