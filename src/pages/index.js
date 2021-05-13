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
  ComponentLibrary,
  Cta,
  Hero,
  Utility,
  Universal,
  // Kitchensink,
  More,
  Responsive,
  DarkMode,
  // Sponsors,
  Stats,
  Themeable,
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
        <div className="overflow-hidden lg:px-8 relative">
          <section
            className={
              styles.features +
              'flex-1 max-w-6xl mx-auto md:px-8 lg:px-0 font-inter  overflow-visible'
            }
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
            {/* <Cta /> */}
            <WatchTalk />
            {/* <Sponsors /> */}
            <Creators />
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
