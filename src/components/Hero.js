import { client } from "@/sanity/client";

const HERO_QUERY = `*[_type == "homePage"][0]`;
const options = { next: { revalidate: 30 } };

const Hero = async () => {
    const hero = await client.fetch(HERO_QUERY, {}, options);
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