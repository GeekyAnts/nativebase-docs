import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import { SVGs } from './icons';
export function WatchTalk() {
  const { isDarkTheme } = useThemeContext();
  const headingColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-200';
  const subHeadingColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-400';
  const inviteUsColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-100';

  return (
    <section>
      <div className="relative max-w-6xl mx-auto  px-6 md:px-10 xl:px-0">
        <div className="py-12 md:py-20">
          <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:space-x-7 pb-12">
            <div className="w-12 h-12 items-center mt-1 rounded-md flex justify-center bg-blue-600">
              {SVGs['microphone']}
            </div>
            <div className="max-w-3xl">
              <h2
                className={`leading-snug   text-3xl md:text-4xl ${headingColor}`}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                  Talks and Articles
                </span>
              </h2>
              <p
                className={`text-lg font-medium  md:text-xl mt-7 leading-normal  ${subHeadingColor}`}
              >
                Check out Sanket Sahu's talk on building an accessible component
                library for native and web at React Day Bangalore.
              </p>
              <iframe
                className="mt-5"
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/1P26X_GSHO8"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="max-w-3xl mt-20">
                <p className={`text-3xl font-bold ${inviteUsColor}`}>
                  Invite us to speak at your next event{' '}
                </p>
                <p className={`text-xl ${subHeadingColor}`}>
                  We love sharing knowledge and meeting other passionate devs.
                  Invite a NativeBase creator to speak at your next event, we
                  promise to keep things interesting!
                </p>
                <a
                  className="text-blue-800 text-md font-bold no-underline border-0 border-b-2 border-solid border-blue-800 pb-1"
                  href="https://form.typeform.com/to/hjPoXR42?typeform-medium=embed-snippet"
                  data-mode="drawer_right"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send Invite
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className={'relative '}>
    //   <div
    //     className={'absolute inset-0 pointer-events-none '}
    //     aria-hidden="true"
    //   />

    //   <div className="">
    //     <div
    //       className="relative py-10 px-6 lg:px-0  min-h-6xl"
    //       style={{ zIndex: 1 }}
    //     >
    //       <cente className="">
    //         <h1 className={`h2 mb-5 text-4xl ${headingColor}`}>
    //           Watch our Talk
    //         </h1>
    //         <p
    //           className={`text-xl w-full lg:w-7/12 font-medium mx-auto  ${subHeadingColor}`}
    //         >
    //           Check out Sanket Sahu's talk on building an accessible component
    //           library for native and web at React Day Bangalore.
    //         </p>
    //         <iframe
    //           className="w-full mx-auto lg:w-3/4"
    //           // width="70%"
    //           height="400"
    //           src="https://www.youtube.com/embed/1P26X_GSHO8"
    //           frameBorder="0"
    //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //           allowFullScreen
    //         ></iframe>
    //       </cente>
    //     </div>
    //     <div className="px-4 md:px-0 py-20 lg:px-0">
    //       <div className="bg-gray-200 rounded-md py-5 px-0 lg:px-4 ">
    //         <div className="grid grid-cols-1  lg:grid-cols-8 gap-4 px-5 lg:px-10">
    //           <div className="flex items-center">{SVGs['microphone']}</div>
    //           <div className="col-span-5">
    //             <p className="text-3xl font-bold text-gray-600 mb-0">
    //               Invite us to speak at your next event
    //             </p>
    //             <p className="text-gray-600">
    //               We love sharing knowledge and meeting other passionate devs.
    //               Invite a NativeBase creator to speak at your next event, we
    //               promise to keep things interesting!
    //             </p>
    //           </div>
    //           <div className="col-span-2 lg:justify-end flex items-center">
    //             <a
    //               className="typeform-share button btn bg-blue-400 border-none rounded-md px-8 text-xl py-3 text-white font-semibold"
    //               href="https://form.typeform.com/to/hjPoXR42?typeform-medium=embed-snippet"
    //               data-mode="drawer_right"
    //             >
    //               Send Invite
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
