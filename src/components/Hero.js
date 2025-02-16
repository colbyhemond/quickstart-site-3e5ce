import { client } from "@/sanity/client";

const HERO_QUERY = `*[_type == "homePage"][0]`;
const options = { next: { revalidate: 30 } };

const Hero = async () => {
    const hero = await client.fetch(HERO_QUERY, {}, options);
    hero.image = hero.image ? urlFor(hero.image).url() : 'https://guileless-pie-2e99f2.netlify.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu6kg40a8%2Fproduction%2F9c37b7bfbc9aa51449fa53de3befa0567aa158fd-4008x3006.jpg&w=1920&q=75';
    hero.title = hero.title || 'Your New Site';
    hero.subtitle = hero.subtitle || 'This is your new site. You can change this text in your settings.';
    hero.buttonText = hero.buttonText || 'Read More';
    hero.buttonLink = hero.buttonLink || '/blog';

    return (<>
        <div className="hero min-h-screen"
            style={{
                backgroundImage: `url(${hero.image})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{hero.title}</h1>
                    <p className="mb-5">
                        {hero.subtitle}
                    </p>
                    <a href={hero.buttonLink} className="btn btn-primary">{hero.buttonText}</a>
                </div>
            </div>
        </div>
    </>)
}

export default Hero