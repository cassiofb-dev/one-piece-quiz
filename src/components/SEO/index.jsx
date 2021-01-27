import Head from 'next/head';
import {
  title,
  description,
  bg,
  gitURL,
} from '../../db.json';

function SEO() {
  return (
    <Head>
      <title>{title}</title>

      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={gitURL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={bg} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={gitURL} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={bg} />
    </Head>
  );
}

export default SEO;
