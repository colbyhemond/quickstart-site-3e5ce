'use client'


const ThemeWrapper = ({theme, children}) => {

    return (<>
        <div data-theme={theme} className={`antialiased min-h-screen flex flex-col justify-between`}>
            {children}
        </div>
    </>)
}

export default ThemeWrapper