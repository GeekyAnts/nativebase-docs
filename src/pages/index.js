import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import {
  Accessibility,
  // FeaturesBlocks,
  // FeaturesWorld,
  // News,
  Community,
  Creators,
  Cta,
  Hero,
  Kitchensink,
  More,
  Responsive,
  Sponsors,
  Stats,
  Themeable,
  UtilityProps,
  WatchTalk,
  Web,
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
        <meta property="og:title" content="NativeBase" />
        <meta
          property="og:description"
          content="A Complete Component Library for the React Ecosystem"
        />
        <meta
          name="keywords"
          content="Open Source, OSS, Component Library, React, React Native, Accessible, Consistent, Responsive, Utility Props"
        />
        <meta
          property="og:url"
          content="[https://nativebase.io](https://nativebase.io/)"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="NativeBase" />
        <meta name="twitter:image:alt" content="NativeBase" />
        <meta property="og:image" content="/img/nativebase-og.png" />
        <meta name="twitter:site" content="@NativeBaseIO" />
      </Head>
      <main id="tailwind">
        <section
          className={styles.features + 'flex-1 font-inter overflow-hidden'}
        >
          <Hero />
          <Web />
          <Kitchensink />
          <Accessibility />
          <UtilityProps />
          <Themeable />
          <Responsive />
          {/* <FeaturesBlocks /> */}
          {/* <FeaturesWorld /> */}
          {/* <News /> */}
          <Stats />
          <WatchTalk />
          <Community />
          <Cta />
          {/* <Sponsors /> */}
          <Creators />
          <More />
        </section>
      </main>
    </Layout>
  );
}

export default Home;
