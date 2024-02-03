"use client"

import { useState } from "react"

import { countAtom } from '@/datas/count'
import { useAtom } from "jotai"

function CounterLabel() {
    const [count] = useAtom(countAtom)

    return (<>
        <div>CounterLabel</div>
        <div>{count}</div>
    </>
    )
}

export default CounterLabel
