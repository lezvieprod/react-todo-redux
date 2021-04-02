import { createSlice } from "@reduxjs/toolkit";


const rootReducer = createSlice({
  name: 'root',
  initialState: {
    todos: [
      { id: 1, value: 'My first todo' },
      { id: 2, value: 'My second todo' },
    ],
  },
  reducers: {
    addNewTodo(state, action) {
      state.todos.push({ id: Math.random() * 1000, value: action.payload })
    },
    deleteTodo(state, action) {
      const index = state.todos.findIndex((item) => item.id === action.payload);
      state.todos.splice(index, 1)
    }
  }
})

export default rootReducer.reducer
export const { addNewTodo, deleteTodo } = rootReducer.actions