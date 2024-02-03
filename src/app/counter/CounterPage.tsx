"use client"

import Button from "@/components/Button"
import Counter1 from "@/components/Counter1"
import CounterContainer from "@/components/CounterContainer"
import CounterLabel from "@/components/CounterLabel"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

function CounterPage() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const changeLink = () => {
        console.log('changeLink')
        router.push('counter2', { scroll: true })
    }

    return (
        <>
            <CounterContainer></CounterContainer>
            <div>
                <Link href="counter2" replace={true}>Goto Count 2</Link>
            </div>
            <div>
                <button onClick={changeLink}>
                    goto counter 2
                </button>
            </div>
        </>
    )
}

export default CounterPage
