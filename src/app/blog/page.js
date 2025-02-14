import Link from "next/link";
import { client } from "@/sanity/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";


// const posts = [
//     { title: "First Post", details: "This is the first blog post.", slug: "first-post" },
//     { title: "Second Post", details: "This is the second blog post.", slug: "second-post" },
//     { title: "Third Post", details: "This is the third blog post.", slug: "third-post" },
// ];


const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image}`;
  
  const options = { next: { revalidate: 30 } };
  const { projectId, dataset } = client.config();
  const urlFor = (source) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;
  

const Blog = async () => {
    const posts = await client.fetch(POSTS_QUERY, {}, options);

    const postImageUrl = (post) => {
        return post.image ? urlFor(post.image)?.url() : null
    };


    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Blog</h1>
            <div className="space-y-4">
                {posts.map((post, index) => {
                    return ( 
                    <div key={post._id} className="border border-gray-200 rounded-lg">
                        
                        <Link href={`/blog/${post.slug.current}`} key={post._id}>
                            <Image src={postImageUrl(post)} alt={post.title} width="550" height="310" className="aspect-video" />
                            <div className="p-4">
                                <h2 className="text-2xl font-semibold text-center">{post.title}</h2>
                                {/* <p>{post.details}</p> */}
                            </div>
                        </Link>
                    </div>
                    )
                
                })}
            </div>
        </>
        );
}

export default Blog