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

export function Reviews() {
  const { isDarkTheme } = useThemeContext();
  const subHeadingColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-400';

  return (
    <section className={'relative '}>
      {/* visible on md and above */}
      <div className="px-4 md:px-0">
        <div className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
            <h2 className={`h2 text-4xl`}>What are people saying?</h2>
            <p className={`text-xl ${subHeadingColor} max-w-3xl mx-auto`}>
              Here's what other React devs have to say about NativeBase.
            </p>
            <div className="rounded-md bg-purple-400 mt-10 py-12 grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="flex items-center justify-center">
                <img
                  className="inline-block h-28 w-28 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="text-white lg:col-span-3 px-10 lg:pl-3 lg:pr-10">
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
