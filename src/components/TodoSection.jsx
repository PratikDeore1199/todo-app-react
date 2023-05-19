import { BsTrash } from "react-icons/bs";

const TodoSection = (props) => {
  return (
    <div className="d-flex  flex-col justify-content-center">
      <ol className="list-group mt-4 w-75 text-left ">
        <h5>{props.title}</h5>
        {props.tasks.length === 0 ? (
          <p className="text-secondary text-center">No Task Available</p>
        ) : (
          props.tasks.map((tasks, i) => {
            return (
              <li
                key={i}
                className={
                  (i === 0 ? "rounded-top " : "") +
                  "list-group-item  d-flex align-items-center justify-content-between"
                }
              >
                <span className=" text-secondary" style={{ fontSize: "12px" }}>
                  {tasks.deadline.toLocaleString()}
                </span>
                <span className="text-capitalise">{tasks.message}</span>
                <BsTrash
                  size={20}
                  color="red"
                  onClick={() => {
                    props.deleteTask(tasks.id);
                  }}
                />
              </li>
            );
          })
        )}
      </ol>
    </div>
  );
};
export default TodoSection;
