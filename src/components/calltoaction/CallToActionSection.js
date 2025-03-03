
import CallToActionButton from "./CallToActionButton"

const CallToActionSection = ({text, button}) => {
    return (<>
        <div className="flex justify-center items-center bg-base-300 p-8 rounded-2xl m-5">
            <div className="mx-auto flex flex-col md:flex-row justify-center items-center gap-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-center">{text}</h2>
                <CallToActionButton href={button.href} text={button.text} />
            </div>
        </div>
    </>)
}

export default CallToActionSection