


const Author = ({author}) => {
    return (<>
        <div className="flex items-center gap-2">
            <img src={author.image} alt={author.name} className="w-10 h-10 rounded-full m-0"/>
            <div>
                <p className="font-bold">{author.name}</p>
            </div>
        </div>
    </>)
}

export default Author