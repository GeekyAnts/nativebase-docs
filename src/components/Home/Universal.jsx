import React from 'react';
import { CodeComponent } from './CodeComponent';
import useThemeContext from '@theme/hooks/useThemeContext';

const SVGs = {
  IOS: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 80 80"
    >
      <g id="Group_607" data-name="Group 607" transform="translate(-610 -394)">
        <rect
          id="Rectangle_249"
          data-name="Rectangle 249"
          width="80"
          height="80"
          transform="translate(610 394)"
          fill="none"
        />
        <path
          id="Icon_metro-apple"
          data-name="Icon metro-apple"
          d="M49.691,37.959a15.4,15.4,0,0,1,7.025-12.911,15,15,0,0,0-11.9-6.72c-5.067-.535-9.888,3.109-12.46,3.109s-6.534-3.03-10.737-2.95a15.845,15.845,0,0,0-13.46,8.5c-5.739,10.377-1.47,25.75,4.124,34.165,2.733,4.119,5.992,8.746,10.271,8.581,4.121-.171,5.679-2.779,10.661-2.779s6.382,2.779,10.743,2.693c4.434-.086,7.243-4.2,9.958-8.33a38.121,38.121,0,0,0,4.507-9.644,14.9,14.9,0,0,1-8.732-13.717ZM41.5,12.757A15.357,15.357,0,0,0,44.883,1.928,14.4,14.4,0,0,0,35.3,7.064c-2.106,2.541-3.949,6.6-3.455,10.492C35.5,17.852,39.224,15.621,41.5,12.757Z"
          transform="translate(618.071 398.167)"
          fill="#fff"
        />
      </g>
    </svg>
  ),
  Android: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 80 80"
    >
      <g id="Group_606" data-name="Group 606" transform="translate(-365 -404)">
        <rect
          id="Rectangle_248"
          data-name="Rectangle 248"
          width="80"
          height="80"
          transform="translate(365 404)"
          fill="none"
        />
        <path
          id="Icon_material-android"
          data-name="Icon material-android"
          d="M14.7,53.7a2.963,2.963,0,0,0,2.925,2.983H20.55V67.125a4.388,4.388,0,1,0,8.775,0V56.683h5.85V67.125a4.388,4.388,0,1,0,8.775,0V56.683h2.925A2.963,2.963,0,0,0,49.8,53.7V23.867H14.7ZM7.387,23.867A4.426,4.426,0,0,0,3,28.342V49.225A4.426,4.426,0,0,0,7.387,53.7a4.426,4.426,0,0,0,4.388-4.475V28.342A4.426,4.426,0,0,0,7.387,23.867Zm49.725,0a4.426,4.426,0,0,0-4.388,4.475V49.225a4.388,4.388,0,1,0,8.775,0V28.342A4.426,4.426,0,0,0,57.112,23.867ZM42.575,6.444l3.8-3.878a1.5,1.5,0,0,0,0-2.118,1.428,1.428,0,0,0-2.077,0L39.972,4.863A16.81,16.81,0,0,0,32.25,2.983a17.051,17.051,0,0,0-7.78,1.88L20.111.448a1.428,1.428,0,0,0-2.077,0,1.5,1.5,0,0,0,0,2.118l3.832,3.908A17.965,17.965,0,0,0,14.7,20.883H49.8A17.91,17.91,0,0,0,42.575,6.444ZM26.4,14.917H23.475V11.933H26.4Zm14.625,0H38.1V11.933h2.925Z"
          transform="translate(372.75 408.2)"
          fill="#fff"
        />
      </g>
    </svg>
  ),
  Web: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 80 80"
    >
      <g id="Group_608" data-name="Group 608" transform="translate(-1034 -399)">
        <rect
          id="Rectangle_250"
          data-name="Rectangle 250"
          width="80"
          height="80"
          transform="translate(1034 399)"
          fill="none"
        />
        <g
          id="Icon_ionic-logo-windows"
          data-name="Icon ionic-logo-windows"
          transform="translate(1038.6 403.488)"
        >
          <path
            id="Path_352"
            data-name="Path 352"
            d="M55.525,18.633H16.313v28.3l39.212,5.692V18.633Z"
            transform="translate(15.31 18.207)"
            fill="#fff"
          />
          <path
            id="Path_353"
            data-name="Path 353"
            d="M31.343,18.633H2.25V42.35l29.093,4.222V18.633Z"
            transform="translate(-2.25 18.207)"
            fill="#fff"
          />
          <path
            id="Path_354"
            data-name="Path 354"
            d="M55.525,2.25l-39.212,5.6V36.561H55.525V2.25Z"
            transform="translate(15.31 -2.25)"
            fill="#fff"
          />
          <path
            id="Path_355"
            data-name="Path 355"
            d="M31.343,4.9,2.25,9.059V33.25H31.343V4.9Z"
            transform="translate(-2.25 1.06)"
            fill="#fff"
          />
        </g>
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

