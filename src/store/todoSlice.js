import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        category: action.payload.category,
        completed: false,
      });

    },
    toggleComplete(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo(state, action) {
      const updateText = state.todos.find((todo) => todo.id === action.payload.id);
      updateText.text = action.payload.text;
    }
  },
});

export const { addTodo, toggleComplete, removeTodo,updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
