import "./App.css";
import CategoryForm from "./Components/CateforyForm/CategoryForm";
function App() {
  localStorage.setItem("todos", []);
  return (
    <div className="App">
      <h3>Whats'up,</h3>
      <input
        type="text"
        placeholder="Name here"
        value="Myrzaim"
        className="name"
      />
      <h4>CREATE A TO DO</h4>
      <p>What's on your to do list?</p>
      <CategoryForm />
    </div>
  );
}

export default App;
