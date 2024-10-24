// Javascript library => Global state management

import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../Redux/Slices/counterSlice"

// principles of redux => 1. Actions 2. Reducers 3. Store

const Redux = () => {

    const { counter } = useSelector((states) => states.counter)

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment({num: 10}))
    }

    const handleDecrement = () => {
        dispatch(decrement({num: 10}))
    }

    return <div className="d-flex flex-column align-items-center mt-5">
        <div>{counter}</div>
        <button className="mt-3 btn btn-primary" onClick={handleIncrement}>Increment</button>
        <button className="mt-3 btn btn-danger" onClick={handleDecrement}>Decrement</button>
    </div>
}

export default Redux
