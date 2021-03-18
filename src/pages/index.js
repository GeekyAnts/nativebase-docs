import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React, { useEffect } from 'react';
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
  // Sponsors,
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
  const [isVisible, setIsVisible] = React.useState('');
  useEffect(() => {
    const check = localStorage.getItem('EU_COOKIE_LAW_CONSENT');
    if (check) {
      setIsVisible('hidden');
    } else {
      setIsVisible('');
    }
  }, []);
  const handleEulaAccept = () => {
    localStorage.setItem('EU_COOKIE_LAW_CONSENT', 'true');
    setIsVisible('hidden');
  };
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
        {/* Cookie Policy Fold */}
        <section
          className={
            styles.features + 'flex-1 font-inter overflow-hidden ' + isVisible
          }
        >
          <div className="fixed right-0 left-0 bottom-1 z-10 flex justify-center w-full">
            <div className="bg-gray-800 bg-opacity-80 flex justify-center items-center w-9/12  rounded-md px-5 pb-4 lg:pb-0 pt-4">
              <div className="lg:grid lg:grid-cols-6 lg:grid-cols-7 gap-1">
                <p className="text-white text-xs col-span-6">
                  We use our own and third-party cookies and other tracking
                  technologies, by continuing to browse the website, you accept
                  our use of cookies and tracking technologies.
                </p>
                <div className="flex-1 flex justify-center lg:grid lg:grid-cols-2 lg:gap-2">
                  <a className="no-underline" href="/cookie-policy">
                    <div className="text-xs text-center text-white font-semibold hover:bg-green-400 hover:bg-opacity-30 ">
                      LEARN MORE
                    </div>
                  </a>
                  <a onClick={handleEulaAccept}>
                    <div className="text-xs text-center  px-2 lg:px-0 text-white font-semibold rounded-sm ml-10 lg:ml-0 cursor-pointer bg-green-400">
                      ACCEPT
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="fixed bg-green-400 bottom-0 p-5 mx-auto w-full z-10"></div> */}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
