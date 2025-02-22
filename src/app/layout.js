
import Navbar from "../components/layout/Navbar";
import "./globals.css";
import Footer from "../components/layout/Footer";
import FathomAnalytics from "../components/FathomAnalytics";
import { client } from "../sanity/client";
import ThemeWrapper from "../components/layout/ThemeWrapper";
import Layout from "../components/layout/Layout";

export const metadata = {
  title: {
    template: '%s | Quickstart',
    default: 'Quickstart',
  },
  description: "My Website", //TODO - connect to sanity
};


const SETTINGS_QUERY = `*[_type == "settings"][0]`;
const options = { next: { revalidate: 30 } };

export default async function RootLayout({ children }) {

  const settings = await client.fetch(SETTINGS_QUERY, {}, options);

  const theme = settings?.theme || "light";
  
  return (
    <html lang="en" className="bg-neutral">
      <FathomAnalytics />
      
      <body className="bg-base-100">
        <ThemeWrapper theme={theme}>
        
        <Layout settings={settings}>
          {children}
        </Layout>
        </ThemeWrapper>
      </body>
    </html>
  );
}
