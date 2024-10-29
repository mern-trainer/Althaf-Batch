import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 0
    },
    reducers: {
        increment: (state, action) => {
            state.counter += action.payload.num
        },
        decrement: (state, action) => {
            state.counter -= action.payload.num
        }
    }
})

export const { increment, decrement } = counterSlice.actions
export const { reducer: counterReducer } = counterSlice