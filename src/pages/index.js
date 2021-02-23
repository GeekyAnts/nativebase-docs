import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import {
	Hero,
	Features as NewFeatures,
	FeaturesBlocks,
	FeaturesWorld,
	News,
	Cta,
} from './../components/Home';

const features = [
	{
		title: 'Accessible',
		imageUrl: '/img/NB-feature-icons/SVG/Accessible.svg',
		description: 'Maximise app usage with our accessible design.',
	},
	{
		title: 'Responsive',
		imageUrl: '/img/NB-feature-icons/SVG/Responsive.svg',
		description: 'Create responsive apps with ease from the get-go.',
	},
	{
		title: 'Themeable',
		imageUrl: '/img/NB-feature-icons/SVG/Themeable.svg',
		description: 'Customise your app theme and component styles.',
	},
	{
		title: 'Consistent',
		imageUrl: '/img/NB-feature-icons/SVG/Consistent.svg',
		description: 'Make accurate predictions for web, Android & iOS.',
	},
];

const Features = () => (
	<div className='container'>
		<div className='row'>
			{features.map((feature, key) => {
				return (
					<div className={clsx('col col--3', styles.textAlignCenter)}>
						<img
							src={feature.imageUrl}
							height='58px'
							width='80px'
							className={clsx(styles.image)}
						></img>
						<h3
							style={{
								fontSize: '20px',
								letterSpacing: 0,
							}}
						>
							{feature.title}
						</h3>
						<p style={{ color: '#5e5e5e', fontWeight: '500' }}>
							{feature.description}
						</p>
					</div>
				);
			})}
		</div>
	</div>
);
function Home() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	return (
		<Layout
			title={`${siteConfig.title} | A complete component library for React Native Ecosystem`}
			description='A complete component library for React Native Ecosystem'
		>
			{/* <header className={clsx(styles.mainBanner)}>
        <div className='container '>
          <div
            className={clsx(
              'row',
              styles.justifyCenter,
              styles.alignCenter,
              styles.displayFlex
            )}
          >
            <img
              src={'/img/native-base-icon.png'}
              width='47.5px'
              height='55px'
              alt='Nativebase'
              style={{ marginRight: '10px' }}
            />

            <h1
              className={clsx(styles.marginVerticalAuto)}
              style={{ fontSize: '48px' }}
            >
              {siteConfig.title}
              <span
                style={{
                  lineHeight: '14px',
                  fontSize: '14px',
                  marginLeft: '5px',
                }}
              >
                (alpha)
              </span>
            </h1>
          </div>
          <p style={{ marginTop: '20px', fontSize: '32px' }}>
            {siteConfig.tagline}
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.sizeSmall
              )}
              to={useBaseUrl('docs/nativebase')}
              style={{ color: '#6863A9' }}
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </header> */}
			<main id='tailwind'>
				<section className={styles.features + 'flex-1 font-inter'}>
					<Hero />
					<NewFeatures />
					<FeaturesBlocks />
					<FeaturesWorld />
					<News />
					<Cta />
					{/* <Features /> */}
				</section>
			</main>
		</Layout>
	);
}

export default Home;
