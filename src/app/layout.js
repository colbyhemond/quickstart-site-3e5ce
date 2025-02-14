import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Quickstart Site", //TODO - connect to sanity
  description: "My Website", //TODO - connect to sanity
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
