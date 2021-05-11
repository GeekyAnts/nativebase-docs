import React from 'react';
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
      <g id="Group_559" data-name="Group 559" transform="translate(-67 -706)">
        <g id="Group_485" data-name="Group 485" transform="translate(-7 16)">
          <rect
            id="Rectangle_166"
            data-name="Rectangle 166"
            width="43"
            height="43"
            rx="8"
            transform="translate(74 690)"
            fill="#1e40af"
          />
        </g>
        <g id="handyman-tools" transform="translate(68.154 705.429)">
          <path
            id="Path_329"
            data-name="Path 329"
            d="M14.314,19.245a4.965,4.965,0,0,0,1.512-.237l2.9,2.9,3.18-3.18-2.9-2.905a4.943,4.943,0,0,0-1.2-4.99A4.885,4.885,0,0,0,14.327,9.4a4.972,4.972,0,0,0-2.128.481.339.339,0,0,0-.094.545l3.055,3.056a1.188,1.188,0,0,1,0,1.684,1.217,1.217,0,0,1-1.683,0l-3.057-3.055a.338.338,0,0,0-.545.093,4.921,4.921,0,0,0,4.437,7.046Z"
            transform="translate(-1.726)"
            fill="#fff"
          />
          <path
            id="Path_330"
            data-name="Path 330"
            d="M156.251,151.324a4.966,4.966,0,0,0-1.514.238l-3.212-3.212-3.182,3.182,3.213,3.213a4.947,4.947,0,0,0,1.2,4.989,4.886,4.886,0,0,0,3.477,1.44,4.974,4.974,0,0,0,2.128-.481.339.339,0,0,0,.094-.545L155.4,157.09a1.187,1.187,0,0,1,0-1.683,1.216,1.216,0,0,1,1.683,0l3.056,3.055a.339.339,0,0,0,.545-.093,4.921,4.921,0,0,0-4.436-7.046Z"
            transform="translate(-128.146 -126.427)"
            fill="#fff"
          />
          <path
            id="Path_331"
            data-name="Path 331"
            d="M125.543,19.05s.532.466.97.248c.5-.249,1.891,1.127,2.336,1.448l.01,0-.243.244a.817.817,0,1,0,1.156,1.155l1.927-1.925a.818.818,0,0,0-1.157-1.157l-.321.321c-.266-.366-.708-.991-.652-1.2.235-.906-1.611-3.045-1.611-3.045-4.586-4.585-7.648-4.48-9.106-3.979-.585.2-.476.329.131.436,4.421.772,4.969,3.379,4.22,4.385-.288.388.132.857.132.857l.158.157-7.464,7.463a1.468,1.468,0,0,1,.286.217l1.256,1.254a1.459,1.459,0,0,1,.215.284l7.465-7.463Z"
            transform="translate(-98.746 -1.397)"
            fill="#fff"
          />
          <path
            id="Path_332"
            data-name="Path 332"
            d="M17.067,166.817a.777.777,0,0,0-1.039-.038l-8.3,7.437a.652.652,0,0,0-.037.967l2.259,2.258a.653.653,0,0,0,.966-.034l7.439-8.3a.776.776,0,0,0-.038-1.037Z"
            transform="translate(0 -143.031)"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  ),
  'Styled Logo': (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22.526"
      height="28.581"
      viewBox="0 0 129 146"
    >
      <g id="Group_535" data-name="Group 535" transform="translate(378 -6741)">
        <g
          id="Path_339"
          data-name="Path 339"
          transform="translate(-378 6887) rotate(-90)"
          fill="none"
        >
          <path
            d="M109.5,0,146,64.5,109.5,129h-73L0,64.5,36.5,0Z"
            stroke="none"
          />
          <path
            d="M 39.41559600830078 5 L 5.745071411132812 64.49996185302734 L 39.41561889648438 124 L 106.5845108032227 124 L 140.2549285888672 64.5 L 106.5845108032227 5 L 39.41559600830078 5 M 36.5 0 L 109.5001373291016 0 L 146 64.5 L 109.5001373291016 129 L 36.5 129 L 0 64.49997711181641 L 36.5 0 Z"
            stroke="none"
            fill="#000"
          />
        </g>
        <path
          id="Path_342"
          data-name="Path 342"
          d="M0,0V70"
          transform="translate(-313.5 6744.5)"
          fill="none"
          stroke="#000"
          stroke-width="1.5"
        />
        <path
          id="Path_341"
          data-name="Path 341"
          d="M0,33,60,0"
          transform="translate(-373.5 6814.5)"
          fill="none"
          stroke="#000"
          stroke-width="1.5"
        />
        <path
          id="Path_340"
          data-name="Path 340"
          d="M63,35,0,0"
          transform="translate(-313.5 6814.5)"
          fill="none"
          stroke="#000"
          stroke-width="1.5"
        />
      </g>
    </svg>
  ),
};
const exampleCode = `
<Box>
  fontSize={4}
  fontWeight='bold'
  p={3}
  mb={[4,5]}
  color='white'
  bg='primary'>
  Hello
</Box>
`.trim();

