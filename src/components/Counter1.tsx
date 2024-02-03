"use client"

import { useState } from "react"

function Counter1() {
    const [count, setCount] = useState(0)

    const handleAddClick = () => {
        setCount(count + 1)
    }

    const handleSubClick = () => {
        setCount(count - 1)
    }

    const handleResetClick = () => {
        setCount(0)
    }

    return (<>
        <div>Counter 1</div>
        <div>{count}</div>
        <div>
            <button onClick={handleAddClick}>Add</button>
        </div>
        <div>
            <button onClick={handleSubClick}>Sub</button>
        </div>
        <div>
            <button onClick={handleResetClick}>Reset</button>
        </div>
    </>
    )
}

export default Counter1