import React from 'react';
import clsx from 'clsx';
import { SVGs } from './../SVGs';
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
  {
    product: 'Flutter Starter',
    link: 'https://flutter-starter.github.io/',
  },
  // no logo
  // {
  //   product: 'NativeBase Market',
  //   link: 'https://fluttermarket.com/',
  // },
  // {
  //   product: 'Flutter Market',
  //   link: 'https://market.nativebase.io/',
  // },
];

function Product({ product, link }) {
  return (
    <div className={'col col--3'}>
      <a href={link} style={{ textDecorationLine: 'none' }} target="_blank">
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
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 text-4xl">More from GeekyAnts</h2>
          </div>
          <div className="max-w-sm mx-auto md:max-w-none">
            <div className="grid gap-4 md:grid-cols-5 md:col-gap-6 md:row-gap-8 items-start">
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
              {/* 1st article */}
              {/* <article className="flex flex-col h-full" data-aos="zoom-y-out">
                <header>
                  <Link to="/blog-post" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                      <img
                        className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                        src={'/img/home/news-01.jpg'}
                        width="352"
                        height="198"
                        alt="News 01"
                      />
                    </figure>
                  </Link>
                  <div className="mb-3">
                    <ul className="list-none flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <a
                          className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-primary-500 hover:bg-primary-700 transition duration-150 ease-in-out"
                          href="#0"
                        >
                          Case studies
                        </a>
                      </li>
                      <li className="m-1">
                        <a
                          className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out"
                          href="#0"
                        >
                          Hubspot
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-lg leading-snug tracking-tight font-normal">
                    <Link to="/blog-post" className="text-gray-600">
                      “How HubSpot saved 25% on developing costs by switching to
                      Simple.”
                    </Link>
                  </h3>
                </header>
              </article> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
