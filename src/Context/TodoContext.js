import axios from "axios";
import React, { createContext } from "react";
import { useReducer } from "react";

export const taskContext = createContext();

const API = "http://localhost:8000/tasks";

const INIT_STATE = {
  todos: null,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_TODOS":
      return { todos: action.payload };
    default:
      return prevState;
  }
}

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // /create task
  function addTask(obj) {
    try {
      axios.post(API, obj);
    } catch (error) {
      return error;
    }
  }

  // read
  async function readTask() {
    const { data } = await axios(API);
    dispatch({
      type: "GET_TODOS",
      payload: data,
    });
  }

  // delete
  async function deleteTask(id) {
    try {
      await axios.delete(`${API}/${id}`);
      readTask();
    } catch (error) {
      return error;
    }
  }

  // edit
  async function editTask(id, editedObj) {
    await axios.patch(`${API}/${id}`, editedObj);
    readTask();
  }

  const cloud = {
    addTask,
    readTask,
    deleteTask,
    editTask,
    taskArr: state.todos,
  };
  return <taskContext.Provider value={cloud}>{children}</taskContext.Provider>;
};

export default TodoContextProvider;
