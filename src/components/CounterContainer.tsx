import { useState } from "react"

import Counter from "@/components/Counter"
import CounterLabel from "@/components/CounterLabel"
import Button from "@/components/Button"
import Footer from "@/components/Footer"
import { useAtom } from "jotai"
import { countAtom } from "@/datas/count"
import { DevTools } from "jotai-devtools"

function CounterContainer() {
    const [count, setCount] = useAtom(countAtom)

    const handleAddClick = () => {
        setCount(count + 1)
    }

    const handleSubClick = () => {
        setCount(count - 1)
    }

    const handleResetClick = () => {
        setCount(0)
    }

    return <>
        <CounterLabel ></CounterLabel>
        <Button onClick={handleAddClick} label="Add"></Button>
        <Button onClick={handleSubClick} label="Sub"></Button>
        <Button onClick={handleResetClick} label="Reset"></Button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer ></Footer>
        <DevTools />
    </>
}

export default CounterContainer
