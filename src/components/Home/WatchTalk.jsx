import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

const SVGs = {
  microphone: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      viewBox="0 0 94 94"
    >
      <g id="Group_697" data-name="Group 697" transform="translate(-137 -1923)">
        <path
          id="Path_395"
          data-name="Path 395"
          d="M47,0A47,47,0,1,1,0,47,47,47,0,0,1,47,0Z"
          transform="translate(137 1923)"
          fill="#60a5fa"
        />
        <path
          id="Icon_awesome-microphone"
          data-name="Icon awesome-microphone"
          d="M18.659,37.318A10.178,10.178,0,0,0,28.837,27.14V10.178a10.178,10.178,0,0,0-20.355,0V27.14A10.178,10.178,0,0,0,18.659,37.318ZM35.622,20.355h-1.7a1.7,1.7,0,0,0-1.7,1.7V27.14A13.586,13.586,0,0,1,17.3,40.645c-7.05-.688-12.214-7.026-12.214-14.109V22.051a1.7,1.7,0,0,0-1.7-1.7H1.7a1.7,1.7,0,0,0-1.7,1.7v4.258c0,9.5,6.782,17.975,16.115,19.262v3.62H10.178a1.7,1.7,0,0,0-1.7,1.7v1.7a1.7,1.7,0,0,0,1.7,1.7H27.14a1.7,1.7,0,0,0,1.7-1.7v-1.7a1.7,1.7,0,0,0-1.7-1.7H21.2v-3.58A18.677,18.677,0,0,0,37.318,27.14V22.051A1.7,1.7,0,0,0,35.622,20.355Z"
          transform="translate(165.71 1942.783)"
          fill="#fff"
        />
      </g>
    </svg>
  ),
};

export function WatchTalk() {
  const { isDarkTheme } = useThemeContext();
  const headingColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-200';
  const subHeadingColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-400';

  return (
    <section className={'relative '}>
      <div
        className={'absolute inset-0 pointer-events-none '}
        aria-hidden="true"
      />

      <div className="">
        <div
          className="relative py-10 px-6 lg:px-0  min-h-6xl"
          style={{ zIndex: 1 }}
        >
          <center className="">
            <h1 className={`h2 mb-10 text-4xl ${headingColor}`}>
              Watch our Talk
            </h1>
            <iframe
              className="w-full mx-auto lg:w-3/4"
              // width="70%"
              height="400"
              src="https://www.youtube.com/embed/1P26X_GSHO8"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p
              className={`text-xl w-full lg:w-3/4 mx-auto mt-10  ${subHeadingColor}`}
            >
              Check out Sanket Sahu's talk on building an accessible component
              library for native and web at React Day Bangalore.
            </p>
          </center>
        </div>
        <div className="px-4 md:px-0 py-20 lg:px-0">
          <div className="bg-gray-200 rounded-md py-5 px-0 lg:px-4 ">
            <div className="grid grid-cols-1  lg:grid-cols-8 gap-4 px-5 lg:px-10">
              <div className="flex items-center">{SVGs['microphone']}</div>
              <div className="col-span-5">
                <p className="text-3xl font-bold text-gray-600 mb-0">
                  Invite us to speak at your next event
                </p>
                <p className="text-gray-600">
                  We love sharing knowledge and meeting other passionate devs.
                  Invite a NativeBase creator to speak at your next event, we
                  promise to keep things interesting!
                </p>
              </div>
              <div className="col-span-2 lg:justify-end flex items-center">
                <button className="bg-blue-400 border-none rounded-md px-8 text-xl py-4 text-white font-semibold">
                  Send Invite
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
