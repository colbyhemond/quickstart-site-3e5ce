import Hero from "../components/Hero";
import BlogHero from "../components/blog/BlogHero";
import LatestPosts from "../components/blog/LatestPosts";
import CallToActionSection from "../components/calltoaction/CallToActionSection";
import { client } from "../sanity/client";
import imageUrlBuilder from "@sanity/image-url";


const HOME_QUERY = `*[_type == "homePage"][0]{..., showcasePost->{..., author->}, calltoaction}`;
const options = { next: { revalidate: 30 } };
const { projectId, dataset } = client.config();
  const urlFor = (source) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;
    
const Home = async () => {
  let homeContent = await client.fetch(HOME_QUERY, {}, options);

  if (!homeContent) {
    homeContent = {
      showcasePost: {
        title: "Welcome to our blog!",
        excerpt: "This is the first post on our blog. Check back soon for more!",
        image: {
          asset: {
            url: "/placeholder.png",
          },
        },
        publishedAt: new Date().toISOString(),
        author: {
          name: "Author Name",
          image: {
            asset: {
              url: "/placeholder.png",
            },
          },
        },
      }
    }
  
  } else {
    homeContent.showcasePost.image = urlFor(homeContent.showcasePost.image).url();
    homeContent.showcasePost.author.image = urlFor(homeContent.showcasePost.author.image).url();
  }

  const calltoaction = {
    text: homeContent?.calltoaction?.ctatext || "See what else we have to say!",
    button: {
      href: homeContent?.calltoaction?.buttonlink || "/blog",
      text: homeContent?.calltoaction?.buttontext || "Go to Blog",
    },
  };

  return (
    <div>
      <BlogHero post={homeContent.showcasePost} />
      <LatestPosts />
      <CallToActionSection text={calltoaction.text} button={calltoaction.button}/>
    </div>
  );
}

export default Home;