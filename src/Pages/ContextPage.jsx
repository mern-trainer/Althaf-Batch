import React, { useContext } from 'react'
import { TodoContext } from '../App'

const ContextPage = () => {

    const context = useContext(TodoContext)

    return (
        <div className="d-flex flex-column align-items-center mt-5">
            <p>{context.counter}</p>
            <button className="btn btn-primary w-25" onClick={() => context.setCounter(context.counter + 1)}>Increment</button>
        </div>
    )
}

export default ContextPage
