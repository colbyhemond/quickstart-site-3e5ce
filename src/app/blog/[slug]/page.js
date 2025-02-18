// import { client } from "@/sanity/client";

import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import ArticleReader from "@/components/ArticleReader";
// import Refractor from 'react-refractor'
// import js from 'refractor/lang/javascript'

// Refractor.registerLanguage(js)

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const sanityOptions = { next: { revalidate: 30 } };

export const generateMetadata = async ({params, searchParams}, parent) => {

  const post = await client.fetch(POST_QUERY, await params, sanityOptions);
  return {
    title: post.title,
    description: post.title,
    image: '/api/og?title=' + post.title,
    // image: post.image
    //   ? urlFor(post.image)
    //       .width(1200)
    //       .height(630)
    //       .url()
    //   : null,
  };
}

const dateOptions = { 
  year: "numeric",
  month: "long",
  day: "numeric",
};

const defaults = {nonTextBehavior: 'remove'}
const blocksToText = (blocks, opts = {}) => {
  const options = Object.assign({}, defaults, opts)
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return options.nonTextBehavior === 'remove' ? '' : `[${block._type} block]`
      }

      return block.children.map(child => child.text).join('')
    })
    .join('\n\n')
}

const portableTextComponents = {
  types: {
    code: (node) => {
      const {language, code} = node.value
      return (
        <pre data-language={language}>
          <code>{code}</code>
        </pre>
      )
    },
    image: (node) => {
      if (projectId && dataset ) {
        return(
          <Image src={imageUrlBuilder({ projectId, dataset }).image(node.value).url()} width="900" height="500" alt="image"/>
        )
      }
    }
  }
}

export default async function Post({params}) {
    const post = await client.fetch(POST_QUERY, await params, sanityOptions);
    const postImageUrl = post.image
      ? urlFor(post.image)?.url()
      : null;

      console.log(postImageUrl);
      
  
    return (
      <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
        <Link href="/blog" className="hover:underline pb-5">
          ← Back to posts
        </Link>
        
        <div className="prose mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">{post.title}</h1>
          <div className="flex justify-center gap-5">
            <div className="text-center">{new Intl.DateTimeFormat("en-US", dateOptions).format(new Date(post.publishedAt))}</div>
            <ArticleReader text={blocksToText(post.body)} />
          </div>
          {postImageUrl && (
            <Image
              src={postImageUrl}
              alt={post.title}
              className="aspect-video rounded-xl mx-auto"
              width="900"
              height="420"
            />
          )}
          <div className="mx-5">
            {Array.isArray(post.body) && <PortableText value={post.body} components={portableTextComponents} />}
          </div>
        </div>

      </main>
    );
  }
  
  