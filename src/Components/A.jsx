import React, { useState } from 'react'
import B from './B'

const A = () => {

    const [counter, setCounter] = useState(500)

    return (
        <div>   
            Component A [{counter}]
            <B counter={counter} setCounter={setCounter} /> 
        </div>
    )
}

export default A
