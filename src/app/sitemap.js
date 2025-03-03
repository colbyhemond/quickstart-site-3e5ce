import { client } from "../sanity/lib/client";


export default async function sitemap() {
  
    const links = [
    {
      url: `https://${process.env.NEXT_PUBLIC_DOMAIN}`, // Replace with your homepage
      lastModified: new Date(),
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/about`, // Replace with your about page
      lastModified: new Date(),
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/blog`, // Replace with your blog page
      lastModified: new Date(),
    }
  ]


    const POSTS_QUERY = `*[ _type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12]{slug, publishedAt}`;
    const posts = await client.fetch(POSTS_QUERY);
    posts.forEach((post) => {
        links.push({
            url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/blog/${post.slug.current}`,
            lastModified: new Date(post.publishedAt),
        });
    }); 


  return links;
}