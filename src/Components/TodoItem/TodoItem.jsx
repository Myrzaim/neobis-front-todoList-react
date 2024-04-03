import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, removeTodo, updateTodo } from "../../store/todoSlice";
import "./TodoItem.css";

const TodoItem = ({ id, text, completed, category }) => {
  const dispatch = useDispatch();
  const [readOnlyCondition, setReadOnlyCondition] = useState(true);
  const inputRef = useRef(null);

  function focusToInput(id) {
    setReadOnlyCondition(false);
    inputRef.current.focus();
  }

  return (
    <li>
      <p>{category} </p>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete({ id }))}
      />
      <input
        className="list-title"
        ref={inputRef}
        id={id}
        value={text}
        readOnly={readOnlyCondition}
        onChange={() => dispatch(updateTodo({ id }))}
      />
      <button className="upd-btn" onClick={() => focusToInput({ id })}>
        Edit
      </button>
      <button className="del-btn" onClick={() => dispatch(removeTodo({ id }))}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
