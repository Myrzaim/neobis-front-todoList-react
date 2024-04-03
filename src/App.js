import { useState } from "react";
import { useDispatch } from "react-redux";
import CategoryForm from "./Components/CateforyForm/CategoryForm";
import { addTodo } from "./store/todoSlice";
import TodoList from "./Components/TodoList/TodoList";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("business");

  const dispatch = useDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text, category }));
      setText("");
      setCategory("");
    }
  };
  return (
    <div className="App">
      <CategoryForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
        category={category}
        updateCategory={setCategory}
      />
      <TodoList />
    </div>
  );
}

export default App;