export function Universal() {
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
            <p className="w-10 h-10 items-center rounded-md flex justify-center bg-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29.25"
                height="29.25"
                viewBox="0 0 29.25 29.25"
              >
                <path
                  id="Icon_ionic-md-globe"
                  data-name="Icon ionic-md-globe"
                  d="M18,3.375A14.625,14.625,0,1,0,32.625,18,14.625,14.625,0,0,0,18,3.375Zm-1.515,27.07A12.537,12.537,0,0,1,8.46,9.868a13.891,13.891,0,0,1,.142,1.7c-.115,1.673-.28,2.72.7,4.132a6.817,6.817,0,0,1,.661,1.974c.182.623.907.949,1.408,1.333,1.01.774,1.976,1.674,3.046,2.355.707.45,1.148.673.941,1.536a5.449,5.449,0,0,1-.572,1.738,3.523,3.523,0,0,0,.587,1.574c.527.527,1.05,1.011,1.625,1.485C17.887,28.431,16.91,29.387,16.485,30.445Zm10.379-3.581a12.446,12.446,0,0,1-6.508,3.451A5.2,5.2,0,0,1,21.9,28.251a5.238,5.238,0,0,0,1.385-1.712,11.894,11.894,0,0,1,.955-1.632c.5-.766-1.225-1.922-1.783-2.164a18.377,18.377,0,0,1-3.316-2.065c-.795-.559-2.409.292-3.306-.1A17.3,17.3,0,0,1,12.52,18.3c-1.1-.83-1.049-1.8-1.049-3.023.864.032,2.092-.239,2.665.455.181.219.8,1.2,1.219.85.34-.284-.252-1.424-.366-1.692-.352-.824.8-1.145,1.392-1.7.771-.729,2.424-1.872,2.293-2.394s-1.654-2-2.549-1.771c-.134.035-1.315,1.272-1.543,1.467q.009-.606.018-1.212c0-.255-.476-.517-.454-.681.056-.416,1.214-1.17,1.5-1.5-.2-.126-.89-.717-1.1-.631-.5.21-1.074.355-1.579.565a3.211,3.211,0,0,0-.047-.5A12.416,12.416,0,0,1,16.112,5.6l.99.4.7.83.7.72.61.2.969-.914-.25-.652V5.6a12.4,12.4,0,0,1,5.31,2.1c-.284.025-.6.067-.947.112a3.151,3.151,0,0,0-.49-.184c.459.987.938,1.961,1.425,2.935.52,1.041,1.673,2.157,1.875,3.256.239,1.295.073,2.471.2,3.995a6.823,6.823,0,0,0,1.654,3.134,3.312,3.312,0,0,0,1.293.157A12.459,12.459,0,0,1,26.864,26.864Z"
                  transform="translate(-3.375 -3.375)"
                  fill="#fff"
                />
              </svg>
            </p>

            <h1 className={`h2 mb-4 mt-2 text-4xl ${headingColor}`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-400">
                Universal
              </span>
            </h1>
            <p className={`text-xl ${subHeadingColor}`}>
              Themeability is one of the core elements of NativeBase. Customise
              your app theme and component styles to your heart's content.
            </p>

            <a
              className="text-yellow-400"
              target="_blank"
              rel="noopener noreferrer"
              // href="https://react-native-aria.geekyants.com/"
            >
              Learn More
            </a>
          </div>
          <div className="grid bg-yellow-600 rounded-md mt-10 py-6 grid-cols-1 md:grid-cols-3 gap-y-10  text-white">
            <div className="text-center py-2">
              <div>{SVGs['Android']}</div>
              <div className="mt-5 font-bold">Android</div>
              <div className="flex mt-1.5 justify-center text-center">
                <div className="w-3/4">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print
                </div>
              </div>
            </div>
            <div className="text-center py-2">
              <div>{SVGs['IOS']}</div>
              <div className="mt-5 font-bold">iOS</div>
              <div className="flex mt-1.5 justify-center text-center">
                <div className="w-3/4">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print
                </div>
              </div>
            </div>
            <div className="text-center py-2">
              <div>{SVGs['Web']}</div>
              <div className="mt-5 font-bold">Web</div>
              <div className="flex mt-1.5 justify-center text-center">
                <div className="w-3/4">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
