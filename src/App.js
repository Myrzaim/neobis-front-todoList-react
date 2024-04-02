import CategoryForm from "./Components/CateforyForm/CategoryForm";
import TodoList from "./Components/TodoList/TodoList";
import TodoContextProvider from "./Context/TodoContext";
import './App.css';
function App() {

  return (
    <div className="App">
     <TodoContextProvider>
      <CategoryForm />
      <TodoList />
      </TodoContextProvider>
      </div>
  );
}

export default App;
