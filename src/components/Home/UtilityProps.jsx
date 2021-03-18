import React from 'react';
import { CodeComponent } from './CodeComponent';
import useThemeContext from '@theme/hooks/useThemeContext';

const exampleCode = `<Box rounded="pill" w={80} shadow={4}>
  <Image
    roundedTop="pill"
    h={56}
    source={require("./assets/fish.jpeg")}
    alt="NativeBase Card"
  />
  <Stack p={4} space={3}>
    <Heading color="blueGray.600">Clownfish</Heading>
    <Text color="blueGray.500">
      Bright orange with three distinctive white bars, clown anemonefish are
      among the most recognizable at all reef-dwellers.
    </Text>
    <HStack space={4}>
      <Button variant="ghost" colorScheme="blue" p={0} minH={0}>
        SHARE
      </Button>
      <Button variant="ghost" colorScheme="blue" p={0} minH={0}>
        LEARN MORE
      </Button>
    </HStack>
  </Stack>
</Box>
`.trim();

export function UtilityProps() {
  // const { isDarkTheme } = useThemeContext();
  // TODO: change this
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
      {/* visible on sm */}
      <div className="block sm:hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className={`h2 mb-4 text-3xl ${headingColor}`}>
              Now Supporting Utility Props
            </h1>
            <p className={`text-lg ${subHeadingColor}`}>
              Powered by{' '}
              <a
                className="span"
                target="_blank"
                rel="noopener noreferrer"
                href="https://styled-system.com/"
              >
                Styled System{' '}
              </a>{' '}
              so you can rapidly build custom UI components with
              constraint-based utility style props.
            </p>
          </div>
          <div
            className="rounded-md md:shadow-xl"
            // style={{ border: '1px solid black' }}
          >
            <div
              className="flex-1 flex flex-col justify-center w-full overflow-hidden rounded-lg"
              style={{ maxHeight: '39rem' }}
            >
              <CodeComponent code={exampleCode} />
            </div>
            <div className="max-w-3xl mx-auto text-center flex-1">
              <div className="flex justify-center items-center pt-12 md:pt-20 py-10 px-8 md:py-16 md:px-12">
                <img
                  className="rounded-3xl"
                  style={{ zIndex: 1 }}
                  src={'/img/home/fish-card.png'}
                  width="223"
                  height="478"
                  alt="Kitchen Sink iOS"
                />
              </div>
            </div>
          </div>
          {/* Circle part*/}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
            aria-hidden="true"
            style={{ zIndex: 0 }}
          >
            <svg
              width="1360"
              height="578"
              viewBox="0 0 1360 578"
              xmlns="http://www.w3.org/2000/svg"
              id="hithere"
            >
              <defs>
                <linearGradient
                  x1="1"
                  y1=".5"
                  x2="0"
                  y2="1"
                  id="illustration-02"
                >
                  <stop stopColor="#34d399" offset="0%" />
                  <stop stopColor="#818cf8" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="url(#illustration-02)" fillRule="evenodd">
                <circle cx="300" cy="260" r="200" opacity="0.3" />
                {/* <circle cx="155" cy="443" r="64" opacity="0.3" /> */}
              </g>
            </svg>
          </div>
        </div>
      </div>
      {/* visible on md and above */}
      <div className="hidden md:block">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className={`h2 mb-4 text-4xl ${headingColor}`}>
              Now Supporting Utility Props
            </h1>
            <p className={`text-xl ${subHeadingColor}`}>
              Powered by{' '}
              <a
                className="span"
                target="_blank"
                rel="noopener noreferrer"
                href="https://styled-system.com/"
              >
                Styled System{' '}
              </a>{' '}
              so you can rapidly build custom UI components with
              constraint-based utility style props.
            </p>
          </div>
          <div
            className="flex flex-row rounded-md shadow-xl"
            // style={{ border: '1px solid black' }}
          >
            <div className="max-w-3xl mx-auto text-center flex-1">
              <div className="flex justify-center items-center pt-12 md:pt-20 py-10 px-8 md:py-16 md:px-12">
                <img
                  className="rounded-3xl"
                  style={{ zIndex: 1 }}
                  src={'/img/home/fish-card.png'}
                  width="223"
                  height="478"
                  alt="Kitchen Sink iOS"
                />
              </div>
            </div>
            <div
              className="flex-1 bg-gray-700 w-1 overflow-hidden rounded-lg"
              style={{ maxHeight: '39rem' }}
            >
              <CodeComponent code={exampleCode} />
            </div>
          </div>
          {/* Circle part*/}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
            aria-hidden="true"
            style={{ zIndex: 0 }}
          >
            <svg
              width="1360"
              height="578"
              viewBox="0 0 1360 578"
              xmlns="http://www.w3.org/2000/svg"
              id="hithere"
            >
              <defs>
                <linearGradient
                  x1="1"
                  y1=".5"
                  x2="0"
                  y2="1"
                  id="illustration-02"
                >
                  <stop stopColor="#34d399" offset="0%" />
                  <stop stopColor="#818cf8" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="url(#illustration-02)" fillRule="evenodd">
                <circle cx="300" cy="260" r="200" opacity="0.3" />
                {/* <circle cx="155" cy="443" r="64" opacity="0.3" /> */}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
