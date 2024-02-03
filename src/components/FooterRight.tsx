import { countAtom } from '@/datas/count'
import { useAtom } from "jotai"

function FooterRight() {
    const [count] = useAtom(countAtom)

    return <>
        <div>FooterRight</div>
        <div>{count}</div>
    </>
}

export default FooterRight
