import Link from "next/link"

const BlogCard = ({post}) => {

    return (<>
        <Link href={`/blog/${post.slug.current}`} key={post._id} className="mx-auto">
            <div key={post._id} className="card card-compact bg-base-300 w-80 shadow-xl">
                <figure>
                    <img
                    src={post.imageUrl}
                    alt={post.image.alt}/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold text-center mx-auto">{post.title}</h2>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </Link>
    </>)
}

export default BlogCard