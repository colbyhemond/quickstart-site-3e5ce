import ScrollProgress from "../../components/layout/ScrollProgress";
import { client } from "../../sanity/client";


const SETTINGS_QUERY = `*[_type == "settings"][0]`;
const options = { next: { revalidate: 30 } };


export const metadata = async () => {
    let settings = await client.fetch(SETTINGS_QUERY, {}, options);

    return ({
    title: {
      template: `%s | Blog`,
      default: `Blog`,
    },
    description: `Discover what they are writing about in the blog at ${settings.title}.`,
  });
}

export default function RootLayout({ children }) {

  return (<>
    <ScrollProgress />
    <div className="flex flex-col justify-center items-center">
        {children}
    </div>

  </>);
}
