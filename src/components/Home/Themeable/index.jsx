import React, { useState } from 'react';
import { CodeComponent } from '../CodeComponent';
import useThemeContext from '@theme/hooks/useThemeContext';
import { SVGs } from './icons';
import ColorTheme from './ColorTheme';
import TypographyTheme from './TypographyTheme';
import SizingTheme from './SizingTheme';

const exampleCode = `
<Box rounded="pill" w={64} shadow={4}>
  <Image
    h={64}
    rounded="pill"
    source={require("./assets/forest.jpeg")}
    alt="NativeBase Card"
  />
  <Center position="absolute" height="100%" width="100%">
    <Icon
      type="AntDesign"
      name="play"
      color="gray.200"
      size={12}
      opacity={0.8}
    />
  </Center>
  <HStack
    position="absolute"
    bottom={4}
    w={64}
    px={4}
    alignItems="center"
    justifyContent="space-between"
  >
  </HStack>
</Box>
`.trim();

export function Themeable() {
  const foldBg = '';
  const { isDarkTheme } = useThemeContext();
  const headingColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-200';
  const subHeadingColor = !isDarkTheme ? 'text-gray-900' : 'text-gray-100';
  const [currentTheme, setCurrentTheme] = useState('color');
  return (
    <section className="relative">
      <div
        className={'absolute inset-0 pointer-events-none ' + foldBg}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 xl:px-0">
        <div className="relative py-12 md:py-20">
          <div className="flex max-w-4xl flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:space-x-7">
            <div className="mt-2">{SVGs['Logo']}</div>
            <div>
              <h2
                className={`leading-snug text-3xl md:text-4xl ${headingColor}`}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-indigo-500">
                  Highly themeable,{' '}
                </span>
                <span>the only limit is your imagination</span>
              </h2>
              <p
                className={`tex-lg md:text-xl leading-normal mt-7 ${subHeadingColor}`}
              >
                Themeability is one of the core elements of NativeBase.
                Customise your app theme and component styles to your heart's
                content.
              </p>
              <p className="mt-7">
                <a
                  className="text-indigo-500 no-underline border-0 border-b-2 border-solid hover:border-indigo-500 font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://alpha.nativebase.io/docs/default-theme"
                >
                  Learn More
                </a>
              </p>
            </div>
          </div>
          <div
            className="flex flex-col lg:flex-row rounded-md"
            // style={{ border: '1px solid black' }}
          >
            <div className="sm:w-full rounded-lg lg:w-1/2 flex flex-col py-16">
              {/* tabs */}
              <div className="flex px-6 space-x-6 flex-row">
                <div className="text-left">
                  <a
                    className={`pb-1 text-xs tracking-wider font-bold text-gray-500  ${
                      currentTheme === 'color'
                        ? 'border-b-2 text-indigo-500 border-solid border-blue-700'
                        : ''
                    }  border-0 cursor-pointer`}
                    id="color-btn"
                    onClick={(e) => {
                      setCurrentTheme('color');
                    }}
                  >
                    COLOR
                  </a>
                </div>
                <div className="text-left">
                  <a
                    id="sizing-btn"
                    className={`pb-1 text-xs tracking-wider font-bold text-gray-500 ${
                      currentTheme === 'sizing'
                        ? 'border-b-2 text-indigo-500 border-solid border-blue-700'
                        : ''
                    }   border-0 cursor-pointer`}
                    onClick={(e) => {
                      setCurrentTheme('sizing');
                    }}
                  >
                    SIZING
                  </a>
                </div>
                <div className="text-left">
                  <a
                    id="typography-btn"
                    className={`pb-1 text-xs tracking-wider font-bold text-gray-500 ${
                      currentTheme === 'typography'
                        ? 'border-b-2 text-indigo-500 border-solid border-blue-700'
                        : ''
                    }   border-0 cursor-pointer`}
                    onClick={(e) => {
                      setCurrentTheme('typography');
                    }}
                  >
                    TYPOGRAPHY
                  </a>
                </div>
              </div>
              <div className="h-full flex justify-center bg-white rounded-lg themeable relative w-full mt-5">
                <div className="h-full w-full bg-white md:px-4 rounded-lg lg:absolute lg:-right-5 md:top-0">
                  {currentTheme === 'color' ? (
                    <ColorTheme />
                  ) : currentTheme === 'sizing' ? (
                    <SizingTheme />
                  ) : (
                    <TypographyTheme />
                  )}
                </div>
              </div>
            </div>

            <div className="flex-1  rounded-lg overflow-hidden px-0 md:px-0">
              <CodeComponent classStyle={'px-10 py-10'} code={exampleCode} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
