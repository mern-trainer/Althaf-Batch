import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoList: []
    },
    reducers: {
        addToList: (state, action) => { // {id: 0000000, title: aaaaaaaaa, createdAt: 1111, updatedAt: 1111111, completed: false}
            const { payload } = action
            state.todoList = [payload, ...state.todoList]
        },
        removeFromList: (state, action) => { // {id: 22222222222}
            const { id } = action.payload
            state.todoList = state.todoList.filter(item => item.id != id)
        },
        updateList: (state, action) => { // {id: 2222, title: aaaaaaaa}
            const { id, title } = action.payload
            const updatedAt = new Date().toLocaleString("en-IN")
            state.todoList = state.todoList.map(item => {
                if (item.id == id) {
                    return { ...item, title, updatedAt }
                }
                return item
            })
        },
        updateStatus: (state, action) => { // {id: 2222}
            const { id } = action.payload
            const updatedAt = new Date().toLocaleString("en-IN")
            state.todoList = state.todoList.map(item => {
                if (item.id == id) {
                    return { ...item, completed: !item.completed, updatedAt } 
                }
                return item
            })
        }
    }
})

export const { addToList, removeFromList, updateStatus, updateList } = todoSlice.actions
export const { reducer: todoReducer } = todoSlice