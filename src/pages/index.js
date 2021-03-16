import React from 'react';
// import clsx from 'clsx';
import Layout from '@theme/Layout';
// import Navbar from '@theme/Navbar';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import {
  Hero,
  Features as NewFeatures,
  // FeaturesBlocks,
  // FeaturesWorld,
  // News,
  Community,
  Cta,
  More,
  Stats,
  Creators,
} from './../components/Home';

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
