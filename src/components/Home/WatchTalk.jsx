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
  const foldBg = !isDarkTheme ? 'bg-green-50' : 'bg-green-200';

  return (
    <section className={'relative '}>
      <div
        className={'absolute inset-0 pointer-events-none '}
        aria-hidden="true"
      />
      {/* visible on sm */}
      <div className="hidden">
        <div
          className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 min-h-6xl"
          style={{ zIndex: 1 }}
        >
          <center>
            <h1 className="h2 mb-10 text-gray-800 text-3xl">Watch our Talk</h1>
            <p className="text-lg text-gray-600">
              Join Sankhadeep Roy & Sanket Sahu from GeekyAnts as they discuss
              previous versions of NativeBase & the roadmap for NativeBase 3.0,
              all while building it live.
            </p>
            <iframe
              className="mx-auto"
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/qHNb0rTSSJA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </center>
        </div>
        <div
          className="absolute left-1/3 transform -translate-x-1/2 top-1/4  pointer-events-none"
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
              <linearGradient x1="1" y1=".5" x2="0" y2="1" id="illustration-02">
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
      {/* visible on md and above */}
      <div className="">
        <div
          className="relative px-6 lg:px-0 py-20 min-h-6xl"
          style={{ zIndex: 1 }}
        >
          <center className="">
            <h1 className="h2 mb-10 text-gray-800 text-4xl">Watch our Talk</h1>
            <iframe
              className="w-full mx-auto lg:w-3/4"
              // width="70%"
              height="400"
              src="https://www.youtube.com/embed/1P26X_GSHO8"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p className="text-xl mt-10 text-gray-600">
              Join Sankhadeep Roy & Sanket Sahu from GeekyAnts as they discuss
              previous versions of NativeBase & the roadmap for NativeBase 3.0,
              all while building it live.
            </p>
          </center>
        </div>
        <div className="px-4 md:px-0 lg:px-0">
          <div className="bg-gray-200 rounded-md py-5 px-0 lg:px-4 ">
            <div className="grid grid-cols-1  lg:grid-cols-8 gap-4 px-5 lg:px-10">
              <div className="flex items-center">{SVGs['microphone']}</div>
              <div className="col-span-5">
                <p className="text-3xl font-bold text-gray-600 mb-0">
                  Invite us to speak at your next event
                </p>
                <p className="text-gray-60">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC,
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
        <div className="mt-20 px-6 lg:px-6 lg:px-0">
          <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
            <h2 className={`h2 text-4xl`}>What are people saying?</h2>
            <p className={`text-xl max-w-3xl mx-auto`}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley
            </p>
            <div className="rounded-md  bg-purple-400 mt-10 py-10 grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="flex items-center justify-center">
                <img
                  className="inline-block h-28 w-28 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="text-white col-span-3 px-10 lg:px-3 lg:px-0 lg:pr-10">
                <p className="text-center lg:text-left">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley
                </p>
                <p className="text-center lg:text-left mt-3 mb-0">
                  Lorem Ipsum
                </p>
                <p className="text-center lg:text-left mb-0">Lorem Ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
