import { countAtom } from '@/datas/count'
import { useAtom } from "jotai"

function FooterLeft() {
    const [count] = useAtom(countAtom)

    return <>
        <div>FooterLeft</div>
        <div>{count}</div>
    </>
}

export default FooterLeft
