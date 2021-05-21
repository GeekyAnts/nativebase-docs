import React, { useState } from 'react';
import { CodeComponent } from './CodeComponent';
import useThemeContext from '@theme/hooks/useThemeContext';

function ColorTheme() {
  return (
    <div className="h-full text-gray-900  px-5 py-6 overflow-x-auto w-full">
      <div className="text-sm font-semibold">Rose</div>
      <div className="grid mt-2 w-96  md:w-full grid-cols-3 gap-x-3 gap-y-5">
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
      <div className="grid mt-2 w-96  md:w-full grid-cols-3 gap-x-3 gap-y-5">
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
      <div className="text-4xl whitespace-nowrap">
        (4XL) The quick brown fox
      </div>
    </div>
  );
}
function Sizing() {
  return (
    <div style={{ fontSize: '10px' }}>
      <div className="flex w-10/12 pl-0 text-gray-900 md:pl-36 overflow-hidden">
        <table className="table-auto sizing-theme border-none p-0">
          <thead className="border-none">
            <tr className="border-none">
              <th className="border-none">Value</th>
              <th className="border-none text-left px-6">Pixels</th>
              <th className="border-none">Representation</th>
            </tr>
          </thead>
          <tbody className="border-none">
            <tr className="border-none py-0">
              <td className="border-none py-2">1</td>
              <td className="flex border-none px-6 py-2 space-x-4 items-center">
                <span className="w-6">4px</span>
                <div
                  className="h-3 bg-purple-800"
                  style={{ width: '4px' }}
                ></div>
              </td>
              <td className="border-none px-4 py-2"></td>
            </tr>
            <tr className="bg-white border-b-1 border-gray-200">
              <td className="border-none py-2 ">2</td>
              <td className="flex border-none  px-6 py-2 space-x-4 items-center">
                <span className="w-6">8px</span>
                <div
                  className="h-3 bg-purple-800"
                  style={{ width: '8px' }}
                ></div>
              </td>
              <td className="border-none py-2"></td>
            </tr>
            <tr className="border-1 border-gray-200 bg-white">
              <td className="border-none py-2">3</td>
              <td className="flex border-none px-6 py-2  space-x-4 items-center">
                <span className="w-6">12px</span>
                <div
                  className="h-3 bg-purple-800"
                  style={{ width: '12px' }}
                ></div>
              </td>
              <td className="border-none py-2"></td>
            </tr>
            <tr className="border-b-1 border-gray-200 bg-white">
              <td className="border-none py-2">4</td>
              <td className="flex border-none px-6 py-2 space-x-4 items-center">
                <span className="w-6">16px</span>
                <div
                  className="h-3 bg-purple-800"
                  style={{ width: '16px' }}
                ></div>
              </td>
              <td className="border-none"></td>
            </tr>
            <tr className="border-b-1 border-gray-200 bg-white">
              <td className="border-none py-2">5</td>
              <td className="flex border-none px-6 py-2 space-x-4 items-center">
                <span className="w-6">20px</span>
                <div
                  className="h-3 bg-purple-800"
                  style={{ width: '20px' }}
                ></div>
              </td>
              <td className="border-none py-2"></td>
            </tr>
            <tr className="border-b-1 border-gray-200 bg-white">
              <td className="border-none py-2">6</td>
              <td className="flex px-6 py-2 border-none space-x-4 items-center">
                <span className="w-6">24px</span>
                <div
                  className="h-3 bg-purple-800 "
                  style={{ width: '24px' }}
                ></div>
              </td>
              <td className="border-none py-2 bg-white"></td>
            </tr>
            <tr className="border-b-1 border-gray-200">
              <td className="border-none py-2">7</td>
              <td className="flex px-6 py-2 border-none  space-x-4 items-center">
                <span className="w-6">28px</span>
                <div
                  className="h-3 bg-purple-800"
                  style={{ width: '28px' }}
                ></div>
              </td>
              <td className="border-none py-2"></td>
            </tr>
            <tr className="border-b-1 border-gray-200 bg-white">
              <td className="border-none py-2">8</td>
              <td className="flex border-none py-2 px-6  space-x-4 items-center">
                <span className="w-6">32px</span>
                <div
                  className="h-3 bg-purple-800"
                  style={{ width: '32px' }}
                ></div>
              </td>
              <td className="border-none py-2"></td>
            </tr>
            <tr className="border-b-1 border-gray-200 bg-white">
              <td className="border-none py-2">9</td>
              <td className="flex border-none py-2 px-6  space-x-4 items-center">
                <span className="w-6">36px</span>
                <div
                  className="h-3 bg-purple-800"
                  style={{ width: '36px' }}
                ></div>
              </td>
              <td className="border-none py-2"></td>
            </tr>
            <tr className="border-1 border-gray-200 bg-white">
              <td className="border-none py-2">10</td>
              <td className="flex border-none py-2 px-6  space-x-4 items-center">
                <span className="w-6">40px</span>
                <div
                  className="h-3 bg-purple-800"
                  style={{ width: '40px' }}
                ></div>
              </td>
              <td className="border-none py-2"></td>
            </tr>
            <tr className="border-1  border-gray-200 bg-white">
              <td className="border-none py-2">12</td>
              <td className="flex px-6 border-none py-2 space-x-4 items-center">
                <span className="w-6">48px</span>
                <div
                  className="h-3 bg-purple-800"
                  style={{ width: '48px' }}
                ></div>
              </td>
              <td className="border-none py-2"></td>
            </tr>
            <tr className="border-1 border-gray-200 bg-white">
              <td className="border-none py-2">16</td>
              <td className="flex border-none py-2 px-6  space-x-4 items-center">
                <span className="w-6">64px</span>
                <div
                  className="h-3 bg-purple-800"
                  style={{ width: '64px' }}
                ></div>
              </td>
              <td className="border-none py-2"></td>
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

const SVGs = {
  Logo: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="43"
      viewBox="0 0 43 43"
    >
      <g id="Group_453" data-name="Group 453" transform="translate(-74 -39)">
        <rect
          id="Rectangle_166"
          data-name="Rectangle 166"
          width="43"
          height="43"
          rx="7"
          transform="translate(74 39)"
          fill="#6366F1"
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
  ),
};

export function Themeable() {
  // const { isDarkTheme } = useThemeContext();
  // TODO: change this
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

      <div className="px-6 md:px-0">
        <div className="relative py-12 md:py-20">
          <div className="max-w-3xl max-w-3xl flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:space-x-7">
            <span className="mt-2 w-16">{SVGs['Logo']}</span>
            <span>
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
            </span>
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
                    <Sizing />
                  ) : (
                    <Typography />
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
