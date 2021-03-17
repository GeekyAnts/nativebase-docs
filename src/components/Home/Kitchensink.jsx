import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import { Icon } from './../SVGs/Icon';
import GitHub from '../../img/GitHub';
// import illustration from '../../img/Illustration.png';
// import qrCode from '../../img/QR-code.png';
// import expo from '../../img/expo.png';

export function Kitchensink() {
  const { isDarkTheme } = useThemeContext();
  // TODO: change this
  const foldBg = '';
  // const foldBg = !isDarkTheme ? 'bg-gray-100' : '';
  return (
    <section className="relative">
      <div
        className={'absolute inset-0 pointer-events-none ' + foldBg}
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-3 sm:px-4">
        <div className="pt-12 md:pt-20 py-10 px-8 md:py-16 md:px-12">
          <div className="flex flex-row">
            <div className="max-w-3xl mx-auto text-center flex-1">
              <div className="flex flex-row mb-6">
                <Icon height={110} width={110} />
                <div className="flex flex-col px-6 text-left">
                  <p className="text-2xl mb-0">NativeBase presents</p>
                  <h2 className="h2 text-4xl">Kitchen Sink</h2>
                </div>
              </div>
              <p className="text-left mb-6">
                Kitchen Sink is a comprehensive demo app showcasing all the
                NativeBase UI components in action. It includes layouts, forms,
                icons and much more.
              </p>
              <div>
                <div className="flex flex-row items-end mb-6">
                  <img
                    // className='absolute max-w-full transform animate-float animation-delay-1000'
                    src={'/img/kitchensink-qr.png'}
                    width="159"
                    height="159"
                    alt="Kitchen Sink QR"
                    // style={{ width: '88.7%', bottom: '-20%', right: '-18%' }}
                  />
                  <a
                    className="btn text-white bg-indigo-400 w-full sm:w-auto sm:ml-4 rounded-md py-3 px-5 items-center flex"
                    href="https://github.com/nativebase/kitchensink"
                  >
                    <GitHub fill="#fff" className="mr-2" />
                    Github
                  </a>
                </div>
                <div className="flex text-left items-center">
                  <img
                    className="mr-4"
                    src={'/img/expo.png'}
                    width="41"
                    height="41"
                    alt="Expo icon"
                  />
                  <p className="m-0">
                    Scan with the <span className="font-semibold">Expo</span>{' '}
                    app on your Android device to access Kitchen Sink.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-center items-center">
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
                        {/* <stop stopColor='#818cf8' offset='77.402%' /> */}
                        <stop stopColor="#818cf8" offset="100%" />
                      </linearGradient>
                    </defs>
                    <g fill="url(#illustration-02)" fillRule="evenodd">
                      <circle cx="930" cy="285" r="200" opacity="0.3" />
                      {/* <circle cx="155" cy="443" r="64" opacity="0.3" /> */}
                    </g>
                  </svg>
                </div>
                <img
                  className="rounded-3xl"
                  style={{ zIndex: 1 }}
                  src={'/src/img/kitchensink-ios.gif'}
                  width="223"
                  height="478"
                  alt="Kitchen Sink iOS"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
