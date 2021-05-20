import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

const SVGs = {
  microphone: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="25.396"
      viewBox="0 0 19 25.396"
    >
      <path
        id="Icon_open-microphone"
        data-name="Icon open-microphone"
        d="M9.211-.141A3.161,3.161,0,0,0,8.8-.046,3.161,3.161,0,0,0,6.334,3.115V9.437a3.161,3.161,0,0,0,6.322,0V3.115A3.161,3.161,0,0,0,9.211-.141ZM1.119,6.276A1.58,1.58,0,0,0,.044,7.857v1.58a9.5,9.5,0,0,0,7.9,9.293v3.351H6.366a3.17,3.17,0,0,0-3.161,3.161H15.88a3.17,3.17,0,0,0-3.161-3.161h-1.58V18.73a9.471,9.471,0,0,0,7.9-9.293V7.857a1.58,1.58,0,1,0-3.161,0v1.58a6.322,6.322,0,0,1-12.644,0V7.857a1.58,1.58,0,0,0-1.865-1.58,1.58,1.58,0,0,0-.19,0Z"
        transform="translate(-0.042 0.154)"
        fill="#fff"
      />
    </svg>
  ),
};

export function WatchTalk() {
  const { isDarkTheme } = useThemeContext();
  const headingColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-200';
  const subHeadingColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-400';
  const inviteUsColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-100';

  return (
    <section>
      <div className="relative px-6 md:px-0">
        <div className="py-12 md:py-20">
          <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:space-x-7 pb-12">
            <p className="w-10 h-10 items-center mt-2 rounded-md flex justify-center bg-blue-600">
              {SVGs['microphone']}
            </p>
            <div>
              <h2
                className={`leading-snug max-w-3xl  text-3xl md:text-4xl ${headingColor}`}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                  Talks and Articles
                </span>
              </h2>
              <p
                className={`text-lg max-w-3xl md:text-xl mt-7 leading-normal  ${subHeadingColor}`}
              >
                We have a lively community built on our shared love for React &
                React Native. Join us!
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
              <p className={`max-w-3xl text-xl mt-4`}>
                Check out Sanket Sahu's talk on building an accessible component
                library for native and web at React Day Bangalore.
              </p>

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
