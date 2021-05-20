import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

const SVGs = {
  Twitter: (
    <svg
      class="h-5 w-5 flex-no-shrink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
    >
      <g id="Group_777" data-name="Group 777" transform="translate(-527 -447)">
        <path
          id="Icon_awesome-twitter"
          data-name="Icon awesome-twitter"
          d="M42.786,13.033c.03.424.03.847.03,1.271,0,12.92-9.834,27.808-27.808,27.808A27.619,27.619,0,0,1,0,37.724a20.219,20.219,0,0,0,2.36.121A19.574,19.574,0,0,0,14.494,33.67a9.791,9.791,0,0,1-9.138-6.778,12.325,12.325,0,0,0,1.846.151,10.337,10.337,0,0,0,2.572-.333,9.775,9.775,0,0,1-7.837-9.592V17a9.843,9.843,0,0,0,4.418,1.241A9.788,9.788,0,0,1,3.328,5.166,27.781,27.781,0,0,0,23.481,15.393a11.033,11.033,0,0,1-.242-2.239A9.783,9.783,0,0,1,40.153,6.467a19.242,19.242,0,0,0,6.2-2.36,9.747,9.747,0,0,1-4.3,5.386A19.593,19.593,0,0,0,47.688,7.98a21.009,21.009,0,0,1-4.9,5.053Z"
          transform="translate(527 448.315)"
          fill="#1da1f2"
        />
        <rect
          id="Rectangle_276"
          data-name="Rectangle 276"
          width="50"
          height="50"
          transform="translate(527 447)"
          fill="none"
        />
      </g>
    </svg>
  ),
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

const reviews = [
  {
    name: 'Lisa Miller',
    handle: '@LisaMillerCool',
    content: `If you are planning to develop an app using react
    native, it's a no-brainer to go with Expo. It's like a
    package of goodies. I don't even understand why it's so
    awesome. Good job @expo team. You've made our lives
    simpler.`,
    src:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lisa Miller',
    handle: '@LisaMillerCool',
    content: `As a career-long web developer, getting push notifications
    working in @reactnative via @expo feels like black magic.
    Loving it.`,
    src:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lisa Miller',
    handle: '@LisaMillerCool',
    content: `The speed at which React Native Web via @expo has evolved in
    the past 6 months is absolutely wild. My head is spinning.`,
    src:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lisa Miller',
    handle: '@LisaMillerCool',
    content: `Expo recently made it possible to target web, so you can
    write a single UI for native and web. I’m continually
    impressed. Otherwise next.js by @zeithq is incredible. Both
    of these projects have amazing docs, DX, and fast release
    cycles.`,
    src:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lisa Miller',
    handle: '@LisaMillerCool',
    content: `It’s difficult to make a tool that is powerful, easy to use,
    and stays out of the way. @expo has figured it out and it’s
    one of the most pleasurable dev experiences I’ve had in my
    career.`,
    src:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lisa Miller',
    handle: '@LisaMillerCool',
    content: `I love how @expo allows me to build my standalone apps remotely on their much more powerful servers! Saves time and allows me to continue to use my computer while I wait for the build!
    `,
    src:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export function Reviews() {
  const { isDarkTheme } = useThemeContext();
  const subHeadingColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-400';
  const reviewColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-100';
  const borderColor = !isDarkTheme ? 'border-gray-200' : 'border-gray-700';

  return (
    <section className={'relative '}>
      <div>
        <div>
          <div className="text-center pb-12 md:pb-20">
            <h2 className={`h2 text-4xl`}>What are people saying?</h2>
            <p className={`text-xl ${subHeadingColor} max-w-3xl mx-auto`}>
              Here's what other React devs have to say about NativeBase.
            </p>
            <div className="mt-10">
              <div class="md:masonry-2-col space-y-5 lg:masonry-3-col box-border mx-auto before:box-inherit after:box-inherit">
                {reviews.map((review, idx) => {
                  return (
                    <div
                      class={`break-inside bg-transparent ${borderColor} px-4 py-4 border border-solid rounded-lg rounded-lg`}
                    >
                      <p className="flex">
                        <img
                          class="mt-1 h-8 w-8 rounded-full"
                          src={review.src}
                          alt=""
                        />
                        <div className="ml-4">
                          <div className="font-semibold text-left">
                            {review.name}
                          </div>
                          <div className="text-sm">{review.handle}</div>
                        </div>
                        <div className="ml-auto">{SVGs['Twitter']}</div>
                      </p>
                      <p className={`text-left text-base ${reviewColor}`}>
                        {review.content}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
