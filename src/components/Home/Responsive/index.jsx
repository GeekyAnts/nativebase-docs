import React, { useRef, useState, useCallback } from 'react';
import { CodeComponent } from './../CodeComponent';
import { SVGs } from './icons';
import ResizePanel from 'react-resize-panel';

import useThemeContext from '@theme/hooks/useThemeContext';
import { useEffect } from 'react';

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
  useEffect(() => {
    const handler = document.getElementsByClassName(
      'ResizePanel-module_ResizeHandleHorizontal__PkS9u'
    )[0];
    const expandParent = document.createElement('span');
    const expandIcon = document.createElement('img');
    expandIcon.setAttribute('src', '/img/expand.svg');
    expandIcon.setAttribute('draggable', false);
    expandParent.innerHTML = '';
    handler.innerHTML = '';
    expandParent.appendChild(expandIcon);
    handler.appendChild(expandParent);
  }, []);

  const [size, setSize] = useState({ width: 400, height: 300 });
  const onResize = (event, { element, size, handle }) => {
    setSize((currentSize) => ({
      width: size.width,
      height: size.height,
    }));
  };
  return (
    <section className="relative">
      <div
        className={'absolute inset-0 pointer-events-none ' + foldBg}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 xl:px-0">
        <div className="relative py-12 md:py-20">
          <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:space-x-7">
            <div className="mt-2">{SVGs.Logo}</div>
            <div className="max-w-3xl">
              <h2
                className={`leading-snug text-3xl md:text-4xl ${headingColor}`}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-400">
                  Responsiveness
                </span>
              </h2>
              <p
                className={`text-lg font-medium md:text-xl leading-normal mt-7 ${subHeadingColor}`}
              >
                Instead of manually adding responsiveness, NativeBase V3 allows
                you to provide object and array values to add responsive styles.
              </p>
              <p className="mt-7">
                <a
                  className="text-green-500 no-underline border-0 border-b-2 border-solid hover:border-green-500 font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://alpha.nativebase.io/docs/responsive-style"
                >
                  Learn More
                </a>
              </p>
            </div>
          </div>
          <div
            className="flex mt-10  flex-col space-y-10 rounded-md"
            // style={{ border: '1px solid black' }}
          >
            <div
              className="border-0 flex flex-row"
              style={{
                height: '450px',
                width: '100%',
              }}
            >
              <ResizePanel
                direction="e"
                className="border-0"
                style={{
                  minWidth: '275px',
                  maxWidth: '100%',
                  width: '30%',
                }}
              >
                <div className="themeable border-0 rounded-lg w-full h-full">
                  <iframe
                    src=""
                    width="100%"
                    height="100%"
                    background="red"
                    style={{ border: 'none' }}
                    title="W3Schools Free Online Web Tutorials"
                  ></iframe>
                </div>
              </ResizePanel>
            </div>
            <div
              className="flex-1 rounded-lg overflow-hidden px-0 md:px-0"
              // style={{ zIndex: 1, maxHeight: '39rem' }}
            >
              <CodeComponent classStyle={'pr-20 py-10'} code={exampleCode} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
