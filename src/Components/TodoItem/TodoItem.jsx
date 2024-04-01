import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { taskContext } from "../../Context/TodoContext";
import "./TodoItem.css";

const TodoItem = ({ obj }) => {

  const { deleteTask, editTask } = useContext(taskContext);
  const [changeTask, setChangeTask] = useState(obj);

  function handleChange(e) {
  let obj = {
    ...changeTask,
    [e.target.title]: e.target.value,
  };
    setChangeTask(obj);
    
  }
  function handleSave(e) {
    e.preventDefault(); 
    if (
      !changeTask.title.trim()
     ) {
      alert("Заполните поле!");
      return;
    }
    editTask(obj.id, changeTask);
  }
    
  
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
            value={changeTask.title}
            onChange={(e) => handleChange(e)}
            id="update_todo"
            readonly
          />
          <button className="upd-btn"  onClick={(e) => handleSave(e)} id={obj.id}>
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
