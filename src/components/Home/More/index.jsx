import React from 'react';
import { SVGs } from './icons';
import useThemeContext from '@theme/hooks/useThemeContext';
const products = [
  {
    product: 'React Native Aria',
    link:
      'https://react-native-aria.geekyants.com/?utm_source=RnD&utm_medium=Landing_Page&utm_campaign=NativeBase_3',
  },
  {
    product: 'SyncState',
    link:
      'https://syncstate.github.io/?utm_source=RnD&utm_medium=Landing_Page&utm_campaign=NativeBase_3',
  },
  {
    product: 'Formst',
    link:
      'https://formst.geekyants.com/?utm_source=RnD&utm_medium=Landing_Page&utm_campaign=NativeBase_3',
  },
  {
    product: 'React Pluggable',
    link:
      'https://react-pluggable.github.io/?utm_source=RnD&utm_medium=Landing_Page&utm_campaign=NativeBase_3',
  },
  {
    product: 'Flutter Starter',
    link:
      'https://flutter-starter.geekyants.com/?utm_source=RnD&utm_medium=Landing_Page&utm_campaign=NativeBase_3',
  },
];

function Product({ product, link, productColor }) {
  return (
    <div className={'w-24 lg:w-32'}>
      <a
        href={link}
        style={{ textDecorationLine: 'none' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="max-h-sm justify-center flex align-center"
          style={{
            minHeight: '100px',
          }}
        >
          {SVGs[product]}
        </div>
        <div>
          <h3 className={`text-center ${productColor} text-sm`}>{product}</h3>
        </div>
      </a>
    </div>
  );
}
export function More() {
  const { isDarkTheme } = useThemeContext();
  const headingColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-200';
  const subHeadingColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-400';
  const productColor = !isDarkTheme ? 'text-gray-600' : 'text-white';
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 xl:px-0">
        <div className="py-12 md:py-20">
          <header className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:space-x-7 pb-12 md:pb-20">
            <div className="mt-1">{SVGs.Logo}</div>
            <div className="max-w-3xl">
              <h2 className={`leading-snug text-4xl ${headingColor}`}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-purple-700">
                  More from the Authors
                </span>
              </h2>
              <p
                className={`text-lg font-medium md:text-xl mt-7 leading-normal ${subHeadingColor}`}
              >
                Interested in knowing what else we've worked on? We're
                delighted! Take a look at our other projects.
              </p>
              <main className="max-w-sm mx-auto mt-20 md:max-w-none">
                <div className="flex list-none flex-wrap justify-start md:justify-start gap-y-5 -gap-x-3">
                  {products.map((props, idx) => {
                    return (
                      <div data-aos="zoom-y-out" key={idx}>
                        <Product productColor={productColor} {...props} />
                      </div>
                    );
                  })}
                </div>
              </main>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
}
