import Link from "next/link"
import ThemePicker from "./ThemePicker"
import Logo from "../../lib/chwd/logo_full"
import Social from "../socials/Social"

const Footer = ({socialLinks}) => {

    const socialLinksMarkup = socialLinks.map((link, index) => {
        console.log(link);

        if (!link.link || !link.platform) {
            return null
        }
        
        return (
            <a key={index} href={link.link   } className="btn btn-ghost btn-circle">
                
                <Social name={link.platform}/>
            </a>
        )
    }
    )


    return (<>
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 pb-5">
            <nav className="grid grid-flow-col gap-4">
                <Link href="/" className="link link-hover">Home</Link>
                <Link href="/about" className="link link-hover">About</Link>
                <Link href="/blog" className="link link-hover">Blog</Link>
                

            </nav>
            {socialLinksMarkup.length > 0 ? 
            <nav>
                <div className="grid grid-flow-col gap-4">
                
                    {socialLinksMarkup}
                </div>
            </nav>
            : null}
            <aside className="flex flex-col md:flex-row md:flex-wrap justify-between items-end w-full gap-4">
                <p className="pt-4 order-10 mx-auto md:mx- lg:order-1">Copyright © {new Date().getFullYear()}</p>
                <div className="flex  items-end gap-4 order-12 md:order-5">
          
                    <div>Brought to you by:</div>
                    <div>
                        <Logo/>
                    </div>
                        
                </div>
                <div className="flex gap-4 items-center order-8 mx-auto">
                    <ThemePicker/>
                    <Link href="/admin" className="link link-hover">Admin</Link>
                </div>
            </aside>
        </footer>
    </>)
}

export default Footer