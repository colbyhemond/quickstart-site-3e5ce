import Link from "next/link"


const CallToActionButton = ({href, text}) => {
    return (<>
        <Link href={href} className="btn btn-primary">{text}</Link>
    </>)
}

export default CallToActionButton