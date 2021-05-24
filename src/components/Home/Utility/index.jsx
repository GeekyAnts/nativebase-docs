import React from 'react';
import { CodeComponent } from '../CodeComponent';
import useThemeContext from '@theme/hooks/useThemeContext';
import { SVGs } from './icons';

const exampleCode = `
<Box>
  fontSize={4}
  fontWeight='bold'
  p={3}
  mb={[4,5]}
  color='white'
  bg='primary'>
  Hello
</Box>
`.trim();

export function Utility() {
  const foldBg = '';
  const { isDarkTheme } = useThemeContext();
  const headingColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-200';
  const subHeadingColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-400';
  return (
    <section className="relative">
      <div
        className={'absolute inset-0 pointer-events-none ' + foldBg}
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-6 md:px-10 xl:px-0">
        <div className="relative py-12 md:py-20">
          <div className="max-w-3xl flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:space-x-7">
            <span className="mt-0.5">{SVGs.Logo}</span>
            <span>
              <h2 className={`text-3xl md:text-4xl  ${headingColor}`}>
                <span>Now Supporting </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-800">
                  Utility Props
                </span>
              </h2>
              <p className="text-sm md:text-base font-semibold text-md">
                <span>Powered by</span>
                <span className="h-10 ml-2 mr-2 px-3 relative">
                  <span className="absolute -top-1.5 left-0">
                    {SVGs.StyledLogo}
                  </span>
                </span>
                <a
                  className={`${subHeadingColor}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://react-native-aria.geekyants.com/"
                >
                  Styled System
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
                  href="https://styled-system.com"
                >
                  Styled System
                </a>{' '}
                so you can rapidly build custom UI components with
                constraint-based utility style props.
              </p>
              <p className="mt-7">
                <a
                  className="text-blue-800  no-underline border-0 border-b-2 border-solid hover:border-blue-800 font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://styled-system.com"
                >
                  Learn More
                </a>
              </p>
            </span>
          </div>

          {/* grid */}
          <div className="flex flex-col space-y-10 lg:space-y-0 mt-10 lg:flex-row rounded-md">
            <div className="sm:w-full rounded-lg lg:w-1/2 flex flex-col py-3">
              <div className="h-72 flex bg-white rounded-lg justify-center relative themeable w-full mt-6">
                <div className="h-full bg-white w-full flex items-center justify-center rounded-lg lg:absolute lg:-right-5 md:top-0">
                  <button className="px-12 py-3 rounded-md border-0 bg-blue-800 text-white text-md font-bold ">
                    Hello
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-1 rounded-lg overflow-hidden px-0 md:px-0">
              <CodeComponent classStyle={'px-10 py-20'} code={exampleCode} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
