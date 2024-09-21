import { useState } from 'react'

const LandingPage = () => {

    const [counter, setCounter] = useState({ count1: 0, count2: 0 })

    // diffing algo

    const handleCounterOne = (op) => {
        setCounter(op == "+" ? {...counter, count1: counter.count1 + 1} : {...counter, count1: counter.count1 - 1})
    }

    const handleCounterTwo = (op) => {
        setCounter(op == "+" ? {...counter, count2: counter.count2 + 1} : {...counter, count2: counter.count2 - 1})
    }

    return (
        <div className="text-center mt-4">
            <div>COUNTER 1: {counter.count1}</div>
            <div>COUNTER 2: {counter.count2}</div>
            <div className="mt-3">
                <button className="btn btn-success" onClick={() => handleCounterOne("+")}>Increment 1</button>
                <button className="btn btn-danger ms-2" onClick={() => handleCounterOne("-")}>Decrement 1</button>
            </div>
            <div className="mt-3">
                <button className="btn btn-success" onClick={() => handleCounterTwo("+")}>Increment 2</button>
                <button className="btn btn-danger ms-2" onClick={() => handleCounterTwo("-")}>Decrement 2</button>
            </div>
        </div>
        
    )
}

export default LandingPage
