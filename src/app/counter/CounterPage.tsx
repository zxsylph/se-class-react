"use client"

import Button from "@/components/Button"
import Counter1 from "@/components/Counter1"
import CounterContainer from "@/components/CounterContainer"
import CounterLabel from "@/components/CounterLabel"
import Link from "next/link"
import { useRouter } from 'next/navigation'

function CounterPage() {
    const router = useRouter()

    return (<>
        <CounterContainer></CounterContainer>
        <div><Link href="counter2" replace={true}>Goto Count 2</Link></div>
        <div><button onClick={() => router.push('/counter2', { shallow: true })}>
            goto counter 2
        </button></div>

    </>)
}

export default CounterPage
