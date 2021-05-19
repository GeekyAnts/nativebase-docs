import React, { useState } from 'react';
import { CodeComponent } from './CodeComponent';
import useThemeContext from '@theme/hooks/useThemeContext';

const SVGs = {
  Logo: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="43"
      viewBox="0 0 43 43"
    >
      <g id="Group_564" data-name="Group 564" transform="translate(-69 -55)">
        <g id="Group_485" data-name="Group 485" transform="translate(-5 -635)">
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
  ),
};

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
      <div className="px-6 md:px-0">
        <div className="relative py-12 md:py-20">
          <div className="max-w-3xl flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:space-x-7">
            <span className="mt-1">{SVGs['Logo']}</span>
            <span>
              <h2 className={`text-4xl leading-snug  ${headingColor}`}>
                <span className="">Rich </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-700">
                  Component Library
                </span>
              </h2>
              <p className={`text-xl leading-normal mt-7 ${subHeadingColor}`}>
                NativeBase offers over 60 components so you can build
                seamlessly. It includes action sheets, menus, spinners,
                popovers, breadcrumbs and more.
              </p>
              {/* <p className="mt-7">
                <a
                  className="text-green-700 no-underline border-0 border-b-2 border-solid hover:border-green-700 font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                  href=""
                >
                  Learn More
                </a>
              </p> */}
            </span>
          </div>
          <div
            className="flex flex-col lg:flex-row space-y-10  lg:space-y-0 rounded-md"
            // style={{ border: '1px solid black' }}
          >
            <div className="sm:w-full rounded-lg lg:w-1/2 flex flex-col py-20">
              {/* tabs */}
              <div className="flex px-6 space-x-6 flex-row">
                <div className="text-left">
                  <a
                    id="forms-btn"
                    className={`pb-1 text-xs tracking-wider font-bold text-gray-500 ${
                      currentTheme === 'forms'
                        ? 'border-b-2 text-green-700 border-solid border-green-700'
                        : ''
                    }  border-0 cursor-pointer`}
                    onClick={(e) => {
                      setCurrentTheme('forms');
                    }}
                  >
                    FORMS
                  </a>
                </div>
                <div className="text-left">
                  <a
                    id="interaction-btn"
                    className={`pb-1 text-xs tracking-wider font-bold text-gray-500 ${
                      currentTheme === 'interaction'
                        ? 'border-b-2 text-green-700 border-solid border-green-700'
                        : ''
                    }  border-0 cursor-pointer`}
                    onClick={() => {
                      setCurrentTheme('interaction');
                    }}
                  >
                    INTERACTION
                  </a>
                </div>
                <div className="text-left">
                  <a
                    className={`pb-1 text-xs tracking-wider font-bold text-gray-500 ${
                      currentTheme === 'avatar'
                        ? 'border-b-2 text-green-700 border-solid border-green-700'
                        : ''
                    }  border-0 cursor-pointer`}
                    id="avatar-btn"
                    onClick={() => {
                      setCurrentTheme('avatar');
                    }}
                  >
                    AVATAR
                  </a>
                </div>
              </div>
              <div className="h-full flex justify-center bg-white rounded-lg themeable relative w-full mt-5">
                <div className="h-full w-full bg-white md:px-4 py-4 rounded-lg lg:absolute lg:-right-5 md:top-0">
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

            <div className="flex-1 rounded-lg overflow-hidden px-0 md:px-0">
              <CodeComponent classStyle={'px-10 py-10'} code={exampleCode} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
