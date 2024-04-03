import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, removeTodo, updateTodo } from "../../store/todoSlice";

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
      <label>{category} </label>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete({ id }))}
      />
      <input
        ref={inputRef}
        id={id}
        value={text}
        readOnly={readOnlyCondition}
        onChange={() => dispatch(updateTodo({ id }))}
      />
      <button onClick={() => dispatch(removeTodo({ id }))}>Delete</button>
      <button onClick={() => focusToInput({ id })}>Update</button>
    </li>
  );
};

export default TodoItem;
