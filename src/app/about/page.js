import { PortableText } from "next-sanity"
import { client } from "../../sanity/client";

const ABOUT_QUERY = `*[_type == "aboutPage"][0]`;
const options = { next: { revalidate: 30 } };

const AboutPage = async () => {
    let content = await client.fetch(ABOUT_QUERY, {}, options);

    if (!content) {
        content = {
            title: "About",
            body: [
                {
                    _type: "block",
                    children: [
                        {
                            _type: "span",
                            text: "This is the about page. You can change this text in your settings.",
                        },
                    ],
                },
            ],
        };
    }

    return (<>
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
        <div className="prose mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">{content.title}</h1>
          <div className="mx-5">
            {Array.isArray(content.body) && <PortableText value={content.body} />}
          </div>
        </div>
    </main>
    </>)
}

export default AboutPage