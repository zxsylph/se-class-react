"use client"

import { useState } from "react"

function CounterLabel(props) {
    const { count } = props
    return (<>
        <div>CounterLabel</div>
        <div>{count}</div>
    </>
    )
}

export default CounterLabel
