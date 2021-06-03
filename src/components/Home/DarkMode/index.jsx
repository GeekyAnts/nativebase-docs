import React from 'react';
import { CodeComponent } from './../CodeComponent';
import useThemeContext from '@theme/hooks/useThemeContext';
import { SVGs } from './icons.jsx';
const exampleCode = `
<Box
  flexDirection={{ base: 'column', md: 'row' }}
  shadow={4}
  rounded="xl"
  overflow="hidden"
>
  <Box width={{ md: 24 }} height={{ base: 32, md: '100%' }}>
    <Image
      source={{
        uri:
          'https://static.nike.com/a/images/f_auto/dpr_2.0/w_1328,c_limit/b56d1e9b-3861-4c89-995d-b8fb6240a762/nike-just-do-it.jpg'
      }}
      alt="Shoes"
    />
  </Box>
  <Stack p={3} space={2} minW={32}>
    <Text fontSize="xs" color="red.400" fontWeight="semibold">
      Just In
    </Text>
</Box>
`.trim();

export const DarkMode = () => {
  const foldBg = '';
  // const foldBg = !isDarkTheme ? 'bg-gray-100' : '';
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
          <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:space-x-7">
            <div className="mt-2">{SVGs['Logo']}</div>
            <div className="max-w-3xl">
              <h2
                className={`text-3xl md:text-4xl leading-snug ${headingColor}`}
              >
                <span>Now With </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Dark Mode
                </span>
              </h2>
              <p
                className={`text-lg font-medium md:text-xl leading-normal mt-7 ${subHeadingColor}`}
              >
                Building apps with a dark mode setting just got a whole lot
                easier. NativeBase is now optimised for light and dark modes.
              </p>
              <p className="mt-7">
                <a
                  className="text-yellow-600 no-underline border-0 border-b-2 border-solid hover:border-yellow-600 font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://alpha.nativebase.io/docs/darkMode"
                >
                  Learn More
                </a>
              </p>
            </div>
          </div>
          <div
            className="flex mt-10 flex-col lg:flex-row space-y-10 lg:space-y-0 rounded-md"
            // style={{ border: '1px solid black' }}
          >
            <div className="sm:w-full rounded-lg lg:w-1/2 flex flex-col py-0 lg:py-20">
              <div className="h-72 themeable rounded-lg lg:h-full flex justify-center relative w-full mt-5">
                <div className="h-full w-full bg-white flex items-end justify-center rounded-lg bg-white px-1 md:px-4 py-4 lg:absolute lg:-right-5 md:top-0">
                  <footer className="flex justify-center items-center  space-x-5">
                    <div>{SVGs['Light']}</div>
                    <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input
                        type="checkbox"
                        name="toggle"
                        id="toggle"
                        className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        style={{ marginTop: '2.1px' }}
                      />
                      <label
                        htmlFor="toggle"
                        className="toggle-label block overflow-hidden h-6 w-12 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                    <div>{SVGs['Dark']}</div>
                  </footer>
                </div>
              </div>
            </div>

            <div
              className="flex-1 rounded-lg overflow-hidden px-0 md:px-0"
              // style={{ zIndex: 1, maxHeight: '39rem' }}
            >
              <CodeComponent classStyle={'px-10 py-10'} code={exampleCode} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
