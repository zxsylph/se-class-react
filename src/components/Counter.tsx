"use client"

import { useState } from "react"

function Counter(props) {
    const { count, onAddClick, onSubClick, onResetClick } = props

    return (<>
        <div>CounterPage</div>
        <div>{count}</div>
        <div>
            <button onClick={onAddClick}>Add</button>
        </div>
        <div>
            <button onClick={onSubClick}>Sub</button>
        </div>
        <div>
            <button onClick={onResetClick}>Reset</button>
        </div>
    </>
    )
}

export default Counter
