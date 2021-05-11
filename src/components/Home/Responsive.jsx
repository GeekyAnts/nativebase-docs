import React from 'react';
import { CodeComponent } from './CodeComponent';
import useThemeContext from '@theme/hooks/useThemeContext';

const SVGs = {
  Expand: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="31"
      viewBox="0 0 39 31"
    >
      <g id="Group_580" data-name="Group 580" transform="translate(-865 -553)">
        <path
          id="Rectangle_245"
          data-name="Rectangle 245"
          d="M0,0H23.5A15.5,15.5,0,0,1,39,15.5v0A15.5,15.5,0,0,1,23.5,31H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z"
          transform="translate(865 553)"
          fill="#10b981"
        />
        <path
          id="Icon_awesome-arrows-alt-h"
          data-name="Icon awesome-arrows-alt-h"
          d="M14.65,11.19v1.785H5.2V11.19a.93.93,0,0,0-1.588-.658L.272,13.868a.93.93,0,0,0,0,1.316L3.608,18.52A.93.93,0,0,0,5.2,17.862V16.077H14.65v1.785a.93.93,0,0,0,1.588.658l3.336-3.336a.93.93,0,0,0,0-1.316l-3.336-3.336a.93.93,0,0,0-1.588.658Z"
          transform="translate(874.577 553.974)"
          fill="#fff"
        />
      </g>
    </svg>
  ),
  Mobile: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      viewBox="0 0 33 32"
    >
      <g id="Group_595" data-name="Group 595" transform="translate(0)">
        <g id="Group_590" data-name="Group 590" transform="translate(0 0)">
          <rect
            id="Rectangle_247"
            data-name="Rectangle 247"
            width="33"
            height="32"
            rx="16"
            transform="translate(0 0)"
            fill="#10b981"
          />
        </g>
        <path
          id="Icon_awesome-mobile-alt"
          data-name="Icon awesome-mobile-alt"
          d="M7.75,0H1.368A1.368,1.368,0,0,0,0,1.368V13.22a1.368,1.368,0,0,0,1.368,1.368H7.75A1.368,1.368,0,0,0,9.118,13.22V1.368A1.368,1.368,0,0,0,7.75,0ZM4.559,13.676a.912.912,0,1,1,.912-.912A.911.911,0,0,1,4.559,13.676ZM7.75,10.6a.343.343,0,0,1-.342.342H1.71a.343.343,0,0,1-.342-.342V1.71a.343.343,0,0,1,.342-.342h5.7a.343.343,0,0,1,.342.342Z"
          transform="translate(11.942 8.706)"
          fill="#fff"
        />
      </g>
    </svg>
  ),
  Tablet: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      viewBox="0 0 33 32"
    >
      <g id="Group_593" data-name="Group 593" transform="translate(-0.031)">
        <g id="Group_591" data-name="Group 591" transform="translate(0 0)">
          <rect
            id="Rectangle_247"
            data-name="Rectangle 247"
            width="33"
            height="32"
            rx="16"
            transform="translate(0.031 0)"
            fill="#d1d5db"
          />
        </g>
        <g
          id="Icon_feather-tablet"
          data-name="Icon feather-tablet"
          transform="translate(11.504 9.715)"
        >
          <path
            id="Path_349"
            data-name="Path 349"
            d="M7.257,3H14.8a1.257,1.257,0,0,1,1.257,1.257V14.313A1.257,1.257,0,0,1,14.8,15.569H7.257A1.257,1.257,0,0,1,6,14.313V4.257A1.257,1.257,0,0,1,7.257,3Z"
            transform="translate(-6 -3)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
          />
          <path
            id="Path_350"
            data-name="Path 350"
            d="M18,27h0"
            transform="translate(-12.972 -16.944)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
          />
        </g>
      </g>
    </svg>
  ),
  Desktop: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      viewBox="0 0 32 32"
    >
      <g id="Group_594" data-name="Group 594" transform="translate(-0.063)">
        <g id="Group_596" data-name="Group 596" transform="translate(0 0)">
          <g id="Group_592" data-name="Group 592">
            <rect
              id="Rectangle_247"
              data-name="Rectangle 247"
              width="32"
              height="32"
              rx="16"
              transform="translate(0.063 0)"
              fill="#d1d5db"
            />
          </g>
          <g id="monitor" transform="translate(8.124 9.179)">
            <path
              id="Path_304"
              data-name="Path 304"
              d="M23.189,48H8.909A.91.91,0,0,0,8,48.909v9.607a.91.91,0,0,0,.909.909h5.266l-.156.779H12.933a.26.26,0,0,0-.26.26v.779a.26.26,0,0,0,.26.26h6.231a.26.26,0,0,0,.26-.26v-.779a.26.26,0,0,0-.26-.26H18.079l-.156-.779h5.266a.91.91,0,0,0,.909-.909V48.909A.91.91,0,0,0,23.189,48ZM18.9,60.722v.26H13.193v-.26ZM14.548,60.2l.156-.779h2.69l.156.779Zm9.03-1.688a.39.39,0,0,1-.389.389H8.909a.39.39,0,0,1-.389-.389v-.649H23.579Zm0-1.168H8.519V48.909a.39.39,0,0,1,.389-.389h14.28a.39.39,0,0,1,.389.389Z"
              transform="translate(-8 -48)"
              fill="#d1d5db"
              stroke="#fff"
              stroke-width="0.5"
            />
            <path
              id="Path_305"
              data-name="Path 305"
              d="M240.779,360h-.519a.26.26,0,1,0,0,.519h.519a.26.26,0,1,0,0-.519Z"
              transform="translate(-232.47 -349.874)"
              fill="#d1d5db"
              stroke="#fff"
              stroke-width="0.5"
            />
          </g>
        </g>
      </g>
    </svg>
  ),
};
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

      <div className="px-4 md:px-0">
        <div className="relative py-12 md:py-20">
          <div className="max-w-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="43"
              viewBox="0 0 43 43"
            >
              <g
                id="Group_578"
                data-name="Group 578"
                transform="translate(-66 -26)"
              >
                <g
                  id="Group_577"
                  data-name="Group 577"
                  transform="translate(-3 -29)"
                >
                  <rect
                    id="Rectangle_166"
                    data-name="Rectangle 166"
                    width="43"
                    height="43"
                    rx="8"
                    transform="translate(69 55)"
                    fill="#10b981"
                  />
                </g>
                <path
                  id="Icon_open-resize-both"
                  data-name="Icon open-resize-both"
                  d="M11.133,0l4.62,4.62L4.62,15.753,0,11.133V22.266H11.133l-4.62-4.62L17.646,6.513l4.62,4.62V0Z"
                  transform="translate(76.367 36.367)"
                  fill="#fff"
                />
              </g>
            </svg>

            <h1 className={`h2 mb-4 mt-2 text-4xl ${headingColor}`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-400">
                Responsiveness
              </span>
            </h1>
            <p className={`text-xl ${subHeadingColor}`}>
              Instead of manually adding responsiveness, NativeBase V3 allows
              you to provide object and array values to add responsive styles.
            </p>

            <a
              className="span text-green-700"
              target="_blank"
              rel="noopener noreferrer"
              href="https://react-native-aria.geekyants.com/"
            >
              Learn More
            </a>
          </div>
          <div
            className="flex mt-10 flex-col space-y-10 lg:space-y-0 lg:flex-row-reverse rounded-md"
            // style={{ border: '1px solid black' }}
          >
            <div className="relative rounded-lg w-full lg:w-1/2 flex flex-row justify-center md:justify-start items-center">
              <div className="w-full md:w-1/2  py-2  rounded-md h-3/5 lg:absolute relative lg:-left-5">
                <div className="flex ml-2 bg-transparent space-x-5">
                  <div>{SVGs['Mobile']}</div>
                  <div className="hidden md:inline-block">{SVGs['Tablet']}</div>
                  <div className="hidden lg:inline-block">
                    {SVGs['Desktop']}
                  </div>
                </div>
                <div className="flex-1 shadow-xl  rounded-md h-80 bg-white lg:h-full"></div>
                <div className="hidden md:inline-block absolute -right-10 top-1/2">
                  {SVGs['Expand']}
                </div>
              </div>
            </div>

            <div
              className="flex-1  rounded-lg overflow-hidden px-0 md:px-0"
              // style={{ zIndex: 1, maxHeight: '39rem' }}
            >
              <CodeComponent classStyle={'pr-20 py-10'} code={exampleCode} />
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