export function Utility() {
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
            {SVGs['Logo']}

            <h1 className={`h2 mb-4 mt-2 text-4xl ${headingColor}`}>
              <span>Now Supporting </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-800">
                Utility Props
              </span>
            </h1>
            <p className="font-semibold text-lg">
              <span>Powered By</span>
              <span className="h-10 ml-2 mr-2 px-3 relative">
                <span className="absolute -top-1.5 left-0">
                  {SVGs['Styled Logo']}
                </span>
              </span>
              <a
                className={`span ${subHeadingColor}`}
                target="_blank"
                rel="noopener noreferrer"
                href="https://react-native-aria.geekyants.com/"
              >
                Styled System.
              </a>
            </p>
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
            <p className="">
              <a
                className="span text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
                href="https://react-native-aria.geekyants.com/"
              >
                Learn More
              </a>
            </p>
          </div>

          {/* grid */}
          <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row rounded-md">
            <div className="sm:w-full rounded-lg lg:w-1/2 flex flex-col py-3">
              <div className="h-72  flex justify-center relative w-full mt-6">
                <div className="h-full bg-white w-full flex items-center justify-center rounded-lg shadow-xl lg:absolute lg:-right-5 md:top-0">
                  <button className="px-12 py-3 rounded-md border-0 bg-blue-800 text-white text-md font-bold ">
                    Hello
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-1 rounded-lg overflow-hidden px-0 md:px-0">
              <CodeComponent class1={'px-10 py-20'} code={exampleCode} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="px-4 md:px-0">
        <div className="relative py-12 md:py-20">
          <div className="max-w-3xl">
            <p className=" w-10 h-10 items-center rounded-md flex justify-center bg-pink-700">
              {SVGs['Logo']}
            </p>
            <h3 className="h3 text-4xl mb-0">
              <span>Now Supporting </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-800">
                Utility Props
              </span>
            </h3>
            <p className="mt-2 text-lg font-semibold mb-0">
              <span>Built on top of</span>
              <span className="h-10 ml-2 mr-2 px-3 relative">
                <span className="absolute -top-1.5 left-0">
                  {SVGs['Styled Logo']}
                </span>
              </span>
              <span>Styled System</span>
            </p>
            <p className={`max-w-xl mt-4  mb-0 ${subHeadingColor}`}>
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
            <p className="mt-4">
              <a
                className="span text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
                href="https://react-native-aria.geekyants.com/"
              >
                Learn More
              </a>
            </p>
          </div>
          <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row rounded-md">
            <div className="sm:w-full rounded-lg lg:w-1/2 flex flex-col py-3">
              <div className="h-72  flex justify-center relative w-full mt-6">
                <div className="h-full bg-white w-full flex items-center justify-center rounded-lg shadow-xl lg:absolute lg:-right-5 md:top-0">
                  <button className="px-12 py-3 rounded-md border-0 bg-blue-800 text-white text-md font-bold ">
                    Hello
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-1 rounded-tr-lg rounded-br-lg overflow-hidden px-0 md:px-0">
              <CodeComponent class1={'px-10 py-20'} code={exampleCode} />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
