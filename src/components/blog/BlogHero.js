import Image from "next/image";
import Link from "next/link";
import Author from "./Author";


 const BlogHero = async ({post}) => {
  console.log(post);
  

    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

    return (<>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex flex-col items-center lg:flex-row md:items-start">
                <div className="text-center lg:text-left">
                
                {post.image && (
                  <div className="relative rounded-xl min-w-[350px] h-[200px] md:min-w-[575px] md:h-[300px] lg:w-[750px] lg:h-[450px]">
                    <Image
                      src={post.image.url}
                      alt={post.image.alt}
                      fill={true}
                      className="rounded-xl object-cover"
                    />
                  </div>
                )}
                </div>
                <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl rounded-xl h-auto lg:h-[450px]">
                    <div className="card-body ">
                        <h2 className="card-title text-5xl">{post.title}</h2>
                        <p className="">{post.excerpt}</p>
                        <div className="flex justify-between items-center gap-4 w-full">
                          <div>{new Intl.DateTimeFormat("en-US", dateOptions).format(new Date(post.publishedAt))}</div>
                          <Author author={post.author}/>
                        </div>
                        <Link 
                          href={`/blog/${post.slug.current}`} 
                          className="btn btn-primary my-4"
                          aria-label={`Readt the full article on ${post.title}`}
                        >Read Article</Link>
                    </div>
                </div>
            </div>
        </div>
    </>)
 }
 
 export default BlogHero