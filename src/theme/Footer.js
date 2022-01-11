import React from 'react';
import { default as Foot } from '@theme/Footer';
import useThemeContext from '@theme/hooks/useThemeContext';
const communities = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/nativebase',
  },
  {
    name: 'StackOverflow',
    url: 'https://stackoverflow.com/questions/tagged/native-base',
  },
  {
    name: 'Discord',
    url: 'https://discord.com/invite/TSgCw2UPmb',
  },
  {
    name: 'VS Code Extension',
    url: 'https://marketplace.visualstudio.com/items?itemName=NativeBase.nativebase-v3-vscode-extension&ssr=false#review-details',
  },
];
const docs = [
  {
    name: 'Introduction',
    url: 'https://docs.nativebase.io/',
  },
  {
    name: 'Examples',
    url: 'https://docs.nativebase.io/todo-example',
  },
  {
    name: 'Beta Docs',
    url: 'https://beta-docs.nativebase.io',
  },
];
const more = [
  {
    name: 'GitHub',
    url: 'https://github.com/GeekyAnts/NativeBase',
  },
  {
    name: 'Contribution Guidelines',
    url: 'https://github.com/GeekyAnts/NativeBase/blob/master/CONTRIBUTING.md',
  },
  {
    name: 'Privacy Policy',
    url: 'https://nativebase.io/privacy-policy',
  },
  {
    name: 'Cookie Policy',
    url: 'https://nativebase.io/cookie-policy',
  },
];
export default function Footer() {
  const { isDarkTheme } = useThemeContext();
  const linkHoverColor = isDarkTheme
    ? 'hover:text-cyan-700'
    : 'hover:text-cyan-600';
  return (
    <div className="tailwind">
      <div
        className={`w-full py-8 mt-10 ${
          isDarkTheme ? 'bg-coolGray-800' : 'bg-coolGray-100'
        } `}
      >
        <div className="flex flex-col justify-between w-full px-6 mx-auto text-gray-500 max-w-7xl lg:px-4 md:flex-row gap-y-10">
          <div className="">
            <div
              className={`font-semibold  ${
                isDarkTheme ? 'text-gray-100' : 'text-gray-900'
              }`}
            >
              Docs
            </div>
            <div className={`flex flex-col mt-5 space-y-3 list-none`}>
              {docs.map((items, idx) => {
                return (
                  <div className="text-gray-500 hover:underline" key={idx}>
                    <a
                      className={` ${linkHoverColor} ${
                        isDarkTheme ? 'text-gray-200' : 'text-gray-500'
                      }`}
                      rel="noreferrer"
                      href={items.url}
                    >
                      {items.name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div
              className={`font-semibold  ${
                isDarkTheme ? 'text-gray-100' : 'text-gray-900'
              }`}
            >
              Community
            </div>
            <div className="flex flex-col mt-5 space-y-3 text-gray-500 list-none ">
              {communities.map((items, idx) => {
                return (
                  <div className="hover:underline " key={idx}>
                    <a
                      className={` ${linkHoverColor} ${
                        isDarkTheme ? 'text-gray-200' : 'text-gray-500'
                      }`}
                      rel="noreferrer"
                      target="_blank"
                      href={items.url}
                    >
                      {items.name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <div
              className={`font-semibold  ${
                isDarkTheme ? 'text-gray-100' : 'text-gray-900'
              }`}
            >
              More
            </div>
            <div className="flex flex-col mt-5 space-y-3 text-gray-500 list-none ">
              {more.map((items, idx) => {
                return (
                  <div className="hover:underline" key={idx}>
                    <a
                      className={` ${linkHoverColor} ${
                        isDarkTheme ? 'text-gray-200' : 'text-gray-500'
                      } `}
                      rel="noreferrer"
                      target="_blank"
                      href={items.url}
                    >
                      {items.name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col space-y-5 text-gray-500 list-none">
            <div className="hover:underline">
              <a
                className={` ${linkHoverColor} ${
                  isDarkTheme ? 'text-gray-200' : 'text-gray-500'
                }`}
                href="https://geekyants.com/?utm_source=RnD&utm_medium=Landing_Page&utm_campaign=NativeBase_3"
                target="_blank"
                rel="noreferrer"
              >
                Built with
                <span className="text-red-500"> ❤️ </span> at GeekyAnts.
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/company/nativebase/about/?viewAsMember=true"
              >
                <svg
                  className={`w-6 h-6 ${
                    isDarkTheme ? 'text-gray-200' : 'text-gray-500 '
                  }  fill-current`}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="linkedin-in"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  ></path>
                </svg>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/nativebaseio/?hl=en"
              >
                <svg
                  className={`w-6 h-6 ${
                    isDarkTheme ? 'text-gray-200' : 'text-gray-500 '
                  }  fill-current`}
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
                </svg>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.youtube.com/channel/UCoL_iTwpY07vDs91974z3xA/about"
              >
                <svg
                  className={`w-6 h-6 ${
                    isDarkTheme ? 'text-gray-200' : 'text-gray-500 '
                  }  fill-current`}
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="512.000000pt"
                  height="512.000000pt"
                  viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <metadata>
                    Created by potrace 1.16, written by Peter Selinger 2001-2019
                  </metadata>
                  <g
                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    stroke="none"
                  >
                    <path
                      d="M1625 4339 c-482 -16 -845 -44 -1015 -79 -239 -49 -431 -217 -501
  -440 -44 -142 -80 -424 -100 -789 -13 -242 -7 -932 10 -1131 28 -322 61 -525
  104 -640 65 -177 232 -331 415 -385 472 -140 3309 -153 3982 -19 203 41 378
  178 463 364 50 111 88 328 119 695 17 202 18 1107 0 1305 -29 336 -68 562
  -117 667 -72 157 -201 279 -361 339 -153 57 -510 91 -1194 114 -338 11 -1463
  11 -1805 -1z m1084 -1391 c355 -204 652 -376 658 -382 10 -9 -137 -98 -620
  -376 -347 -200 -647 -373 -664 -383 l-33 -19 0 766 c0 421 3 766 6 766 3 0
  297 -167 653 -372z"
                    />
                  </g>
                </svg>
              </a>
            </div>
            <div
              className={`text-sm ${
                isDarkTheme ? 'text-gray-200' : 'text-gray-500 '
              }`}
            >
              Copyright © 2021 NativeBase
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
