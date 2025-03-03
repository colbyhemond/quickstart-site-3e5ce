import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/client";

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
  

export async function GET() {
    let posts = [];
    posts = await client.fetch(POSTS_QUERY, {}, options);

    const postImageUrl = (post) => {
        return post.image ? urlFor(post.image)?.url() : null
    };

    posts = posts.map((post) => {
        return {
            ...post,
            imageUrl: postImageUrl(post)
        }
    });

    const sanatizedPosts = posts.map((post) => {
        return {
            title: post.title,
            link: `https://${process.env.NEXT_PUBLIC_DOMAIN}/blog/${post.slug.current}`,
            publishedAt: post.publishedAt,
            image: post.imageUrl
        }
    });

  return new Response(
    JSON.stringify(sanatizedPosts),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    }
  );
}