import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import FathomAnalytics from "@/components/FathomAnalytics";

export const metadata = {
  title: "Quickstart Site", //TODO - connect to sanity
  description: "My Website", //TODO - connect to sanity
};

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <FathomAnalytics />
      <body
        className={`antialiased min-h-screen flex flex-col justify-between`}
      >
        <Navbar title='Quickstart' />
        <div className="drop-shadow flex-grow">
          <div className="">
          {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
