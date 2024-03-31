import React from "react";
import { useContext } from "react";
import { taskContext } from "../../Context/TodoContext";
import "./TodoItem.css";

const TodoItem = ({ obj }) => {
  const { deleteTask } = useContext(taskContext);
  return (
    <>
      <div className="list-box">
        <li id={obj.id}>
          <div className="radio raio-list">
            <input
              name={`myCheckbox_${obj.id}`}
              type="radio"
              id={`checkbox_${obj.id}`}
            />
            <label
              className={obj.category}
              htmlFor={`checkbox_${obj.id}`}
            ></label>
          </div>

          <input
            type="text"
            className={`list-title ${obj.done ? "lined" : ""}`}
            value={obj.title}
            id="update_todo"
            readonly
          />
          <button className="upd-btn" id={obj.id}>
            Edit
          </button>
          <button className="del-btn" onClick={() => deleteTask(`${obj.id}`)}>
            Delete
          </button>
        </li>
      </div>
    </>
  );
};

export default TodoItem;
