import Head from 'next/head';

export default function Seo({ pageTitle, description }) {
  return (
    <Head>
      <title>{pageTitle} || Msoleh - Portofolio</title>
      {description && <meta name="description" content={description} />}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
