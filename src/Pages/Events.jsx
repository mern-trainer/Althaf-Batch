import React, { useEffect, useState } from 'react'

// useEffect
// lifecycle => mounting, unmounting, updating

const Events = () => {

    // const [counter, setCounter] = useState(0)
    // const [count, setCount] = useState(0)

    const [axis, setAxis] = useState({ x: 0, y: 0 })

    const handleMouseMove = (event) => {
        setAxis({x: event.clientX, y: event.clientY})
    }

    useEffect(() => {

        document.addEventListener("mousemove", handleMouseMove)

        // const interval = setInterval(() => {
        //     setCounter(prev => prev + 1)
        // }, 1000); // --ms
        
        // return () => { // cleanup functon
        //     clearInterval(interval)
        // }

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
        }

    }, [])

    return (
        <div style={{height: "100vh", width: "100vw"}} className='d-flex justify-content-center flex-column align-items-center'>
            <div style={{height: "20px", width: "20px", left: `${axis.x}px`, top: `${axis.y}px`, filter: "blur(4px)"}} className='bg-dark position-absolute rounded-circle'></div>
            {/* <div>{counter}</div>
            <div>{count}</div>
            <div>
                <button className="btn btn-primary" onClick={() => setCount(count + 1)}>+</button>
            </div> */}
        </div>
    )
}

export default Events
