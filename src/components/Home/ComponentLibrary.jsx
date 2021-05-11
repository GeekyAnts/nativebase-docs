import React, { useState } from 'react';
import { CodeComponent } from './CodeComponent';
import { SVGs } from './../SVGs';
import useThemeContext from '@theme/hooks/useThemeContext';

// const SVGs = {
//   ComponentLibrary: (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="43"
//       height="43"
//       viewBox="0 0 43 43"
//     >
//       <g id="Group_564" data-name="Group 564" transform="translate(-69 -55)">
//         <g id="Group_485" data-name="Group 485" transform="translate(-5 -635)">
//           <rect
//             id="Rectangle_166"
//             data-name="Rectangle 166"
//             width="43"
//             height="43"
//             rx="8"
//             transform="translate(74 690)"
//             fill="#047857"
//           />
//         </g>
//         <path
//           id="Icon_material-library-add"
//           data-name="Icon material-library-add"
//           d="M5.15,7.3H3V22.35A2.156,2.156,0,0,0,5.15,24.5H20.2V22.35H5.15ZM22.35,3H9.45A2.156,2.156,0,0,0,7.3,5.15v12.9A2.156,2.156,0,0,0,9.45,20.2h12.9a2.156,2.156,0,0,0,2.15-2.15V5.15A2.156,2.156,0,0,0,22.35,3Zm-1.075,9.675h-4.3v4.3h-2.15v-4.3h-4.3v-2.15h4.3v-4.3h2.15v4.3h4.3Z"
//           transform="translate(76.75 62.75)"
//           fill="#fff"
//         />
//       </g>
//     </svg>
//   ),
// };
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

export function ComponentLibrary() {
  // const { isDarkTheme } = useThemeContext();
  // TODO: change this
  const foldBg = '';
  // const foldBg = !isDarkTheme ? 'bg-gray-100' : '';
  const { isDarkTheme } = useThemeContext();
  const headingColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-200';
  const subHeadingColor = !isDarkTheme ? 'text-gray-900' : 'text-gray-100';
  const [currentTheme, setCurrentTheme] = useState('forms');
  return (
    <section className="relative">
      <div
        className={'absolute inset-0 pointer-events-none ' + foldBg}
        aria-hidden="true"
      />
      {/* visible on sm */}
      <div className="hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className={`h2 mb-4 text-3xl ${headingColor}`}>
              Highly themeable, the only limit is your imagination
            </h1>
            <p className={`text-lg ${subHeadingColor}`}>
              Themeability is one of the core elements of NativeBase. Customise
              your app theme and component styles to your heart's content.
            </p>
          </div>
          <div
            className="rounded-md"
            // style={{ border: '1px solid black' }}
          >
            <div
              className="flex-1  w-full overflow-hidden rounded-lg"
              style={{ zIndex: 1, maxHeight: '39rem' }}
            >
              <CodeComponent code={exampleCode} />
            </div>
            <div className="max-w-3xl mx-auto text-center flex-1 flex justify-center items-center pt-12 md:pt-20 py-10 px-8 md:py-16 md:px-12">
              <img
                className="rounded-3xl"
                src={'/img/home/themeable.png'}
                width="223"
                height="478"
                alt="NativeBase Themeable"
              />
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
                id="Group_564"
                data-name="Group 564"
                transform="translate(-69 -55)"
              >
                <g
                  id="Group_485"
                  data-name="Group 485"
                  transform="translate(-5 -635)"
                >
                  <rect
                    id="Rectangle_166"
                    data-name="Rectangle 166"
                    width="43"
                    height="43"
                    rx="8"
                    transform="translate(74 690)"
                    fill="#047857"
                  />
                </g>
                <path
                  id="Icon_material-library-add"
                  data-name="Icon material-library-add"
                  d="M5.15,7.3H3V22.35A2.156,2.156,0,0,0,5.15,24.5H20.2V22.35H5.15ZM22.35,3H9.45A2.156,2.156,0,0,0,7.3,5.15v12.9A2.156,2.156,0,0,0,9.45,20.2h12.9a2.156,2.156,0,0,0,2.15-2.15V5.15A2.156,2.156,0,0,0,22.35,3Zm-1.075,9.675h-4.3v4.3h-2.15v-4.3h-4.3v-2.15h4.3v-4.3h2.15v4.3h4.3Z"
                  transform="translate(76.75 62.75)"
                  fill="#fff"
                />
              </g>
            </svg>

            <h1 className={`h2 mb-4 mt-2 text-4xl ${headingColor}`}>
              <span className="">Rich </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-700">
                Component Library
              </span>
            </h1>
            <p className={`text-xl ${subHeadingColor}`}>
              Themeability is one of the core elements of NativeBase. Customise
              your app theme and component styles to your heart's content.
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
            className="flex flex-col lg:flex-row rounded-md"
            // style={{ border: '1px solid black' }}
          >
            <div className="sm:w-full rounded-lg lg:w-1/2 flex flex-col py-20">
              {/* tabs */}
              <div className="flex w-full lg:w-3/4 mx-auto  flex-row">
                <div className="text-left lg:text-center w-1/3">
                  <a
                    id="forms-btn"
                    style={{ borderBottom: '3px solid rgba(29, 78, 216,1)' }}
                    onClick={(e) => {
                      document.getElementById('interaction-btn').style.border =
                        'none';
                      document.getElementById('avatar-btn').style.border =
                        'none';
                      e.target.style.borderBottom =
                        '3px solid rgba(29, 78, 216,1)';
                      setCurrentTheme('forms');
                    }}
                    className={`pb-2 cursor-pointer border-0 ${subHeadingColor}`}
                  >
                    Forms
                  </a>
                </div>
                <div className="text-left lg:text-center w-1/3">
                  <a
                    id="interaction-btn"
                    className={`pb-2  cursor-pointer border-0  ${subHeadingColor}`}
                    onClick={(e) => {
                      document.getElementById('forms-btn').style.border =
                        'none';
                      document.getElementById('avatar-btn').style.border =
                        'none';
                      e.target.style.borderBottom =
                        '3px solid rgba(29, 78, 216,1)';
                      setCurrentTheme('interaction');
                    }}
                  >
                    Interaction
                  </a>
                </div>
                <div className="text-left lg:text-center w-1/3">
                  <a
                    id="avatar-btn"
                    onClick={(e) => {
                      document.getElementById('interaction-btn').style.border =
                        'none';
                      document.getElementById('forms-btn').style.border =
                        'none';
                      e.target.style.borderBottom =
                        '3px solid rgba(29, 78, 216,1)';
                      setCurrentTheme('avatar');
                    }}
                    className={`pb-2 cursor-pointer border-0  ${subHeadingColor}`}
                  >
                    Avatar
                  </a>
                </div>
              </div>
              <div className="h-full flex justify-center relative w-full mt-10">
                <div className="h-full w-full bg-white rounded-lg shadow-xl px-1 md:px-4 py-4 lg:absolute lg:-right-5 md:top-0">
                  {/* {currentTheme === 'color' ? (
                    <ColorTheme />
                  ) : currentTheme === 'interaction' ? (
                    <interaction />
                  ) : (
                    <avatar />
                  )} */}
                </div>
              </div>
            </div>

            <div
              className="flex-1 rounded-lg overflow-hidden px-0 md:px-0"
              // style={{ zIndex: 1, maxHeight: '39rem' }}
            >
              <CodeComponent class1={'px-10 py-10'} code={exampleCode} />
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
