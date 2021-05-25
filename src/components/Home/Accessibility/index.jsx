import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import { SVGs } from './icons.jsx';
const accessibilities = [
  {
    svg: SVGs['KeyboardInteractions'],
    heading: 'Keyboard Interactions',
    subHeading:
      'NativeBase primitives provide basic keyboard support for your apps so that users can navigate it without a mouse.',
  },
  {
    svg: SVGs['ScreenReaders'],
    heading: 'Screen Readers',
    subHeading:
      'Screen readers facilitate text-to-speech conversion and automatically detect important content to be conveyed to people with visual disabilities.',
  },
  {
    svg: SVGs['ContrastRatio'],
    heading: 'Contrast Ratio',
    subHeading:
      'NativeBase provides a contrasting colour based on the theme by default. You can also customise the contrast ratio using the useAccessibleColors hook.',
  },
];
export function Accessibility() {
  const { isDarkTheme } = useThemeContext();
  const headingColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-200';
  const subHeadingColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-100';
  return (
    <section className="relative" style={{ background: '#f8faff' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 xl:px-0">
        <div className="relative py-12 md:py-20">
          <div className="max-w-3xl flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:space-x-7">
            <div>{SVGs.Logo}</div>
            <div>
              <h2
                className={`leading-snug text-3xl md:text-4xl ${headingColor}`}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-700 to-pink-900">
                  Out of the box Accessibility
                </span>
              </h2>
              <p className="text-sm md:text-base font-semibold text-md">
                <span>Powered by </span>
                <span className="h-20 px-3 relative">
                  <span className="absolute top-0 left-0">
                    {SVGs.ReactNativeAriaSmall}{' '}
                  </span>
                </span>
                <a
                  className={`${subHeadingColor}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://react-native-aria.geekyants.com/"
                >
                  React Native ARIA
                </a>
              </p>
              <p
                className={`text-lg font-medium md:text-xl leading-normal mt-7 ${subHeadingColor}`}
              >
                Powered by{' '}
                <a
                  className=""
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://react-native-aria.geekyants.com/"
                >
                  React Native ARIA
                </a>
                , which provides React hooks that enable you to build accessible
                design systems in no time.
              </p>
              <p className="mt-7">
                <a
                  className="no-underline border-0 text-pink-700 border-b-2 border-solid hover:border-pink-700 font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://react-native-aria.geekyants.com/?utm_source=RnD&utm_medium=Landing_Page&utm_campaign=NativeBase_3"
                >
                  Learn More
                </a>
              </p>
            </div>

            <div className="hidden absolute top-4 z-50 -right-16 lg:inline-block">
              {SVGs.ReactNativeAriaLogo}
            </div>
          </div>

          {/* grid */}
          <div
            className={`grid ${
              !isDarkTheme ? 'bg-white text-gray-800' : 'bg-white text-gray-900'
            }} shadow-lg divide-solid divide-x-0 divide-y-0 lg:divide-y-0  lg:divide-x divide-pink-400 divide-opacity-40 rounded-md mt-10 grid-cols-1 lg:grid-cols-3 px-5 py-10`}
          >
            {accessibilities.map((accessibilitiy, idx) => {
              return (
                <div
                  className="text-center px-0 lg:px-10 py-10 lg:py-0 space-y-3"
                  key={idx}
                >
                  <div>{accessibilitiy.svg}</div>
                  <div className="text-lg font-bold">
                    {accessibilitiy.heading}
                  </div>
                  <div className="flex justify-center">
                    <div className="w-full text-sm">
                      {accessibilitiy.subHeading}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
