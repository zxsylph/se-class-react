"use client"

import Button from "@/components/Button"
import Counter1 from "@/components/Counter1"
import CounterContainer from "@/components/CounterContainer"
import CounterLabel from "@/components/CounterLabel"
import Link from "next/link"

function Counter2Page() {

    return (<>
        <div>Counter 2 Page</div>
        <CounterContainer></CounterContainer>
        <Link href="counter" replace={true}>Goto Count</Link>
    </>)
}

export default Counter2Page
