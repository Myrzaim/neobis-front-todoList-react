import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { taskContext } from "../../Context/TodoContext";
import "./CategoryForm.css";

const CategoryForm = () => {
  const { addTask } = useContext(taskContext);
  const [task, setTask] = useState("");
  // const [selectedOption, setSelectedOption] = useState("");

  let selectedCategory;

  function handleAddBtn(e) {
    e.preventDefault();
    if (!task.trim()) {
      alert("Some inputs are empty!");
      return;
    }

    let todoItem = {
      id: Date.now(),
      title: task,
      category: "radio-" + selectedCategory,
      done: false,
    };

    addTask(todoItem);
    setTask("");
    selectedCategory = "";
  }

  function onValueChange(cat) {
    console.log(cat.target.value);
    selectedCategory = cat.target.value;
  }

  return (
    <>
      <div className="container">
        <h3>Whats'up,</h3>
        <input
          type="text"
          placeholder="Name here"
          value="Myrzaim"
          className="name"
        />
        <h4>CREATE A TO DO</h4>
        <p>What's on your to do list?</p>
        <form>
          <input
            type={task}
            placeholder="e.m. milk"
            id="add-todo"
            onChange={(e) => setTask(e.target.value)}
          />
          <p>Pick a category</p>
          <div className="category">
            <div className="category-box">
              <div className="radio">
                <input
                  type="radio"
                  id="check-bussines"
                  name="myCheckbox"
                  defaultValue={"business"}
                  onChange={onValueChange}
                />
                <label
                  className="radio-business"
                  htmlFor="check-bussines"
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
                  defaultValue={"personal"}
                  onChange={onValueChange}
                />
                <label
                  className="radio-personal"
                  htmlFor="check-personal"
                ></label>
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
      </div>
    </>
  );
};

export default CategoryForm;
