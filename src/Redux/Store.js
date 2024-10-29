import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./Slices/counterSlice";
import { todoReducer } from "./Slices/TodoSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer
    }
})