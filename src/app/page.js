import Hero from "../components/Hero";
import BlogHero from "../components/blog/BlogHero";
import LatestPosts from "../components/blog/LatestPosts";
import CallToActionSection from "../components/calltoaction/CallToActionSection";
import { client } from "../sanity/client";

const button = {
  href: "/blog",
  text: "Go to Blog",
};

const calltoaction = {
  text: "See what else we have to say!",
  button: button,
};
const HOME_QUERY = `*[_type == "homePage"][0]`;
const options = { next: { revalidate: 30 } };

    
const Home = async () => {
  let homeContent = await client.fetch(HOME_QUERY, {}, options);
  console.log(homeContent);

  const calltoaction = {
    text: homeContent?.calltoaction?.text || "See what else we have to say!",
    button: {
      href: homeContent?.calltoaction?.buttonlink || "/blog",
      text: homeContent?.calltoaction?.buttontext || "Go to Blog",
    },
  };

  return (
    <div>
      <BlogHero />
      <LatestPosts />
      <CallToActionSection text={calltoaction.text} button={calltoaction.button}/>
    </div>
  );
}

export default Home;