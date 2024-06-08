import { configureStore } from "@reduxjs/toolkit";
import  todoReducer  from "./slices/ToDoSlice";

export const store = configureStore({
    reducer: {
        todoSlice : todoReducer
    },
    devTools: true 
    
})