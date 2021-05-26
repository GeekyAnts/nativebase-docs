import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import React from 'react';
import {
  Accessibility,
  Community,
  Creators,
  ComponentLibrary,
  Cta,
  Hero,
  Utility,
  Reviews,
  Universal,
  More,
  Responsive,
  DarkMode,
  Sponsors,
  Stats,
  Themeable,
  NewsLetter,
  UtilityProps,
  WatchTalk,
  Web,
  PolicyAcceptDialog,
} from './../components/Home';
import styles from './styles.module.css';
function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title} | A complete component library for React Ecosystem`}
      description="A complete component library for React Ecosystem"
    >
      <Head>
        <meta property="og:title" content="NativeBase"></meta>
        <meta
          property="og:description"
          content="Mobile-First, Accessible Components for React Native & Web"
        />
        <meta
          name="keywords"
          content="Open Source, OSS, Component Library, React, React Native, Accessible, Mobile-First, Styled System, ARIA, Consistent, Responsive, Utility Props"
        />
        <meta property="og:url" content="https://nativebase.io" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="NativeBase" />
        <meta name="twitter:image:alt" content="NativeBase" />
        <meta
          property="og:image"
          content={useBaseUrl('/img/nativebase-og.png')}
        />
        <meta
          name="twitter:image"
          content="https://alpha.nativebase.io/img/nativebase-og.png"
        ></meta>
        <meta name="twitter:site" content="@NativeBaseIO" />
      </Head>
      <main id="tailwind">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WCCPLQC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <div className="overflow-hidden relative">
          <section
            className={styles.features + 'flex-1 font-inter  overflow-visible'}
          >
            <Hero />
            <UtilityProps />
            <Themeable />
            <Accessibility />
            <Utility />
            <ComponentLibrary />
            <Responsive />
            <DarkMode />
            <Universal />
            {/* <Web /> */}
            {/* <Kitchensink /> */}
            {/* <FeaturesBlocks /> */}
            {/* <FeaturesWorld /> */}
            {/* <News /> */}
            <Stats />
            <Community />
            <Reviews />
            <NewsLetter />
            {/* <Cta /> */}
            <WatchTalk />

            <Creators />
            <Sponsors />
            <More />
          </section>
        </div>
        {/* Cookie Policy Fold */}
        <PolicyAcceptDialog />
      </main>
    </Layout>
  );
}
export default Home;
