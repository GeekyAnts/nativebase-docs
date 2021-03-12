import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import illustration from '../../img/Illustration.png';
import qrCode from '../../img/QR-code.png';
import expo from '../../img/expo.png';

export function Features() {
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();
  const foldBg = !isDarkTheme ? 'bg-gray-100' : '';
  const foldGreenBg = isDarkTheme ? 'bg-green-200' : 'bg-green-50';
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className={'absolute inset-0 pointer-events-none ' + foldBg}
        aria-hidden="true"
      ></div>
      {/* <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 text-4xl">What's new with NativeBase?</h1>
            <p className="text-xl text-gray-600">
              Now Available for Web - All-new React Native ARIA Integration -
              Includes Utility Props for Styling
            </p>
          </div>

          {/* Top image */}
          {/* <div className="pb-12 md:pb-16">
            <img
              src={illustration}
              width="1104"
              height="325"
              alt="Features top"
            />
          </div> */}

          {/* Section content */}
          {/* <div className="md:grid md:grid-cols-12 md:gap-6"> */}
          {/* Content */}
          {/* <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-10 lg:col-span-8 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8 flex flex-row items-center">
                <img src={qrCode} alt="QR Code" width="250" height="247" />
                <div className="ml-6">
                  <img src={expo} alt="expo" width="40" height="40" />
                  <p className="text-xl text-gray-600">
                    Scan with the Expo app on your android device to see the
                    demo
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div
        className={
          'p-16 pt-20 rounded-md relative max-w-6xl mx-auto px-4 sm:px-6 pb-4 ' +
          foldGreenBg
        }
      >
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">Embedd</div>
          <div className="">
            <h1 className="h2 mb-4 text-4xl text-gray-800">Lorem ipsum</h1>
            <p className="text-xl text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint in
              quidem id animi repudiandae rerum eligendi quibusdam illum
              doloribus laboriosam. A aliquid dolores quo iusto, sapiente
              voluptate repudiandae maxime aperiam!
            </p>
          </div>
        </div>

        <div className="mb-12 md:mb-16 mt-10">
          <ul className="list-none flex flex-wrap justify-center text-sm font-medium -m-2">
            <li className="m-2">
              <button
                className="inline-flex text-center text-gray-100 py-2 px-4 rounded-full bg-purple-400 hover:bg-purple-800 transition duration-150 ease-in-out border-purple-300 border-2 border-solid"
                href="#0"
              >
                Android
              </button>
            </li>
            <li className="m-2">
              <button
                className="inline-flex text-center py-2 px-4 rounded-full bg-transparent hover:bg-purple-100  transition duration-150 ease-in-out text-purple-400 border-purple-300 border-2 border-solid"
                href="#0"
              >
                iOS
              </button>
            </li>
            <li className="m-2">
              <button
                className="inline-flex text-center py-2 px-4 rounded-full bg-transparent hover:bg-purple-100 transition duration-150 ease-in-out text-purple-400 border-purple-300 border-2 border-solid"
                href="#0"
              >
                Web
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
