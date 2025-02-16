import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import FathomAnalytics from "@/components/FathomAnalytics";
import { client } from "@/sanity/client";
import ThemeWrapper from "@/components/layout/ThemeWrapper";

export const metadata = {
  title: "Quickstart Site", //TODO - connect to sanity
  description: "My Website", //TODO - connect to sanity
};


const SETTINGS_QUERY = `*[_type == "settings"][0]`;
const options = { next: { revalidate: 30 } };

export default async function RootLayout({ children }) {

  const settings = await client.fetch(SETTINGS_QUERY, {}, options);

  const theme = settings?.theme || "light";

  return (
    <html lang="en">
      <FathomAnalytics />
      
      <body >
        <ThemeWrapper theme={theme}>
        
        <Navbar title='Quickstart' />
        <div className="drop-shadow flex-grow">
          <div className="">
          {children}
          </div>
        </div>
        <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}
