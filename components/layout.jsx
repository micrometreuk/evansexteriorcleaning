import Head from "next/head";
export const siteTitle = "Professional exterior cleaning services.";
import Heading from "../components/Heading";
export default function Layout({ children }) {
  return (
    <div className="section">
      <Head>
        <link rel="icon" href="/images/logo.webp" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Professional exterior cleaning services"
        />
        <meta name="og:title" content={siteTitle} />
        <meta
          name="Evans exterior cleaning services"
          content={siteTitle}
        />
        <title>{siteTitle}</title>
      </Head>
        <Heading/>
      <main> {children}</main>

    </div>
  );
}
