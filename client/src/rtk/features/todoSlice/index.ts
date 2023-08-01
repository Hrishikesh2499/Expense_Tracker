import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../../interfaces/todo.interface";
import {
  fetchAllTodoAsync,
  fetchTodoByIdAsync,
} from "../../thunks/todo.thunks";
// Define a type for the slice state
interface ISpinnerInitialState {
  todos: Todo[];
  todo?: Todo;
  status: string;
  error?: string;
}

// Define the initial state using that type
const initialState: ISpinnerInitialState = {
  todos: [],
  status: "",
  error: "",
};

export const todoSlice = createSlice({
  name: "todo",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getTodoAction: () => {},
    setTodoAction: (state, action) => {
      state.todos = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllTodoAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllTodoAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload.data;
        // Add any fetched posts to the array
      })
      .addCase(fetchAllTodoAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchTodoByIdAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodoByIdAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todo = action.payload.data;
        // Add any fetched posts to the array
      })
      .addCase(fetchTodoByIdAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { getTodoAction, setTodoAction } = todoSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default todoSlice.reducer;
