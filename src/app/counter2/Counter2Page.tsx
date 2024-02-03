"use client"

import Button from "@/components/Button"
import Counter1 from "@/components/Counter1"
import CounterContainer from "@/components/CounterContainer"
import CounterLabel from "@/components/CounterLabel"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

function Counter2Page() {
    const router = useRouter()

    const changeLink = () => {
        console.log('changeLink')
        router.push('counter', { scroll: true })
    }

    return (<>
        <div>Counter 2 Page</div>
        <CounterContainer></CounterContainer>
        <Link href="counter" replace={true}>Goto Count</Link>
        <div>
            <button onClick={changeLink}>
                goto counter
            </button>
        </div>
    </>)
}

export default Counter2Page
