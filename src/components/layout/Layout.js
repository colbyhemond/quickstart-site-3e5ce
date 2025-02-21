'use client'

import Footer from "./Footer"
import Navbar from "./Navbar"
import { usePathname } from 'next/navigation'


const Layout = ({children}) => {
    const pathname = usePathname()
    console.log(pathname);
    
    // Parse pathname to determine if we are on the admin page
    const isAdminPage = pathname.startsWith('/admin')


    if (isAdminPage) {
        return children
    }

    return (<>
        <Navbar title='Quickstart' />
        <div className="drop-shadow flex-grow">
          <div className="">
          {children}
          </div>
        </div>
        <Footer />
    </>)
}

export default Layout