import { createSlice } from "@reduxjs/toolkit";

// const obj = {
// counter: {
//     counter: 0
// },
// user: {
//         name: "sdf",
//         akd: 23
//     }
// }

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