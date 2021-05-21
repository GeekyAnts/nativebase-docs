import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

const SVGs = {
  Logo: (
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
  ),
};

const themes = [
  {
    svg: 'img/SVG/Universal/Android.svg',
    heading: 'Android',
    subHeading:
      'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print',
  },
  {
    svg: 'img/SVG/Universal/iOS.svg',
    heading: 'iOS',
    subHeading:
      'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print',
  },
  {
    svg: 'img/SVG/Universal/Web.svg',
    heading: 'Web',
    subHeading:
      'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print',
  },
];

export function Universal() {
  const foldBg = '';
  const { isDarkTheme } = useThemeContext();
  const headingColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-200';
  const subHeadingColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-400';
  const ringColor = !isDarkTheme ? 'ring-white' : 'ring-secondary-800';

  return (
    <section className="relative">
      <div
        className={'absolute inset-0 pointer-events-none ' + foldBg}
        aria-hidden="true"
      />
      <div className="px-6 md:px-0">
        <div className="relative py-12 md:py-20">
          <div className="max-w-4xl flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:space-x-7">
            <div className="mt-2">
              <span className="w-10 h-10 items-center rounded-md flex justify-center bg-yellow-400">
                {SVGs['Logo']}
              </span>
            </div>
            <div>
              <h2
                className={`leading-snug text-3xl md:text-4xl ${headingColor}`}
              >
                <span>Consistent across </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-400">
                  Web, Android & iOS
                </span>
              </h2>
              <p
                className={`text-lg md:text-xl leading-normal mt-7 ${subHeadingColor}`}
              >
                Whether you're building for the web, Android or iOS, we've got
                you covered. Fast-track your dev process with universal
                components.
              </p>

              <p className="mt-7">
                <a
                  className="text-yellow-400 no-underline border-0 border-b-2 border-solid hover:border-yellow-400 font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://necolas.github.io/react-native-web/docs/"
                >
                  Learn More
                </a>
              </p>
              <div className="rounded-md mt-10 py-6 flex text-white">
                {themes.map((theme, idx) => {
                  return (
                    <div
                      className={`flex flex-col ${
                        idx === 1 ? 'z-50' : ''
                      } ring-10 ${ringColor} -ml-1 md:-ml-1 lg:-ml-3 justify-center items-center bg-yellow-600 h-24 w-24 md:w-40 md:h-40 lg:h-48 lg:w-48 rounded-full py-2`}
                      key={idx}
                    >
                      <div className="">
                        <img
                          className="w-10 h-10 md:w-20 h-20"
                          src={theme['svg']}
                          alt={theme['heading']}
                        />
                      </div>
                      {/* <div className="mt-5 font-bold">{theme['heading']}</div> */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* themes */}
        </div>
      </div>
    </section>
  );
}
