import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import { SVGs } from './icons';

const themes = [
  {
    svg: SVGs['Android'],
    heading: 'Android',
    subHeading:
      'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print',
  },
  {
    svg: SVGs['iOS'],
    heading: 'iOS',
    subHeading:
      'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print',
  },
  {
    svg: SVGs['Web'],
    heading: 'Web',
    subHeading:
      'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print',
  },
];

export function Universal() {
  const foldBg = '';
  const { isDarkTheme } = useThemeContext();
  const headingColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-200';
  const subHeadingColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-400';
  const ringColor = !isDarkTheme ? 'ring-white' : 'ring-secondary-800';

  return (
    <section className="relative">
      <div
        className={'absolute inset-0 pointer-events-none ' + foldBg}
        aria-hidden="true"
      />
      <div className="px-6 md:px-0">
        <div className="relative py-12 md:py-20">
          <div className="max-w-3xl flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:space-x-7">
            <div className="mt-2">
              <span className="w-12 h-12 items-center rounded-md flex justify-center bg-yellow-400">
                {SVGs['Logo']}
              </span>
            </div>
            <div>
              <h2
                className={`leading-snug text-3xl md:text-4xl ${headingColor}`}
              >
                <span>Consistent across </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-400">
                  Web, Android & iOS
                </span>
              </h2>
              <p
                className={`text-lg md:text-xl leading-normal mt-7 ${subHeadingColor}`}
              >
                Whether you're building for the web, Android or iOS, we've got
                you covered. Fast-track your dev process with universal
                components.
              </p>

              <p className="mt-7">
                <a
                  className="text-yellow-400 no-underline border-0 border-b-2 border-solid hover:border-yellow-400 font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://necolas.github.io/react-native-web/docs/"
                >
                  Learn More
                </a>
              </p>
              <div className="rounded-md mt-10 py-6 flex text-white">
                {themes.map((theme, idx) => {
                  return (
                    <div
                      className={`flex flex-col ${
                        idx === 1 ? 'z-50' : ''
                      } ring-10 ${ringColor} -ml-1 md:-ml-1 lg:-ml-3 justify-center items-center bg-yellow-600 h-24 w-24 md:w-40 md:h-40 lg:h-48 lg:w-48 rounded-full py-2`}
                      key={idx}
                    >
                      <div className="">{theme.svg}</div>
                      {/* <div className="mt-5 font-bold">{theme['heading']}</div> */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* themes */}
        </div>
      </div>
    </section>
  );
}
