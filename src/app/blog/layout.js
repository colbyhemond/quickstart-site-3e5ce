import ScrollProgress from "../../components/ScrollProgress";

export const metadata = {
  title: "Blog", //TODO - connect to sanity
  description: "Blog", //TODO - connect to sanity
};

export default function RootLayout({ children }) {

  return (<>
    <ScrollProgress/>
    <div className="flex flex-col justify-center items-center">
        {children}
    </div>

  </>);
}
