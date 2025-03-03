import Image from "next/image";
import { client } from "../../sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";


const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
  ]|order(publishedAt desc)[0]{_id, title, slug, publishedAt, image}`;
  
  const options = { next: { revalidate: 30 } };
  const { projectId, dataset } = client.config();
  const urlFor = (source) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;
 
 const BlogHero = async () => {


    let post;
    post = await client.fetch(POSTS_QUERY, {}, options);
    console.log(post);
    
    const postImageUrl = post.image
      ? urlFor(post.image)?.url()
      : null;  


    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

    return (<>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex flex-col items-center lg:flex-row md:items-start">
                <div className="text-center lg:text-left">
                
                {postImageUrl && (
                            <div className="relative rounded-xl min-w-[350px] h-[200px] md:min-w-[575px] md:h-[300px] lg:w-[750px] lg:h-[450px]">
                              <Image
                                src={postImageUrl}
                                alt={post.title}
                                fill={true}
                                className="rounded-xl object-cover"
                              />
                            </div>
                          )}
                </div>
                <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h2 className="card-title text-5xl">{post.title}</h2>
                        {/* <p>{post.excerpt}</p>
                        <p>{post.author}</p> */}
                        <p>{new Intl.DateTimeFormat("en-US", dateOptions).format(new Date(post.publishedAt))}</p>
                        <Link href={`/blog/${post.slug.current}`} className="btn btn-primary my-4">Read Article</Link>
                    </div>
                </div>
            </div>
        </div>
    </>)
 }
 
 export default BlogHero