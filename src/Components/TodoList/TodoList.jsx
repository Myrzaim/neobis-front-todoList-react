import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { taskContext } from "../../Context/TodoContext";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = () => {
  const { taskArr, readTask } = useContext(taskContext);
  useEffect(() => {
    readTask();
  }, []);

  return (
    <>
      <div className="product-list">
        {taskArr
          ? taskArr.map((item) => {
              return <TodoItem obj={item} />;
            })
          : null}
      </div>
    </>
  );
};

export default TodoList;
