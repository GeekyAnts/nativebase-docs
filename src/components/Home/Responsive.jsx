import React from 'react';
import { CodeComponent } from './CodeComponent';
import useThemeContext from '@theme/hooks/useThemeContext';

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
    <Stack space={1}>
      <Heading size="sm">Jordan MA2</Heading>
      <Text fontWeight="medium" color="blueGray.600">
        Older Kids' Shoe
      </Text>
      <Text fontWeight="medium" color="blueGray.600">
        2 colors
      </Text>
    </Stack>
    <Text fontSize="md" fontWeight="semibold" color="blueGray.600">
      $ 150
    </Text>
  </Stack>
</Box>
`.trim();

export function Responsive() {
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
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`h2 mb-4 text-4xl ${headingColor}`}>
            Responsiveness made easy
          </h1>
          <p className={`text-xl ${subHeadingColor}`}>
            Instead of manually adding responsiveness, NativeBase V3 allows you
            to provide object and array values to add responsive styles.
          </p>
        </div>
        <div className="flex flex-row rounded-md shadow-xl">
          <div className="max-w-3xl mx-auto text-center flex-1">
            <div className="flex justify-center items-center pt-12 md:pt-20 py-10 px-8 md:py-16 md:px-12">
              <img
                className="rounded-3xl"
                style={{ zIndex: 1 }}
                src={'/img/home/responsive.png'}
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
              <linearGradient x1="1" y1=".5" x2="0" y2="1" id="illustration-02">
                <stop stopColor="#34d399" offset="0%" />
                <stop stopColor="#818cf8" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-02)" fillRule="evenodd">
              <circle cx="280" cy="180" r="200" opacity="0.3" />
              {/* <circle cx="155" cy="443" r="64" opacity="0.3" /> */}
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
