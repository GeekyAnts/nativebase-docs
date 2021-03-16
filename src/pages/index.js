// import Navbar from '@theme/Navbar';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import clsx from 'clsx';
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
  Features as NewFeatures,
  Hero,
  Kitchensink,
  More,
  Stats,
  Web,
} from './../components/Home';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title} | A complete component library for React Native Ecosystem`}
      description="A complete component library for React Native Ecosystem"
    >
      <main id="tailwind">
        <section
          className={styles.features + 'flex-1 font-inter overflow-hidden'}
        >
          <Hero />
          <Web />
          <Kitchensink />
          <Accessibility />
          <NewFeatures />

          {/* <FeaturesBlocks /> */}
          {/* <FeaturesWorld /> */}
          {/* <News /> */}
          <Stats />
          <Community />
          <Cta />
          <Creators />
          <More />
        </section>
      </main>
    </Layout>
  );
}

export default Home;
