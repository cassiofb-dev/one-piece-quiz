import Head from 'next/head';
import db from '../../db.json';

function SEO() {
  return (
    <Head>
      <title>{db.title}</title>

      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      <meta name="title" content={db.title} />
      <meta name="description" content={db.description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={db.gitURL} />
      <meta property="og:title" content={db.title} />
      <meta property="og:description" content={db.description} />
      <meta property="og:image" content={db.bg} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={db.gitURL} />
      <meta property="twitter:title" content={db.title} />
      <meta property="twitter:description" content={db.description} />
      <meta property="twitter:image" content={db.bg} />
    </Head>
  );
}

export default SEO;
