import Link from "next/link";
import { client } from "../..//sanity/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

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
    let posts = [];
    posts = await client.fetch(POSTS_QUERY, {}, options);

    const postImageUrl = (post) => {
        return post.image ? urlFor(post.image)?.url() : null
    };


    return (
        <main className="p-8 max-w-5xl mx-auto">
            <div className="prose mx-auto">
                <h1 className="font-bold mb-4 text-center">Blog</h1>
            </div>

            {posts.length === 0 && <div className="flex justify-center items-center"><div>No Posts Yet...</div></div>}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {posts.map((post, index) => {
                    return ( 
                    <div key={post._id} className=" rounded-lg">
                        
                        <Link href={`/blog/${post.slug.current}`} key={post._id}>
                            <div className="relative rounded-t-xl mx-auto h-[200px]">
                                <Image src={postImageUrl(post)} alt={post.title} fill={true} className="object-cover rounded-t-xl" />
                            </div>
                            <div className="p-4 bg-base-300 rounded-b-xl ">
                                <div className="text-2xl font-semibold text-center">{post.title}</div>
                            </div>
                        </Link>
                    </div>
                    )
                
                })}
            </div>
        </main>
        );
}

export default Blog