import React from 'react';
import { SVGs } from './../SVGs';
import useThemeContext from '@theme/hooks/useThemeContext';
const products = [
  {
    product: 'React Native Aria',
    link: 'https://react-native-aria.geekyants.com/',
  },
  {
    product: 'SyncState',
    link: 'https://syncstate.github.io/',
  },
  {
    product: 'Formst',
    link: 'https://formst.geekyants.com/',
  },
  {
    product: 'React Pluggable',
    link: 'https://react-pluggable.github.io/',
  },
];

function Product({ product, link }) {
  return (
    <div className={'col col--3'}>
      <a
        href={link}
        style={{ textDecorationLine: 'none' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="text-center max-h-sm flex justify-center align-center"
          style={{
            minHeight: '130px',
          }}
        >
          {SVGs[product]}
        </div>
        <div className={'text-center pt-6'}>
          <h3>{product}</h3>
        </div>
      </a>
    </div>
  );
}
export function More() {
  const { isDarkTheme } = useThemeContext();
  const headingColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-200';
  const subHeadingColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-400';
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className={`h2 text-4xl ${headingColor}`}>
              More from the Authors
            </h2>
            <p className={`text-xl ${subHeadingColor}`}>
              Interested in other projects we've worked on? We're delighted!
              Learn more here:
            </p>
          </div>
          <div className="max-w-sm mx-auto md:max-w-none">
            <div className="grid gap-4 md:grid-cols-4 md:col-gap-6 md:row-gap-8 items-start">
              {products.map((props, idx) => {
                return (
                  <article
                    className="flex flex-col h-full"
                    data-aos="zoom-y-out"
                  >
                    <Product key={idx} {...props} />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
