import React, { useState } from 'react';
import { CodeComponent } from './CodeComponent';
import { SVGs } from './../SVGs';
import useThemeContext from '@theme/hooks/useThemeContext';

function ColorTheme() {
  return (
    <div className="h-full text-gray-900 overflow-x-auto w-full">
      <div className="text-sm font-semibold">Rose</div>
      <div class="grid mt-2 w-96  md:w-full grid-cols-3 gap-x-3 gap-y-5">
        <div className="flex font-semibold space-x-2">
          <div
            className="w-10 h-10 rounded-md"
            style={{ background: '#fff1f2' }}
          ></div>
          <div className="text-xs whitespace-nowrap">
            <div>Rose 50</div>
            <div>#fff1f2</div>
          </div>
        </div>
        <div className="flex font-semibold space-x-2">
          <div
            className="w-10 h-10 rounded-md"
            style={{ background: '#ffe4e6' }}
          ></div>
          <div className="text-xs whitespace-nowrap">
            <div>Rose 100</div>
            <div>#ffe4e6</div>
          </div>
        </div>
        <div className="flex font-semibold space-x-2">
          <div
            className="w-10 h-10 rounded-md"
            style={{ background: '#feddd3' }}
          ></div>
          <div className="text-xs whitespace-nowrap">
            <div>Rose 200</div>
            <div>#fecdd3</div>
          </div>
        </div>
        <div className="flex font-semibold space-x-2">
          <div
            className="w-10 h-10 rounded-md"
            style={{ background: '#fda4af' }}
          ></div>
          <div className="text-xs whitespace-nowrap">
            <div>Rose 300</div>
            <div>#fda4af</div>
          </div>
        </div>
        <div className="flex font-semibold space-x-2">
          <div
            className="w-10 h-10 rounded-md"
            style={{ background: '#fb7185' }}
          ></div>
          <div className="text-xs whitespace-nowrap">
            <div>Rose 400</div>
            <div>#fb7185</div>
          </div>
        </div>
        <div className="flex font-semibold space-x-2">
          <div
            className="w-10 h-10 rounded-md"
            style={{ background: '#f43f5e' }}
          ></div>
          <div className="text-xs whitespace-nowrap">
            <div>Rose 500</div>
            <div>#f43f5e</div>
          </div>
        </div>
        <div className="flex font-semibold space-x-2">
          <div
            className="w-10 h-10 rounded-md"
            style={{ background: '#ee1d48' }}
          ></div>
          <div className="text-xs whitespace-nowrap">
            <div>Rose 600</div>
            <div>#ee1d48</div>
          </div>
        </div>
        <div className="flex font-semibold space-x-2">
          <div
            className="w-10 h-10 rounded-md"
            style={{ background: '#be123c' }}
          ></div>
          <div className="text-xs whitespace-nowrap">
            <div>Rose 700</div>
            <div>#be123c</div>
          </div>
        </div>
        <div className="flex font-semibold space-x-2">
          <div
            className="w-10 h-10 rounded-md"
            style={{ background: '#9f1239' }}
          ></div>
          <div className="text-xs whitespace-nowrap">
            <div>Rose 800</div>
            <div>#9f1239</div>
          </div>
        </div>
        <div className="flex font-semibold space-x-2">
          <div
            className="w-10 h-10 rounded-md"
            style={{ background: '#881337' }}
          ></div>
          <div className="text-xs whitespace-nowrap">
            <div>Rose 900</div>
            <div>#881337</div>
          </div>
        </div>
      </div>
      <div className="mt-3 text-sm font-semibold">Pink</div>
      <div class="grid mt-2 w-96  md:w-full grid-cols-3 gap-x-3 gap-y-5">
        <div className="flex font-semibold space-x-2">
          <div
            className="w-10 h-10 rounded-md"
            style={{ background: '#fdf2f8' }}
          ></div>
          <div className="text-xs whitespace-nowrap">
            <div>Pink 50</div>
            <div>#fdf2f8</div>
          </div>
        </div>
        <div className="flex font-semibold space-x-2">
          <div
            className="w-10 h-10 rounded-md"
            style={{ background: '#fce7f3' }}
          ></div>
          <div className="text-xs whitespace-nowrap">
            <div>Pink 100</div>
            <div>#fce7f3</div>
          </div>
        </div>
        <div className="flex font-semibold space-x-2">
          <div
            className="w-10 h-10 rounded-md"
            style={{ background: '#fbcfe8' }}
          ></div>
          <div className="text-xs whitespace-nowrap">
            <div>Pink 200</div>
            <div>#fbcfe8</div>
          </div>
        </div>
        <div className="flex font-semibold space-x-2">
          <div
            className="w-10 h-10 rounded-md"
            style={{ background: '#f9a8d4' }}
          ></div>
          <div className="text-xs whitespace-nowrap">
            <div>Pink 300</div>
            <div>#f9a8d4</div>
          </div>
        </div>
        <div className="flex font-semibold space-x-2">
          <div
            className="w-10 h-10 rounded-md"
            style={{ background: '#f472b6' }}
          ></div>
          <div className="text-xs whitespace-nowrap">
            <div>Pink 400</div>
            <div>#f472b6</div>
          </div>
        </div>
        <div className="flex font-semibold space-x-2">
          <div
            className="w-10 h-10 rounded-md"
            style={{ background: '#ec4899' }}
          ></div>
          <div className="text-xs whitespace-nowrap">
            <div>Pink 500</div>
            <div>#ec4899</div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Typography() {
  return (
    <div className="flex text-gray-900 w-full overflow-x-auto mt-10 flex-col space-y-1">
      <div className="text-xs whitespace-nowrap">(XS) The quick brown fox</div>
      <div className="text-sm whitespace-nowrap">(SM) The quick brown fox</div>
      <div className="text-md whitespace-nowrap">(LG) The quick brown fox</div>
      <div className="text-xl whitespace-nowrap">(XL) The quick brown fox</div>
      <div className="text-2xl whitespace-nowrap">
        (2XL) The quick brown fox
      </div>
      <div className="text-3xl whitespace-nowrap">
        (3XL) The quick brown fox
      </div>
      <div className="text-4xl whitespace-nowrap">(4XL)The quick brown fox</div>
    </div>
  );
}
function Sizing() {
  return (
    <div style={{ fontSize: '10px' }}>
      <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100">
        <table className="table-auto border-none">
          <thead className="border-none">
            <tr>
              <th className="px-4 py-2">Value</th>
              <th className="px-4 py-2">Pixels</th>
              <th className="px-4 py-2">Representation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white py-0">
              <td class="border px-4 py-2">1</td>
              <td class="border-none flex px-4 space-x-4 items-center">
                <span>4px</span>
                <div
                  class="h-2 bg-gradient-to-br from-purple-200 to-purple-600"
                  style={{ width: '4px' }}
                ></div>
              </td>
              <td class="border px-4"></td>
            </tr>
            <tr className="bg-white border-none">
              <td>2</td>
              <td class="flex space-x-4 items-center">
                <span>8px</span>
                <div
                  class="h-2 bg-gradient-to-br from-purple-200 to-purple-600"
                  style={{ width: '8px' }}
                ></div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td class="flex space-x-4 items-center">
                <span>12px</span>
                <div
                  class="h-2 bg-gradient-to-br from-purple-200 to-purple-600"
                  style={{ width: '12px' }}
                ></div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td class="flex space-x-4 items-center">
                <span>16px</span>
                <div
                  class="h-2 bg-gradient-to-br from-purple-200 to-purple-600"
                  style={{ width: '16px' }}
                ></div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td class="flex space-x-4 items-center">
                <span>20px</span>
                <div
                  class="h-2 bg-gradient-to-br from-purple-200 to-purple-600"
                  style={{ width: '20px' }}
                ></div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>6</td>
              <td class="flex space-x-4 items-center">
                <span>24px</span>
                <div
                  class="h-2 bg-gradient-to-br from-purple-200 to-purple-600"
                  style={{ width: '24px' }}
                ></div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>7</td>
              <td class="flex space-x-4 items-center">
                <span>28px</span>
                <div
                  class="h-2 bg-gradient-to-br from-purple-200 to-purple-600"
                  style={{ width: '28px' }}
                ></div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>8</td>
              <td class="flex space-x-4 items-center">
                <span>32px</span>
                <div
                  class="h-2 bg-gradient-to-br from-purple-200 to-purple-600"
                  style={{ width: '32px' }}
                ></div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>9</td>
              <td class="flex space-x-4 items-center">
                <span>36px</span>
                <div
                  class="h-2 bg-gradient-to-br from-purple-200 to-purple-600"
                  style={{ width: '36px' }}
                ></div>
              </td>
              <td></td>
            </tr>
            <tr className="py-1">
              <td>10</td>
              <td class="flex space-x-4 items-center">
                <span>40px</span>
                <div
                  class="h-2 bg-gradient-to-br from-purple-200 to-purple-600"
                  style={{ width: '40px' }}
                ></div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>12</td>
              <td class="flex space-x-4 items-center">
                <span>48px</span>
                <div
                  class="h-2 bg-gradient-to-br from-purple-200 to-purple-600"
                  style={{ width: '48px' }}
                ></div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>16</td>
              <td class="flex space-x-4 items-center">
                <span>64px</span>
                <div
                  class="h-4 bg-gradient-to-br from-purple-200 to-purple-600"
                  style={{ width: '64px' }}
                ></div>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

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
  // const { isDarkTheme } = useThemeContext();
  // TODO: change this
  const foldBg = '';
  // const foldBg = !isDarkTheme ? 'bg-gray-100' : '';
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
                id="Group_453"
                data-name="Group 453"
                transform="translate(-74 -39)"
              >
                <rect
                  id="Rectangle_166"
                  data-name="Rectangle 166"
                  width="43"
                  height="43"
                  rx="7"
                  transform="translate(74 39)"
                  fill="#3ca2cb"
                />
                <path
                  id="Icon_awesome-paint-roller"
                  data-name="Icon awesome-paint-roller"
                  d="M17.691,5.443V1.361A1.361,1.361,0,0,0,16.33,0H1.361A1.361,1.361,0,0,0,0,1.361V5.443A1.361,1.361,0,0,0,1.361,6.8H16.33A1.361,1.361,0,0,0,17.691,5.443Zm1.361-2.722V8.165a1.361,1.361,0,0,1-1.361,1.361h-6.8a2.721,2.721,0,0,0-2.722,2.722v1.361A1.361,1.361,0,0,0,6.8,14.969v5.443a1.361,1.361,0,0,0,1.361,1.361h2.722a1.361,1.361,0,0,0,1.361-1.361V14.969a1.361,1.361,0,0,0-1.361-1.361V12.247h6.8a4.082,4.082,0,0,0,4.082-4.082V5.443A2.721,2.721,0,0,0,19.051,2.722Z"
                  transform="translate(84.762 49.761)"
                  fill="#fff"
                />
              </g>
            </svg>

            <h1 className={`h2 mb-4 mt-2 text-4xl ${headingColor}`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-indigo-500">
                Highly themeable,{' '}
              </span>
              <span>the only limit is your imagination</span>
            </h1>
            <p className={`text-xl ${subHeadingColor}`}>
              Themeability is one of the core elements of NativeBase. Customise
              your app theme and component styles to your heart's content.
            </p>

            <a
              className="span text-indigo-700"
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
                    id="color-btn"
                    style={{ borderBottom: '3px solid rgba(29, 78, 216,1)' }}
                    onClick={(e) => {
                      document.getElementById('sizing-btn').style.border =
                        'none';
                      document.getElementById('typography-btn').style.border =
                        'none';
                      e.target.style.borderBottom =
                        '3px solid rgba(29, 78, 216,1)';
                      setCurrentTheme('color');
                    }}
                    className={`pb-2 cursor-pointer border-0 ${subHeadingColor}`}
                  >
                    Color
                  </a>
                </div>
                <div className="text-left lg:text-center w-1/3">
                  <a
                    id="sizing-btn"
                    className={`pb-2  cursor-pointer border-0  ${subHeadingColor}`}
                    onClick={(e) => {
                      document.getElementById('color-btn').style.border =
                        'none';
                      document.getElementById('typography-btn').style.border =
                        'none';
                      e.target.style.borderBottom =
                        '3px solid rgba(29, 78, 216,1)';
                      setCurrentTheme('sizing');
                    }}
                  >
                    Sizing
                  </a>
                </div>
                <div className="text-left lg:text-center w-1/3">
                  <a
                    id="typography-btn"
                    onClick={(e) => {
                      document.getElementById('sizing-btn').style.border =
                        'none';
                      document.getElementById('color-btn').style.border =
                        'none';
                      e.target.style.borderBottom =
                        '3px solid rgba(29, 78, 216,1)';
                      setCurrentTheme('typography');
                    }}
                    className={`pb-2 cursor-pointer border-0  ${subHeadingColor}`}
                  >
                    Typography
                  </a>
                </div>
              </div>
              <div className="h-full flex justify-center relative w-full mt-10">
                <div className="h-full w-full bg-white rounded-lg shadow-xl px-1 md:px-4 py-4 lg:absolute lg:-right-5 md:top-0">
                  {/* <Sizing /> */}
                  {/* <ColorTheme /> */}
                  {/* <Typography /> */}
                  {currentTheme === 'color' ? (
                    <ColorTheme />
                  ) : currentTheme === 'sizing' ? (
                    // <Sizing />
                    ''
                  ) : (
                    <Typography />
                  )}
                </div>
              </div>
            </div>

            <div
              className="flex-1 rounded-tr-lg rounded-br-lg overflow-hidden px-0 md:px-0"
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
