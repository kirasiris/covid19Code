import React from 'react';
import Helmet from 'react-helmet';
/*
 *
 * COMPONENTS
 *
 */
import Navbar from './NavBar';
import Footer from './Footer';

const Layout = ({
  title = 'Title',
  description = 'Description',
  postImage = '',
  postId = '1',
  postSlug = 'post-uno',
  meta = [],
  robots = '',
  termIds = [],
  canonical = 'https://befree.io',
  url = '',
  author = 'kirasiris',
  createdAt = '',
  updatedAt = '',
  locales = '',
  posType = 'post',
  sectionClass = '',
  containerClass = '',
  cssLink,
  jsLink,
  children
}) => {
  return (
    <>
      <Helmet>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#FFFFFF' />
        <title>{title}</title>
        <meta name='description' content={`${description}`}></meta>
        <meta name='robots' content={`${robots}`} />
        <link rel='canonical' href={`${canonical}`} />
        {locales &&
          locales.length > 0 &&
          locales.map(locale => {
            return <meta property='og:locale' content={`${locale}`} />;
          })}
        <meta property='og:type' content={`${posType}`} />
        <meta property='og:title' content={`${title}`} />
        <meta property='og:description' content={`${description}`} />
        <meta property='og:url' content={`${canonical + `/` + url}`} />
        <meta property='og:site_name' content={`${title}`} />
        <meta property='article:author' content={`${author}`} />
        {termIds &&
          termIds.length > 0 &&
          termIds.map(term => {
            return <meta property='article:tag' content={`${term}`} />;
          })}
        <meta property='article:section' content='Programming' />
        <meta property='article:published_time' content={`${createdAt}`} />
        <meta property='article:modified_time' content={`${updatedAt}`} />
        <meta property='og:updated_time' content={`${updatedAt}`} />
        <meta property='og:image' content={`${postImage}`} />
        <meta property='og:image:secure_url' content={`${postImage}`} />
        <meta property='og:image:width' content='1873' />
        <meta property='og:image:height' content='900' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:description' content={`${description}`} />
        <meta name='twitter:title' content={`${title}`} />
        <meta name='twitter:site' content={`@kirasiris`} />
        <meta name='twitter:image' content={`${postImage}`} />
        <meta name='twitter:creator' content={`@kirasiris`} />
        {cssLink && (
          <link rel='stylesheet' href={`${cssLink}`} media='all'></link>
        )}
        {jsLink && <script src={`${jsLink}`} crossorigin='anonymous'></script>}
      </Helmet>
      <main className='wrapper'>
        <Navbar />
        <div id='content'>
          <section className={`${sectionClass}`}>
            <div className={`${containerClass}`}>{children}</div>
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Layout;
