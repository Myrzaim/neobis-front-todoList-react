import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./CategoryForm.css";

const CategoryForm = () => {
  const [task, setTask] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  let arr = [];

  function handleAddBtn(e) {
    if (!task.trim()) {
      alert("Some inputs are empty!");
      return;
    }

    let todoItem = {
      id: Date.now(),
      title: task,
      category: selectedOption,
      done: false,
    };
    arr.push(todoItem);
    console.log(arr);
    localStorage.setItem("todos", JSON.stringify(arr));

    setTask("");
    setSelectedOption("");
  }

  function onValueChange(event) {
    setSelectedOption(event.target.value);
  }


  return (
    <form>
      <input
        type={task}
        placeholder=""
        id="add-todo"
        onChange={(e) => setTask(e.target.value)}
      />
      <p>Pick a category</p>
      <div className="category">
        <div className="category-box">
          <div className="radio">
            <input type="radio" id="check-bussines" name="myCheckbox" />
            <label
              className="radio-business"
              for="check-bussines"
              checked={selectedOption === "Bussines"}
              onChange={onValueChange}
            ></label>
          </div>
          <p>Bussines</p>
        </div>
        <div className="category-box">
          <div className="radio">
            <input
              type="radio"
              id="check-personal"
              name="myCheckbox"
              checked={selectedOption === "Personal"}
              onChange={onValueChange}
            />
            <label className="radio-personal" for="check-personal"></label>
          </div>
          <p>Personal</p>
        </div>
      </div>
      <button
        type="submit"
        className="add-btn"
        onClick={(e) => handleAddBtn(e)}
      >
        Add todo
      </button>
    </form>
  );
};

export default CategoryForm;
