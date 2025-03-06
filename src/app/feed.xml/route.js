import RSS from 'rss';
import { client } from '../../sanity/client';

const SETTINGS_QUERY = `*[_type == "settings"][0]`;
const options = { next: { revalidate: 30 } };

const settings = await client.fetch(SETTINGS_QUERY, {}, options);

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12]{title, slug, publishedAt, excerpt}`;
const posts = await client.fetch(POSTS_QUERY, {}, options);

const feed = new RSS({
  title: settings?.title || 'your title here', //get site name
  description: settings?.description || 'your description here', //get site description
  site_url: `https://${process.env.NEXT_PUBLIC_DOMAIN}`,
  feed_url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/feed.xml`,
  copyright: `${new Date().getFullYear()} ${settings.title || 'your title here'}`, //get site name
  language: 'en',
  pubDate: new Date(),
});

posts.map((post) => {
  feed.item({
    title: post.title,
    description: post.excerpt,
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/blog/${post.slug.current}`,
    guid: `https://${process.env.NEXT_PUBLIC_DOMAIN}/blog/${post.slug.current}`,
    date: post.publishedAt,
    author: post.author || 'your author here', //get site author
    categories: post.tags || [], //get site categories
  });
})

export async function GET() {
    return new Response(feed.xml({ indent: true }), {
        headers: {
          'Content-Type': 'application/atom+xml; charset=utf-8',
        },
      });
  }