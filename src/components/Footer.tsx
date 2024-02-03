import FooterLeft from "@/components/FooterLeft"
import FooterRight from "@/components/FooterRight"

function Footer(props) {
    const { count } = props

    return <>
        <div>Footer</div>
        <FooterLeft count={count}></FooterLeft>
        <FooterRight count={count}></FooterRight>
    </>
}

export default Footer
