import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  todo: "",
  completed: false,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      try {
        const response = action.payload;
        const newTodo = {
          todo: response.content,
          completes: false,
        };
        state.todos.push(newTodo);
        toast.success("To do added successfully");
      } catch (error) {
        console.log("addTodo frontend error", error);
      }
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = todoSlice.actions;

export default todoSlice.reducer;
