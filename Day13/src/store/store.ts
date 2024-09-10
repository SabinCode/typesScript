import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todo/todoSlice";

const store = configureStore({
    reducer:  todoSlice.reducer,
    // reducer: {todoSlice},
});
export default store