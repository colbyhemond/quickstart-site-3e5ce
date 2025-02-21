'use client'

import Footer from "./Footer"
import Navbar from "./Navbar"
import { usePathname } from 'next/navigation'


const Layout = ({children, settings}) => {
    const pathname = usePathname()
    console.log(pathname);
    
    // Parse pathname to determine if we are on the admin page
    const isAdminPage = pathname.startsWith('/admin')

    const title = settings?.title || "Quickstart";
    const socialLinks = settings?.socialLinks || [];

    if (isAdminPage) {
        return children
    }

    return (<>
        <Navbar title={title} />
        <div className="drop-shadow flex-grow">
          <div className="">
          {children}
          </div>
        </div>
        <Footer socialLinks={socialLinks} />
    </>)
}

export default Layout