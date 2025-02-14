import Link from "next/link"



const Navbar = ({title}) => {
    return (<>
        <div className="navbar bg-base-100 mb-auto drop-shadow flex justify-between">
            <Link href='/' className="btn btn-ghost text-xl">{title}</Link>
            <div className="flex space-x-4">
                <Link href="/" className="text-lg">Home</Link>
                <Link href="/blog" className="text-lg">Blog</Link>
            </div>
        </div>
    </>)
}

export default Navbar