'use client'

import { useEffect } from "react"


const ThemeWrapper = ({theme, children}) => {

    // useEffect(() => {
    //     document.querySelector('body').setAttribute('data-theme', theme)
    //     document.querySelector('body').classList.add('bg-base-100')
    // }, [])

    return (<>
        <div data-theme={theme} className={`antialiased min-h-screen flex flex-col justify-between`}>
            {children}
        </div>
    </>)
}

export default ThemeWrapper