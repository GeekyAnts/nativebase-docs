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
  Reviews,
  Universal,
  // Kitchensink,
  More,
  Responsive,
  DarkMode,
  Sponsors,
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
        <meta http-equiv="refresh" content="0;url=https://alpha.nativebase.io/" />
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
        <meta property="og:image" content="/img/nativebase-og.png" />
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
            <Reviews />
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
