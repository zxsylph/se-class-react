import { useState } from "react"

import Counter from "@/components/Counter"
import CounterLabel from "@/components/CounterLabel"
import Button from "@/components/Button"
import Footer from "@/components/Footer"

function CounterContainer() {
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

    return <>
        <CounterLabel count={count}></CounterLabel>
        <Button onClick={handleAddClick} label="Add"></Button>
        <Button onClick={handleSubClick} label="Sub"></Button>
        <Button onClick={handleResetClick} label="Reset"></Button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer count={count}></Footer>
    </>
}

export default CounterContainer
