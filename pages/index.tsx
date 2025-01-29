import Head from "next/head";
import Registration from "./registration";

export default function Home() {
  return (
    <>
      <Head>
        <title>MyTest</title>
        <meta name="description" content="Just a test" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Registration />
    </>
  );
}
